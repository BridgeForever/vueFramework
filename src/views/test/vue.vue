<template>
     <div class="viewBox">
       <mt-header fixed title="vue练习">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ul>
                <li>1.Vue.nextTick()数据更新后的回调
                    <div>{{msg}}</div>
                    <div @click="updateMsg">更新数据</div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Vue from 'vue';
    export default{
        data(){
            return {
                msg:"hello"
            }
        },
        computed:{

        },
        methods:{
            updateMsg(){
                debugger
                console.log(Vue);
                this.msg="hello world";
                Vue.nextTick(function(){
                    Toast('msg数据更新了');
                })
            }
        }
    }
</script>
