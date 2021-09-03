<template><!-- 참여자  목록 components -->
  <div id="entrantPop">
    <v-dialog
        v-model="entState"
        persistent
        max-width="400"
      >
        <v-card class="entWrap">
          <v-icon class="closeIcon" @click="$emit('popClose')">
            mdi-close
          </v-icon>
          <h3 class="com_fonts11">참여한 학생 목록을 확인하세요!</h3>
          <p class="com_fonts09 com_textGray" style="padding-top:3px;">아래의 초대 링크로 초대할 수 있어요.</p>
          <ul class="entListWrap">
            <li class="entList">
              <div class="entNumber com_fonts08 com_textOrange">순번</div>
              <div class="entItemL com_fonts08 com_textOrange">이메일</div>
              <div class="entItemR com_fonts08 com_textOrange">닉네임</div>
            </li>
            <li v-for="(item, index) in memList" :key="index" class="entList">
              <div class="entNumber com_fonts08">{{ index+1 }}</div>
              <div class="entItemL com_fonts09 com_textGray">
                <span>{{ item.email }}</span>
              </div>
              <div class="entItemR com_fonts09 com_textGray">
                <span>{{ item.nick }}</span>
              </div>
            </li>
          </ul>
          <div class="anArrow">
            <v-icon class="entrantBe" @click="before">mdi-arrow-left</v-icon>
            <v-icon class="entrantNext" @click="next">mdi-arrow-right</v-icon>
          </div>
          <div style="overflow:hidden;">
            <button class="com_popBtn_80 com_btn_orange inviteBtn" @click="$emit('invOpen')">초대</button>
          </div>
        </v-card>
      </v-dialog>
    </div>
</template>
<script>
  export default {
    name: 'EntrantPop',
    props: {
      entState: Boolean,
      memList: Array
    },
    data () {
      return {
        invPop: false,
        page: 1,
      };
    },
    mounted() {
    },
    methods: {
      before () {
        // this.page == 1 ? this.page = 0 : this.page -= 1;
      },
      next () {
        // this.page != 1 ? this.page = 1 : this.page += 1;
      }
    }
  };
</script>
<style>
  .entWrap {
    padding: 20px;
  }
  .entListWrap {
    width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 0 !important;
    margin-top: 30px;
  }
  .entList {
    overflow: hidden;
    /*padding: 10px;*/
    border-bottom: 1px solid #e5e5e5;
  }
  .entList:last-child {
    border-bottom: none;
  }
  .entNumber {
    width: 50px;
    float: left;
    border-right: 1px solid #e5e5e5;
    padding: 10px;
    overflow: hidden;
    text-align: center;
  }
  .entItemL {
    width: 170px;
    float: left;
    border-right: 1px solid #e5e5e5;
    padding: 10px;
    overflow: hidden;
  }
  .entItemL span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
  }
  .entItemR {
    width: calc(100% - 220px);
    float: left;
    padding: 10px;
    overflow: hidden;
  }
  .entItemR span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
  }
  .inviteBtn {
    float: right;
    margin-top: 10px;
  }
  .anArrow {
    width: 100%;
    overflow: hidden;
    text-align: center;
    margin-top: 10px;
  }
  .entrantBe {
    font-size: 23px!important;
    margin-right: 10px;
    color: #ef8454 !important;
  }
  .entrantBe:hover {
    color: #ffb557 !important;
  }
  .entrantNext {
    font-size: 23px!important;
    margin-left: 10px;
    color: #ef8454 !important;
  }
  .entrantNext:hover {
    color: #ffb557 !important;
  }
  /*paging vuetify*/
  /*nav {*/
  /*  margin-top: 10px;*/
    /*width: 100px;*/
    /*margin: 0 auto;*/
  /*}*/
  /*nav button {*/
  /*  outline: none !important;*/
  /*}*/
  /*.v-pagination__navigation {*/
  /*  width: 20px !important;*/
  /*  height: 20px !important;*/
  /*arrow 버튼 사이즈*/
  /*.theme--light.v-pagination .v-pagination__item--active {*/
  /*  color: #ef8454;*/
  /*  font-weight: 600;*/
  /*페이징 숫자 폰트색 변경*/
  /*.v-pagination__item--active {*/
  /*  box-shadow: none;*/
  /*focus된 숫자 그림자 삭제*/
  /*.v-pagination__item {*/
  /*  box-shadow: none;*/
  /*  font-size: 0.9rem;*/
  /*  padding: 0 3px;*/
  /*  min-width: auto;*/
  /*  height: auto;*/
  /*전체 숫자 스타일*/
  /*.v-pagination__navigation {*/
  /*  box-shadow: none;*/
  /*arrow 버튼 그림자 삭제*/
  /*.mdi-chevron-left::before {*/
  /*  font-size: x-large !important;*/
  /*arrow left 버튼 사이즈 줄임*/
  /*.mdi-chevron-right::before {*/
  /*  font-size: x-large !important;*/
  /*arrow right 버튼 사이즈 줄임*/
  
  
  /*data table*/
  /*.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {*/
  /*  padding: 6px 15px;*/
  /*  height: 38px;*/
  /*}*/
  /*.v-application .elevation-1 {*/
  /*  box-shadow: none !important;*/
  /*}*/
  /*.v-data-table > .v-data-table__wrapper > table {*/
  /*  margin-top: 20px;*/
  /*}*/
  /*.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {*/
  /*  font-size: 0.9rem;*/
  /*  height: 34px;*/
  /*  padding: 5px 0 0 12px;*/
  /*}*/
  /*.v-data-table-header__icon {*/
  /*  display: none !important;*/
  /* header 부분 아이콘 삭제*/
  /*.v-data-table-header th.active .v-data-table-header__icon, .v-data-table-header th:hover .v-data-table-header__icon {*/
  /*  display: none;*/
  /* header hover시 부분 아이콘 삭제 */
  /*.text-start {*/
    /*overflow: hidden;*/
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 1; /* 라인수 */
    /*-webkit-box-orient: vertical;*/
    /*word-wrap:break-word;*/
  /*}*/
</style>