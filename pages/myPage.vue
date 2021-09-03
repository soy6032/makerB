<template><!-- 마이페이지 -->
  <div id="myPage">
    <div class="myPageWrap">

      <!-- 본인확인 -->
      <div v-show="stepState === 1" class="mypStep1">
        <div class="com_fonts12">
          본인 확인
        </div>
        <p class="com_fonts09 com_textGray mySubT">
          내 정보수정을 위해 현재 비밀번호를 입력해주세요.
        </p>
        <input
          v-model="nowPassword"
          class="com_input com_input100p com_fonts09 nowPassInput"
          type="password"
          name="nowPassword"
          placeholder="현재 비밀번호"
        >
        <button class="com_btn_orange com_btn_100p" @click="checkMyPassword">
          다음
        </button>
      </div>

      <!-- 회원정보수정 -->
      <div v-show="stepState === 2" class="mypStep2">
        <h3 class="com_fonts12 myPage_title">
          회원정보수정
        </h3>
        <div class="com_fonts09">
          이메일
        </div>
        <input class="com_input com_input100p" type="text" name="userEmail" :value="userInfo.email" readonly style="color:#5a5a5a">
        <div class="com_fonts09">
          이름
        </div>
        <input v-model="userInfo.name" class="com_input com_input100p" type="text" name="userName">
        <div class="com_fonts09">
          연락처
        </div>
        <input v-model="userInfo.phone" class="com_input com_input100p" type="text" name="userNumber" placeholder="ex) 01012345678 (숫자만)" @keydown="onlyNumber">
        <div class="com_fonts09">
          새비밀번호 <span style="color: #ef8454; font-size: 0.75rem">( 6자 이상 입력해주세요. )</span>
        </div>
        <input v-model="newPassword" class="com_input com_input100p newPassword" type="password" name="newPassword" @input="newPasswordCheck">
        <div class="com_fonts09 newPassError">
          새비밀번호 확인
        </div>
        <input v-model="rePassword" class="com_input com_input100p newPassword" type="password" name="rePassword" @input="newPasswordCheck">
        <p v-show="passwordError" class="errorText">
          {{ passwordErrorText }}
        </p>
        <button class="com_btn_100p com_btn_orange ModifyBtn" @click="editProfile">
          수정
        </button>
      </div>
    </div>

    <!-- alert components -->
    <AlertPop :alertState="alertState" @popClose="alertClosed">
      {{alertCon}}
    </AlertPop>

    <!-- confirm components -->
    <ConfirmPop :confirmState="confirmState" @popClose="confirmState = false" @popOk="popOkEvent">
      회원정보를 수정하시겠습니까?
    </ConfirmPop>
  </div>
</template>
<script>
export default {
  name: 'MyPage',
  middleware: 'client',
  data () {
    return {
      stepState: 1,
      nowPassword: '',
      newPassword: '',
      rePassword: '',
      nowPasswordError: false,
      passwordError: false,
      userInfo: {
        idx: '',
        email: '',
        name: '',
        phone: '',
        password: ''
      },
      alertState: false,
      alertCon: '',
      confirmState: false,
      resState: null,
      passwordErrorText: '',
      numExp: /^[0-9]/,
    };
  },
  computed: {
  },
  mounted () {
    if (!this.$store.state.loginState) {
      this.$router.push('/login')
    }
  },
  methods: {
    // 마이페이지 전화번호 입력
    onlyNumber(e) {
      if(!this.numExp.test(e.key) && e.key != "Backspace") {
        this.alertCon = "숫자만 입력할 수 있습니다.";
        this.alertState = true;
      }
    },
    // 새로운 패스워드 유효성 체크
    newPasswordCheck () {
      if(this.newPassword.length < 6) {
        this.passwordErrorText = "비밀번호는 6자리 이상이여야 합니다.";
        this.passwordError = true;
      } else if (this.newPassword !== this.rePassword) {
        this.passwordErrorText = "비밀번호가 일치하지 않습니다.";
        this.passwordError = true;
      } else {
        this.passwordError = false;
        this.userInfo.password = this.newPassword;
      }
    },
    // 마이페이지 진입시 현재 패스워드 확인
    checkMyPassword () {
      this.$axios.post('/client/checkMypassword', {
        email: this.$store.state.email,
        password: this.nowPassword
      }).then((res) => {
        if (res.data.items) {
          this.stepState = 2;
          this.userInfo = res.data.items;
        } else {
          this.alertState = true;
          this.alertCon = res.data.msg;
          if(res.data.hasOwnProperty('loginState')) {
            this.$store.commit('LOGOUT');
            this.$router.push('/login');
            return false;
          }
        }
      });
    },
    // 프로필 수정 시 해당 데이터 확인
    editProfile () {
      if (this.newPassword || this.rePassword) {
        if (this.passwordError) {
          this.alertState = true;
          this.alertCon = "비밀번호를 확인해주세요.";
          this.resState = null;
          return false;
        }
      }
      this.confirmState = true;
    },
    // 프로필 수정
    popOkEvent () {
      this.confirmState = false;
      this.$axios.post('/client/editProfile', { info: this.userInfo })
      .then((res) => {
        this.alertState = true;
        this.alertCon = res.data.msg;
        this.resState = res.data.state;
      });
    },
    // 변수 초기화
    alertClosed () {
      this.alertState = false;
      if(this.resState === true) {
        this.newPassword = '';
        this.rePassword = '';
        this.nowPassword = '';
        this.stepState = 1;
      }
    }
  }
};
</script>
<style>
  #myPage {
    width: 100%;
    height: auto;
  }
  .myPageWrap {
    width: 400px;
    margin: 0 auto;
  }
  .mypStep1 {
    height: 486px;
    margin-top: 202px;
    padding-top: 60px;
  }
  .mypStep2 {
    height: 700px;
    margin-top: 150px;
    padding-top: 20px;
  }
  .myPage_title {
    margin-top: 10px;
    margin-bottom: 25px !important;
  }
  .mySubT {
    margin-top: 5px;
  }
  .nowPassInput {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .newPassword {
      margin-bottom: 0;
  }
  .newPassError {
      margin-top: 15px;
  }
  .ModifyBtn {
      margin-top: 25px;
  }
</style>
