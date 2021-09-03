<template><!-- 프로젝트 생성 페이지 -->
    <div id="MakeProject">
        <div class="makeProjectWrap cls">
            <h3 class="com_fonts13 makeProTitle">프로젝트를 생성해보세요!</h3>
            <ul class="cls">
              <li v-for="(item, index) in template" :key="index" class="makeProject">
                <div class="makeTemImg">
                  <div :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" class="temImg imgHover"></div>
                </div>

                <!-- 템플릿 이름 -->
                <p class="com_fonts10 com_fontW600 makeTemName">{{ item.name }}</p>

                <!-- 템플릿 비용 -->
                <p class="com_fonts08 com_textOrange makeTemCost">비용 : {{ item.price}}</p>

                <!-- 템플릿 제공자 -->
                <p class="com_fonts08 makeTemOffer">제공자 : {{ item.provider}}</p>

                <!-- 템플릿 미리보기 버튼-->
                <button class="temPreviewBtn" @click="temPreview(item)">미리보기</button>
                
                <!-- 템플릿 생성하기 버튼 -->
                <button class="temCreateBtn" @click="projectCreate(item)">프로젝트 생성하기</button>
              </li>
            </ul>
        </div>

        <!-- 미리보기 모달 components -->
        <TemPreview v-if="previewState === true" :previewState="previewState" :t_group="t_group" @popClose="previewState = false" @createState="createState"></TemPreview>

        <!-- 프로젝트 이름 및 기간 설정 components -->
        <ProduceLast v-if="proLastState === true" :proLastState="proLastState" :producelastData="producelastData" @popClose="proLastState = false"></ProduceLast>
    </div>
</template>
<script>
    export default {
        name: 'MakeProject',
        middleware: 'client',
        data () {
            return {
                previewState: false,
                proLastState: false,
                t_group: null,
                producelastData: null,
                template : []
            };
        },
        mounted() {
            this.getTemplateList();
        },
        methods: {
            // 템플릿 리스트 가져오기
            getTemplateList() {
              this.$axios.get(`/client/getTemplate`)
              .then((res) => {
                  //console.log(res.data);
                  this.template = res.data.items;
              });
            },
            // 템플릿 미리보기
            temPreview (item) {
                this.previewState = true;
                this.t_group = item.idx;
                this.producelastData = item;
            },
            // 프로젝트 생성 다음 절차로 이동
            createState () {
              this.proLastState = true;
              this.previewState = false;
            },
            // 프로젝트 생성
            projectCreate (item) {
                this.proLastState = true;
                this.producelastData = item;
            }
        }
    };
</script>
<style scoped>
    #MakeProject {
        width: 100%;
        overflow: hidden;
    }
    .cls:after {
    	display: table;
    	content: '';
    	clear: both;
    }
    .makeProjectWrap {
        width: 1200px;
        margin: 0 auto;
        margin-top: 110px;
    }
    .makeProjectWrap ul {
        padding-left: 0 !important;
    }
    .makeProTitle {
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 30px;
    }
    .makeProject {
        width: calc(25% - 22.5px);
        margin: 0 30px 30px 0;
        float: left;
    }
    .makeProject:nth-child(4n) {
        margin-right: 0;
    }
    .makeTemImg {
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .imgHover {
        transition: .3s;
    }

    /* 템플릿 이름 */
    .makeTemName {
        margin: 15px 0 0 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }

    /* 비용 */
    .makeTemCost {
        margin-top: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }

    /* 제공자 */
    .makeTemOffer {
        margin-top: 2px;
        margin-bottom: 10px !important;
    }

    /* 미리보기 버튼 */
    .temPreviewBtn {
        width: 100px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #ef8454;
        color: #ef8454;
        font-size: 0.8rem;
        outline: none;
        margin-right: 3px;
        margin-top: 10px;
    }

    /* 프로젝트 생성하기 버튼 */
    .temCreateBtn {
        width: calc(100% - 109px);
        height: 35px;
        border-radius: 5px;
        border: 1px solid #ef8454;
        background-color: #ef8454;
        color: #fff;
        font-size: 0.8rem;
        outline: none;
        margin-top: 10px;
    }
</style>