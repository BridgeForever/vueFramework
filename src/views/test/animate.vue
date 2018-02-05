<template>
    <div class="viewBox">
         <mt-header fixed title="float">
            <router-link to="test" slot="left">
                <mt-button icon="back">css3动画</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ul>
                <li>
                    1.rotate
                    <div style="width:50px;height:50px;background:red">
                        旋转
                    </div>
                    <div style="width:50px;height:50px;background:red;transform:rotate(30deg)">
                        旋转
                    </div>
                </li>
                <li>2.translate
                    <div style="width:50px;height:50px;background:yellow;transform:translate(10px,10px)">
                        移动
                    </div>
                    测试移动占不占位置
                </li>
                <li>3.skew
                    <div style="width:50px;height:50px;background:yellow;transform:skew(-30deg,20deg)">
                        翻转
                    </div>
                </li>
                <li>多列
                    <div style="background:yellow;column-count:2;column-gap:20px">
                        <img src="../main/imgs/car.png" />

                        <img src="../main/imgs/car.png" />
                        <img src="../main/imgs/car.png" />
                        <img src="../main/imgs/car.png" />
                        <img src="../main/imgs/car.png" />
                    </div>
                </li>
                <li>
                    <div class="animateBox">
                    <div style="background:yellow;height:150px;width:150px;" class="animate">
                        <div style="width:150px;height:150px;background:red">1</div>
                        <div style="width:150px;height:150px;background:#f44336">2</div>
                        <div style="width:150px;height:150px;background:#ff00ff">3</div>
                        <div style="width:150px;height:150px;background:#eeffdd">4</div>
                        <div style="width:150px;height:150px;background:#000fff">5</div>
                        <div style="width:150px;height:150px;background:#f00ff0">6</div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.animateBox{
 perspective: 800px;
}
.animate{
    position: relative;
    transform-style: preserve-3d;
   
    animation:rotate linear 4s infinite;

}
.animate>div{
    position: absolute;
}
.animate>div:first-child{
transform:rotateY(90deg) translateZ(-75px);
}
.animate>div:nth-child(2){
    transform:rotateY(90deg) translateZ(75px);
    /* transform: translateX(-75px) */
}
.animate>div:nth-child(3){
    transform:rotateX(90deg) translateZ(-75px);
     /* transform: translateX(75px) */
}
.animate>div:nth-child(4){
    transform:rotateX(90deg) translateZ(75px);
     /* transform: translateX(75px) */
}
.animate>div:nth-child(5){
    transform:translateZ(-75px);
     /* transform: translateX(75px) */
}
.animate>div:last-child{
    transform:translateZ(75px)
}
@keyframes rotate {
   0%{transform:rotateX(0deg);}
100%{transform:rotateX(360deg) ; }
}
</style>
<script>
</script>