const express       = require("express");
const cors          = require("cors");
const session       = require("express-session");
const app           = express();
const client        = require("./controller/client.js");
const multer        = require("multer");
const schedule      = require("node-schedule");
const db            = require("./config/db.js");
const fs            = require("fs");
const common        = require("./lib/common.js");

app.use(session({
  secret: 'packageE',
  resave: false,
  saveUninitialized: true,
  // cookie: { expires: new Date(Date.now() + hour )}
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));
app.use(cors());
app.use(express.json());

var multer_settings = multer({
  // dest: './static/uploads/'
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './static/uploads/');
    },
    filename: function(req, file, cb) {
      let ext = file.mimetype.split('/')[1];
      cb(null, new Date().valueOf()+`_img.${ext}`);
    }
  }),
});

var alarm = schedule.scheduleJob('0 0 0 * * *', async function() {
  const alarmFile = "api/log/alarm_log.txt";
  const stateFile = "api/log/state_log.txt";
  const currentDate = new Date();
  const convert = common.convertDate(currentDate);
  const day = 24 * 60 * 60 * 1000;
  //최종완료일 체크
  const endState_Q = "select p.idx, p.u_idx, u.email, p.name, p.close_date from box.project p join box.users u on p.u_idx = u.idx where p.`end` = 0 and p.close_date < CURDATE()";
  const endState_UQ = `UPDATE box.project as p, (${endState_Q}) as b SET p.end = 1, p.print_date = DATE_SUB(DATE_ADD(CURDATE(), INTERVAL 31 DAY), INTERVAL 1 SECOND) WHERE p.idx = b.idx`;
  const end_list = await db.conn(endState_Q);
  let updateList = [];
  if(end_list.length > 0) {
    const update_R = await db.tran(endState_UQ);
    for(let i in end_list) {
      updateList.push(end_list[i].idx);
    }
    if(end_list.length === update_R.changedRows) {
      let msg = `IDX: ${updateList} UPDATE end colum ${convert}\n`;
      fs.appendFile(stateFile, msg, function (err) {
        if (err) throw err;
      });
    } else {
      let msg = `IDX: ${updateList} UPDATE end colum ${convert} fail \n`;
      fs.appendFile(stateFile, msg, function (err) {
        if (err) throw err;
      });
    }  
  }
  // 프로젝트 최종완료일 7일전 알람보내기
  const alarm_Q = `select p.idx, p.u_idx, u.email, p.name, p.close_date 
                    from box.project p 
                    join box.users u on p.u_idx = u.idx 
                    where p.end = 0 
                    and p.close_date >= DATE_ADD(CURDATE(), INTERVAL 7 DAY)
                    and p.close_date <= DATE_SUB(DATE_ADD(CURDATE(), INTERVAL 8 DAY), INTERVAL 1 SECOND)`;
  const alarm_R = await db.conn(alarm_Q);
  if(alarm_R.length > 0) {
    const members_Q = "select u_idx from box.project_members where p_idx = ?";
    for(let i in alarm_R) {
      let interval = new Date(alarm_R[i].close_date).getTime() - currentDate.getTime();
      let t = Math.floor(interval/ day);
      let contents = `${alarm_R[i].name},${alarm_R[i].email},최종완료일이 일주일(${t}일) 남았습니다.`;
      let members_R = await db.conn(members_Q, [alarm_R[i].idx]);
      if(members_R.length > 0) {
        for(let j in members_R) {
          let param = [members_R[j].u_idx, contents];
          const alarm_IQ = "insert into alarm (`u_idx`, `contents`, `regdate`) values(?,?,now())";
          
          let alarm_R = await db.tran(alarm_IQ, param);
          if(alarm_R.affectedRows !== 1) {
            let e_msg = `log => u_idx : ${members_R[j].u_idx}, contents : ${contents} insert fails ${convert} \n`;
            await fs.appendFile(alarmFile, e_msg, function (err) {
              if (err) throw err;
            });
          } else {
            let e_msg = `log => u_idx : ${members_R[j].u_idx}, contents : ${contents} insert ${convert} \n`;
            await fs.appendFile(alarmFile, e_msg, function (err) {
              if (err) throw err;
            });
          }
        }
      }
    }
  }
});

app.get('/', (req, res, next) => {
  res.send("API " + Math.random());
});

app.all('/*', function(req, res, next) {
  // if(!req.url.match('login')) {
  //   if(!req.session.hasOwnProperty('userEmail')){
  //     console.log("userEmail in Session expiry");  
  //     res.json({"msg":"로그인이 필요합니다.", "loginState": false});
  //     return false;
  //   }
  //   console.log("userEmail 존재함");
  // }
  next();
});

app.get('/client/checkSession', client.checkSession);
app.get('/client/logout', client.logout);
app.get('/client/getTemplate', client.getTemplate);
app.get('/client/getDetailTemplate/:t_group', client.getDetailTemplate);
app.get('/client/alarmList/:idx', client.alarmList);
app.get('/client/checkProject/:code', client.checkProject);

app.post('/client/checkEmail', client.checkEmail);
app.post('/client/signup', client.signup);
app.post('/client/login', client.login);
app.post('/client/checkMypassword', client.checkMypassword);
app.post('/client/editProfile', client.editProfile);
app.post('/client/createProject', client.createProject);
app.post('/client/getProject', client.getProject);
app.post('/client/saveHtml', client.saveHtml);
app.post('/client/checkMember', client.checkMember);
app.post('/client/setNickname', client.setNickname);
app.post('/client/getJoinMembers', client.getJoinMembers);
app.post('/client/sendEmail', client.sendEmail);
app.post('/client/findPwSendEmail', client.findPwSendEmail);
app.post('/client/checkAuthEmail', client.checkAuthEmail);
app.post('/client/getProjectList', client.getProjectList);
app.post('/client/imagesUpload', multer_settings.fields([{ name: 'img' }]), client.imagesUpload);
app.post('/client/checkCreator', client.checkCreator);
app.post('/client/finalSave', client.finalSave);
app.post('/client/findPassword', client.findPassword);

module.exports = {
  path: '/api',
  handler: app
};