const nodemailer = require("nodemailer");

module.exports = {
  // 프로젝트 방 URL 임의 문자열 생성
  makeId: (length, mail=false) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    if(mail) {
      return result;  
    } else {
      return result + parseInt(new Date().getTime()/1000);  
    }
  },
  // 메일 보내기 
  sendEmail: async (email, authString) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      //port: 465,
      secure: true,
      auth: {
        user: '99urum.e@gmail.com',
        pass: 'choo121903*',
      },
    });
    let info = await transporter.sendMail({
      from: '99urum.e@gmail.com',
      to: email,
      subject: '꾸럼e 회원가입 인증번호 입니다.',
      text: `인증번호 : [ ${authString} ]`
    });
    return info;
  },
  convertDate: (d) => {
    let cDate = new Date(d),
        year  = cDate.getFullYear(),
        m     = cDate.getMonth()+1,
        month = m > 10 ? m : '0'+m,
        date  = cDate.getDate() > 10 ? cDate.getDate() : '0'+cDate.getDate();
    return [year,month,date].join('-');
  }
};
