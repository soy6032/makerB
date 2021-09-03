<template><!-- 회원가입 페이지 -->
  <div id="signup">
    <div class="signupWrap">
      <h3 class="com_fonts13">
        회원가입
      </h3>
      <p class="com_fonts09 signup_title">
        학습협업툴 꾸럼e, 지금 바로 사용해보세요!
      </p>
      <!-- 이메일 인증( = 아이디) -->
      <div class="com_fonts09">
        이메일
      </div>
      <div class="emailWrap">
        <input
          v-model="emailId"
          class="com_input certifiedId com_fonts09"
          type="text"
          name="emailId"
          :class="{emailId_100 : signupState == true}"
          :readonly="signupState ? true : false"
          autocomplete="off"
          @input="emailError"
        >
        <v-select
          v-if="!signupState" 
          v-model="emailSelect"
          @change="emailVal"
          :items="signupSelect"
          item-text="text"
          item-value="value"
          label="직접입력"
          solo
          class="emailSelect"
        ></v-select>
        <button v-if="!signupState" class="com_btn_110 com_btn_orange com_fonts09" :disabled="emailAuthBtn" @click="sendEmail">
          인증받기
        </button>
      </div>
      <p v-show="mailError" class="errorText">
        이메일 형식이 올바르지 않습니다.
      </p>
      <p v-show="test" id="emailText" class="errorText" />
      <div v-if="signupState">
        <input v-model="certifiNum" class="com_input signupInput com_fonts09" type="text" name="certification" placeholder="인증번호를 입력해주세요.">
        <button class="com_btn_110 com_btn_orange com_fonts09" @click="certifiOkBtn">
          확인
        </button>
      </div>
      <!-- 비밀번호 설정 -->
      <div class="passwordTitle com_fonts09">
        비밀번호 <span style="color: #ef8454; font-size: 0.75rem">( 6자 이상 입력해주세요. )</span>
      </div>
      <input v-model="newPassword" class="com_input com_input100p com_fonts09" type="password" name="password" @input="passwordCheck">
      <div class="com_fonts09">
        비밀번호 확인
      </div>
      <input
        v-model="rePassword"
        class="com_input com_input100p replayPassword com_fonts09"
        type="password"
        name="rePassword"
        @input="passwordCheck"
      >
      <p v-show="passwordError" class="errorText">
        {{ passwordErrorText }}
      </p>
      <div class="checkBoxWrap">
        <v-checkbox v-model="checkbox" class="checkBox" />
        <div class="com_fonts09 termsOfUse">
          <span style="cursor:pointer;" class="com_textOrange com_fontW600" @click="termsPop = true">이용약관</span> 및<span style="cursor:pointer;" class="com_textOrange com_fontW600" @click="termsPop = true"> 개인정보취급방침</span>에 동의합니다.
        </div>
      </div>
      <button class="com_btn_100p com_btn_orange singUpBtn" :disabled="formValid" @click="signup">
        회원가입
      </button>
    </div>

    <!-- 이용약관 및 개인정보취급방침 모달 -->
    <v-dialog
      v-model="termsPop"
      width="500"
    >
      <v-card class="termsPopWrap">
        <div class="com_fonts09 com_fontW600 termsPopTop">
          [이용약관]
        </div>
        <div class="termsPopCont">
          <p>[제 1 장 총 칙]

              제 1 조 (목적)
              이 약관은 전기통신사업법령 및 정보통신망이용촉진등에 관한 법령에 의하여 메이커에듀가 제공하는 인터넷 커뮤니티 서비스 (이하 "서비스"라 한다)의 이용조건 및 절차에 관한 사항을 규정함 을 목적으로 합니다.

              제 2 조 (약관의 공지 및 준용)
              ①이 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력을 발생 합니다.
              ②회사는 이 약관을 임의로 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지함으로써 효력을 발생합니다.

              제 3 조 (약관 외 준칙)
              이 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신망이용촉진등에 관한 법률 및 기타 관련법령의 규정에 의합니다.

              제 4 조 (용어의 정의)
              이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              ①회원 : 회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 자
              ②아이디(ID) : 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합
              ③비밀번호 : 회원의 비밀 보호를 위해 회원 자신이 설정한 문자와 숫자의 조합
              ④운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 사람
              ⑤해지 : 회사 또는 회원이 서비스 개통 후 이용계약을 해약 하는 것

              [제 2 장 서비스 이용계약]

              제 5 조 (이용계약의 성립)
              ①"위의 이용약관에 동의하여 이용계약을 신청하십니까?" 라는 이용신청시의 물음에 회원이 "동의함" 단추를 누르면 이 약관에 동의하는 것으로 간주됩니다.
              ②이용계약은 회원의 이용신청에 대하여 회사가 심사 후 승낙함으로써 성립합니다.

              제 6 조 (이용신청)
              ①이용신청은 온라인으로 회사 소정의 가입신청 양식에서 요구하는 사항을 기록하여 신청합니다.
              ②온라인 가입신청 양식에 기재하는 모든 회원 정보는 실제 데이터인 것으로 간주하며 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스 사용의 제한을 받을 수 있습니다.

              제 7 조 : 회원정보 사용에 대한 동의
              ①회원의 개인 정보에 대해서는 메이커에듀의 개인정보보호정책이 적용됩니다.
              ②회사가 제6조에 따라 신청서에 기재를 요구하는 회원의 개인정보는 본 이용계약의 이행과 본 이용계약상의 서비스제공을 위한 목적으로 이용합니다.
              ③회원이 회사 및 회사와 제휴한 서비스들을 편리하게 이용할 수 있도록 하기 위해 회원 정보는 회사와 제휴한 업체에 제공될 수 있습니다. 단, 회사는 회원 정보 제공 이전에 제휴 업체, 제공 목적, 제공할 회원 정보의 내용 등을 사전에 공지하고 회원의 동의를 얻어야 합니다.
              ④회원은 회원정보 수정을 통해 언제든지 개인 정보에 대한 열람 및 수정을 할 수 있습니다.
              ⑤회원이 이용신청서에 회원정보를 기재하고, 회사에 본 약관에 따라 이용신청을 하는 것은 회사가 본 약관에 따라 이용신청서에 기재된 회원정보를 수집, 이용 및 제공하는 것에 동의하는 것으로 간주됩니다.

              제 8 조 (이용신청의 승낙)
              ①회사는 회원이 제 6 조에서 정한 모든 사항을 정확히 기재하여 이용신청을 하였을 때 제2호, 제3호의 경우를 예외로 하여 승낙할 수 있습니다.
              ②회사는 다음 각 호의 1에 해당하는 이용신청에 대하여는 승낙을 유보할 수 있습니다.
              ㉮설비에 여유가 없는 경우
              ㉯기술상 지장이 있는 경우
              ㉰기타 회사의 사정상 이용승낙이 곤란한 경우
              ③회사는 다음 각 호의 1에 해당하는 이용신청에 대하여는 이를 승낙하지 아니 할 수 있습니다.
              ㉮이름이 실명이 아닌 경우/li>
              ㉯다른 사람의 명의를 사용하여 신청한 경우
              ㉰이용신청시 필요내용을 허위로 기재하여 신청한 경우
              ㉱사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
              ㉲기타 회사가 정한 이용신청요건이 미비되었을 때

              제 9 조 (계약사항의 변경)
              회원은 이용신청시 기재한 사항이 변경되었을 경우에는 온라인으로 수정을 해야 하고 미변경으로 인하여 발생되는 문제의 책임은 회원에게 있습니다.

              [제 3 장 계약당사자의 의무]

              제 10조 (회사의 의무)
              ①회사는 서비스 제공과 관련해서 알고 있는 회원의 신상정보를 본인의 승낙없이 제 3자에게 누설, 배포하지 않습니다.
                단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.
              ②1항의 범위내에서, 회사는 업무와 관련하여 회원 전체 또는 일부의 개인정보에 관한 통계 자료를 작성하여 이를 사용할 수 있고, 서비스를 통하여 회원의 컴퓨터에 쿠키를 전송할 수 있습니다. 이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 컴퓨터의 브라우져의 설정을 변경할 수 있습니다.

              제 11 조 (회원의 의무)
              ①회원은 서비스를 이용할 때 다음 각 호의 행위를 하지 않아야 합니다.
              ㉮다른 회원의 ID를 부정하게 사용하는 행위
              ㉯서비스에서 얻은 정보를 회사의 사전승낙 없이 회원의 이용이외의 목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위
              ㉰회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위
              ㉱공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위
              ㉲범죄와 결부된다고 객관적으로 판단되는 행위
              ㉳기타 관계법령에 위배되는 행위
              ②회원은 이 약관에서 규정하는 사항과 서비스 이용안내 또는 주의사항을 준수하여야 합니다.
              ③회원은 내용별로 회사가 서비스 공지사항에 게시하거나 별도로 공지한 이용제한 사항을 준수하여야합니다.
              ④회원은 회사의 사전 승낙없이는 서비스를 이용하여 영업활동을 할 수 없으며, 영업활동의 결과와 회원이 약관에 위반한 영업활동을 이용하여 발생한 결과에 대하여 회사는 책임을 지지 않습니다. 회원은 이와 같은 영업활동에 대하여 회사에 대하여 손해배상의무를 집니다.
              ⑤회원은 회사의 명시적인 동의가 없는 한 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.

              [제 4 장 서비스 이용]

              제 12 조 (회원 아이디(ID)와 비밀번호 관리에 대한 회원의 의무)
              ①아이디(ID)와 비밀번호에 관한 모든 관리책임은 회원에게 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다.
              ②자신의 아이디(ID)가 부정하게 사용된 경우 회원은 반드시 회사에 그 사실을 통보해야 합니다.

              제 13조 (회원 홈페이지에 관한 의무)
              ①회원은 자신의 홈페이지에 공공질서 및 미풍양속에 위반되는 내용물이나 제 3자의 저작권 등 기타권리를 침해하는 내용물을 등록하는 행위를 하지 않아야 합니다. 만약 이와 같은 내용물을 올렸을 때 발생하는 결과에 대한 모든 책임은 회원에게 있습니다.
              ②회원은 자신의 책임하에 개설한 홈페이지를 관리하여야 하며, 이에 대한 백업본을 만들어 이를 보관하여야 합니다.

              제 14조 (정보의 제공)
              메이커에듀는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해서 전자우편이나 서신우편 등의 방법으로 회원에게 제공할 수 있으며 회원은 원치 않을 경우 가입신청메뉴와 회원정보수정 메뉴에서 정보수신거부를 할 수 있습니다.

              제 15 조 (회원의 게시물)
              메이커에듀는 회원이 게시하거나 등록하는 서비스내의 내용물이 다음 각 호의 1에 해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있습니다.

              ①다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우
              ②공공질서 및 미풍양속에 위반되는 내용인 경우
              ③범죄적 행위에 결부된다고 인정되는 내용일 경우
              ④메이커에듀의 저작권, 제 3 자의 저작권 등 기타 권리를 침해하는 내용인 경우
              ⑤메이커에듀에서 규정한 게시기간을 초과한 경우
              ⑥회원이 자신의 홈페이지와 게시판에 음란물을 게재하거나 음란사이트를 링크하는 경우
              ⑦기타 관계법령에 위반된다고 판단되는 경우

              제 16 조 (게시물의 저작권)
              서비스에 게재된 자료에 대한 권리는 다음 각 호와 같습니다.
              ①게시물에 대한 권리와 책임은 게시자에게 있으며 메이커에듀는 게시자의 동의 없이는 이를 서비스내 게재 이외에 영리적 목적으로 사용하지 않습니다. 단, 비영리적인 경우에는 그러하지 아니하며 또한 메이커에듀는 서비스내의 게재권을 갖습니다.
              ②회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.

              제 17 조 (서비스 이용시간)
              ①서비스의 이용은 메이커에듀의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.
              다만 정기 점검 등의 필요로 메이커에듀가 정한 날이나 시간은 그러하지 않습니다.
              ②메이커에듀는 서비스를 일정범위로 분할하여 각 범위별로 이용가능 시간을 별도로 정할 수 있습니다. .
              이 경우 그 내용을 사전에 공지합니다.

              제 18조 (서비스 이용 책임)
              회원은 메이커에듀에서 권한 있는 사원이 서명한 명시적인 서면에 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 불법상품을 판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란사이트를 통한 상업행위, 상용S/W 불법배포 등을 할 수 없습니다.
              이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치등에 관해서는 메이커에듀가 책임을 지지 않습니다.

              제 19 조 (서비스 제공의 중지)
              ①메이커에듀는 다음 각 호에 해당하는 경우 서비스 제공을 중지할 수 있습니다.
              가.서비스용 설비의 보수 등 공사로 인한 부득이한 경우
              나.전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우
              다.기타 불가항력적 사유가 있는 경우
              ②메이커에듀는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 있습니다.

              [제 5 장 계약해지 및 이용제한]

              제 20 조 (계약해지 및 이용제한)
              ①회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 온라인을 통해 메이커에듀에 해지신청을 하여야 합니다.
              ②메이커에듀는 회원이 다음 각 호의 1에 해당하는 행위를 하였을 경우 사전통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중지할 수 있습니다.
              가.타인의 서비스 ID 및 비밀번호를 도용한 경우
              나.서비스 운영을 고의로 방해한 경우
              다.가입한 이름이 실명이 아닌 경우
              라.같은 사용자가 다른 ID로 이중등록을 한 경우
              마.공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우
              바.회원이 국익 또는 사회적 공익을 저해할 목적으로 서비스이용을 계획 또는 실행하는 경우
              사.타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우
              아.서비스의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하거나 광고성 정보를 전송하는 경우
              자.정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터 바이러스 프로그램 등을 유포하는 경우
              차.메이커에듀, 다른 회원 또는 제3자의 지적재산권을 침해하는 경우
              카.정보통신윤리위원회 등 외부기관의 시정요구가 있거나 불법선거운동과 관련하여 선거관리위원회의 유권해석을 받은 경우
              타.타인의 개인정보, 이용자ID 및 비밀번호를 부정하게 사용하는 경우
              파.메이커에듀의 서비스 정보를 이용하여 얻은 정보를 메이커에듀의 사전 승낙없이 복제 또는 유통시키거나 상업적으로 이용하는 경우
              하.회원이 자신의 홈페이지와 게시판에 음란물을 게재하거나 음란사이트 링크하는 경우
              거.본 약관을 포함하여 기타 메이커에듀가 정한 이용조건에 위반한 경우

              [제 6 장 손해배상 등]

              제 21 조 (손해배상)
              메이커에듀는 서비스 요금이 무료인 동안의 서비스 이용과 관련하여 메이커에듀의 고의, 과실에 의한 것이 아닌 한 회원에게 발생한 어떠한 손해에 관하여도 책임을 지지 않습니다.

              제 22 조 (면책조항)
              ①메이커에듀는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              ②메이커에듀는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
              ③메이커에듀는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
              ④메이커에듀는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.

              제 23조 (관할법원)
              요금 등 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 메이커에듀의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.

              [부칙]
              (시행일) 이 약관은 2021년 05월 24일 부터 시행합니다.</p>
        </div>
        <div class="com_fonts09 com_fontW600 termsPopBot">
          [개인정보취급방침]
        </div>
        <div class="termsPopCont">
          <p>메이커에듀(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립․공개합니다. 

              제1조(개인정보의 처리목적) 회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. 

                1. 홈페이지 회원 가입 및 관리 
                  회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의여부 확인, 각종 고지․통지, 고충처리 등을 목적으로 개인정보를 처리합니다. 
                2. 재화 또는 서비스 제공 
                  물품배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제․정산, 채권추심 등을 목적으로 개인정보를 처리합니다. 
                3. 고충처리 
                  민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다. 

              제2조(개인정보의 처리 및 보유기간) ① 회사는 법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다. 

                ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. 

                1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴시까지 
                  다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지 
                  1) 관계 법령 위반에 따른 수사․조사 등이 진행중인 경우에는 해당 수사․조사 종료시까지 
                  2) 홈페이지 이용에 따른 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지 

                2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료시까지
                  다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지 
                  1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록 
                      - 표시․광고에 관한 기록 : 6개월 
                      - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년 
                      - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년 
                  2)「통신비밀보호법」제41조에 따른 통신사실확인자료 보관
                    - 가입자 전기통신일시, 개시․종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년 
                    - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월

              제3조(개인정보의 제3자 제공) ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. 

              제4조(개인정보처리의 위탁) ① 회사는 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 
                ② 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다. 

              제5조(정보주체의 권리․의무 및 행사방법) ① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. 
                1. 개인정보 열람요구
                2. 오류 등이 있을 경우 정정 요구
                3. 삭제요구 
                4. 처리정지 요구  
                ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다. 
                ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 
                ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다. 
                ⑤ 정보주체는 개인정보 보호법 등 관계법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다. 

              제6조(처리하는 개인정보 항목) 회사는 다음의 개인정보 항목을 처리하고 있습니다. 
                1. 홈페이지 회원 가입 및 관리 
                  ․필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 성별, 이메일주소, 아이핀번호 
                  ․선택항목 : 결혼여부, 관심분야 

                2. 재화 또는 서비스 제공  
                  ․필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 이메일주소, 아이핀번호, 신용카드번호, 은행계좌정보 등 결제정보 
                  ․선택항목 : 관심분야, 과거 구매내역  

                3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. 
                  ․IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등 

              제7조(개인정보의 파기) ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 
                ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. 
                ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다. 
                1. 파기절차 
                  회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다. 
                2. 파기방법 
                  회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다. 

              제8조(개인정보의 안전성 확보조치) 회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. 
                1. 관리적 조치 : 내부관리계획 수립․시행, 정기적 직원 교육 등 
                2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치 
                3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제 

              제9조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항) ① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
                ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
                    가. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
                    나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
                    다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.

              제10조(개인정보 보호책임자) ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다. 

                ▶ 개인정보 보호책임자 
                    성명 : 추철민
                    직책 : 대표이사 
                    연락처 : <전화번호>, <이메일>, <팩스번호> 
                      ※ 개인정보 보호 담당부서로 연결됩니다. 
              
                ▶ 개인정보 보호 담당부서 
                    부서명 : 관리 팀 
                    담당자 : 황혜진 
                    연락처 : <전화번호>, <이메일>, <팩스번호> 

                ② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다. 

              제11조(개인정보 열람청구) 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다. 

                ▶ 개인정보 열람청구 접수․처리 부서 
                    부서명 : 관리 팀
                    담당자 : 황혜진
                    연락처 : <전화번호>, <이메일>, <팩스번호> 

              제12조(권익침해 구제방법) 정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다. 

                <아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>
              
                ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영) 
                    - 소관업무 : 개인정보 침해사실 신고, 상담 신청 
                    - 홈페이지 : privacy.kisa.or.kr 
                    - 전화 : (국번없이) 118 
                    - 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터

                ▶ 개인정보 분쟁조정위원회
                    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) 
                    - 홈페이지 : www.kopico.go.kr 
                    - 전화 : (국번없이) 1833-6972
                    - 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층

                ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)

                ▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)

              제13조(영상정보처리기기 설치․운영) ① <메이커에듀> 은(는) 아래와 같이 영상정보처리기기를 설치․운영하고 있습니다. 

                1. 영상정보처리기기 설치근거․목적 : <메이커에듀> 의 시설안전․화재예방
                2. 설치 대수, 설치 위치, 촬영 범위 : 사옥 로비․전시실 등 주요시설물에 00대 설치, 촬영범위는 주요시설물의 전 공간을 촬영 
                3. 관리책임자, 담당부서 및 영상정보에 대한 접근권한자 : 관리 팀 황헤진 팀장
                4. 영상정보 촬영시간, 보관기간, 보관장소, 처리방법 
                    - 촬영시간 : 24시간 촬영
                    - 보관기간 : 촬영시부터 30일 
                    - 보관장소 및 처리방법 : 관리팀 영상정보처리기기 통제실에 보관․처리
                5. 영상정보 확인 방법 및 장소 : 관리책임자에 요구 (관리팀) 
                6. 정보주체의 영상정보 열람 등 요구에 대한 조치 : 개인영상정보 열람․존재확인 청구서로 신청하여야 하며, 정보주체 자신이 촬영된 경우 또는 명백히 정보주체의 생명․신체․재산 이익을 위해 필요한 경우에 한해 열람을 허용함 
                7. 영상정보 보호를 위한 기술적․관리적․물리적 조치 : 내부관리계획 수립, 접근통제 및 접근권한 제한, 영상정보의 안전한 저장․전송기술 적용, 처리기록 보관 및 위․변조 방지조치, 보관시설 마련 및 잠금장치 설치 등

              제14조(개인정보 처리방침 변경) ① 이 개인정보 처리방침은 2021. 06. 01부터 적용됩니다.</p>
        </div>
        <v-icon class="closeIcon" @click="termsPop = false">
          mdi-close
        </v-icon>
      </v-card>
    </v-dialog>
    
    <!-- alert components  -->
    <AlertPop :alertState="alertState" :completeSignup="completeSignup" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
export default {
  name: 'Signup',
  data () {
    return {
      completeSignup: false,
      valid: true,
      test: false,
      signupBtn: false,
      emailId: '',
      mailError: false,
      alertState: false,
      alertCon: '',
      // certifiOk: false,
      // certifiNo: false,
      emailAuthBtn: true,
      certifiNum: '',
      signupState: false,
      emailSelect: '',
      newPassword: '',
      rePassword: '',
      passwordError: false,
      checkbox: false,
      termsPop: false,
      emailAuth: false,
      passwordErrorText: '',
      signupSelect: [
        {
          text: '직접입력',
          value: ''
        },
        {
          text: 'naver.com',
          value: '@naver.com'
        },
        {
          text: 'hanmail.net',
          value: '@hanmail.net'
        },
        {
          text: 'gmail.com',
          value: '@gmail.com'
        },
        {
          text: 'nate.com',
          value: '@nate.com'
        }
      ]
    };
  },
  computed: {
    formValid () {
      if (this.mailError) {
        return true;
      }
      if (!this.emailAuth) {
        return true;
      }
      if (this.newPassword.length < 6) {
        return true;
      }
      if (this.newPassword === '') {
        return true;
      }
      if (this.passwordError) {
        return true;
      }
      if (!this.checkbox) {
        return true;
      }
      if (!this.signupState) {
        return true;
      }
      return false;
    }
  },
  methods: {
    emailVal () {
      if (this.emailId) {
        this.emailId = this.emailId.split('@')[0] + this.emailSelect;
        this.emailError();
      }
    },
    // 입력된 이메일 유효성 체크
    emailError () {
      const idValue = /^[a-z0-9]/i;
      const mailValue = /.+@.+\..+/;
      if (!idValue.test(this.emailId) || !mailValue.test(this.emailId)) {
        this.mailError = true;
        this.emailAuthBtn = true;
        this.test = false;
      } else {
        this.mailError = false;

        this.$axios.post('/client/checkEmail', { email: this.emailId })
          .then((res) => {
            const emailText = document.getElementById('emailText');
            emailText.innerHTML = res.data.msg;
            emailText.style.color = '#ff0000';
            if (res.data.items) {
              this.emailAuthBtn = false;
              this.test = false;
            } else {
              this.emailAuthBtn = true;
              this.test = true;
            }
          });
      }
    },
    // 메일 보내기 
    sendEmail() {
      this.$axios.post('/client/sendEmail', { email: this.emailId })
      .then((res) => {
        console.log(res);
        this.alertState = true;
        this.alertCon = res.data.msg;
        if(res.data.state) {
          this.signupState = true;
        }
      });
    },
    // 인증번호 체크
    certifiOkBtn () {
      this.$axios.post('/client/checkAuthEmail', { 
        email: this.emailId,
        authString: this.certifiNum 
      }).then((res) => {
        this.alertState = true;
        this.alertCon = res.data.msg;
        this.emailAuth = res.data.state;
      });
    },
    // 비밀번호 유효성 체크
    passwordCheck () {
      if(this.newPassword.length < 6) {
        this.passwordErrorText = "비밀번호는 6자리 이상이여야 합니다.";
        this.passwordError = true;
      } else if (this.newPassword !== this.rePassword) {
        this.passwordErrorText = "비밀번호가 일치하지 않습니다.";
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
    },
    // 회원가입
    async signup () {
      const params = {
        email: this.emailId,
        pw: this.newPassword
      };

      await this.$axios.post('/client/signup', { params })
        .then((res) => {
          this.alertState = true;
          this.alertCon = res.data.msg;
          this.completeSignup = true;
        });
    }
  }
};
</script>
<style>
  .v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
    line-height: normal !important;
  }/*select vuetify*/

  #signup {
    width: 100%;
    height: 700px;
  }
  .signupWrap {
    width: 421px;
    margin: 0 auto;
    margin-top: 215px;
    padding-top: 20px;
  }
  .signup_title {
    margin-bottom: 25px !important;
  }

  /* 이메일 인증 */
  .certifiedId {
    width: 165px;
    float: left;
    margin: 0 5px 0 0;
  }
  .emailWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #signup .emailWrap .com_btn_110 {
    margin-left: 10px;
  }
  .signup_arrow {
    position: absolute !important;
    top: 14px;
    right: 129px;
  }
  .signupInput {
    width: 300px;
    margin: 15px 5px 0 0;
  }
  .emailId_100 {
    width: 100% !important;
    color: #4c4c4c;
  }
  .passwordTitle {
    margin-top: 15px;
  }
  /* 비밀번호 설정 */
  .checkBoxWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 15px;
  }
  /* vuetify check box */
  .v-input__slot {
    margin-bottom: 0 !important;
  }
  .v-input--selection-controls {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  .checkBox {
    float: left;
    margin-top: 0;
    padding-top: 0;
    width: 23px;
    margin-right: 8px;
  }
  .termsOfUse {
    float: left;
  }
  .singUpBtn {
    text-align: center;
    font-weight: 600;
    margin-top: 15px;
  }
  .v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before {
    display: none;
  }
  /*이용약관 및 개인정보취급방침 팝업*/
  .termsPopWrap {
    padding: 30px 20px;
    position: relative;
  }
  .termsPopTop {
    margin-bottom: 10px;
  }
  .termsPopBot {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  .termsPopCont {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 0.8rem;
    color: #797979;
    width: 100%;
    height: 170px;
    overflow: auto;
  }
  .v-btn--is-elevated {
    box-shadow: none !important;
  }

  .com_btn_orange[disabled]{
    background-color: gray !important;
  }
</style>
