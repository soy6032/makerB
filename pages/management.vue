<template><!-- 프로젝트 생성 페이지 -->
  <div id="management">
    <div class="management">
      <div class="tabWrap">
        <h3 class="com_fonts13 manageTitle">나의 프로젝트를 관리하세요!</h3>

        <!-- 분류 tab -->
        <div class="tabList" @click="endTab">
          <div class="com_fonts10 com_fontW600 com_textGray tab" :class="{ tabTitle : manageTab == 1 }">최종완료</div>
        </div>
        <div class="tabList" @click="ingTab">
          <div class="com_fonts10 com_fontW600 com_textGray tab" :class="{ tabTitle : manageTab == 0 }">진행중</div>
        </div>
      </div>

      <!-- 해당 프로젝트가 없을 경우 -->
      <div class="noProject" v-show="progress.length == 0">
        <span class="noProjectText">해당하는 프로젝트가 없습니다.</span>
      </div>

      <!-- 진행중인 프로젝트 -->
      <div class="progressWrap" v-show="manageTab == 0">
        <ul class="progress">
          <li v-for="(item, index) in progress" :key="index" class="progressItem">
            <div class="proTemImg">
              <div :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" class="temImg imgHover"></div>
            </div>
            <p class="com_fonts10 com_fontW600 manaProName">{{ item.name }}</p>
            <p class="com_fonts08 com_textOrange projectLeader">{{ item.creator_email }}</p>
            <div class="dataTop">
              <span class="com_fonts075 com_fontW600">수정가능일 : ~</span>
              <span class="com_fonts075">{{ item.close_date }}</span>
            </div>
            <div class="dataBot">
              <span class="com_fonts075 com_fontW600">출력가능일 : ~</span>
              <span class="com_fonts075">{{ item.print_date }}</span>
            </div>

            <!-- 버튼 -->
            <div class="buttonWrap">
              <button class="manageAct" @click="term">기간연장</button>
              <button class="manageBtn" @click="editBtn(item.url)">수정하기</button>
              <!-- <button class="manageBtn" @click="warnAlert">출력하기</button> -->
              <button class="manageBtn" @click="printBtn(item)">출력하기</button>
            </div>
          </li>
        </ul>
      </div>

      <!-- 최종완료 프로젝트 -->
      <div class="progressWrap" v-show="manageTab == 1">
        <ul class="progress">
          <li v-for="(item, index) in progress" :key="index" class="progressItem">
            <div class="proTemImg">
              <div :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" class="temImg imgHover"></div>
            </div>
            <p class="com_fonts10 com_fontW600 manaProName">{{ item.name }}</p>
            <p class="com_fonts08 com_textOrange projectLeader">{{ item.creator_email }}</p>
            <div class="dataTop">
              <span class="com_fonts075 com_fontW600">수정가능일 : ~</span>
              <span class="com_fonts075">{{ item.close_date }}</span>
            </div>
            <div class="dataBot">
              <span class="com_fonts075 com_fontW600">출력가능일 : ~</span>
              <span class="com_fonts075">{{ item.print_date }}</span>
            </div>

            <!-- 버튼 -->
            <div class="buttonWrap">
              <button class="dataActBtn" @click="termNo">기간연장</button>
              <button class="modifyNoBtn" @click="modifyNo">수정하기</button>
              <button class="printPopBtn" @click="printBtn(item)">출력하기</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- print component -->
    <PrintPop v-if="printState" :printState="printState" :fileName="projectName" :contents="contents" :manageTab="manageTab" @popClose="printState = false"></PrintPop>

    <!-- alert components -->
    <AlertPop :alertState="alertState" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>

    <!-- confirm components -->
    <ConfirmPop :confirmState="confirmState" @popClose="confirmState = false" @popOk="confirmOk">
      <p v-show="conPrint">무료출력 기한이 만료되어 비용이 발생합니다. 출력하기를 진행하시겠습니까?</p>
      <p v-show="conTerm">기간연장은 별도의 비용이 발생합니다. 기간연장을 진행하시겠습니까?</p>
    </ConfirmPop>
  </div>
</template>
<script>
export default {
  name: 'Manamement',
  middleware: 'client',
  data () {
    return {
      manageTab: 0,
      projectName: '',
      leader: 'test@naver.com',
      modifyDate: '21년 02월 25일',
      printDate: '21년 02월 25일',
      printState: false,
      progress: [],
      alertState: false,
      alertCon: '',
      confirmState:false,
      conPrint: false,
      conTerm: false,
      contents: null,
      printIdx: null,
      
    };
  },
  mounted() {
    this.getProjectList();
  },
  methods: {
    // 프로젝트 리스트 가져오기
    getProjectList() {
      this.$axios.post('/client/getProjectList', {
        email: this.$store.state.email,
        tab: this.manageTab
      }).then((res) => {
        //console.log(res);
        if(res.data.state) {
          this.progress = res.data.items;
          for(let i in this.progress) {
            this.progress[i].url = `/projectWork/${this.progress[i].url}`;
          }
        } else {
          this.alertState = true;
          this.alertCon = res.data.msg;
        }
      });
    },
    // 출력 관련 경고창 
    warnAlert() {
      alert("현재 오류로 인해 출력에 문제가 있을 수 있습니다.\n출력이 필요하신 경우 최종 완료를 선택하셔서 출력해주시길 바랍니다.\n빠른 시일 내로 오류를 수정하겠습니다 감사합니다.");
      return false;
    },
    // 수정하기 버튼 클릭 시 
    editBtn (url) {
      this.$router.push(url);
    },
    // 완료된 프로젝트 리스트 탭 이동
    endTab() {
      this.manageTab = 1;
      this.getProjectList();
    },
    // 현재 진행중인 프로젝트 리스트 탭 이동
    ingTab() {
      this.manageTab = 0;
      this.getProjectList();
    },
    // 기간 변경 클릭 시
    term () {
      this.confirmState = true;
      this.conTerm = true;
      this.conPrint = false;
      
      //프로젝트 장이 아닐 경우
        // this.alertState = true;
        // this.alertCon = '프로젝트장이 아닙니다.';
    },
    termNo () {
      this.alertState = true;
      this.alertCon = '기간연장이 불가능합니다.';
      
      //프로젝트 장이 아닐 경우
        // this.alertState = true;
        // this.alertCon = '프로젝트장이 아닙니다.';
    },
    // 프로젝트 수정 클릭 시
    modifyNo () {
      this.alertState = true;
      this.alertCon = '수정이 불가능합니다.';
    },
    // 출력 클릭
    printBtn (item) {
      // 출력기한이 있는 경우
      //this.printIdx = parseInt(idx);
      this.projectName = item.name;
      this.contents = item.contents;
      this.printState = true;
      setTimeout(()=>{
        this.alertState = true;
        this.alertCon = "무료로 출력 가능한 기한은 최종완료일을 기준으로 30일 입니다.";
      },300);
    // 출력기한이 만료된 경우
      // this.confirmState = true;
      // this.conPrint = true;
      // this.conTerm = false;
    },
    
    confirmOk () {
      this.confirmState = false;
      this.alertState = true;
      this.alertCon = "고객센터로 문의해주세요.";
    }
  }
};
</script>
<style>
  .management {
    width: 1200px;
    margin: 0 auto;
    margin-top: 110px;
  }
  .manageTitle {
    float: left;
    margin-top: 5px;
  }
  .tabWrap {
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 30px;
    overflow: hidden;
  }

  /* tab */
  .tabList {
    float: right;
    cursor: pointer;
  }
  .tabTitle {
    float: right;
    color: #ef8454 !important;
    border: 1px solid #ef8454;
    border-radius: 50px;
  }
  .tab {
    float: right;
    color: #959595;
    font-size: 0.95rem;
    margin: 0px 5px 0 0;
    padding: 7px 0;
    width: 110px;
    text-align: center;
  }

  /* 해당 프로젝트가 없을 경우 */
  .noProject {
    width: 100%;
    height: 490px;
    overflow: hidden;
    position: relative;
  }
  .noProjectText {
    font-size: 1.5rem;
    color: #959595;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* 프로젝트가 있을 경우 */
  .progressWrap {
    padding: 7px 0 0 0;
    margin-bottom: 10px;
  }
  .progress {
    padding-left: 0 !important;
    overflow: hidden;
  }
  .proTemImg {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 100%;
    height: 170px;
    overflow: hidden;
  }
  .progressItem {
    width: calc(25% - 22.5px);
    float: left;
    margin: 0 30px 30px 0;
  }
  .progressItem:nth-child(4n) {
    margin: 0 0 30px 0;
  }
  .manaProName {
    margin: 15px 0 0 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
  }
  .projectLeader {
    margin-top: 1px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
  }
  .dataTop {
    margin-top: 7px;
  }
  .buttonWrap {
    overflow: hidden;
    margin-top: 13px;
  }

  /*  진행중 -> 기간연장 버튼  */
  .manageAct {
    border-radius: 5px;
    background-color: #ef8454;
    color: #fff;
    font-size: 0.75rem;
    padding: 7px 16px;
    transition: .3s;
    outline: none;
  }
  .manageAct:hover {
    background-color: #e7652a;
    transition: .3s;
  }

  /*  진행중 -> 수정하기,출력하기 버튼  */
  .manageBtn {
    border-radius: 5px;
    border: 1px solid #ef8454;
    color: #ef8454;
    font-size: 0.75rem;
    padding: 6px 19px;
    outline: none;
    margin-left: 5px;
  }

  /*  최종완료 -> 기간연장 버튼  */
  .dataActBtn {
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    color: #989898;
    font-size: 0.75rem;
    padding: 6px 16px;
    outline: none;
  }

  /* 최종완료 -> 수정하기 버튼 */
  .modifyNoBtn {
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    color: #989898;
    font-size: 0.75rem;
    padding: 6px 19px;
    outline: none;
    margin: 0 4px;
  }

  /* 최종완료 -> 출력하기 버튼 */
  .printPopBtn {
    border-radius: 5px;
    border: 1px solid #ef8454;
    color: #ef8454;
    font-size: 0.75rem;
    padding: 6px 19px;
    transition: .3s;
    outline: none;
  }


  /*alert components style*/
  .alertCon {
    padding: 0px 20px 30px 20px;
  }
</style>
