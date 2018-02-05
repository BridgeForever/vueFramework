<template>
    <div class="viewBox">
        <mt-header fixed title="基础知识">
            <router-link to="index" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <router-link to="float">
                <div>float浮动</div>
            </router-link>
             <router-link to="center">
                <div>居中</div>
            </router-link>
            <router-link to="animate">
                <div>动画</div>
            </router-link>
            <router-link to="canvas">
                <div>canvas</div>
            </router-link>
            <router-link to="prototype">
                <div>原型</div>
            </router-link>
             <router-link to="vue">
                <div>vue</div>
            </router-link>
             <router-link to="list">
                <div>sass学习</div>
            </router-link>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>

</script>