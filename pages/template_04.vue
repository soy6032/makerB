<template><!-- 보고서 제출용 템플릿 -->
    <div id="template_04" style="width: 760px; margin: 0px auto;position:relative;">
        <section id="tem04_1" class="section section1 pdf-item" style="width: 760px;height: 610px;padding-top:20px;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="inputTitle" value="4. 보고서 제출용 템플릿" maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
            <input class="select" type="text" autocomplete="off" name="inputTitle" value="프로젝트 이름을 입력하세요" maxlength="17" style="width:100%;height:80px;text-align:center;font-size:2.7rem;font-weight:600;padding: 0 5px;margin-top:120px;"/>
            <div style="width:500px;margin:0 auto;margin-top:70px;overflow:hidden;">
                <input class="select" type="text" autocomplete="off" name="tem01Item1" value="팀명 : " maxlength="3" style="width:70px;;height:45px;font-size:1.4rem;font-weight:600;float:left;"/>
                <input class="select" type="text" autocomplete="off" name="tem01Item2" placeholder="팀명을 입력하세요." maxlength="22" style="width:430px;;height:45px;font-size:1.2rem;float:left;"/>
                <input class="select" type="text" autocomplete="off" name="tem01Item3" value="팀원 : " maxlength="3" style="width:70px;;height:45px;font-size:1.4rem;font-weight:600;float:left;"/>
                <input class="select" type="text" autocomplete="off" name="tem01Item4" placeholder="팀원을 입력하세요." maxlength="22" style="width:430px;;height:45px;font-size:1.2rem;float:left;"/>
                <input class="select" type="text" autocomplete="off" name="tem01Item5" value="이름 : " maxlength="3" style="width:70px;;height:45px;font-size:1.4rem;font-weight:600;float:left;"/>
                <input class="select" type="text" autocomplete="off" name="tem01Item6" placeholder="이름을 입력하세요." maxlength="22" style="width:430px;;height:45px;font-size:1.2rem;float:left;"/>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_2" class="section section2 pdf-item" style="width: 760px;height: 610px;margin: 0 auto;">
            <div style="width:500px;margin: 0 auto;">
                <input class="select" type="text" autocomplete="off" name="tem02Item1" value="목차" maxlength="21" style="width:100%;height:50px;font-size:1.5rem;font-weight:600;margin-top:100px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item2" value="▷ 현황분석" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item3" value="▷ 개선방안" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item4" value="▷ 업무프로세스" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item5" value="▷ 개별내용" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item6" value="▷ 기대효과" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item7" value="▷ 결론" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item8" value="▷ 참고자료" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item9" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
                <input class="select" type="text" autocomplete="off" name="tem02Item10" maxlength="24" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left:23px;"/>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_3" class="section section3 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title03" value="현황분석" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:left;margin-left:20px;">
                <input class="select" type="text" autocomplete="off" name="tem3Item1" value="관련 자료 삽입" maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <div style="width:345px;height:430px;margin:0 auto;padding:5px;">
                    <div style="width:335px;height:420px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload1">
                        <label class="select" for="tem04_1Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                        <input class="select" id="tem04_1Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                        <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:240px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.80:1 , 335px x 420px , 8.8cm x 11cm</p>
                    </div>
                </div>
            </div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:right;margin-right:20px;">
                <input class="select" type="text" autocomplete="off" name="tem3Item2" value="관련 자료 삽입" maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <div style="width:345px;height:430px;margin:0 auto;padding:5px;">
                    <div style="width:335px;height:420px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload2">
                        <label class="select" for="tem04_2Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                        <input class="select" id="tem04_2Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                        <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:240px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.80:1 , 335px x 420px , 8.8cm x 11cm</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_4" class="section section4 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title04" value="개선방안" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:left;margin-left:20px;">
                <input class="select" type="text" autocomplete="off" name="tem4Item1" value="개선방안을 구체적으로 작성하세요." maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:430px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:right;margin-right:20px;">
                <input class="select" type="text" autocomplete="off" name="tem4Item2" value="관련 자료 삽입" maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <div style="width:345px;height:430px;margin:0 auto;padding:5px;">
                    <div style="width:335px;height:420px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload3">
                        <label class="select" for="tem04_3Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                        <input class="select" id="tem04_3Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                        <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:240px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.80:1 , 335px x 420px , 8.8cm x 11cm</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_5" class="section section5 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title05" value="업무 프로세스" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:730px;height:490px;margin: 0 auto;border:1px solid #959595;border-radius:20px;padding:10px;">
                <input class="select" type="text" autocomplete="off" name="tem5Item1" value="업무 과정을 작성하세요." maxlength="42" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_6" class="section section6 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title06" value="개발내용" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:177px;height:490px;border:1px solid #959595;border-radius:20px;padding:10px;margin-left:11px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem6Item1" value="개발내용 1" maxlength="9" style="width:100%;height:45px;text-align:center;font-size:1.05rem;font-weight:600;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;height:490px;border:1px solid #959595;border-radius:20px;padding:10px;margin-left:10px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem6Item2" value="개발내용 2" maxlength="9" style="width:100%;height:45px;text-align:center;font-size:1.05rem;font-weight:600;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;height:490px;border:1px solid #959595;border-radius:20px;padding:10px;margin-left:10px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem6Item3" value="개발내용 3" maxlength="9" style="width:100%;height:45px;text-align:center;font-size:1.05rem;font-weight:600;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;height:490px;border:1px solid #959595;border-radius:20px;padding:10px;margin-left:10px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem6Item4" value="개발내용 4" maxlength="9" style="width:100%;height:45px;text-align:center;font-size:1.05rem;font-weight:600;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_7" class="section section7 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title07" value="기대효과" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:left;margin-left:20px;">
                <input class="select" type="text" autocomplete="off" name="tem7Item1" value="기대되는 효과를 작성하세요." maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:430px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:350px;height:490px;border:1px solid #959595;border-radius:20px;float:right;margin-right:20px;">
                <input class="select" type="text" autocomplete="off" name="tem7Item2" value="관련 자료 삽입" maxlength="20" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <div style="width:345px;height:430px;margin:0 auto;padding:5px;">
                    <div style="width:335px;height:420px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload4">
                        <label class="select" for="tem04_4Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                        <input class="select" id="tem04_4Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                        <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:240px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.80:1 , 335px x 420px , 8.8cm x 11cm</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_8" class="section section8 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title08" value="결론" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:730px;height:490px;margin: 0 auto;border:1px solid #959595;border-radius:20px;padding:10px;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:470px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_9" class="section section9 pdf-item" style="width: 760px;height: 610px;padding:15px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title09" value="참고자료" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;text-align:center;margin-bottom:10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:25px;"></div>
            <div style="width:730px;height:490px;margin: 0 auto;border:1px solid #959595;border-radius:20px;padding:10px;">
                <input class="select" type="text" autocomplete="off" name="tem9Item1" value="참고자료 링크 삽입" maxlength="42" style="width:100%;height:45px;font-size:1.05rem;font-weight:600;text-align:center;"/>
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:427px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem04_10" class="section section10 pdf-item" style="width: 760px;height: 610px;padding-top:275px;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title10" value="감사합니다." maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
        </section>
    </div>
</template>
<script>
    export default {
      name: 'Template_04',
      data () {
          return {};
      },
      methods : {
          
      }
    };
</script>