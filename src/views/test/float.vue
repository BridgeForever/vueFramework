<style scoped>
    .box{
        overflow: hidden;
    }
    .float-box{
        float:left;
        background:red;
    }
</style>
<template>
    <div class="viewBox">
        <mt-header fixed title="float">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ol>
                <li>1.如果浮动的是块级元素会转换为行内块级元素，float会形成环绕布局</li>
                <li>
                    2.清除浮动
                    <ol>
                        <li>1.父级使用overflow：hidden(不推荐)</li>
                        <li>2.使用clear:both不推荐会增加页面标签</li>
                        <li>3.使用伪元素.clearfix:after{content:'';height:0;display:block;clear:both}</li>
                    </ol>
                </li>
            </ol>
            <div class="box">
               
                <div class="float-box">浮动的盒子</div>
            </div>
        </div>
    </div>
</template>

<script>
</script>