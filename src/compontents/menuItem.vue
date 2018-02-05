<template>
     <div >
                     <Menu-item v-bind:name="menuItem.menuName"  :key="index" v-for="(menuItem,index) in menuList" v-if="menuItem.menuList.length==0" >
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text"  >{{menuItem.menuItemName}}</span>
                           
                     </Menu-item>
                     <Submenu v-bind:name="menuItem.menuName" v-else>
                            <template slot="title">
                                <Icon type="stats-bars"></Icon>
                                {{menuItem.menuItemName}}
                            </template>
                            <menuLi :menuList='menuItem.menuList'> </menuLi>
                  
                    </Submenu>
     </div>
</template>
<script>
import {menuConfig} from'../menu.config';
import menuLi from'./menuItem';
    export default{
        data(){
            return {

            }
        },
        name:'menuLi',
        components:{
            menuLi
        },
        props:["menuList"],
        computed:{ iconSize () {
                        return this.spanLeft === 5 ? 14 : 24;
                    },
        },
        methods:{

        }
    }
</script>