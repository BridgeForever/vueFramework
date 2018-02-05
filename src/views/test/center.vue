<template>
    <div class="viewBox">
        <mt-header fixed title="居中">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ul>
                <li>
                    一.水平居中
                    <ul>
                        <li>
                            1.文字水平居中
                            <p>text-align:center</p>
                        </li>
                        <li>
                            2.块级元素水平居中(有宽度，不然就是父级宽度)
                            <p>(1):margin:0 auto</p>
                            <div style="background:red">
                                父级
                                <div style="margin:0 auto">子元素</div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li>
                    二.垂直居中
                    <ul>
                        <li>1.文字垂直居中:line-height
                            <p style="line-height:50px"><span>行高测试</span></p>
                        </li>
                        <li>
                            2.行内元素
                            <div style="background:yellow">
                                <img src="../main/imgs/car.png" />
                               1.块级元素里面有img等行内元素时会和下面有一点留白,verticle-align默认baseline与文字的基线对齐
                               2.verticle-align:百分比值是相对于line-height的高度
                               3.verticle-align对块级元素没有作用。
                               4.去除掉上述的空白方法：（1）设置display:block（2）设置verticle-align其他属性值（3）修改line-height的值空白就是行高和文字间的空白
                               （4）line-height为相对单位font-size间接控制
                            </div>
                        </li>
                        <li>3.块级元素
                            <p>1.定位方法(需宽度高度设置):position:absolute;top:50%;left:50%;margin-left:负宽度一半;margin-top:负高度一半</p>
                            <p>2.(需宽度高度设置)position:absolute;top:0;left:0;right:0;bottom:0;margin:auto</p>
                            <div style="position:relative;height:50px">
                                <div style="position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;background:red;width:50px;height:25px">居中</div>
                            </div>
                            <p>3.内容可变高度,不需设置固定高度:position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)</p>
                            <div style="position:relative;height:50px;background:yellow">
                                <div style="position:absolute;top:50%;left:50%;background:red;transform:translate(-50%,-50%);min-height:30px">居中</div>
                            </div>
                        </li>

                    </ul>
                </li>
                <li>3.flex布局
                    <div style="height:200px;background:blue;display:flex;display:-webkit-flex;justify-content:center">
                        <div style="height:50px;background:red;width:50px"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
</script>