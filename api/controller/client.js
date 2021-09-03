const db        = require("../config/db.js");
const common    = require("../lib/common.js");
const auth      = require("../lib/auth.js");
const fs        = require("fs");

let resObj = {
  'msg'         : null,
  'items'       : null,
  'state'       : null
};

function obj_init(obj){
  for(let i in obj) {
    obj[i] = null;
  }
  return obj;
}
let authList = [];

// 세선체크
exports.checkSession = async (req, res, next) => {
    resObj = obj_init(resObj);
    if(req.session.token) {
        let decoded = await auth.decodeToken(req.session.token);
        //console.log(decoded);
        resObj.items = decoded.id;
    } else {
        req.session.destroy();
        resObj.items = false;
    }
    res.send(resObj);
};

// 이메일 체크
exports.checkEmail = async (req, res, next) => {
    resObj = obj_init(resObj);
    const query = "select * from users where email = ?";
    const result = await db.conn(query, [req.body.email]);
    if(result) {
        resObj.state = true;
        if(result.length > 0) {
            resObj.items = false;
            resObj.msg = "이미 가입된 이메일 입니다.";
        } else {
            resObj.items = true;
            resObj.msg = "사용 가능한 이메일 입니다.";
        }
    } else {
        resObj.state = false;
    }
    res.send(resObj);
};

// 메일 보내기
exports.sendEmail = async (req, res, next) => {
    resObj = obj_init(resObj);
    const userEmail = req.body.email;
    const authString = common.makeId(6, true);
    const result = await common.sendEmail(userEmail, authString);
    // 인증문자 db에 저장 후 처리
    
    if(result) {
        resObj.msg = "인증메일을 이메일로 전송하였습니다.";
        resObj.state = true;
        resObj.items = authString;
        
        let mailInfo = new Object({
            mail: userEmail,
            authStr: authString
        });
        authList.push(mailInfo);
        req.session.authList = authList;
    } else {
        resObj.msg = "메일 전송 실패";
        resObj.state = false;
    }
    res.send(resObj);
    res.end();
};

// 패스워드 찾기
exports.findPwSendEmail = async (req, res, next) => {
    resObj = obj_init(resObj);
    const userEmail = req.body.email;

    const query = "select * from users where email = ?";
    const joinMemberCheck = await db.conn(query, [userEmail]);
    if(joinMemberCheck) {
        if(joinMemberCheck.length <= 0) {
            resObj.items = false;
            resObj.msg = "가입되지 않은 이메일 입니다.";
            res.send(resObj);
            return false;
        }
    }

    const authString = common.makeId(6, true);
    const result = await common.sendEmail(userEmail, authString);
    // 인증문자 db에 저장 후 처리
    
    if(result) {
        resObj.msg = "인증메일을 이메일로 전송하였습니다.";
        resObj.state = true;
        resObj.items = authString;
        
        let mailInfo = new Object({
            mail: userEmail,
            authStr: authString
        });
        authList.push(mailInfo);
        req.session.authList = authList;
    } else {
        resObj.msg = "메일 전송 실패";
        resObj.state = false;
    }
    res.send(resObj);
    res.end();
};

// 이메일 인증 확인
exports.checkAuthEmail = async (req, res, next) => {
    resObj = obj_init(resObj);
    const userEmail = req.body.email;
    const userAuthString = req.body.authString;
    const authList = req.session.authList;
    for(let i in authList) {
        if(authList[i].mail === userEmail) {
            if(authList[i].authStr === userAuthString) {
                authList.splice(i, 1);
                req.session.authList = authList;
                resObj.msg = "인증 되었습니다.";
                resObj.state = true;
                break;
            } else {
                resObj.msg = "인증문자가 일치하지 않습니다.";
                resObj.state = false;
            }    
        } else {
            resObj.msg = "메일이 일치하지 않습니다.";
            resObj.state = false;
        }
    }
    res.send(resObj);
    res.end();
};

// 회원가입
exports.signup = async (req, res, next) => {
    resObj = obj_init(resObj);
    let params = [
        req.body.params.email,
        req.body.params.pw,
        1
    ];
    const query = "insert into users (`email`, `password`, `authCheck`,`regdate`) values (?, PASSWORD(?), ?, now())";
    const result = await db.tran(query, params);
    //console.log(result);
    if(result.affectedRows !== 1) {
        resObj.msg = "signup fail";
        resObj.state = false;
    } else {
        resObj.msg = "회원가입 되었습니다.";
        resObj.state = true;
    }
    res.send(resObj);
};

// 로그인
exports.login = async (req, res, next) => {
    resObj = obj_init(resObj);
    const params = [
        req.body.email,
        req.body.pw
    ];
    const query = "select idx, email from users where email = ? and password = PASSWORD(?)";
    const result = await db.conn(query, params);
    if(!result) {
        resObj.state = false;
        resObj.msg = "잠시후 다시 시도하세요.";
    } else {
        resObj.state = true;
        if(result.length === 1) {
            let token = auth.createToken(result[0].email);
            resObj.items = result;
            resObj.msg = "로그인 되었습니다.";
            req.session.token = token;
        } else {
            resObj.msg = "아이디 또는 비밀번호를 확인하세요.";
        }
    }
    res.send(resObj);
};

// 로그아웃 세선 처리
exports.logout = async (req, res, next) => {
    resObj = obj_init(resObj);
    resObj.msg = "로그아웃 되었습니다.";
    req.session.destroy();
    res.send(resObj);
};

// 내 패스워드 확인
exports.checkMypassword = async (req, res, next) => {
    resObj = obj_init(resObj);
    const params = [
        req.body.email,
        req.body.password
    ];
    const query = "select idx, email, name, phone from users where email = ? and password = password(?)";
    const result = await db.conn(query, params);
    if(!result[0]) {
        resObj.state = false;
        resObj.msg = "비밀번호가 일치하지 않습니다.";
    } else {
        if(result[0].email === params[0]) {
            resObj.state = true;
            resObj.items = result[0];
        } else {
            resObj.state = false;
            resObj.msg = "잘못된 정보";
        }
    }
    res.send(resObj);
};

// 프로필 설정 변경
exports.editProfile = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    if(!req.body) {
        resObj.state    = false;
        resObj.msg      = "정확한 데이터를 입력하세요.";
        res.send(resObj);
        return false;
    }
    
    let params = [
        req.body.info.name,
        req.body.info.phone
    ];
    let query   = "update users set `name`=?, `phone`=? ";
    let _where  = "where idx=? and email=?";
    
    if(req.body.info.password) {
        params.push(req.body.info.password);
        query   += ", `password`=PASSWORD(?) ";    
    }
    
    params.push(req.body.info.idx);
    params.push(req.body.info.email);
    query += _where;
    
    const result = await db.tran(query, params);
    if(!result) {
        resObj.state    = false;
        resObj.msg      = "잠시 후 다시 시도하세요";
    }
    
    if(result.changedRows !== 1 && result.affectedRows === 1) {
        resObj.state    = false;
        resObj.msg      = "현재 정보와 동일합니다.";
    }
    
    if(result.changedRows === 1 && result.affectedRows === 1) {
        resObj.state    = true;
        resObj.msg      = "수정 되었습니다.";
    }
    res.send(resObj);
};

// 프로젝트 생성
exports.createProject = async (req, res, next) => {
    resObj = obj_init(resObj);
    if(!req.body) {
        resObj.state    = true;
        resObj.items    = false;
        resObj.msg      = "정확한 데이터를 입력하세요.";
        res.send(resObj);
        return false;
    }
    
    const params = [
        req.body.info.template.idx,
        req.body.info.userIdx,
        req.body.info.projectName,
        req.body.info.template.contents,
        common.makeId(8),
        req.body.info.print_date + ' 23:59:59', 
        req.body.info.expiry_date + ' 23:59:59'
    ];
    
    const query  = "insert into project (`t_idx`, `u_idx`, `name`, `contents`, `url`, `print_date`, `close_date`, `regdate`) values (?, ?, ?, ?, ?, ?, ?, now())";
    const result = await db.tran(query, params);
    if(result.affectedRows !== 1) {
        resObj.items    = false;
        resObj.msg      = "프로젝트 생성이 실패하였습니다.";
        res.send(resObj);
        return false;
    }
    const r_query = "select url from project where idx = ?";
    const url = await db.conn(r_query, [result.insertId]);
    if(!url) {
        resObj.items    = false;
        resObj.msg      = "프로젝트 URL 가져오기 실패하였습니다.";
        res.send(resObj);
        return false;
    }
    resObj.items    = url;
    resObj.msg      = "프로젝트가 생성 되었습니다.";
    resObj.state    = true;
    res.send(resObj);
};

// 템플릿 불러오기
exports.getTemplate = async (req, res, next) => {
    resObj = obj_init(resObj);
    const query = `SELECT t.idx, t.name, t.contents, t.provider, IF(t.price = '0', '무료', t.price) as price, ti.img_path FROM box.template as t join box.template_img as ti on t.idx = ti.t_group WHERE ti.order = 1 ORDER BY ti.idx ASC`;
    const result = await db.conn(query);
    if(!result) {
        resObj.msg = "템플릿 가져오기 실패하였습니다.";
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    resObj.state = true;
    resObj.items = result;
    res.send(resObj);
};

// 템플릿 미리보기 가져오기
exports.getDetailTemplate = async (req, res, next) => {
    resObj = obj_init(resObj);
    const t_group = req.params.t_group;
    const query = "select * from template_img where t_group = ? order by `order` asc";
    const result = await db.conn(query, [t_group]);
    if(!result) {
        resObj.msg = "템플릿 가져오기 실패하였습니다.";
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    resObj.state = true;
    resObj.items = result;
    res.send(resObj);
};

// 프로젝트 참여
exports.checkProject = async (req, res, next) => {
  resObj = obj_init(resObj);
  const code = req.params.code;
  const query = "select `end` from project where `url` = ?";
  const result = await db.conn(query, [code]);
  if(!result || result.length < 1) {
      resObj.msg = "URL을 확인해주세요.";
      resObj.items = "management";
      resObj.state = false;
      res.send(resObj);
      return false;
  }
  if(result[0].end === 1) {
      resObj.msg = "최종완료된 프로젝트는 들어갈 수 없습니다.";
      resObj.items = "management";
      resObj.state = false;
      res.send(resObj);
      return false;
  }
  resObj.state = true;
  res.send(resObj);
  res.end();
};

// 프로젝트 가져오기 
exports.getProject = async (req, res, next) => {
    resObj = obj_init(resObj);
    const code = req.body.code;
    if(!code) {
        resObj.msg      = "프로젝트 코드가 존재하지 않습니다.";
        resObj.state    = false;
        res.send(resObj);
        return false;
    }
    
    const query = "select p.`idx`, p.`contents`, p.`name`, p.`close_date`, ti.`img_path`, ti.`order`, p.`save`, p.`end` from project as p join template_img as ti on p.t_idx = ti.t_group where p.url = ? order by ti.`order` asc";
    const result = await db.conn(query, [code]);
    if(!result) {
        resObj.msg      = "프로젝트가 존재하지 않습니다.";
        resObj.state    = false;
        resObj.items    = "management";
        res.send(resObj);
        return false;
    } else {
        resObj.item     = result;
        resObj.state    = true;
    }
    res.send(resObj);
};

// 작업중인 프로젝트 저장
exports.saveHtml = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    const html = req.body.html;
    if(!html) {
        resObj.msg = "html null";
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    
    const code = req.body.code;
    const query = "update project set `contents` = ?, `save` = `save`+1, `last_saveTime` = now() where url = ?";
    const result = await db.conn(query, [html, code]);
    if(result.affectedRows !== 1) {
        resObj.msg = "프로젝트 저장 실패하였습니다.";
        resObj.state = false;
    } else {
        resObj.msg = "프로젝트가 저장 되었습니다.";
        resObj.state = true;
    }
    res.send(resObj);
};

// 프로젝트 참여 유저 확인
exports.checkMember = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    // 프로젝트에 최초 진입 체크
    const params = [
      req.body.email,
      req.body.pdx
    ];
    const check_query = `select pm.* from box.users u join box.project_members pm on u.idx = pm.u_idx where u.email = ? and pm.p_idx = ?`;
    const check_result = await db.conn(check_query, params);
    if(check_result.length > 0) {
        resObj.items = true;
        resObj.state = true;
        res.send(resObj);
        return false;
    }
    
    // 회원 존재 유무 확인 및 현재 유저가 방장과 일치하는지
    const params2 = [
        req.body.pdx,
        req.body.email
    ];
    const creator_query = "select u.idx, (select u_idx from box.project where idx = ?) as creator from box.users u where u.email = ?";
    const creator_result = await db.conn(creator_query, params2);
    //console.log(creator_result);
    if(creator_result.length === 0) {
        resObj.state = false;
        resObj.msg = "회원이 존재 하지 않습니다.";
        res.send(resObj);
        return false;
    }
    // 최초 진입 시 members에 데이터 삽입
    const insert_params = [
        req.body.pdx,
        creator_result[0].idx,
        creator_result[0].idx == creator_result[0].creator ? 1 : 0
    ];
    const insert_query  = "insert into project_members (`p_idx`, `u_idx`, `nick_name`, `join_date`, `creator`) values (?,?, '',now(),?)";
    const insert_result = await db.tran(insert_query, insert_params);
    if(insert_result.affectedRows !== 1) {
        resObj.state = false;
        resObj.msg   = "맴버 등록에 실패하였습니다.";
        res.send(resObj);
        return false;
    }
    resObj.items = false;
    resObj.state = true;
    res.send(resObj);
};

// 닉네임 체크
exports.setNickname = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    // 프로젝트 별 닉네임 중복 체크
    const params = [
        req.body.pdx,
        req.body.nick
    ];
    const query = "select * from project_members where p_idx = ? and nick_name = ?";
    const result = await db.conn(query, params);
    if(result.length > 0) {
        resObj.msg = "중복된 닉네임 입니다.";
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    
    const insert_params = [
        req.body.nick,
        req.body.pdx,
        req.body.uid
    ];
    const insert_query = "update project_members set `nick_name` = ? where p_idx = ? and u_idx = ?";
    const insert_result = await db.tran(insert_query, insert_params);
    if(insert_result.changedRows !== 1) {
        resObj.state = false;
        resObj.msg = "닉네임 설정에 실패하였습니다.";
        res.send(resObj);
        return false;
    }
    
    resObj.state = true;
    resObj.msg = "닉네임이 설정 되었습니다.";
    res.send(resObj);
};

// 현재 프로젝트 참여자 정보 불러오기
exports.getJoinMembers = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    const pdx = req.body.pdx;
    const query = "SELECT u.email, pm.nick_name as nick from box.project_members pm join box.users u on pm.u_idx = u.idx where pm.p_idx = ?";
    const result = await db.conn(query, [pdx]);
    
    if(result.length === 0) {
        resObj.msg = "참여자 정보를 가져올 수 없습니다.";
        resObj.state = false;
    } else {
        resObj.items = result;
        resObj.state = true;    
    }
    res.send(resObj);
};

// 프로젝트 리스트 가져오기
exports.getProjectList = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    const params = [
        req.body.email,
        req.body.tab,
    ];
    const query = `select u.email, p.*, pm.creator 
                    from box.users u 
                    join box.project_members pm on u.idx = pm.u_idx
                    join ( select p2.idx, p2.t_idx, p2.u_idx, p2.name, u2.email as creator_email, p2.url, p2.contents, p2.end, ti.img_path , DATE_FORMAT(p2.print_date, '%Y-%m-%d') as print_date, DATE_FORMAT(p2.close_date, '%Y-%m-%d') as close_date, p2.regdate
                            from box.users as u2
                            join box.project p2 on u2.idx  = p2.u_idx
                            join box.template_img ti on p2.t_idx = ti.t_group 
                            where ti.order = 1) as p on pm.p_idx = p.idx
                    where u.email = ? and p.end = ? order by p.regdate desc`;
    const result = await db.conn(query, params);
    if(!result) {
        resObj.msg = "잠시 후 다시 시도하세요.";
        resObj.state = false;
    } else {
        resObj.items = result;
        resObj.state = true;    
    }
    res.send(resObj);
    res.end();
};

// 프로젝트에 이미지 업로드
exports.imagesUpload = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    let path = '';
    if(req.files.img) {
        let ext = req.files.img[0].mimetype.split('/')[1];
        path = `/uploads/${req.files.img[0].filename}`;
    }
    let params = [
        req.body.url,
        req.body.section,
        req.body.select
    ];
    const find_query = "select * from box.images where `p_url` = ? and `section` = ? and `select` = ?";
    const find_result = await db.conn(find_query, params);
    let query = "";
    let result = "";
    //console.log(find_result.length);
    if(find_result.length === 1) {
        let del_path = `./static${find_result[0].path}`;
        await fs.unlink(del_path, function(err) {
            if(err) {
                resObj.state = false;
                res.send(resObj);
                return false;
            }
        });
        params.unshift(req.body.email, path);
        query = "update box.images set `email` = ?, `path` = ? where `p_url` = ? and `section` = ? and `select` = ?"; 
        
    } else {
        params.push(req.body.email, path);
        query = "insert into box.images(`p_url`, `section`, `select`, `email`, `path`) values(?, ?, ?, ?, ?)";
    }
    
    result = await db.tran(query, params);
    //console.log(result);
    if(result.affectedRows !== 1) {
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    
    let get_query = "";
    let get_params = [];
    const insertId = result.insertId;
    if(result.insertId !== 0)  {
        get_params.push(insertId);
        get_query = "select * from images where idx = ?";
    } else {
        get_params.push(req.body.url, req.body.section, req.body.select);
        get_query = "select * from box.images where `p_url` = ? and `section` = ? and `select` = ?";
    }
    const get_result = await db.conn(get_query, get_params);
    if(!get_result) {
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    resObj.items = get_result;
    resObj.state = true;
    res.send(resObj);
    res.end();
};

// 알람 리스트 가져오기
exports.alarmList = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    const idx = req.params.idx;
    const query = "select contents, regdate from alarm where u_idx = ? order by regdate desc";
    const result = await db.conn(query, [idx]);
    if(!result) {
        resObj.state = false;
        resObj.msg = "알림을 가져오기 실패하였습니다.";
        res.send(resObj);
        return false;
    }
    resObj.items = result;
    resObj.state = true;
    res.send(resObj);
    res.end();
};

// 방장 확인
exports.checkCreator = async (req, res, next) => {
    resObj = obj_init(resObj);
    const params = [
        req.body.code,
        req.body.idx
    ]
    const query = "SELECT pm.creator from box.project p join box.project_members pm on p.idx = pm.p_idx where p.url = ? and pm.u_idx = ?";
    const result = await db.conn(query, params);
    //console.log(result);
    if(result[0].creator !== 1) {
        resObj.state = false;
        resObj.msg = "프로젝트 장이 아닙니다.";
    } else {
        resObj.state = true;
    }
    res.send(resObj);
    res.end();
};

// 최종완료
exports.finalSave = async (req, res, next) => {
    resObj = obj_init(resObj);
    
    let params = [
        req.body.code,
        req.body.idx
    ];
    
    const s_query = "select * from project where `url` = ? and `u_idx` = ?";
    const s_result = await db.conn(s_query, params);
    if(!s_result) {
        resObj.msg = "해당 프로젝트가 존재하지 않습니다.";
        resObj.state = false;
        res.send(resObj);
        return false;
    }
    
    let currentDate = new Date();
    let printDate = "";
    currentDate.setDate(currentDate.getDate() + 30);
    printDate = currentDate.toISOString().substr(0,10);
    printDate += ' 23:59:59';
    params.unshift(printDate);
    params.unshift(req.body.html);
    const query = "update project set `contents` = ?, `end` = 1, `close_date` = now(), `print_date`= ? where `url` = ? and `u_idx` = ?";
    const result = await db.tran(query, params);
    if(result.changedRows !== 1) {
        resObj.state = false;
        resObj.msg = "잠시 후 다시 시도하세요.";
        res.send(resObj);
        return false;
    } else {
        resObj.state = true;
        resObj.msg =  "최종완료 되었습니다.";
        res.send(resObj);
    }
    res.end();
};

// 패스워드 찾기
exports.findPassword = async (req, res, next) => {
    resObj = obj_init(resObj);

    let params = [
        req.body.myPw,
        req.body.email
    ];

    const query = `update box.users set password = password(?) where email = ?`;
    const result = await db.tran(query, params);
    if(result.changedRows !== 1) {
        resObj.state = false;
        resObj.msg = "잠시 후 다시 시도하세요.";
    } else {
        resObj.state = true;
        resObj.msg = "변경 되었습니다.";
    }
    res.send(resObj);
    res.end();
};
