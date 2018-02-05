<template>
    <div class="viewBox">
        <mt-header fixed title="canvas">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <canvas id="myCanvas" width="300" height="300" ></canvas>
        </div>
    </div>
</template>
<style scoped>
</style>
<script>
export default {
    mounted(){       
       this.drawBigCircle();
       this.drawCircle();
    },
    methods:{
        drawBigCircle(){
            var c=document.getElementById("myCanvas");
            var cxt=c.getContext("2d");
            cxt.lineWidth=10;
            cxt.strokeStyle="#ddd";
            cxt.beginPath();
            cxt.arc(100,100,50,0,2*Math.PI);
            cxt.stroke();
        },
        drawCircle(){
             var c=document.getElementById("myCanvas");
            var cxt=c.getContext("2d");
        cxt.lineWidth=10;
        cxt.strokeStyle="#ff00ff";
        cxt.beginPath();
        cxt.arc(100,100,50,90,Math.PI);
        cxt.stroke();
        }
    }
}
   
</script>