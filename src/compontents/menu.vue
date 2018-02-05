<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height:800px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div id="myMenu">
        <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
            <Row type="flex">
                <i-col :span="spanLeft" class="layout-menu-left">
                    <Menu v-bind:active-name="activeMenuItem" theme="dark" width="auto" @on-select="changeRoute" ref="left_menu" accordion >
                         <div class="layout-logo-left"></div>

                        <ownMenuItem :menuList="menuList"></ownMenuItem>
                      
                    </Menu>
                </i-col>
                <i-col :span="spanRight">
                    <div class="layout-header">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </div>
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="pathItem.href" v-for="pathItem in menu.pathNav">{{pathItem.name}}</Breadcrumb-item>

                        </Breadcrumb>
                    </div>
                    <div class="layout-content">
                        <router-view></router-view>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import {menuConfig} from '../menu.config';
import ownMenuItem from './menuItem';
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                activeMenu:"monitor",
                url:'/monitor'
            }
        },
        computed:( {
                    iconSize () {
                        return this.spanLeft === 5 ? 14 : 24;
                    },
                   ...mapState([
                    'menu'
                   ]),

                   menuList(){
                        return menuConfig.menuList;
                   },
                   activeMenuItem(){
                        const active=this.$route.query.name||'monitor';
                        return this.activeMenu=active;
                   }


         }),
        components:{
            ownMenuItem
        },
        created(){
            this.getMenuList();
           
            
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            getMenuList(){
                //this.$store.dispatch('fetchMenuAction');
               // this.$store.commit('CHANGE_MENU_LIST', menuConfig.menuList);
            },
            changeRoute(name){
                console.log(name);
                this.$router.push({name:name,query:{name:name}});
                 this.$store.commit('CHANGE_MENU_ACTIVE', name);
            }

        },
        filters:{
            menuResult(){
                console.log(1111)
            }
        }
    }
</script>