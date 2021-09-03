<template><!-- 비밀번호 변경 페이지 -->
  <div id="changePassword">
    <div class="changePasswordWrap">
      <h3 class="changePassword_title com_fonts13">
        비밀번호 변경
      </h3>
      <div class="com_fonts09">
        새비밀번호 <span style="color: #ef8454; font-size: 0.75rem">( 6자 이상 입력해주세요. )</span>
      </div>
      <input v-model="newPassword" class="com_input com_input100p" type="password" name="password" @input="passwordCheck">
      <div class="com_fonts09">
        새비밀번호 확인
      </div>
      <input
        v-model="replayPassword"
        class="com_input replayPassword com_input100p"
        type="password"
        name="replayPassword"
        @input="passwordCheck"
      >
      <p v-show="passwordError" class="errorText">
        {{ passwordErrorText }}
      </p>
      <button class="com_btn_100p com_btn_orange changePasswordBtn" @click="passChange" :disabled="pwState">
        비밀번호 변경
      </button>
    </div>

    <!-- alert components  -->
    <AlertPop :alertState="alertState" @popClose="changeOk">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      newPassword: '',
      replayPassword: '',
      passwordError: false,
      alertState: false,
      alertCon: '',
      pwState: true,
      passwordErrorText: '',
    };
  },
  created() {
    //console.log(this.$store.state.tempEmail);
  },
  computed: {
  },
  methods: {
    // 패스워드 유효성 검사  
    passwordCheck () {
      if(this.newPassword.length < 6) {
        this.passwordErrorText = "비밀번호는 6자리 이상이여야 합니다.";
        this.passwordError = true;
        this.pwState = true;
      } else if (this.newPassword !== this.replayPassword) {
        this.passwordErrorText = "비밀번호가 일치하지 않습니다.";
        this.passwordError = true;
        this.pwState = true;
      } else {
        this.passwordError = false;
        this.pwState = false;
      }
    },
    // 패스워드 변경
    passChange () {
      // if(this.passwordError === false && this.newPassword != '') {
      //   this.alertState = true;
      // }

      this.$axios.post('/client/findPassword', {
        myPw: this.newPassword,
        email: this.$store.state.tempEmail        
      })
      .then(res => {
        this.alertCon = res.data.msg;
        this.alertState = true;
      })
      .catch(e => {
        console.log(e);
      })
    },
    // 변경이 되었다면 로그인페이지로 이동
    changeOk () {
      this.alertState = false;
      this.$router.push('/login');
    }
  }
};
</script>
<style>
  #changePassword {
    width: 100%;
    height: 486px;
  }
  .changePasswordWrap {
    width: 421px;
    margin: 0 auto;
    margin-top: 202px;
    padding-top: 28px;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
  }
  .changePassword_title {
    margin-bottom: 25px;
  }
  .changePasswordBtn {
    margin-top: 15px;
    font-weight: 600;
  }

  .com_btn_orange[disabled]{
    background-color: gray !important;
  }
</style>
