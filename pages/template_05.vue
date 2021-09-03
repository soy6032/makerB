<template><!-- 동영상 제작 템플릿 -->
    <div id="template_05" style="width: 760px; margin: 0px auto;position:relative;">
        <section id="tem05_1" class="section section1 pdf-item" style="width: 760px;height: 610px;padding:30px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="inputTitle" value="5. 동영상 제작 템플릿" maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
            <div style="width:400px;margin:0 auto;margin-top:50px;">
                <input class="select" type="text" autocomplete="off" name="listInput" value="목차" maxlength="16" style="width:100%;height:45px;font-size:1.5rem;font-weight:600;"/>
                <div style="margin-top:15px;">
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[0].val" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[1].val" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[2].val" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[3].val" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" :val="datas01V[4].val" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" maxlength="20" />
                    <Inputs :widths="datasItem.width" :heights="datasItem.height" :fontSizes="datasItem.fontSize" maxlength="20" />
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem05_2" class="section section2 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title01" value="1. 동영상 주제 소개하기" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:150px;border:1px solid #959595;margin-left:10px;padding:5px;background:#e5e5e5;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem02Item1" maxlength="8" style="width:100%;height:50px;text-align:center;font-size:1rem;font-weight:600;" value="영상제목">
            </div>
            <div style="width:590px;border:1px solid #959595;border-left:none;padding:5px;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem02Item2" maxlength="38" style="width:100%;height:50px;font-size:0.95rem;">
            </div>
            <div style="width:150px;border:1px solid #959595;border-top:none;margin-left:10px;padding:5px;background:#e5e5e5;float:left;">
                <input class="select" type="text" autocomplete="off" name="tem02Item3" maxlength="8" style="width:100%;height:451px;text-align:center;font-size:1rem;font-weight:600;" value="주제">
            </div>
            <div style="width:590px;border:1px solid #959595;border-left:none;border-top:none;padding:5px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:445px;font-size:0.95rem;overflow:hidden;"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem05_3" class="section section3 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title02" value="2. 스토리보드" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:177px;overflow:hidden;border:1px solid #959595;margin-left:11px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:495px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;overflow:hidden;border:1px solid #959595;margin-left:10px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:495px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;overflow:hidden;border:1px solid #959595;margin-left:10px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:495px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
            <div style="width:177px;overflow:hidden;border:1px solid #959595;margin-left:10px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:495px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem05_4" class="section section4 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title03" value="3. 자막" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:738px;overflow:hidden;border:1px solid #959595;margin-left:11px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:515px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem05_5" class="section section5 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title04" value="4. 배경음악" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:738px;overflow:hidden;border:1px solid #959595;margin-left:11px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:515px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem05_6" class="section section6 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="title05" value="5. 최종편집" maxlength="39" style="width:100%;height:45px;font-size:1.2rem;font-weight:600;padding-left: 10px;margin-bottom:20px;"/>
            <div style="width:738px;overflow:hidden;border:1px solid #959595;margin-left:11px;float:left;">
                <textarea class="select" type="text" autocomplete="off" style="width:100%;height:515px;padding:5px;font-size:0.95rem;overflow:hidden"></textarea>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'Template_05',
        data () {
            return {
                datasItem : {
                    width: 100,
                    height: 55,
                    fontSize: 1.2
                },
                datas01V: [
                    {
                        val: '1. 동영상 주제 소개하기'
                    },
                    {
                        val: '2. 스토리보드'
                    },
                    {
                        val: '3. 자막'
                    },
                    {
                        val: '4. 음악'
                    },
                    {
                        val: '5. 최종편집'
                    }
                ],
          };
        }
    };
</script>