<template>
    <div class="viewBox">
       <mt-header fixed title="原型">
            <router-link to="test" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content"></div>
    </div>
</template>
    
<script>
export default {
    created(){
        const data={
            name:'张三'
        };
        this.observe(data);
        console.log(data.name);
        data.name="李四";
    },
    methods:{
        observe(data){
            const me = this;
            if(!data || typeof data !== 'object'){
                return ;
            }
            Object.keys(data).forEach(function(key){
                me.defineReactive(data, key, data[key]);
            })
        },
        defineReactive(data, key, val){
            this.observe(val);
            Object.defineProperty(data, key, {
                enumerable:true,
                configurable:false,
                get:function(){
                    console.log('得到get值',val);
                    return val;

                },
                set:function(newVal){
                    console.log('监听值变化了',val,'----->',newVal);
                    val=newVal;
                }
            })
        },
        dep(){
            function Dep(){
                this.subs = [];
            }
            Dep.prototype = {
                addSub:function(sub){
                    this.subs.push(sub);
                },
                notify:function(){
                    this.subs.forEach(function(sub){
                        sub.update();
                    })
                }
            }
            return Dep;
        },
        watcher(){
            function Watcher(vm, exp, cb){
                this.cb=cb;
                this.vm=vm;
                this.exp=exp;
                this.value=this.get();
            }
            Watcher.prototype={
                update:function(){
                    this.run();
                },
                run:function(){
                    var value=this.get();
                    var oldVal=this.value;
                    if(value!=oldVal){
                        this.value=value;
                        this.cb.call(this.vm, value, oldVal);
                    }
                },
                get:function(){
                    this.dep().Dep.target=this;
                    var value=this.vm[exp];
                    this.dep().target=null;
                    return value;
                }
            }
            return Watcher;
        }
    }
}
</script>
    
<style>

</style>
    