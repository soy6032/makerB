<template><!-- 템플릿 미리보기 components -->
  <div class="text-center">
    <v-dialog
      v-model="previewState"
      persistent
      width="561"
    >
      <v-card class="produceWrap">
        <v-icon class="closeIcon" @click="popClosed">mdi-close</v-icon>
        <div>
          <div class="formL">
            <h3 class="com_fonts13 proTitle">템플릿 목록을 미리 확인하세요!</h3>
            <div class="itemL">
              <v-carousel height="400" class="itemSlieWrap">
                <v-carousel-item v-for="(item, index) in slides" :key="index">
                   <div class="itemImg" :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" />
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>
        <button class="com_btn_orange createBtn" @click="$emit('createState')">프로젝트 생성하기</button>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'Produce',
  props: {
    previewState: Boolean,
    t_group: Number
  },
  data () {
    return {
      slides: []
    };
  },
  created() {
    this.getDetailTemplate();
  },
  methods: {
    getDetailTemplate() {
      this.$axios.get(`/client/getDetailTemplate/${this.t_group}`)
      .then((res) => {
        //console.log(res.data.items);
        this.slides = res.data.items;
      });
    },
    popClosed() {
      this.$emit('popClose');
    }
  }
};
</script>
<style>
  /*slide*/
  .v-carousel__controls {
    height: 35px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }/*carousel 전체 높이 50px에서 auto, bottom:0에서 20px*/
  .theme--dark.v-btn:hover::before {
    opacity: 0;
  }/*carousel hover시 생기는 겉 동그라미 숨김*/
  .v-btn--icon.v-size--small .v-icon, .v-btn--fab.v-size--small .v-icon {
    font-size: 15px !important;
  }/*carousel 동그라미 크기 작게*/
  .v-btn--icon.v-size--small {
    height: 25px;
    width: 25px;
  }/*슬라이드 밑 버튼 focus시 뒷 배경*/
  .mdi-chevron-right::before {
    font-size: xx-large !important;
  }/*슬라이드 오른쪽 arrow button 사이즈*/
  .mdi-chevron-left::before {
    font-size: xx-large !important;
  }/*슬라이드 왼쪽 arrow button 사이즈*/
  .v-carousel__controls__item {
    margin: 0 3px;
  }/*carousel margin*/
  .v-window__prev, .v-window__next {
    margin: 0 10px;
  }/*슬라이드 arrow 버튼*/
  .v-carousel__controls {
    background: transparent;
  }/*슬라이드 밑*/
  /*슬라이드 양옆버튼*/
  .v-window__prev, .v-window__next {
    background: transparent;
    transition: 0.3s;
  }
  .v-window__prev:hover, .v-window__next:hover {
    background: transparent;
    transition: 0.3s;
  }
  .theme--dark.v-btn.v-btn--icon {
    color: #EF8454;
  }/*슬라이드 아이콘*/
  
  
  
  .produceWrap {
    padding: 20px;
    height: 585px;
  }
  .formL {
    float: left;
    width: 520px;
    height: 100%;
    padding-top: 10px;
  }
  .proTitle {
    margin-bottom: 20px;
  }
  .itemSlieWrap {
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    overflow: hidden;
  }
  .itemL {
    width: 100%;
    height: 400px;
  }
  .formR {
    float: left;
    width: calc(100% - 560px);
    margin-left: 40px;
    /*height: 500px;*/
    overflow: hidden;
  }
  
  .itemImg {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .pageControl {
    margin-top: 10px;
    text-align: center;
  }
  .pageLeft {
    font-size: 23px!important;
    margin-right: 10px;
    color: #EF8454 !important;
  }
  .pageLeft:hover {
    color: #FFB557 !important;
  }
  .pageRight {
    font-size: 23px!important;
    margin-left: 10px;
    color: #EF8454 !important;
  }
  .pageRight:hover {
    color: #FFB557 !important;
  }
  .createBtn {
    width: 170px;
    height: 45px;
    border-radius: 5px;
    text-align: center;
    outline: none;
    font-size: 0.9rem;
    font-weight: 600;
    float: right;
    margin-top: 30px;
  }
</style>