const router = require("express").Router();
const client = require("../controller/client.js");

router.use( function(req, res, next) {
  console.log(req);
  next();
});

router.get('/checkSession', client.checkSession);

// ============= 회원가입 =====================
router.post('/checkEmail', client.checkEmail);
router.post('/signup', client.signup);

// ============= 로그인, 로그아웃 =============
router.post('/login', client.login);
router.get('/logout', client.logout);

// ============= 마이페이지 ===================
router.post('/checkMypassword', client.checkMypassword);
router.post('/editProfile', client.editProfile);

// ============= 프로젝트 생성 ================
router.post('/createProject', client.createProject);


module.exports = router;