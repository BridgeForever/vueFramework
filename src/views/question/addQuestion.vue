<style scoped>
#questionIndex .listContent>div {
    margin-bottom: 6px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    line-height: 45px;
    padding: 0px 17px 0px 10px;
    color: #333;
    font-size: 14px;
}

#questionIndex .listContent label {
    display: inline-block;
    /*width: 80px;*/
}

#questionIndex .listContent label:after {
    content: "*";
    color: red;
    margin-left: 5px;
}

#questionIndex .listContent input {
    border: none;
    margin-left: 10px;
    font-size: 14px;
    color: #b2b2b2;
    line-height: 45px;
    width: 62%;
}

#questionIndex .selectIcon {
    float: right;
    margin-top: 16px;
}

#questionIndex .listContent textarea {
    border: none;
    width: 100%;
    font-size: 14px;
    color: #b2b2b2;
    resize: none;
}

#questionIndex .upFile {
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    background: url("../../views/question/imgs/file.png") no-repeat;
    background-size: 100%;
}

#questionIndex .upFile input {
    opacity: 0;
}

#questionIndex .notneed label:after {
    content: '';
}

#questionIndex .fileWrap {
    margin: 10px 0px;
}

#questionIndex .fileWrap>div {
    /*display: inline-block;
 		float:left;*/
}

#questionIndex .hide {
    display: none;
}

#questionIndex .show {
    display: block;
}

#questionIndex .provinceSelect,
#questionIndex .workSelect {
    display: none;
}

#questionIndex #selectType,
#questionIndex #workType {
    display: none
}

#questionIndex .submitBtn {
    height: 40px;
    background: #0093ce;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}

#questionIndex .imgItem {
    min-width: 50px;
    line-height: 30px;
    background: #f4f4f4;
    /*height: 50px;
 		border:1px solid #ddd;
 		display: inline-block;*/
    margin-right: 10px;
    margin-bottom: 5px;
    position: relative;
    overflow: hidden;
    /*超出部分隐藏*/
    white-space: nowrap;
    /*不换行*/
    text-overflow: ellipsis;
    /*超出部分文字以...显示*/
}

#questionIndex .contentWrap {
    height: 100%;
    /*overflow: hidden;*/
    position: relative;
}

#questionIndex .deleteBtn {
    position: absolute;
    right: 0px;
    top: 0px;
}
</style>
<template>
    <div class="viewBox">

        <div id="questionIndex">
            <mt-header :title="options && options.title" fixed>
                <router-link to="/index" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
            <div class="content">
                <div class="contentWrap">
                    <div class="scroller">
                        <div class="listContent">
                            <div>
                                <label>服务中心</label>
                                <input placeholder="您的服务中心全称" class="serverCenterName" />
                            </div>
                            <div class="provinceWrap">
                                <label>所在省份</label>
                                <input placeholder="请选择您所在省份" id="provinceSelect" readonly="true" class="provinceId" />
                                <img src="../question/imgs/select.png" width="7" class="selectIcon" />
                                <select class="" id="provinceType" data-role="none">
                                </select>
                            </div>
                            <div class="workTypeWrap">
                                <label>业务类别</label>
                                <input placeholder="请选择业务类别" id="workSelect" readonly="true" class="workId" />
                                <img src="../question/imgs/select.png" width="7" class="selectIcon" />
                                <select class="" id="workType" data-role="none">
                                </select>
                            </div>
                            <div class="systemNameWrap hide">
                                <label>系统名称</label>
                                <input placeholder="请输入系统名称" class="systemName" />
                            </div>
                            <div>
                                <label>联系人</label>
                                <input placeholder="请输入联系人姓名" class="contactName" />
                            </div>
                            <div>
                                <label>联系电话</label>
                                <input placeholder="请输入联系人手机" class="contactMethod" maxLength="11" type="tel" />
                            </div>
                            <div>
                                <label>问题描述</label>
                                <div>
                                    <textarea placeholder="请简要清晰的描述您遇到的问题" class="questionDesc" rows="4"></textarea>
                                    <p style="color:#999;text-align:right">
                                        <span>0</span>/2000字</p>
                                </div>
                            </div>
                            <div class=" againSubmitReson hide">
                                <label>再次发起原因</label>
                                <div>
                                    <textarea placeholder="请简要清晰的描述您遇到的问题"></textarea>
                                    <p style="color:#999;text-align:right">
                                        <span>0</span>/2000字</p>
                                </div>
                            </div>
                            <div class="notneed" style="line-height:normal;padding-bottom:10px">
                                <label>附件</label>
                                <div style="color:#b2b2b2;">如有需要,可上传附件</div>
                                <div class="fileWrap">
                                    <div class="upFileInfo">

                                    </div>
                                    <div class="upFile">
                                        <input type="file" name="uploadFile" class="uploadTag" style="width:100%" multiple="multiple" />
                                    </div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div class="notneed">
                                <label class="labelName">问题建议</label>
                                <div>
                                    <textarea placeholder="请简要清晰的提出您对问题处理的建议或述求" class="questionAdvise" rows="4"></textarea>
                                    <p style="color:#999;text-align:right">
                                        <span>0</span>/2000字</p>
                                </div>
                            </div>
                        </div>
                        <div class="submitBtn">提交</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created(){
             const params=this.$route.query;
             this.options.title=params.menuName;
            this.options.menuid=params.menuid;
        },
        data(){
            return {
                options:{
                    title:'测试',
                    menuid:''
                }
            }
        },
        computed:{
            
        }
    }
</script>