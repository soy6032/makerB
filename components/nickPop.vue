<template><!-- 닉네임 설정 components -->
  <div id="nickPop">
    <v-dialog
        v-model="nickState"
        persistent
        max-width="500"
      >
      <v-card class="nickSetWrap">
        <v-icon class="closeIcon" @click="popCloses">
          mdi-close
        </v-icon>
        <h3 class="com_fonts11">닉네임을 설정할 수 있어요!</h3>
        <p class="com_fonts09 com_textGray" style="padding-top:3px;">닉네임은 해당 프로젝트내에서만 사용되며 중복이 불가능 합니다.</p>
        <input type="text" name="nickName" autocomplete = "off" class="com_input nickInput" v-model="userNick" />
        <button class="com_btn_90 com_btn_orange" @click="nickOk">확인</button>
      </v-card>
    </v-dialog>
    <AlertPop :alertState="alertState" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
  export default {
    name:'NickPop',
    props: {
      nickState: Boolean,
      pdx: Number
    },
    data () {
      return {
        userNick: '',
        alertState: false,
        alertCon: ''
      };
    },
    methods: {
      // 닉네임 설정창 닫기
      popCloses () {
        this.$emit('popClose');
        this.userNick = '';
      },
      // 닉네임 설정
      nickOk () {
        if(this.userNick.replace(/(\s*)/g, '') === "") {
          this.alertCon = "설정하실 닉네임을 입력하세요.";
          this.alertState = true;
          return false;
        } else {
          this.$axios.post('/client/setNickname',{
            pdx: this.pdx,
            uid: this.$store.state.userIdx,
            nick: this.userNick
          }).then((res) => {
            //console.log(res);
            this.alertState = true;
            this.alertCon = res.data.msg;
            if(res.data.state) {
              this.$emit('popClose');
            }
          });
        }
      }
    }
  };
</script>
<style>
  .nickSetWrap {
    padding: 20px;
  }
  .nickInput {
    width: calc(100% - 103px);
    margin-top: 30px;
    margin-right: 7px;
  }
  
  /*confirm custom*/
  /*.conDialog {*/
    /*height: 150px !important;*/
  /*}*/
  /*.confirmWrap {*/
    /*height: 150px !important;*/
  /*  padding: 30px 0 0 0 !important;*/
  /*}*/
  /*.confirmCon {*/
  /*  padding: 0 0 35px 0 !important;*/
  /*}*/
</style>