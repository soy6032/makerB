<template>
  <div class="text-center">
    <v-dialog
      v-model="produceState"
      persistent
      width="1000"
    >
      <v-card class="produceWrap">
        <v-icon class="closeIcon" @click="popClosed">
          mdi-close
        </v-icon>
        <div>
          <div class="formL">
            <h3 class="com_fonts13 proTitle">
              템플릿 목록을 미리 확인하세요.
            </h3>
            <div class="itemL">
              <v-carousel height="400" class="itemSlieWrap">
                <v-carousel-item v-for="(slide, index) in slides" :key="index">
                <!--<v-carousel-item v-for="(slide, index) in slides" :class"{ active: idx == 0}">-->
                   <div class="itemImg" :style="{background:'url('+slide.img_path+') center center / contain no-repeat'}" />
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
          <div class="formR">
            <h3 class="com_fonts13">
              템플릿을 선택하세요!
            </h3>
            <p class="com_fonts09 com_textGray proSubT">
              선택한 템플릿 목록은 왼쪽에서 확인 가능합니다.
            </p>
            <ul class="temListWrap">
              <li v-for="(item, index) in templateList" :key="index" class="templateList">
                <div :id="index" class="itemImg" :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" @click="pick(item, index)" />
              </li>
            </ul>
            <div class="pageControl">
              <v-icon class="pageLeft" @click="beforePage">mdi-arrow-left</v-icon>
              <v-icon class="pageRight" @click="nextPage">mdi-arrow-right</v-icon>
            </div>
          </div>
        </div>
        <v-card-actions>
          <v-spacer />
          <button class="com_btn_90 com_btn_orange" text @click="nextBtn">다음</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <AlertPop :alertState="alertState" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
export default {
  name: 'Produce',
  props: {
    produceState: Boolean
  },
  data () {
    return {
      proLastState: false,
      pickTemplate: null,
      page: 1,
      totalPage: 0,
      t_group: 1,
      slides: [],
      templateList: [],
      alertState: false,
      alertCon: "템플릿을 선택하세요."
    };
  },
  mounted() {
    this.getTemplateList();
    this.getDetailTemplate();
  },
  methods: {
    pick(item, index) {
      this.t_group = item.t_group;
      this.getDetailTemplate();
      this.pickTemplate = item;
      this.slides = 0;
      for(var i = 0; i<this.templateList.length; i++) {
        if(i !== index) {
          document.getElementById(i).style.border = "none";
        }else {
          document.getElementById(i).style.border = "3px solid #ef8454";
        }
      }
    },
    nextBtn() {
      if(this.pickTemplate === null) {
        this.alertState = true;
        return false;
      }
      this.$emit('next', this.pickTemplate);
      this.initList();
      this.pickTemplate = null;
      
    },
    getTemplateList() {
      this.$axios.get(`/client/getTemplate/${this.page}`)
      .then((res) => {
        if(!res.data.loginState) {
          // this.$store.commit('LOGOUT');
          // this.$router.push('/login');
        }
        this.templateList = res.data.items;
        this.totalPage = res.data.items[0].total_page;
      });
    },
    getDetailTemplate() {
      this.$axios.get(`/client/getDetailTemplate/${this.t_group}`)
      .then((res) => {
        this.slides = res.data.items;
      });
    },
    beforePage() {
      this.page == 1 ? this.page = this.totalPage : this.page -= 1;
      this.getTemplateList();
      this.initList();
      this.pickTemplate = null;
    },
    nextPage() {
      this.page == this.totalPage ? this.page = 1 : this.page += 1;
      this.getTemplateList();
      this.initList();
      this.pickTemplate = null;
    },
    popClosed() {
      this.$emit('popClose');
      this.initList();
      this.pickTemplate = null;
      this.page = 1;
      this.slides = 0;
      this.t_group = 1;
      this.getTemplateList();
      this.getDetailTemplate();
    },
    initList() {
      for(let i=0; i < this.templateList.length; i++) {
        document.getElementById(i).style.border = "none";
      }
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
    color: #ef8454;
  }/*슬라이드 아이콘*/
  
  .produceWrap {
    padding: 20px;
    height: 615px;
  }
  .formL {
    float: left;
    width: 520px;
    height: 100%;
    padding-top: 30px;
  }
  .proTitle {
    margin-bottom: 20px;
  }
  .itemSlieWrap {
    border: 1px solid #e5e5e5;
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
  .proSubT {
    margin-top: 5px;
  }
  .temListWrap {
    overflow: hidden;
    padding: 0 10px !important;
    margin-top: 15px;
    height: 405px;
  }
  .templateList {
    width: 180px;
    height: 115px;
    float: left;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
  .templateList:hover {
    transform: translateY(-7px);
    transition: 0.3s;
    box-shadow: 0 0 7px #e0e0e0;
  }
  .templateList:nth-child(odd) {
    margin: 10px 10px 10px 0;
  }
  .templateList:nth-child(even) {
    margin: 10px 0 10px 10px;
  }
  .itemImg {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .v-card__actions {
    float: right;
    padding: 0 !important;
    margin-top: 18px;
  }
  .pageControl {
    margin-top: 10px;
    text-align: center;
  }
  .pageLeft {
    font-size: 23px!important;
    margin-right: 10px;
    color: #ef8454 !important;
  }
  .pageLeft:hover {
    color: #ffb557 !important;
  }
  .pageRight {
    font-size: 23px!important;
    margin-left: 10px;
    color: #ef8454 !important;
  }
  .pageRight:hover {
    color: #ffb557 !important;
  }
</style>
