<template><!-- 제품 제작 템플릿 -->
    <div id="template_02" style="width: 760px; margin: 0px auto;position:relative;">
        <section id="tem02_1" class="section section1 pdf-item" style="width: 760px;height: 610px;padding:30px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="inputTitle" value="2. 제품 제작 템플릿" maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
            <div style="width:540px;margin:0 auto;margin-top:40px;">
                <input class="select" type="text" autocomplete="off" name="listInput" value="목차" maxlength="24" style="width:100%;height:45px;font-size:1.4rem;font-weight:600;margin-bottom:15px;"/>
                <div style="width:250px;margin-right:40px;float: left">
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[0].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[1].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[2].val" maxlength="14" />
                    <div style="widith:100%;height:10px;"></div>
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[3].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[4].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[5].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[6].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" />
                </div>
                <div style="width:250px;float: left">
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[7].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[8].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[9].val" maxlength="14" />
                    <div style="widith:100%;height:10px;"></div>
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[10].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[11].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[12].val" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" maxlength="14" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" maxlength="14" />
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_2" class="section section2 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title01" value="1. 문제 이해하고 분석하기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:10px;"/>
            <div style="width:400px;height:260px;margin:0 auto;margin-bottom:20px;">
                <input class="select" type="text" autocomplete="off" name="tem02Item1" value="문제상황 제시" maxlength="22" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:402px;height:222px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload1">
                    <label class="select" for="tem02_1Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_1Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:140px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>1.82:1 , 400px x 220px , 10.58cm x 5.8cm</p>
                </div>
            </div>
            <div style="width:355px;margin-right:30px;margin-left:10px;float:left;overflow: hidden;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:53px;font-size:1.05rem;overflow:hidden;">질문1) 어떤 문제가 발생하였나요?</textarea>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas02.width" :heights="datas02.height"></Textareas>
                </div>
            </div>
            <div style="width:355px;margin-right:10px;overflow: hidden;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:53px;font-size:1.05rem;overflow:hidden;">질문2) 문제 상황을 해결하기 위한 방법을 생각해봅시다.</textarea>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas02.width" :heights="datas02.height"></Textareas>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_3" class="section section3 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title02" value="2. 문제 해결 방법 찾아보기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:345px;height:500px;margin-left:20px;margin-right:30px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem03Item1" value="하드웨어 관련 자료 삽입" maxlength="19" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:347px;height:462px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload2">
                    <label class="select" for="tem02_2Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_2Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:260px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.75:1 , 345px x 460px , 9cm x 12cm</p>
                </div>
            </div>
            <div style="width:345px;height:500px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem03Item2" value="소프트웨어 관련 자료 삽입" maxlength="19" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:347px;height:462px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload3">
                    <label class="select" for="tem02_3Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_3Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:260px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>0.75:1 , 345px x 460px , 9cm x 12cm</p>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_4" class="section section4 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title03" value="2. 문제 해결 방법 찾아보기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:10px;"/>
            <div style="width:700px;height:520px;margin:0 auto;">
                <input class="select" type="text" autocomplete="off" name="tem04Item1" value="알고리즘" maxlength="39" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:702px;height:482px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload4">
                    <label class="select" for="tem02_4Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_4Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:270px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>1.46:1 , 700px x 480px , 18.5cm x 12.7cm</p>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_5" class="section section5 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title04" value="3. 문제 해결하기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:10px;"/>
            <div style="width:600px;height:300px;margin:0 auto;">
                <input class="select" type="text" autocomplete="off" name="tem05Item1" value="하드웨어 제작 과정" maxlength="34" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:602px;height:262px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload5">
                    <label class="select" for="tem02_5Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_5Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:160px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>2.31:1 , 600px x 260px , 15.8cm x 6.8cm</p>
                </div>
            </div>
            <div style="width:600px;margin:0 auto;margin-top:20px; border:1px solid #959595; padding: 0 5px;">
                <Textareas :widths="datas05.width" :heights="datas05.height"></Textareas>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_6" class="section section6 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title05" value="3. 문제 해결하기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:10px;"/>
            <div style="width:600px;height:300px;margin:0 auto;">
                <input class="select" type="text" autocomplete="off" name="tem06Item1" value="소프트웨어 제작 과정" maxlength="34" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:602px;height:262px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload6">
                    <label class="select" for="tem02_6Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_6Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:160px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>2.31:1 , 600px x 260px , 15.8cm x 6.8cm</p>
                </div>
            </div>
            <div style="width:600px;margin:0 auto;margin-top:20px; border:1px solid #959595; padding: 0 5px;">
                <Textareas :widths="datas05.width" :heights="datas05.height"></Textareas>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_7" class="section section7 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title06" value="4. 최종결과" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:10px;"/>
            <div style="width:700px;height:510px;margin:0 auto;">
                <input class="select" type="text" autocomplete="off" name="tem07Item1" value="최종 결과물 자료 삽입" maxlength="39" style="width:100%;height:40px;font-size:1.1rem;text-align:center;"/>
                <div style="border:1px solid #e5e5e5;width:702px;height:482px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload7">
                    <label class="select" for="tem02_7Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                    <input class="select" id="tem02_7Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                    <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:270px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>1.46:1 , 700px x 480px , 18.5cm x 12.7cm</p>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem02_8" class="section section8 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title07" value="5. 평가하기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="padding:0 10px;">
                <div style="width:400px;height:90px;border:1px solid #959595;border-left:none;float:left;background:#e5e5e5;padding:5px;">
                    <input class="select" type="text" autocomplete="off" name="sec08_Item01" maxlength="24" style="width:100%;height:44px;text-align:center;font-size:1rem;font-weight:600;margin-top: 18px;" value="평가요소">
                </div>
                <div style="width:340px;height:45px;border:1px solid #959595;border-left:none;border-right:none;float:left;background:#e5e5e5;padding:5px;">
                    <input class="select" type="text" autocomplete="off" name="sec08_Item02" maxlength="20" style="width:100%;height:33px;text-align:center;font-size:1rem;font-weight:600;" value="평가결과">
                </div>
                <div style="width:113.333px;height:45px;border-bottom:1px solid #959595;border-right:1px solid #959595;float:left;background:#e5e5e5;padding:5px;">
                    <input class="select" type="text" autocomplete="off" name="sec08_Item03" maxlength="6" style="width:100%;height:33px;text-align:center;font-size:1rem;font-weight:600;margin-top: 1px;" value="잘함">
                </div>
                <div style="width:113.333px;height:45px;border-bottom:1px solid #959595;border-right:1px solid #959595;float:left;background:#e5e5e5;padding:5px;">
                    <input class="select" type="text" autocomplete="off" name="sec08_Item04" maxlength="6" style="width:100%;height:33px;text-align:center;font-size:1rem;font-weight:600;margin-top: 1px;" value="보통">
                </div>
                <div style="width:113.333px;height:45px;border-bottom:1px solid #959595;float:left;background:#e5e5e5;padding:5px;">
                    <input class="select" type="text" autocomplete="off" name="sec08_Item05" maxlength="6" style="width:100%;height:33px;text-align:center;font-size:1rem;font-weight:600;margin-top: 1px;" value="미흡">
                </div>
                <table style="width:100%;">
                    <tr v-for="(cols,index1) in 4" :key="'a'+index1" :data-id="generateId(10)">
                        <td v-for="(row,index2) in 1" :key="'b'+index2" style="width:399px;border-bottom:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="sec08_Item06" maxlength="25" style="width:100%;height:50px;font-size:0.95rem;font-weight:600;float:left;":value="val08[index1]">
                        </td>
                        <td v-for="(row,index3) in 3" :key="'c'+index3" style="border-bottom:1px solid #959595;border-left:1px solid #959595;padding:5px;" :data-id="generateId(10)">
                            <input class="select" type="text" autocomplete="off" name="sec08_Item07" maxlength="6" style="width:100%;height:50px;text-align:center;font-size:0.95rem;float:left;">
                        </td>
                    </tr>
                </table>
                <table style="width:100%;margin-top:20px;">
                    <tr>
                        <td style="width:250px;border:1px solid #959595;border-left:none;padding:5px;background:#e5e5e5">
                            <input class="select" type="text" autocomplete="off" name="sec08_Item08" maxlength="15" style="width:100%;height:44px;margin-bottom:59px;text-align:center;font-size:0.95rem;font-weight:600;float:left;"value="프로그램을 마치고 난 후 느낀점">
                        </td>

                        <td style="border:1px solid #959595;border-right:none;padding:5px;">
                            <textarea class="select" type="text" autocomplete="off" style="width:100%;height:158px;font-size:0.95rem;float:left;overflow:hidden;"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Template_02',
    mounted(){
      var total = document.getElementsByClassName('select');
      for(var i=0;i<total.length;i++){
          total[i].setAttribute('value', total[i].value);
      }
    },
    data () {
        return {
            datasItem : {
                width: 100,
                height: 45,
                fontSize: 1.1
            },
            datas01V: [
                {
                    val: '1. 문제 이해하고 분석하기'
                },
                {
                    val: '① 문제 이해하기'
                },
                {
                    val: '② 문제 분석하기'
                },
                {
                    val: '2. 문제 해결 방법 찾아보기'
                },
                {
                    val: '① 하드웨어 이해하기'
                },
                {
                    val: '② 소프트웨어 이해하기'
                },
                {
                    val: '③ 알고리즘 생각하기'
                },
                {
                    val: '3. 문제 해결하기'
                },
                {
                    val: '① 하드웨어 제작하기'
                },
                {
                    val: '② 소프트웨어 실행 & 분석'
                },
                {
                    val: '4. 결과 & 평가하기'
                },
                {
                    val: '① 자기평가'
                },
                {
                    val: '② 팀평가'
                }
            ],
            datas02 : { 
              width: 100,
              height: 190
            },
            datas05: {
                width: 100,
                height: 180
            },
            val08 : ['나의 역할은 충분했는가?','다른 팀원과의 의사소통은 적절했는가?','하드웨어,소프트웨어에 대한 자료 조사는 적절하였는가?','프로젝트 결과물에 만족하는가?']
        };
    },
    methods : {
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