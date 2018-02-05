
<template>
    <div style="width:100%;height:100%">

      <router-view></router-view>
       
    </div>
</template>
<script>

    export default {
        created(){
            console.log(this);
            window.localStorage.wxUserInfo = JSON.stringify({'userId':'15826406072'});
        },
        data() {
            return {

            };
        },
        components:{
           
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>