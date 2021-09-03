<template><!-- 해커톤 대회 참가용 템플릿 -->
    <div id="template_06" style="width: 760px; margin: 0px auto;position:relative;">
        <section id="tem06_1" class="section section1 pdf-item" style="width: 760px;height: 610px;padding:30px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="inputTitle" value="6. 해커톤 대회 참가용 템플릿" maxlength="25" style="width:100%;height:50px;text-align:center;font-size:1.9rem;font-weight:600;"/>
            <div style="width:400px;margin:0 auto;margin-top:40px;">
                <input class="select" type="text" autocomplete="off" name="listInput" value="목차" maxlength="17" style="width:100%;height:45px;font-size:1.4rem;font-weight:600;"/>
                <div style="margin-top:15px;">
                    <Inputs :widths="datas01[0].width" :heights="datas01[0].height" :fontSizes="datas01[0].fontSize" :val="datas01[0].val" maxlength="22" />
                    <Inputs :widths="datas01[1].width" :heights="datas01[1].height" :fontSizes="datas01[1].fontSize" :val="datas01[1].val" maxlength="22" />
                    <Inputs :widths="datas01[2].width" :heights="datas01[2].height" :fontSizes="datas01[2].fontSize" :val="datas01[2].val" maxlength="22" />
                    <Inputs :widths="datas01[3].width" :heights="datas01[3].height" :fontSizes="datas01[3].fontSize" :val="datas01[3].val" maxlength="22" />
                    <Inputs :widths="datas01[4].width" :heights="datas01[4].height" :fontSizes="datas01[4].fontSize" :val="datas01[4].val" maxlength="22" />
                    <Inputs :widths="datas01[5].width" :heights="datas01[5].height" :fontSizes="datas01[5].fontSize" :val="datas01[5].val" maxlength="22" />
                    <Inputs :widths="datas01[6].width" :heights="datas01[6].height" :fontSizes="datas01[6].fontSize" :val="datas01[6].val" maxlength="22" />
                    <Inputs :widths="datas01[7].width" :heights="datas01[7].height" :fontSizes="datas01[7].fontSize" :val="datas01[7].val" maxlength="22" />
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem06_2" class="section section2 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="summary" value="대회개요" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-top:5px;margin-bottom:25px;"></div>
            <div style="border:1px solid #e5e5e5;width: 100%; height:502px;position:relative;overflow:hidden;text-align: center;" class="imgUpload imgUpload1">
                <label class="select" for="tem06Img" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color: #fff;font-size: 0.9rem;font-weight: 600;border-radius: 5px;padding: 5px;background:#ef8454;">이미지 선택</label>
                <input class="select" id="tem06Img" type="file" accept="image/png, image/jpeg" style="display: none;">
                <p style="width: 100%;color: #959595;font-size: 0.9rem;position:absolute;top:290px;left:50%;transform:translateX(-50%)">이미지 최적화 사이즈<br>1.52:1 , 760px x 500px , 20cm x 13cm</p>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem06_3" class="section section3 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="idea1" value="아이디어 배경" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-top:5px;margin-bottom:10px;"></div>
            <div style="padding: 10px; width: 100%;">
                <div style="margin-bottom:7px;">
                    <Inputs :widths="datas03[0].width" :heights="datas03[0].height" :fontSizes="datas03[0].fontSize" :val="datas03[0].val" maxlength="42"/>
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas03[1].width" :heights="datas03[1].height"></Textareas>
                    </div>
                </div>
                <div style="margin-bottom:7px;">
                    <Inputs :widths="datas03[2].width" :heights="datas03[2].height" :fontSizes="datas03[2].fontSize" :val="datas03[2].val" maxlength="42"/>
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas03[1].width" :heights="datas03[1].height"></Textareas>
                    </div>
                </div>
                <div>
                    <Inputs :widths="datas03[3].width" :heights="datas03[3].height" :fontSizes="datas03[3].fontSize" :val="datas03[3].val" maxlength="42"/>
                    <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                        <Textareas :widths="datas03[1].width" :heights="datas03[1].height"></Textareas>
                    </div>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem06_4" class="section section4 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="idea2" value="아이디어 제안" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-top:5px;margin-bottom:10px;"></div>
            <div style="padding: 10px; width: 100%; height:500px">
                <div style="margin-bottom:5px;">
                    <Inputs :widths="datas04[0].width" :heights="datas04[0].height" :fontSizes="datas04[0].fontSize" :val="datas04[0].val" maxlength="42"/>
                </div>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas04[1].width" :heights="datas04[1].height"></Textareas>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem06_5" class="section section5 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="idea3" value="아이디어 제안" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-top:5px;margin-bottom:10px;"></div>
            <div style="padding: 10px; width: 100%; height:500px">
                <div style="margin-bottom:5px;">
                    <Inputs :widths="datas05.width" :heights="datas05.height" :fontSizes="datas05.fontSize" :val="datas05.val" maxlength="42"/>
                </div>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas04[1].width" :heights="datas04[1].height"></Textareas>
                </div>
            </div>
        </section>
        <div class="html2pdf__page-break"/>
        <section id="tem06_6" class="section section6 pdf-item" style="width: 760px;height: 610px;padding:10px 0;margin: 0 auto;">
            <input class="select" type="text" autocomplete="off" name="idea" value="예상결과 및 기대효과" maxlength="36" style="width:100%;height:45px;font-size:1.3rem;font-weight:600;padding-left: 10px;"/>
            <div style="width:100%;height:3px;background:#959595;margin-top:5px;margin-bottom:10px;"></div>
            <div style="padding: 10px; width: 100%; height:500px">
                <div style="margin-bottom:5px;">
                    <Inputs :widths="datas06.width" :heights="datas06.height" :fontSizes="datas06.fontSize" :val="datas06.val" maxlength="42"/>
                </div>
                <div style="border: 1px solid #959595;padding:0 5px 0 5px;">
                    <Textareas :widths="datas04[1].width" :heights="datas04[1].height"></Textareas>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: 'Template_06',
  data () {
    return {
      datas01: [
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '1. 대회개요'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '2. 아이디어 배경'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '- 배경 및 필요성'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '3. 아이디어 제안'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '- 핵심 기능'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '- 아이디어 기획서'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '4. 예상 결과 및 기대효과'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '5. 대회 참가 양식 작성하기'
            },
        ],
        datas03: [
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '· 기획하게 된 배경은 무엇인가?'
            },
            {
              width: 100,
              height: 113
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '· 해당 과제에서 발생할 수 있는 문제점은 무엇인가?'
            },
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '· 어떤 문제를 해결하고자 하는가?'
            }
        ],
        datas04: [
            {
              width: 100,
              height: 45,
              fontSize: 1.1,
              val: '· 핵심기능은 무엇인지 구체적으로 기술 하시오.'
            },
            {
              width: 100,
              height: 445
            }
        ],
        datas05: {
            width: 100,
            height: 45,
            fontSize: 1.1,
            val: '· 아이디어의 구현범위, 품질, 성능 등을 포함한 기획서 작성'
        },
        datas06: {
            width: 100,
            height: 45,
            fontSize: 1.1,
            val: '· 아이디어의 장점과 기대효과에 대해 기술 하시오.'
        }
    };
  },
  methods: {
        thumnail(e) {
            console.log(e);
            var imgUpload = document.getElementById('imgUpload');
            
            if(e.target.files.length > 0) {
                console.log(e);
                imgUpload.children[0].style.display = 'none';
                if(imgUpload.children[2]) {
                    imgUpload.removeChild(imgUpload.children[2]);    
                }
                var reader = new FileReader();
                reader.onload = function(e) {
                    var img = document.createElement('img');
                    img.setAttribute('src', e.target.result);
                    img.style.objectFit = 'contain';
                    img.addEventListener('click', function() {
                        var f = document.getElementById('tem06Img');
                        f.click();
                        
                        // console.log(document.getElementById('imgUpload').children);
                        // var aaa = document.getElementById('imgUpload');        
                        // //console.log(aaa.children[2]);
                        // aaa.removeChild(aaa.children[2]);
                        
                    });
                    document.getElementById('imgUpload').appendChild(img);
                };
                reader.readAsDataURL(e.target.files[0]);    
            } else {
                console.log("AA");
            }
            
            // ---- reszie --------------------------------------
            // var file = e.target.files[0]
            // var reader = new FileReader();
            // this.resizingImg({
            //     file: file,
            //     maxSize: 760
            // }).then(function (resizedImage) {
            //     console.log(resizedImage);
            //     reader.onload = function(e){
            //         //document.getElementById('output').src = resizedImage;
                    
            //         var url = URL.createObjectURL(resizedImage);
                    
            //         var img = document.createElement('img');
            //         img.setAttribute('src', url);
            //         document.getElementById('imgUpload').appendChild(img);
            //     };
            //     console.log(URL.createObjectURL(resizedImage));
            //     reader.readAsDataURL(resizedImage);
                
            //     // reader.onload = function(e){
            //     //     document.getElementById('output').src = resizedImage;
            //     // };
            //     // reader.readAsDataURL(file);
                
     
            //     // resizing 이후 파일
            //     //fileMap.set("2_"+file.name,resizedImage);
            // });
            // ---- reszie --------------------------------------
        },
        resizingImg (settings) {
            var file = settings.file;
            var maxSize = settings.maxSize;
            var reader = new FileReader();
            var image = new window.Image();
            var canvas = document.createElement('canvas');
            var dataURItoBlob = function (dataURI) {
                var bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
                    window.atob(dataURI.split(',')[1]) :
                    unescape(dataURI.split(',')[1]);
                var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
                var max = bytes.length;
                var ia = new Uint8Array(max);
                for (var i = 0; i < max; i++)
                    ia[i] = bytes.charCodeAt(i);
                return new window.Blob([ia], { type: 'image/jpeg'});
            };
            var resize = function () {
                var width = image.width;
                var height = image.height;
                if (width > height) {
                    if (width > maxSize) {
                        height *= maxSize / width;
                        width = maxSize;
                    }
                } else {
                    if (height > maxSize) {
                        width *= maxSize / height;
                        height = maxSize;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                return dataURItoBlob(dataUrl);
            };
            return new Promise(function (ok, no) {
                if (!file.type.match(/image.*/)) {
                    no(new Error("Not an image"));
                    return;
                }
                reader.onload = function (readerEvent) {
                    image.onload = function () { return ok(resize()); };
                    image.src = readerEvent.target.result;
                };
                console.log('resize');
                console.log(file);
                reader.readAsDataURL(file);
            }); 
        }
    }
};
</script>
