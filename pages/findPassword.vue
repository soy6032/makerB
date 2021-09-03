<template><!-- 비밀번호 찾기 페이지 -->
  <div id="findPassword">
    <div class="findPasswordWrap">
      <h3 class="com_fonts13">
        비밀번호 찾기
      </h3>
      <p class="com_fonts08 findPassword_title">
        비밀번호는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.
      </p>
      <!-- 이메일 인증 -->
      <div class="com_fonts09">
        이메일
      </div>
      <div class="passEmailWrap">
        <input
          v-model="emailId"
          class="com_input certifiedId com_fonts09"
          type="text"
          name="email"
          :class="{certifiedId_100 : emailState == true}"
          :readonly="emailState ? true : false"
          @input="emailCheck"
        >
        <v-select
          v-if="!emailState" 
          v-model="emailSelect"
          @change="sumVal"
          :items="emailType"
          item-text="text"
          item-value="value"
          label="직접입력"
          solo
          class="emailSelect"
        ></v-select>
        <button v-if="!emailState" class="com_btn_110 com_btn_orange com_fonts09" @click="sendEmail" :disabled="emailBtn">
          인증받기
        </button>
      </div>
      <p v-show="mailError" class="errorText">
        이메일 형식이 올바르지 않습니다.
      </p>
      <div v-if="emailState">
        <input v-model="certifiNum" class="com_input com_input100p certifiedInput com_fonts09" type="text" name="certification" placeholder="인증번호를 입력해주세요.">
      </div>
      <button class="com_btn_100p com_btn_orange certificationBtn" @click="certifiOkBtn" :disabled="checkCertifiNum">
        확인
      </button>
    </div>

    <!-- alert components  -->
    <AlertPop :alertState="alertState" @popClose="alertOk">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
export default {
  name: 'FindPassword',
  data () {
    return {
      emailBtn: true,
      emailId: '',
      mailError: false,
      emailState: false,
      emailSelect: '',
      certifiNum: '',
      certifiState: true,
      certifiCheck: false,
      alertState: false,
      alertCon: '',
      emailType: [
        {
          text: '직접입력',
          value: ''
        },
        {
          text: 'naver.com',
          value: '@naver.com'
        },
        {
          text: 'hanmail.net',
          value: '@hanmail.net'
        },
        {
          text: 'gmail.com',
          value: '@gmail.com'
        },
        {
          text: 'nate.com',
          value: '@nate.com'
        }
      ]
    };
  },
  computed: {
    // 인증이 되었는지 않되었는지 확인
    checkCertifiNum() {
      if(this.certifiNum == '') return true;
      else return false;
    },
  },
  methods: {
    // 메일 타입 선택시 메일 형식으로 만들어줌
    sumVal () {
      if (this.emailId) {
        this.emailId = this.emailId.split('@')[0] + this.emailSelect;
        this.emailCheck();
      }
    },
    // 이메일 패턴으로 입력된 값 유효성 검사
    emailCheck () {
      const idValue = /^[a-z0-9]/i;
      const mailValue = /.+@.+\..[a-z0-9]+/;
      if (!idValue.test(this.emailId) || !mailValue.test(this.emailId)) {
        this.mailError = true;
        this.emailBtn = true;
      } else {
        this.mailError = false;
        this.emailBtn = false;
      }
    },
    // 인증 이메일 보내기
    sendEmail() {
      this.$axios.post('/client/findPwSendEmail', { email: this.emailId })
      .then((res) => {
        console.log(res);
        this.alertState = true;
        this.alertCon = res.data.msg;
        if(res.data.state) {
          this.emailState = true;
        }
      });
    },
    //메일 인증
    certifiOkBtn () {
      this.$axios.post('/client/checkAuthEmail', { 
        email: this.emailId,
        authString: this.certifiNum 
      }).then((res) => {
        this.$store.commit('setTempEmail', this.emailId);
        this.alertState = true;
        this.alertCon = res.data.msg;
        this.certifiCheck = res.data.state;
      });
    },
    // 입력된 인증번호 확인
    passwordOk () {
      this.alertState = true;
       //인증번호가 일치할때
      this.alertCon = "인증이 완료되었습니다.";
      //인증번호가 일치하지않을때
      if(this.certifiNum === '') {
        this.alertCon = "인증번호가 일치하지 않습니다.";
      }
    },
    // 모든프로세스 완료시 패스워드 변경으로 이동
    alertOk () {
      this.alertState = false;
      if(this.certifiCheck) {
        this.$router.push('/changePassword');
      }
    }
  }
};
</script>
<style>
  #findPassword {
    width: 100%;
    height: 486px;
  }
  .findPasswordWrap {
    width: 421px;
    margin: 0 auto;
    margin-top: 202px;
    padding-top: 30px;
  }
  .findPassword_title {
    margin-top: 10px;
    margin-bottom: 25px !important;
  }
  .certifiedId {
    width: 165px;
    float: left;
    margin: 0 5px 0 0;
  }
  .certifiedId_100 {
    width: 100% !important;
    color: #4c4c4c;
  }
  .certifiedInput {
    margin: 15px 10px 0 0;
  }
  .certificationBtn {
    margin-top: 25px;
  }
  .passEmailWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #findPassword .passEmailWrap .com_btn_110 {
    margin-left: 10px;
  }

  .com_btn_orange[disabled]{
    background-color: gray !important;
  }
</style>
