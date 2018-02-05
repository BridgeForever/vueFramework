<template>
    <div class="viewBox">
        <mt-header fixed title="sass">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ul>
                <li>
                    1.定义变量$privaible:value
                </li>
                <li>2.嵌套规则 #content { article { h1 { color: #333 } p { margin-bottom: 1.4em } } #content aside { background-color: #EEE } }
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
@import './list.scss';
li{
    background:red
}
</style>
