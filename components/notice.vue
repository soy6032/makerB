<template><!-- 알림 components -->
  <div v-if="noticeState" class="layerPop">
    <v-icon btn class="closeIcon" @click="$emit('closed')">
      mdi-close
    </v-icon>
    <div class="noticeWrap">
      <div class="com_fonts10 com_fontW600">
        <span style="color:#ef8454;font-weight:600">꾸럼e</span>에서 알려드립니다!
      </div>
      <ul class="noItemWrap">
        <li v-if="alarmList == 0">
          <div class="notiNone">알림이 없어요</div>
        </li>
        <li v-for="(item, index) in alarmList" :key="index" class="noticeItem">
          <div class="com_fonts09 com_fontW600 overflowName" style="margin-bottom:2px;">
            {{ item.projectName }}
          </div>
          <div class="com_fonts08 com_textGray overflowName">
            {{ item.chiefName }}
          </div>
          <div class="com_fonts08 com_textBlack" style="margin-top: 10px">
            {{  item.msg }}
          </div>
          <div class="com_textGray dateText">
            {{ item.projectDate }}
          </div>
        </li>
      </ul>
      <!--<v-icon class="arrowDown">-->
      <!--  mdi-arrow-down-circle-outline-->
      <!--</v-icon>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notice',
  props: {
    noticeState: Boolean,
    alarmList: Array
  },
  data () {
    return {
      userData: [
        {
          projectName: '프로젝트명이 엄청 엄청 계속 계속 길어져요',
          chiefName: 'test01@naver.com',
          chiefNic: '',
          projectDate: '2021.02.17'
        }
      ]
    };
  }
};
</script>
<style>
  .noticeWrap {
    width: 100%;
    height: 450px;
    padding: 20px 10px 20px 20px;
    overflow: hidden;
    background-color: #fff;
  }
  .noItemWrap {
    overflow: auto;
    padding-left: 0 !important;
    padding-right: 15px;
    height: 360px;
    margin: 15px 0 10px 0;
  }
  /*스크롤 스타일 시작*/
  .noItemWrap::-webkit-scrollbar {
    width: 7px;
  }
  .noItemWrap::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .noItemWrap::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #ef8454;
  }
  .noItemWrap::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  /*스크롤 스타일 종료*/
  .noticeItem {
    border-top: 1px solid #e5e5e5;
    padding: 15px 0 15px 0;
  }
  .noticeItem:first-child {
    border: none;
  }
  .dateText {
    text-align: right;
    margin-top: 10px;
    font-size: 0.75rem;
  }
  .arrowDown {
    color: #ef8454 !important;
    font-size: 1.2rem !important;
    left: 50%;
    transform: translateX(-50%);
    /*margin: 10px;*/
  }
  .layerPop{
    width: 360px;
    overflow:hidden;
    position:fixed;
    top:80px;
    left:50%;
    margin-left: 80px;
    border:1px solid #e5e5e5;
    border-radius:5px;
    box-shadow: 0 0 5px #e5e5e5;
  }
  .notiNone {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #ffbda0;
    margin-top: 140px;
  }
</style>
