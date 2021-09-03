<template><!-- 프로젝트 정보 입력 components -->
  <div id="produceLast" class="text-center">
    <v-dialog
      v-model="proLastState"
      persistent
      width="570"
    >
      <v-card class="proLastWrap">
        <v-icon class="closeIcon" @click="createPop">
          mdi-close
        </v-icon>
        <div>
          <h3 class="com_fonts12 proStep2Title">
            생성할 프로젝트의 정보를 입력하세요!
          </h3>

          <!-- 프로젝트 이름 설정 -->
          <div>
            <p class="com_fonts10 com_fontW600">
              1. 생성할 프로젝트의 이름을 입력해주세요.
            </p>
            <input class="com_input projectName" type="text" name="projectName" autocomplete="off" v-model.trim="info.projectName">
          </div>

          <!-- 프로젝트 기간 설정 -->
          <div>
            <p class="com_fonts10 com_fontW600">
              2. 프로젝트 최종완료 기간을 선택해주세요.
            </p>
            <p class="com_fonts08 proSecSubT">
              &#42;기간을 넉넉하게 설정하세요. 기간연장시 비용이 발생합니다!
            </p>
            <div class="proDateWrap">
              <p class="com_fonts09 com_fontW600" style="margin-bottom: 15px !important;">
                생성일로부터 1개월 기준은 30일이며 최대 기간은 1년(365일)입니다.
              </p>
              <v-radio-group v-model="row" row @change="dataBtn">
                <v-radio label="1개월" value="1"/>
                <v-radio label="2개월" value="2"/>
                <v-radio label="3개월" value="3"/>
                <v-radio label="4개월" value="4"/>
                <v-radio label="5개월" value="5"/>
                <v-radio label="6개월" value="6"/>
                <v-radio label="7개월" value="7"/>
                <v-radio label="8개월" value="8"/>
                <v-radio label="9개월" value="9"/>
                <v-radio label="10개월" value="10"/>
                <v-radio label="11개월" value="11" style="margin-bottom:0;" />
                <v-radio label="1년" value="12" style="margin-bottom:0;"/>
                <v-radio label="직접선택" value="self" style="margin-bottom:0;">
                  <v-icon style="font-size: 1.4rem !important;">
                    mdi-calendar-month
                  </v-icon>
                </v-radio>
              </v-radio-group>
              <v-icon class="calendarIcon" @click="pickDate">
                mdi-calendar-month
              </v-icon>
              <v-date-picker
                v-show="calendar"
                v-model="date"
                :show-current="false"
                no-title
                locale="ko-KR"
                class="datePicker"
                :max="maxDate"
                :min="currentDate"
                :day-format="date => date.split('-')[2]"
              >
                <button icon class="pickerClose" @click="calendarDate">
                  <v-icon>mdi-close</v-icon>
                </button>
              </v-date-picker>
            </div>
            <div class="proDate">
              <span class="com_fonts09">프로젝트 최종완료일</span>
              <span style="font-size:1.2rem;"> : </span>
              <span class="proDateText"> {{ result_date }}</span>
              </div>
          </div>
        </div>
        <v-card-actions>
          <v-spacer />
          <button class="com_btn_orange com_btn_110" @click="createBtn">
            생성하기
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- alert components -->
    <AlertPop v-if="alertState" :alertState="alertState" :completeSignup="false" @popClose="alertClose">{{alertCon}}</AlertPop>
  </div>
</template>
<script>
export default {
  name: 'ProduceLast',
  props: {
    proLastState: Boolean,
    producelastData: Object
  },
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      // calendar 의 min date ( 현재날짜 )
      currentDate: new Date().toISOString().substr(0, 10),
      maxDate: null,
      row: null,
      result_date: null,
      calendar: false,
      produceState: false,
      calendarState: true,
      info: {
        projectName: null,
        userIdx: null,
        templateIdx: null,
        expiry_date: null,
        print_date: null
      },
      alertState: false,
      alertCon: '',
      code: null,
      resState: null
    };
  },
  created() {
    this.maxDate = this.set_MaxDate();
  },
  computed: {
  },
  methods: {
    // 프로젝트 날짜 선택시 달력 선택 했을 경우
    pickDate() {
      if(this.row === "self") this.calendar = true;
      else this.calendar = false;
    },
    // 프로젝트 생성 버튼 클릭 시 프로젝트 생성 데이터 체크
    createBtn () {
      if(this.row === "self") this.info.expiry_date = this.date;
      else this.info.expiry_date = this.set_ExpiryDate(this.row);
      
      this.info.print_date = this.set_EditDate(this.info.expiry_date);
      this.info.userIdx  = this.$store.state.userIdx;
      this.info.template = this.producelastData;
      
      if(this.info.projectName === null || this.info.projectName === '') {
        this.alertState = true;
        this.alertCon = "프로젝트 이름을 입력하세요.";
        return false;
      }
      
      console.log(this.info.expiry_date);
      if(this.info.expiry_date === null) {
        this.alertState = true;
        this.alertCon = "프로젝트 기간을 설정해주세요.";
        return false;
      }
      
      this.$axios.post('/client/createProject', { info: this.info })
      .then((res) => {
        //console.log(res.data);
        this.alertState = true;
        this.alertCon = res.data.msg;
        this.resState = res.data.state;
        this.code = res.data.items[0].url;
      });
    },
    // 프로젝트로 이동
    alertClose() {
      this.alertState = false;
      if(this.resState) {
        this.$router.push(`/projectWork/${this.code}`);
      } else {
        return false;
      }
    },
    createPop () {
      this.initVariable();
      this.$emit('popClose');
    },
    // beforeBtn() {
    //   this.initVariable();
    //   this.$emit('prev');
    // },
    // 유효 기간 세팅
    set_ExpiryDate (p_month) {
      if(p_month == null) {
        return null;
      }
      let p_day = 0;
      const c_date = new Date(this.currentDate);
      if(p_month === "12") p_day = 365 - 1;
      else p_day = (30 * p_month) - 1;
      c_date.setDate(c_date.getDate() + p_day);
      return new Date(c_date).toISOString().substr(0, 10);
    },
    // 수정 기간 세팅
    set_EditDate (expiry_date) {
      const e_date = new Date(expiry_date);
      e_date.setDate(e_date.getDate() + 30);
      return new Date(e_date).toISOString().substr(0, 10);
    },
    // 종료기간 세팅
    set_MaxDate () {
      let tempDate = new Date(this.currentDate);
      tempDate.setFullYear(tempDate.getFullYear() + 1);
      return new Date(tempDate).toISOString().substring(0, 10);
    },
    // 프로젝트 기간 선택시 시작기간 ~ 종료기간 세팅
    dataBtn () {
      if(this.row !== "self") {
        this.result_date = this.set_ExpiryDate(this.row);
      } else {
        this.calendar = true;
      }
    },
    // 달력 닫기
    calendarDate () {
      this.calendar = false;
      this.result_date = this.date;
    },
    // 변수 초기화
    initVariable() {
      this.info.projectName = null;
      this.info.userIdx = null;
      this.info.templateIdx = null;
      this.info.expiry_date = null;
      this.info.print_date = null;
      this.result_date = null;
      this.row = null;
      this.calendar = false;
      this.calendarState = false;
    }
  }
};
</script>
<style>
  .proLastWrap {
    padding: 20px;
    height: 525px;
  }
  .proStep2Title {
    margin-bottom: 25px;
  }

  /* 프로젝트 이름 */
  .projectName {
    width: 500px;
    margin: 10px 0 30px 0;
  }

  /* 프로젝트 기간 */
  .proSecSubT {
    color: #ff0000;
    padding: 2px 0 10px 0;
  }
  .proDateWrap {
    padding: 15px 0 0 13px;
    background-color: #e5e5e5;
    border-radius: 5px;
    height: 180px;
    position: relative;
  }
  /*radio button*/
  .v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 11px !important;
    margin-bottom: 16px;
    width: 90px;
  }
  .v-input--radio-group.v-input--radio-group--row .v-radio:last-child {
    width: 100px;
  }
  .v-application .primary--text {
    color: #ef8454 !important;
    caret-color: #ef8454 !important;
  }
  .v-input--selection-controls__input + .v-label {
    font-size: 0.95rem;
    margin-left: 3px;
  }/*라벨 사이즈*/
  .calendarIcon {
    font-size: 1.4rem !important;
    position: absolute !important;
    right: 36%;
    bottom: 20px;
  }
  .proDate {
    overflow: hidden;
    margin: 5px 0 0 18px;
  }
  .datePicker {
    position: absolute;
    top: -64px;
    left: 28px;
    box-shadow: 0 0 10px #b5b5b5;
    padding-top: 20px;
    height: 310px;
  }
  .calendarWrap {
    padding: 0 0 5px 5px;
    margin-top: 10px;
    background-color: #fff;
    cursor: pointer;
    width: 195px;
    border-radius: 5px;
  }
  .v-date-picker-table .v-btn.v-btn--active {
    background-color: #ef8454 !important;
  }/*달력 일 선택시 숫자 배경색 변경*/
  .pickerClose {
    position: absolute;
    top: 3px;
    right: 7px;
    outline: none;
  }
  .pickerClose i {
    color: #454545 !important;
    font-size: 1.2rem !important;
  }
  .proDateText {
    font-size: 0.9rem;
    color: #5f5f5f;
    margin-left: 2px;
    padding-bottom: 2px;
  }
  .preBtn {
    color: #959595 !important;
    margin-right: 10px;
    transition: 0.3s;
  }
  .preBtn:hover {
    background-color: #e5e5e5 !important;
    color: #454545 !important;
    transition: 0.3s;
  }
  .v-application--is-ltr .v-messages {
    display: none;
  }
  .v-dialog > .v-card > .v-card__actions {
    padding: 8px 0;
  }
</style>
