<template><!-- alert components -->
    <div id="alertPop">
        <v-dialog
          v-model="alertState"
          persistent
          max-width="300"
        >
          <v-card class="alertWrap">
            <div class="alertCon">
              <slot></slot>
            </div>
            <div class="alertBtnWrap">
              <button class="alertBtn com_btn com_popBtn_80 com_btn_orange" @click="checkBtn">확인</button>
            </div>
          </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: 'AlertPop',
        props: {
            alertState: Boolean,
            completeSignup: Boolean
        },
        methods: {
          // 경고창 닫기
          checkBtn() {
            if(this.completeSignup == true) {
              this.$emit('popClose');
              this.$router.push('/login');
            } else {
              this.$emit('popClose');
            }
          }
        }
    };
</script>
<style>
  .alertWrap {
    padding: 30px 0 25px 0;
  }
  .alertCon {
    text-align: center;
    padding: 0px 0 30px 0;
    font-size: 0.95rem;
    font-weight: 600;
  }
  .alertCon p {
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
  }
  .alertBtnWrap {
    width: 100%;
    overflow: hidden;
    text-align: center;
  }
  .alertBtn {
    width: 80px;
    height: 40px;
  }
</style>