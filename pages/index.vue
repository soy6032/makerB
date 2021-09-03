<template><!-- 메인 페이지 -->
  <div id="main" style="margin-top:60px;">

    <!-- 첫번째 섹션 -->
    <div class="com_section mainHeight">
      <div class="maintTitleWrap">
        <div class="logoTitle">
          <h1 class="mainTitleT">최고의 협업 연구노트 "꾸럼<span>e</span>"</h1>
        </div>
        <p class="mainTitleB">지금 바로 무료로 사용해보세요!</p>
      </div>
      <div class="mainImgWrap">
        <img src="~/assets/img/main_v5.png" alt="메인 일러스트" class="mainImg" />
      </div>
      <div class="mainBtnWrap">
        <button class="com_btn com_btn_orange startBtn" @click="startAct">무료로 시작하기</button>
      </div>
    </div>

    <!-- 두번째 섹션(기능설명) -->
    <div class="secondSec">
      <div class="com_section">
        <div class="contL">
          <img src="~/assets/img/mainCon_v2_1.png" alt="동시 작업 페이지" class="contentImg conImgPadding" />
        </div>
        <div class="conR padL_36">
          <p class="con01Title fonts20">동시 문서 편집 & 채팅</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">최대 4명이, 동시문서편집기능</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">최대 10명이 하나의 프로젝트를 편집 가능</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">프로젝트 참여자들과의 자유로운 채팅기능</p>
        </div>
      </div>
    </div>
    <div class="sectionWrap">
      <div class="com_section">
        <div class="contents contL">
          <p class="con02Title fonts20">클라우드 방식</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">다양한 기기에서 언제,어디서든 인터넷이 있는 곳이라면~</p>
          <p class="contentSub secondText">문서를 편집 할 수 있어요!!!</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">초대 링크를 통해 팀원을 프로젝트에 참여 시킬 수 있어요!!</p>
          <p class="contentSub secondText">별도의 설치가 필요 없어요~!!</p>
        </div>
        <div class="conR">
          <img src="~/assets/img/mainCon_v2_3.png" alt="초대 링크 페이지" class="contentImg" />
        </div>
      </div>
    </div>
    <div class="sectionWrap" style="padding-bottom:10px;">
      <div class="com_section">
        <div class="contL">
          <img src="~/assets/img/mainCon_v2_2.png" alt="출력 페이지" class="contentImg" />
        </div>
        <div class="conR padL_36">
          <p class="con03Title fonts20">PDF 출력</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub margin_minus">최종완료된 프로젝트 연구일지는 꾸럼<span>e</span>에서 관리</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">자신만의 포트폴리오를 만들어보세요!!</p>
          <img src="~/assets/img/check.png" alt="체크 이미지" class="checkImg" />
          <p class="contentSub">인증출력을 통해 문서의 신뢰도 향상!!</p>
        </div>
      </div>
    </div>

    <!-- 세번째 섹션(프로세스 설명) -->
    <div class="processWrap">
      <h3 class="processTitle">꾸럼<span>e</span>, 프로세스</h3>
      <div class="processCon">
        <div class="processList">
          <div v-for="(item, index) in processList" :key="index" class="process">
            <div class="proIcon" :style="{background:'url('+item.img+') center center / contain no-repeat'}"></div>
            <p class="proText">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 마지막 섹션(CTA) -->
    <div class="ctaWrap">
      <h3 class="ctaText">꾸럼<span>e</span>, 지금 바로 무료로 사용해보세요!</h3>
      <div class="ctaBtnWrap">
        <button class="com_btn com_btn_130 ctaBtn" @click="startAct">시작하기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {

      // 세번째 섹션(프로세스 설명)
      processList: [
        {
          img: require("../assets/img/processIcon01.png"),
          title: '꾸럼e 가입'
        },
        {
          img: require("../assets/img/processIcon00.png"),
          title: ''
        },
        {
          img: require("../assets/img/processIcon02.png"),
          title: '프로젝트 생성'
        },
        {
          img: require("../assets/img/processIcon00.png"),
          title: ''
        },
        {
          img: require("../assets/img/processIcon06.png"),
          title: '팀원초대'
        },
        {
          img: require("../assets/img/processIcon00.png"),
          title: ''
        },
        {
          img: require("../assets/img/processIcon03.png"),
          title: '프로젝트 작성'
        },
        {
          img: require("../assets/img/processIcon00.png"),
          title: ''
        },
        {
          img: require("../assets/img/processIcon05.png"),
          title: 'PDF 출력'
        }
      ]
    };
  },
  methods: {
    startAct() {
      if (!this.$store.state.loginState) {
        this.$router.push('/login');
      }else {
        this.$router.push('/management');
      }
    }
  }
};
</script>
<style>

  /* 메인 공통 스타일 */
  .logoTitle {
    width: 100%;
    overflow: hidden;
  }
  .mainLogo {
    width: 140px;
    float: left;
  }
  .contL {
      float: left;
      width: 620px;
  }
  .conR {
      float: right;
      width: 580px;
  }
  .com_section {
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    position:relative;
  }


  /* 첫번째 섹션 */
  .mainHeight {
    height: 405px !important;
  }
  .maintTitleWrap {
    width: 740px;
    float: left;
    padding-top: 93px;
  }
  .mainTitleT {
    font-size: 3.3rem;
    font-weight: 700;
    float: left;
    color: #ef8454;
  }
  .mainTitleT span {
    font-size: 4.8rem;
    font-weight: 700;
  }
  .mainTitleB {
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 4px;
    color: #111;
  }
  .mainSub {
    margin-top:25px;
    color:#7d7d7d;
    font-size:1rem;
    font-weight:700;
    line-height:25px;
  }
  .mainBtnWrap {
    width: 160px;
  }
  .startBtn {
    width: 200px;
    height: 60px;
    border-radius: 3px;
    text-align: center;
    outline: none;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 55px;
    margin-bottom: 30px;
    box-shadow: 0px 5px 10px #e5e5e5;
  }
  .mainImgWrap {
    float: right;
    position:absolute;
    right:-3px;
    top:87px;
  }
  .mainImg {
    width: 560px;
    height: 100%;
  }

  /* 두번째 섹션(기능설명) */
  .secondSec {
    background-image: url('../assets/img/back.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 215px 0px 80px 0px;
  }
  .contentImg {
    width: 100%;
    height: 100%;
    padding: 44px 30px 0px 45px;
    transition: .4s;
  }
  .contentImg:hover {
    transform: scale(1.05);
    transition: .4s;
  }
  .conImgPadding {
    padding: 0 30px 0 45px !important;
  }
  .impactE {
    font-size: 2.3rem;
  }
  .fonts20 {
    font-size: 2rem;
    font-weight: 700;
  }
  .checkImg {
    width: 17px;
    float: left;
    margin: 5px 15px 0 3px;
  }
  .contentSub {
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 30px;
    color: #4e4e4e;
  }
  .contentSub span {
    font-size: 1.8rem;
  }
  .margin_minus {
    margin-top: -12px;
  }
  .sectionWrap {
    width: 100%;
    background-color: #FFF9F3;
    overflow: hidden;
    padding-bottom: 80px;
  }
  .con01Title {
    padding-top: 57px;
    padding-bottom: 40px;
  }
  .con02Title {
    padding-top: 94px;
    padding-bottom: 40px;
  }
  .con03Title {
    padding-top: 112px;
    padding-bottom: 40px;
  }
  .contents {
    padding-left: 75px;
  }
  .secondText {
    margin-left: 36px;
    margin-top: -23px;
  }

  /* 마지막 섹션(CTA) */
  .ctaWrap {
    background-image: url('../assets/img/cta.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    padding-top: 22px;
  }
  .ctaText {
    font-size: 2.3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  .ctaText span {
    font-size: 3.5rem;
    font-weight: 700;
  }
  .ctaBtnWrap {
    width: 160px;
    margin: 0 auto;
  }
  .ctaBtn {
    width: 200px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    font-weight: 600;
    margin-top: 35px;
    outline: none;
    transition: .3s;
  }
  .ctaBtn:hover {
    border: none;
    background-color: #fff;
    color: #e7652a;
    transition: .3s;
  }
  .padL_36 {
    padding-left: 36px;
  }

  /* 세번째 섹션(프로세스 설명) */
  .processWrap {
    width: 100%;
    height: 726px;
    background-image: url('../assets/img/section.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .processTitle {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 600;
    padding-top: 250px;
  }
  .processTitle span {
    font-size: 3.8rem;
    font-weight: 700;
  }
  .processCon {
    width: 1000px;
    margin: 0 auto;
  }
  .processList {
    width: 100%;
    height: 200px;
    margin-top: 100px;
  }
  .processImg {
    width: 200px;
    position: absolute;
  }
  .process {
    width: calc(1000px / 9);
    float: left;
  }
  .proIcon {
    height: 100px;
    background-image: url('../assets/img/processIcon01.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .proText {
    text-align: center;
    font-size: 1.05rem;
    font-weight: 600;
    margin-top: 25px;
    color: #454545;
  }
</style>
