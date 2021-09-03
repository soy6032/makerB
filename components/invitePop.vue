<template><!-- 초대하기 components -->
  <div style="margin-top:100px;">
    <v-dialog
        v-model="invPop"
        persistent
        max-width="500"
      >
      <v-card class="linkPopWrap">
        <v-icon class="closeIcon" @click="$emit('popClose')">
          mdi-close
        </v-icon>
        <h3 class="com_fonts11">프로젝트 초대</h3>
        <p class="com_fonts09 com_textGray" style="padding-top:3px;">해당 링크를 복사해서 팀원을 초대하세요!</p>
        <input ref="urlArea" type="text" name="linkInput" class="com_input linkInput" :value="URL" readonly />
        <button class="com_btn_90 com_btn_orange" @click="copyBtn">복사</button>
      </v-card>
    </v-dialog>
    <AlertPop :alertState="alertState" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
  export default {
    name: 'InvitePop',
    props: {
      invPop: Boolean,
      URL: String
    },
    data() {
      return {
        alertState: false,
        alertCon: "링크가 복사되었습니다."
      };
    },
    methods: {
      // 초대하기 URL복사
      copyBtn () {
        this.$refs.urlArea.select();
        document.execCommand("copy");
        this.$emit('popClose');
        this.alertState = true;
      }
    }
  };
</script>
<style>
  .linkPopWrap {
    padding: 20px;
  }
  .linkInput {
    width: calc(100% - 103px);
    margin-top: 30px;
    margin-right: 7px;
  }
</style>