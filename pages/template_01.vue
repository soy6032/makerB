<template><!-- 기본 템플릿 -->
    <div id="template_01" style="width: 760px; margin: 0px auto;position:relative;">
        <section id="tem01_1" class="section section1 pdf-item" style="width: 760px;height: 610px;padding:30px 0;margin: 0 auto;">
            <input class="select" type="text" name="inputTitle" autocomplete="off" value="1. 기본 템플릿" maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
            <div style="width:720px;margin:0 auto;margin-top:40px;">
                <input class="select" type="text" name="listInput" autocomplete="off" value="목차" maxlength="32" style="width:100%;height:45px;font-size:1.4rem;font-weight:600;margin-bottom:15px;"/>
                <div style="width:345px;margin-right:40px;float: left">
                    <Inputs :widths="datas01[0].width" :heights="datas01[0].height" :fontSizes="datas01[0].fontSize" :val="datas01[0].val"  maxlength="20"/>
                    <Inputs :widths="datas01[1].width" :heights="datas01[1].height" :fontSizes="datas01[1].fontSize" :val="datas01[1].val" maxlength="20"/>
                    <Inputs :widths="datas01[2].width" :heights="datas01[2].height" :fontSizes="datas01[2].fontSize" :val="datas01[2].val" maxlength="20"/>
                    <Inputs :widths="datas01[3].width" :heights="datas01[3].height" :fontSizes="datas01[3].fontSize" :val="datas01[3].val" maxlength="20"/>
                    <Inputs :widths="datas01[4].width" :heights="datas01[4].height" :fontSizes="datas01[4].fontSize" :val="datas01[4].val" maxlength="20"/>
                    <Inputs :widths="datas01[5].width" :heights="datas01[5].height" :fontSizes="datas01[5].fontSize" :val="datas01[5].val" maxlength="20"/>
                    <Inputs :widths="datas01[6].width" :heights="datas01[6].height" :fontSizes="datas01[6].fontSize" :val="datas01[6].val" maxlength="20"/>
                    <Inputs :widths="datas01[7].width" :heights="datas01[7].height" :fontSizes="datas01[7].fontSize" :val="datas01[7].val" maxlength="20"/>
                    <Inputs :widths="datas01[8].width" :heights="datas01[8].height" :fontSizes="datas01[8].fontSize" :val="datas01[8].val" maxlength="20"/>
                </div>
                <div style="width:335px;float:left">
                    <Inputs :widths="datas01[9].width" :heights="datas01[9].height" :fontSizes="datas01[9].fontSize" :val="datas01[9].val" maxlength="19"/>
                    <Inputs :widths="datas01[10].width" :heights="datas01[10].height" :fontSizes="datas01[10].fontSize" :val="datas01[10].val" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" :val="datas01[11].val" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                    <Inputs :widths="datas01[11].width" :heights="datas01[11].height" :fontSizes="datas01[11].fontSize" maxlength="19"/>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_2" class="section section2 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="subject" value="주제선정하기(브레인스토밍)" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="margin-left: 10px;margin-bottom:40px;">
                <Inputs :widths="datas02.width" :heights="datas02.height" :fontSizes="datas02.fontSize" :val="datas02.val" maxlength="42"/>
            </div>
            <div style="width: 550px;margin:0 auto;overflow:hidden;margin-bottom:20px;box-sizing: border-box;">
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;margin-right:50px;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_01" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_02" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
            </div>
            <div style="width: 550px;margin:0 auto;overflow:hidden;margin-top:30px;margin-bottom:20px;box-sizing: border-box;">
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;margin-right:50px;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_03" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_04" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
            </div>
            <div style="width: 550px;margin:0 auto;overflow:hidden;margin-top:30px;margin-bottom:20px;box-sizing: border-box;">
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;margin-right:50px;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_05" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_06" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
            </div>
            <div style="width: 550px;margin:0 auto;overflow:hidden;margin-top:30px;margin-bottom:20px;box-sizing: border-box;">
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;margin-right:50px;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_07" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
                <div style="width: calc(50% - 25px);height:70px;border:1px solid #959595;border-radius:50px;float:left;padding:11px 15px 7px 15px">
                    <input class="select" type="text" autocomplete="off" name="keyword_08" maxlength="11" style="width:100%;height:45px;margin-top:1px;text-align:center;font-size:1.2rem;"/>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_3" class="section section3 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="mindMap01" value="주제선정하기(마인드맵)" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding-left: 10px;">
                <Inputs :widths="datas03.width" :heights="datas03.height" :fontSizes="datas03.fontSize" :val="datas03.val" maxlength="42"/>
            </div>
            <div style="width: 100%;height:450px;overflow:hidden;position:relative;">
                <div style="width:230px;position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);">
                    <img src="@/assets/img/keyword.png" style="width:100%;"></img>
                </div>
                <input class="select" type="text" autocomplete="off" name="keyword_1" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;top:65px;right:190px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_2" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;top:192px;right:129px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_3" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;top:319px;right:195px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_4" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;bottom:69px;left:239px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_5" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;bottom:207px;left:122px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_6" value="키워드" maxlength="9" style="width:150px;height:35px;text-align:center;font-size:1rem;font-weight:600;position:absolute;top:94px;left:227px;"/>
                <input class="select" type="text" autocomplete="off" name="keyword_1" value="키워드주제" maxlength="6" style="width:100px;height:35px;text-align:center;font-size:1rem;font-weight:600;color:#ffffff;position:absolute;bottom:213px;right:316px;"/>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_4" class="section section4 pdf-item" style="width: 760px;height: 610px;padding:10px 0 0 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="brain01" value="주제선정하기(브레인스토밍)" maxlength="36" style="width:100%;height:40px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding-left: 10px;">
                <Inputs :widths="datas04[0].width" :heights="datas04[0].height" :fontSizes="datas04[0].fontSize" :val="datas04[0].val" maxlength="42" />
                <Inputs :widths="datas04[3].width" :heights="datas04[3].height" :fontSizes="datas04[3].fontSize" :val="datas04[3].val" maxlength="44" />
                <Inputs :widths="datas04[4].width" :heights="datas04[4].height" :fontSizes="datas04[4].fontSize" :val="datas04[4].val" maxlength="44" />
            </div>
            <div style="width:100%;padding:0 20px;margin-top:20px;overflow:hidden;">
                <div style="width:340px;float:left;margin-right:40px;">
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas04[2].width" :heights="datas04[5].height"></Textareas>
                    </div>
                    <!--<div style="border:1px solid #959595;width:100%;height:180px;margin-bottom:10px;">-->
                    <!--    <Imgs :widths="imgsData.width" :heights="imgsData.height" :img="content1Img" />-->
                    <!--</div>-->
                    <Inputs :widths="datas04[1].width" :heights="datas04[1].height" :fontSizes="datas04[1].fontSize" :val="datas04[1].val" maxlength="20" />
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas04[2].width" :heights="datas04[2].height"></Textareas>
                    </div>
                </div>
                <div style="width:340px;float:left;">
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas04[2].width" :heights="datas04[5].height"></Textareas>
                    </div>
                    <!--<div style="border:1px solid #959595;width:100%;height:180px;margin-bottom:10px;">-->
                    <!--    <Imgs :widths="imgsData.width" :heights="imgsData.height" :img="content2Img" />-->
                    <!--</div>-->
                    <Inputs :widths="datas04[1].width" :heights="datas04[1].height" :fontSizes="datas04[1].fontSize" :val="datas04[1].val" maxlength="20" />
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas04[2].width" :heights="datas04[2].height"></Textareas>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_5" class="section section5 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="brain02" value="주제선정하기(브레인스토밍)" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas05[0].width" :heights="datas05[0].height" :fontSizes="datas05[0].fontSize" :val="datas05[0].val" maxlength="42" />
                <div style="width:100%;overflow:hidden;margin-top:5px;margin-bottom:15px;border:1px solid #959595;padding:5px;border-radius: 15px;">
                    <textarea class="select" type="text" autocomplete="off" style="width:100%;height:51px;margin-top:7px;overflow:hidden"></textarea>
                </div>
                <Inputs :widths="datas05[1].width" :heights="datas05[1].height" :fontSizes="datas05[1].fontSize" :val="datas05[1].val" maxlength="42" />
                <div style="width:100%;overflow:hidden;margin-top:5px;margin-bottom:15px;border:1px solid #959595;padding:5px;border-radius: 15px;">
                    <textarea class="select" type="text" autocomplete="off" style="width:100%;height:295px;margin-top:7px;overflow:hidden"></textarea>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_6" class="section section6 pdf-item" style="width: 760px;height: 610px;padding:10px 0 0 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="plan01" value="계획하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas06[0].width" :heights="datas06[0].height" :fontSizes="datas06[0].fontSize" :val="datas06[0].val" maxlength="42" />
                <table style="width:100%;margin-top:7px;margin-bottom:10px;">
                  <tr v-for="(cols,index1) in 2" :key="'a'+index1" :data-id="generateId(10)">
                    <td v-for="(row,index2) in 1" :key="'b'+index2" style="border:1px solid #959595;border-left:none;width:180px;padding:5px;background-color:#e5e5e5;" :data-id="generateId(10)">
                      <input class="select" type="text" autocomplete="off" name="planItem01" maxlength="10" style="width:100%;height:50px;text-align:center;font-size:1.05rem;font-weight:600;float:left;" v-model="val06_1[index1]">
                    </td>
                    <td v-for="(row,index3) in 1" :key="'c'+index3" style="border:1px solid #959595;border-right: none;padding:5px;" :data-id="generateId(10)">
                      <textarea class="select" type="text" autocomplete="off" style="width:100%;height:47px;font-size:0.95rem;float:left;overflow:hidden;"></textarea>
                    </td>
                  </tr>
                </table>
                <Inputs :widths="datas06[1].width" :heights="datas06[1].height" :fontSizes="datas06[1].fontSize" :val="datas06[1].val" maxlength="42" />
                <table style="width:100%;margin-top:7px;">
                    <th style="border:1px solid #959595;background-color:#e5e5e5;padding:5px;">
                        <input class="select" type="text" autocomplete="off" name="planItem02_1" maxlength="8" style="width:100%;height:32px;text-align:center;font-size:1.05rem;font-weight:600;float:left;" value="팀원">
                    </th>
                    <th style="border:1px solid #959595;background-color:#e5e5e5;padding:5px;">
                        <input class="select" type="text" autocomplete="off" name="planItem02_2" maxlength="23" style="width:100%;height:32px;text-align:center;font-size:1.05rem;font-weight:600;float:left;" value="역할">
                    </th>
                    <th style="border:1px solid #959595;background-color:#e5e5e5;padding:5px;">
                        <input class="select" type="text" autocomplete="off" name="planItem02_3" maxlength="10" style="width:100%;height:32px;text-align:center;font-size:1.05rem;font-weight:600;float:left;" value="비고">
                    </th>
                    <tr v-for="(cols,index1) in 3" :key="'a'+index1" :data-id="generateId(10)">
                        <td v-for="(row,index2) in 1" :key="'b'+index2" style="border:1px solid #959595;width:150px;padding:5px;" :data-id="generateId(10)">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:69px;font-size:0.95rem;text-align:center;float:left;overflow:hidden;"></textarea>
                        </td>
                        <td v-for="(row,index3) in 1" :key="'c'+index3" style="border:1px solid #959595;width:400px;padding:5px;" :data-id="generateId(10)">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:69px;font-size:0.95rem;float:left;overflow:hidden;"></textarea>
                        </td>
                        <td v-for="(row,index4) in 1" :key="'d'+index4" style="border:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:69px;font-size:0.95rem;float:left;overflow:hidden;"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_7" class="section section7 pdf-item" style="width: 760px;height: 610px;padding:10px 0 0 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="plan02" value="계획하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:3px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas07.width" :heights="datas07.height" :fontSizes="datas07.fontSize" :val="datas07.val" maxlength="42" />
                <table style="width:100%;">
                    <th style="border:1px solid #959595;background-color:#e5e5e5;padding:5px;">
                        <input class="select" type="text" autocomplete="off" name="plan02_1" maxlength="10" style="width:100%;height:32px;text-align:center;font-size:1rem;font-weight:600;float:left;" value="날짜" />
                    </th>
                    <th style="border:1px solid #959595;background-color:#e5e5e5;padding:5px;">
                        <input class="select" type="text" autocomplete="off" name="plan02_2" maxlength="34" style="width:100%;height:32px;text-align:center;font-size:1rem;font-weight:600;float:left;" value="내용">
                    </th>
                    <tr v-for="(cols,index1) in 8" :key="'a'+index1" :data-id="generateId(10)">
                        <td v-for="(row,index2) in 1" :key="'b'+index2" style="border:1px solid #959595;width:175px;padding:5px;" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="plan02_3" maxlength="10" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;">
                        </td>
                        <td v-for="(row,index3) in 1" :key="'c'+index3" style="border:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_8" class="section section8 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="record01" value="연구일지 기록하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas08.width" :heights="datas08.height" :fontSizes="datas08.fontSize" :val="datas08.val" maxlength="42" />
                <div style="width:100%;overflow: hidden;">
                    <table style="width:calc(50% - 1px);margin-top:7px;float:left;border: 1px solid #959595; border-left: none;">
                        <tr style="float:left">
                            <td style="width: 120px; padding: 5px; background: rgb(229, 229, 229); border-bottom: 1px solid rgb(149, 149, 149);">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_01" maxlength="7" style="width:100%;height:40px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="날짜">
                            </td>
                            <td style="padding: 5px; width: 249px; border-left: 1px solid #959595; border-bottom: 1px solid #959595;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_02" maxlength="15" style="width:100%;height:40px;font-size:0.9rem;font-weight:600;float:left;">
                            </td>
                        </tr>
                        <tr style="float:left">
                            <td style="width: 120px; padding: 5px; background: rgb(229, 229, 229);">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_03" maxlength="7" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="참여한 팀원">
                            </td>
                            <td style="border-left: 1px solid rgb(149, 149, 149); padding: 5px; width: 249px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                            </td>
                        </tr>
                    </table>
                    <table style="width:50%;margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="width:120px;height:108px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_04" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;margin-top:25px;" value="오늘의 할일">
                            </td>
                            <td style="width:250px;height:108px;border:1px solid #959595;border-right:none;border-right:none;float:left;padding:5px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:91px;font-size:0.9rem;font-weight:600;overflow:hidden;margin-top:3px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 100%;">
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[0]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[1]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[2]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_9" class="section section9 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="record02" value="연구일지 기록하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas08.width" :heights="datas08.height" :fontSizes="datas08.fontSize" :val="datas08.val" maxlength="42" />
                <div style="width:100%;overflow: hidden;">
                    <table style="width:calc(50% - 1px);margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem2_01" maxlength="7" style="width:100%;height:40px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="날짜">
                            </td>
                            <td style="border:1px solid #959595;padding:5px;width:249px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem2_02" maxlength="15" style="width:100%;height:40px;font-size:0.9rem;font-weight:600;float:left;">
                            </td>
                        </tr>
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-top:none;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem2_03" maxlength="7" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="참여한 팀원">
                            </td>
                            <td style="border:1px solid #959595;border-top:none;padding:5px;width:249px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                            </td>
                        </tr>
                    </table>
                    <table style="width:50%;margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="width:120px;height:108px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_04" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;margin-top:25px;" value="오늘의 할일">
                            </td>
                            <td style="width:250px;height:108px;border:1px solid #959595;border-right:none;border-right:none;float:left;padding:5px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:91px;font-size:0.9rem;font-weight:600;overflow:hidden;margin-top:3px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 100%;">
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[0]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[1]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[2]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_10" class="section section10 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="record03" value="연구일지 기록하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas08.width" :heights="datas08.height" :fontSizes="datas08.fontSize" :val="datas08.val" maxlength="42" />
                <div style="width:100%;overflow:hidden;">
                    <table style="width:calc(50% - 1px);margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem3_01" maxlength="7" style="width:100%;height:40px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="날짜">
                            </td>
                            <td style="border:1px solid #959595;padding:5px;width:249px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem3_02" maxlength="15" style="width:100%;height:40px;font-size:0.9rem;font-weight:600;float:left;">
                            </td>
                        </tr>
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-top:none;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem3_03" maxlength="7" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="참여한 팀원">
                            </td>
                            <td style="border:1px solid #959595;border-top:none;padding:5px;width:249px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                            </td>
                        </tr>
                    </table>
                    <table style="width:50%;margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="width:120px;height:108px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_04" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;margin-top:25px;" value="오늘의 할일">
                            </td>
                            <td style="width:250px;height:108px;border:1px solid #959595;border-right:none;border-right:none;float:left;padding:5px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:91px;font-size:0.9rem;font-weight:600;overflow:hidden;margin-top:3px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 100%;">
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[0]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[1]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[2]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_11" class="section section11 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="record04" value="연구일지 기록하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas08.width" :heights="datas08.height" :fontSizes="datas08.fontSize" :val="datas08.val" maxlength="42" />
                <div style="width:100%;overflow:hidden;">
                    <table style="width:calc(50% - 1px);margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem4_01" maxlength="7" style="width:100%;height:40px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="날짜">
                            </td>
                            <td style="border:1px solid #959595;padding:5px;width:249px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem4_02" maxlength="15" style="width:100%;height:40px;font-size:0.9rem;font-weight:600;float:left;">
                            </td>
                        </tr>
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-top:none;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem4_03" maxlength="7" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="참여한 팀원">
                            </td>
                            <td style="border:1px solid #959595;border-top:none;padding:5px;width:249px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                            </td>
                        </tr>
                    </table>
                    <table style="width:50%;margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="width:120px;height:108px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_04" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;margin-top:25px;" value="오늘의 할일">
                            </td>
                            <td style="width:250px;height:108px;border:1px solid #959595;border-right:none;border-right:none;float:left;padding:5px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:91px;font-size:0.9rem;font-weight:600;overflow:hidden;margin-top:3px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 100%;">
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[0]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[1]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[2]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_12" class="section section12 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="record05" value="연구일지 기록하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas08.width" :heights="datas08.height" :fontSizes="datas08.fontSize" :val="datas08.val" maxlength="42" />
                <div style="width:100%;overflow:hidden;">
                    <table style="width:calc(50% - 1px);margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem5_01" maxlength="7" style="width:100%;height:40px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="날짜">
                            </td>
                            <td style="border:1px solid #959595;padding:5px;width:249px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem5_02" maxlength="15" style="width:100%;height:40px;font-size:0.9rem;font-weight:600;float:left;">
                            </td>
                        </tr>
                        <tr style="float:left">
                            <td style="border:1px solid #959595;border-top:none;border-left:none;width:120px;padding:5px;background:#e5e5e5;">
                                <input class="select" type="text" autocomplete="off" name="recordItem5_03" maxlength="7" style="width:100%;height:45px;text-align:center;font-size:0.95rem;font-weight:600;float:left;" value="참여한 팀원">
                            </td>
                            <td style="border:1px solid #959595;border-top:none;padding:5px;width:249px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:45px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                            </td>
                        </tr>
                    </table>
                    <table style="width:50%;margin-top:7px;float:left;">
                        <tr style="float:left">
                            <td style="width:120px;height:108px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                                <input class="select" type="text" autocomplete="off" name="recordItem1_04" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;margin-top:25px;" value="오늘의 할일">
                            </td>
                            <td style="width:250px;height:108px;border:1px solid #959595;border-right:none;border-right:none;float:left;padding:5px;">
                                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:91px;font-size:0.9rem;font-weight:600;overflow:hidden;margin-top:3px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 100%;">
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[0]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[1]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                    <div style="width:100%;">
                        <div style="width:119.67px;height:120.5px; float: left;border:1px solid #959595;border-left:none;width:120px;padding:5px;border-top:none;background:#e5e5e5;">
                            <input class="select" type="text" autocomplete="off" name="recordItem1_05" maxlength="7" style="width:100%;height:44px;text-align:center;font-size:0.95rem;font-weight:600;float:left;margin-top: 32px;" v-model="val08[2]">
                        </div>
                        <div style="width:calc(100% - 120px);height:120.5px;float: right;border:1px solid #959595;padding:5px;border-right:none;border-left:none;border-top:none;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:110px;font-size:0.9rem;float:left;overflow:hidden;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_13" class="section section13 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="evaluate01" value="연구 결과 및 평가하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <div style="margin-bottom:5px;">
                    <Inputs :widths="datas09[0].width" :heights="datas09[0].height" :fontSizes="datas09[0].fontSize" :val="datas09[0].val" maxlength="42" />
                </div>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas09[1].width" :heights="datas09[1].height"></Textareas>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_14" class="section section14 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="evaluate02" value="연구 결과 및 평가하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas10.width" :heights="datas10.height" :fontSizes="datas10.fontSize" :val="datas10.val" maxlength="42" />
                <div style="width:400px;height:110px;margin-top:20px;border:1px solid #959595;border-left:none;float:left;background:#e5e5e5;padding:0 5px;">
                    <input class="select" type="text" autocomplete="off" name="evaluateItem01" maxlength="24" style="width:100%;height:44px;text-align:center;font-size:1rem;font-weight:600;margin-top:32px;" value="평가요소">
                </div>
                <div style="width:340px;height:55px;margin-top:20px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding: 5px;">
                    <input class="select" type="text" autocomplete="off" name="evaluateItem02" maxlength="21" style="width:100%;height:43px;text-align:center;font-size:1rem;font-weight:600;" value="평가결과">
                </div>
                <div style="width:113.333px;height:55px;border-bottom:1px solid #959595;border-right:1px solid #959595;float:left;background:#e5e5e5;padding:0 5px;">
                    <input class="select" type="text" autocomplete="off" name="evaluateItem03" maxlength="6" style="width:100%;height:36px;margin-top:9px;text-align:center;font-size:1rem;font-weight:600;" value="잘함">
                </div>
                <div style="width:113.333px;height:55px;border-bottom:1px solid #959595;border-right:1px solid #959595;float:left;background:#e5e5e5;padding:0 5px;">
                    <input class="select" type="text" autocomplete="off" name="evaluateItem04" maxlength="6" style="width:100%;height:36px;margin-top:9px;text-align:center;font-size:1rem;font-weight:600;" value="보통">
                </div>
                <div style="width:113.333px;height:55px;border-bottom:1px solid #959595;float:left;background:#e5e5e5;padding:0 5px;">
                    <input class="select" type="text" autocomplete="off" name="evaluateItem05" maxlength="6" style="width:100%;height:36px;margin-top:9px;text-align:center;font-size:1rem;font-weight:600;" value="미흡">
                </div>
                <table style="width:100%;">
                    <tr v-for="(cols,index1) in 4" :key="'a'+index1" :data-id="generateId(10)">
                        <td v-for="(row,index2) in 1" :key="'b'+index2" style="width:399px;border-bottom:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="evaluateItem06" maxlength="25" style="width:100%;height:43px;margin-bottom: 8px;font-size:0.95rem;font-weight:600;float:left;" v-model="val10[index1]"  value="" >
                        </td>
                        <td v-for="(row,index3) in 3" :key="'c'+index3" style="border-bottom:1px solid #959595;border-left:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="evaluateItem07" maxlength="6" style="width:100%;height:60px;text-align:center;font-size:0.95rem;float:left;">
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem01_15" class="section section15 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto">
            <input class="select" type="text" autocomplete="off" name="evaluate03" value="연구 결과 및 평가하기" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-bottom:15px;"></div>
            <div style="padding:0 10px;">
                <Inputs :widths="datas11.width" :heights="datas11.height" :fontSizes="datas11.fontSize" :val="datas11.val" maxlength="42" />
                <table style="width:100%;margin-top:20px;">
                    <tr v-for="(cols,index1) in 3" :key="'a'+index1" :data-id="generateId(10)" style="border-top: 1px solid #959595">
                        <td v-for="(row,index2) in 1" :key="'b'+index2" style="width:200px;border-bottom:1px solid #959595;padding:5px;background:#e5e5e5" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="evaluateItem03_1" maxlength="12" style="width:100%;height:44px;text-align:center;font-size:1rem;font-weight:600;float:left;margin-bottom:35px;" v-model="val11[index1]">
                        </td>
                        <td v-for="(row,index3) in 1" :key="'c'+index3" style="border-bottom:1px solid #959595;border-left:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:115px;font-size:0.95rem;float:left;overflow:hidden;"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'Template_01',
        mounted(){
          var total = document.getElementsByClassName('select');
          for(var i=0;i<total.length;i++){
              total[i].setAttribute('value', total[i].value);
          }
        },
        data () {
            return {
                datas01: [
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '1. 주제 선정하기(브레인스토밍)'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-마인드맵'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-단어 구조화하기(성격,논점이 비슷한 것끼리)'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-협의하기(삭제,추가)'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-완성하기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '2. 계획하기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-준비물'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-역할나누기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-시간순서에 따른 계획'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '3. 활동내용 기록하기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '-연구 일지 기록하기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '4. 연구 결과 및 평가하기'
                    }
                ],
                datas02 : {
                    width: 100,
                    height: 45,
                    fontSize: 1.1,
                    val: '주제와 관련된 키워드를 나열해 보세요.'
                },
                datas03 : {
                    width: 100,
                    height: 45,  
                    fontSize: 1.1,
                    val: '1. 주제와 관련된 키워드를 나열해 보세요.'
                },
                datas04 : [
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '2. 단어 구조화하기'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.05,
                      val: '아이디어에 대한 생각'
                    },
                    {
                      width: 100,
                      height: 158
                    },
                    {
                      width: 100,
                      height: 30,
                      fontSize: 1.05,
                      val: ': 성격이나 논점이 비슷한 단어 끼리 묶기'
                    },
                    {
                      width: 100,
                      height: 30,
                      fontSize: 1.05,
                      val: ': 팀원들과 협의하여 아이디어를 삭제하거나 새로운 아이디어 추가하기'
                    },
                    {
                      height: 180
                    },
                ],
                datas05 : [
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '우리가 선택한 주제는?'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '주제에 대해 자유롭게 작성해 보세요.'
                    }
                ],
                datas06 : [
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '1. 무엇이 필요할까요?'
                    },
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '2. 팀원의 역할을 나누어 봅시다.'
                    }
                ],
                val06_1 : ['필요한 준비물','구입 필요 준비물'],
                datas07 : {
                    width: 100,
                    height: 45,
                    fontSize: 1.1,
                    val: '3. 앞으로 해야 할 일들을 계획하여 정리해 봅니다.'
                },
                datas08 : {
                    width: 100,
                    height: 45,
                    fontSize: 1.1,
                    val: '·오늘 연구한 내용을 정리하여 기록합니다.'
                },
                val08 : ['연구 내용','연구 결과','다음에 할일'],
                datas09 : [
                    {
                      width: 100,
                      height: 45,
                      fontSize: 1.1,
                      val: '· 연구 결과를 정리하여 작성해 주세요.'
                    },
                    {
                      width: 100,
                      height: 444,
                    }
                ],
                datas10 : {
                    width: 100,
                    height: 45,
                    fontSize: 1.1,
                    val: '1. 프로젝트에 대해 평가해보세요.'
                },
                val10 :['나의 역할은 충분했는가?','나의 주장을 잘 표현했는가?','다른 팀원과의 의사소통은 적절했는가?','프로젝트 결과에 만족하는가?'],
                datas11 : {
                    width: 100,
                    height: 45,
                    fontSize: 1.1,
                    val: '2. 프로젝트를 통해 느낀 자기평가'
                },
                val11: ['참여 전 마음가짐','참여 중 느낀점','프로젝트를 마치고'],
                imgsData: { width: 100, height: 100 },
                content1Img: 'http://placeimg.com/640/480/nature',
                content2Img: 'http://placeimg.com/640/480/any'
            };
        },
        methods: {
            saveDoc:function(){
                console.log(this.$refs.myDoc);
                //this.$refs.saveDoc.outHtml  
            },
            generateId (length) {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                    return result + parseInt(new Date().getTime() / 1000);
                }
            }
    };
</script>