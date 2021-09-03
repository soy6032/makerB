<template>
  <v-app>
    <div>
      <!--헤더--------------------------------------------------------------------------------------------->
      <v-app-bar
        id="webHeader"
        :clipped-left="clipped"
        fixed
        app
      >
        <v-toolbar-title>
          <img src="~/assets/img/logo.png" class="logoImg" alt="꾸럼e 로고사진" @click="logoBtn">
          <ul class="headerNav">
            <li class="com_fonts09 cursorPoint" @click="manageProject('makeProject')">
                프로젝트 생성
            </li>
            <li class="com_fonts09 cursorPoint" @click="manageProject('management')">
                프로젝트 관리
            </li>
            <li v-if="loginState" class="com_fonts09 cursorPoint notice" @click="alarmBtn">
              알림
            </li>
            <li v-if="loginState" class="com_fonts09">
              <NuxtLink to="/myPage" class="navText">
                마이페이지
              </NuxtLink>
            </li>
            <li v-if="!loginState" class="com_fonts09 hLoginBtn">
              <NuxtLink to="login" class="loginText">
                로그인
              </NuxtLink>
            </li>
            <li v-if="loginState" class="com_fonts09 logout" @click="logout">
              로그아웃
            </li>
          </ul>
        </v-toolbar-title>
        <v-spacer />
      </v-app-bar>
      <!--헤더 끝--------------------------------------------------------------------------------------------->
      <nuxt />
      <!--푸터--------------------------------------------------------------------------------------------->
      <div id="footer">
        <div class="content_center">
          <div class="footer_leftWrap">
            <img src="../assets/img/logo.png" alt="MVPick 로고" class="footer_logo">
            <div>
              메이커 에듀｜대표이사 추철민
            </div>
            <div>
              사업자등록번호 511-28-00348 | 대표번호 010-9339-1982
            </div>
            <div>
              (51013)경상남도 김해시 관동로 14, 403호 경남콘텐츠기업지원센터(관동동,A)
            </div>
            <p>copyrightⓒ 메이커 에듀 all rights reserved</p>
          </div>
        </div>
      </div>
      <!--푸터 끝--------------------------------------------------------------------------------------------->
      <!--<Produce :produce-state="produceState" @next="nextBtn" @popClose="produceState = false" />-->
      <!--<ProduceLast :pro-last-state="proLastState" :producelastData="template" @prev="proState" @popClose="proLastState = false" />-->
      <Notice :notice-state="noticeState" :alarmList="alarmList" @closed="noticeState = false" />
      <AlertPop :alertState="alertState" @popClose="alertState = false">
        {{alertCon}}
        <p v-show="produce">프로젝트 진행중에는 프로젝트를<br>생성할 수 없습니다.</p>
      </AlertPop>
    </div>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      clipped: false,
      // produceState: false,
      // proLastState: false,
      noticeState: false,
      template: null,
      alertState: false,
      alertCon: '',
      produce: false,
      createBtn: true,
      alarmList: []
    };
  },
  computed: {
    loginState () {
      if (this.$store.state.loginState) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted () {
    //알림 영역을 제외한 영역 클릭시(hyang)
    document.querySelector("body").addEventListener('click',(e)=>{
      var target = e.target;
      var status = false;
      if(e.currentTarget.querySelector(".notice")){
        var noticeBtn = e.currentTarget.querySelector(".notice");
        if(target == noticeBtn) {
          status = true;
        };
        if(status == false) {
          if(this.noticeState === true) {
            this.noticeState = false;
          };
        };
      }

    });


  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then((res) => {
          this.alertState = true;
          this.produce = false,
          this.alertCon = res.msg;
          setTimeout(()=>{
            this.$router.push('/');
          },1000);
        });
    },
    gotoLogin () {
      this.alertState = true;
      this.produce = false,
      this.alertCon = '로그인이 필요합니다.';
      setTimeout(()=>{
        this.$router.push('/login');
      },1000);
    },
    // createProject () {
    //   if (this.$store.state.loginState) {
    //     let path = this.$router.currentRoute.path;
    //     if(path.match('projectWork')) {
    //       this.alertState = true;
    //       this.produce = true;
    //       return false;
    //     }
    //     this.produceState = true;
    //   } else {
    //     this.gotoLogin();
    //   }
    // },
    proState () {
      this.proLastState = false;
      this.produceState = true;
    },
    manageProject (page) {
      if (!this.$store.state.loginState) {
        this.gotoLogin();
      } else {
        this.$router.push(`/${page}`);
      }
    },
    logoBtn () {
      this.$router.push('/');
      this.noticeState = false;
    },
    nextBtn (item) {
      this.proLastState = true;
      this.produceState = false;
      this.template = item;
      // console.log(`nextBtn ${item}`);
    },
    alarmBtn () {
      if(this.$store.state.loginState) {
        this.$axios.get(`/client/alarmList/${this.$store.state.userIdx}`)
        .then((res) => {
          this.alarmList = [];
          if(res.data.state) {
            for(let i in res.data.items) {
              let temp = res.data.items[i].contents.split(',');
              let obj = {
                projectName: temp[0],
                chiefName: temp[1],
                chiefNic: '',
                msg: temp[2],
                projectDate: res.data.items[i].regdate.substr(0, 10)
              };
              this.alarmList.push(obj);
            }
            this.noticeState = true;
          } else {
            this.noticeState = false;
            this.alertState = true;
            this.alertCon = res.data.msg;
          }
        });
      } else {
        this.gotoLogin();
      }
    }
  }
};
</script>
<style>
@import "@/assets/css/common.css";
  .v-toolbar__content {
    padding: 0;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    /*background-color: #ef8454;*/
    background-color: #fff;
  }
  .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: 0 0 5px #e4e4e4;
  }
  #webHeader {
    height: 70px !important;
    position: fixed;
    top: 0;
    left: 0;
  }
  #webHeader .v-toolbar__content {
    height: 70px !important;
    width: 1200px;
    margin: 0 auto;
  }
  .v-toolbar__title {
    width: 100%;
  }
  .headerNav {
    float: right;
    padding-top: 17px;
  }
  .headerNav li {
    float: left;
    margin-left: 40px;
    margin-top: 7px;
    /*color: #ffffff;*/
    color: #1e1e1e;
    font-weight: 600;
    font-size: 0.95rem !important;
  }
  .logoImg {
    width:83px;
    margin-top: 7px;
    cursor: pointer;
  }
  .hLoginBtn {
    background-color: #fff;
    color: #ef8454 !important;
    border-radius: 5px;
    padding: 7px 11px;
    margin-top: 0 !important;
    border: 1px solid #ef8454;
  }
  .loginText {
    color: #ef8454 !important;
    font-weight: 600;
  }
  .logout {
    cursor: pointer;
  }
  .navText {
    color: #1e1e1e !important;
    font-weight: 600;
  }
  #footer {
    width: 100%;
    /*background-color: #454545;*/
  }
  .content_center {
    width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #e5e5e5;
    padding: 30px 0 40px 0;
    font-size: 0.75rem;
    line-height: 24px;
    color: #959595;
    overflow: hidden;
  }
  .footer_logo {
    width: 80px;
    margin-bottom: 5px;
  }
  .footer_leftWrap {
    float: left;
  }
  .footer_rightWrap {
    float: left;
    margin-top: 63px;
    margin-left: 150px;
  }
  .footer_right {
    font-weight: 600;
    font-size: 0.85rem;
    color: #ef8454;
    margin-bottom: 15px;
  }
</style>
