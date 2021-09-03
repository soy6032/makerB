<template><!-- confirm components -->
    <div id="confirmPop">
        <v-dialog
          v-model="confirmState"
          persistent
          max-width="300"
          class="conDialog"
        >
          <v-card class="confirmWrap">
            <div class="confirmCon">
              <slot></slot>
            </div>
            <div class="confirmBtn">
                <button class="cancelBtn com_btn com_popBtn_80" @click="$emit('popClose')">취소</button>
                <button class="com_btn com_popBtn_80 com_btn_orange" @click="$emit('popOk')">확인</button>
            </div>
          </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: 'ConfirmPop',
        props: {
            confirmState: Boolean
        }
    };
</script>
<style>
  .confirmWrap {
    padding: 30px 0 25px 0;
  }
  .confirmCon {
    text-align: center;
    padding: 0px 15px 30px 15px;
    font-size: 0.93rem;
    font-weight: 600;
  }
  .confirmCon p {
    font-size: 0.93rem;
    font-weight: 600;
  }
  .confirmBtn {
    overflow: hidden;
    text-align: center;
    padding-left: 66px;
  }
  .confirmBtn button {
      width: 80px;
      height: 40px;
      float: left;
  }
  .cancelBtn {
      background-color: #e5e5e5;
      color: #909090;
      transition: .3s;
      margin-right: 10px;
  }
  .cancelBtn:hover {
      background-color: #bdbdbd;
      color: #454545;
      transition: .3s;
  }
</style>