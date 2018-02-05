<style lang="sass" scoped >

	 #mainIndex #questionContent {
        padding: 3px;
    }

    #mainIndex #questionContent>div {
        width: 50%;
        float: left;
        text-align: center;
        padding: 3px;
    }


    #mainIndex #questionContent>div>div {
        padding: 0px 13px;
        background: #fff;
        height: 75px;
        font-size: 14px;
        color: #333;
    }

    #mainIndex #questionContent img {
        vertical-align: top;
        margin-top: 17px;
    }

    #mainIndex .clearfix:after {
        height: 0px;
        display: block;
        content: "";
        clear: both;
    }

    #mainIndex #funcContent {
        margin-bottom: 4px;
        background: #fff;
    }

    #mainIndex #funcNavi {
        padding: 10px 0px 20px;
    }

    #mainIndex #funcNavi>div {
        width: 33.3%;
        text-align: center;
        background: #fff;
        float: left;
        color: #666;
        font-size: 12px;
    }

    #mainIndex #funcNavi>div:nth-child(2) {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }

    #mainIndex .hide {
        visibility: hidden;
    }

    #mainIndex #questionContent .name {
        display: inline-block;
        width: 85px;
        word-wrap: break-word;
        line-height: 20px;
        height: 75px;
        position: relative;
        font-size: 0;
        /*text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
       */
    }
    #mainIndex #questionContent .icon{
        width:35px;
        height: 35px;
        display: inline-block;
        vertical-align: middle;
        background:url('imgs/css_sprites.png') no-repeat;
        background-size: 132px;
    }
    #mainIndex #questionContent .icon.saleIcon{
        background-position: -5px -5px;
    }
    #mainIndex #questionContent .icon.seviceIcon{
        background-position: -48px -5px;
    }
    #mainIndex #questionContent .icon.channelIcon{
        background-position: -92px -5px;
    }
    #mainIndex #questionContent .icon.marketIcon{
        background-position: -5px -48px;
    }
    #mainIndex #questionContent .icon.trainIcon{
        background-position: -48px -48px;
    }
    #mainIndex #questionContent .icon.productIcon{
        background-position: -92px -48px;
    }
    #mainIndex #questionContent .icon.synIcon{
        background-position: -5px -92px;
    }
    #mainIndex #questionContent .icon.sysIcon{
        background-position: -48px -92px;
    }
    #mainIndex #questionContent .name>span {
        vertical-align: middle;
        display: inline-block;
        font-size: 14px;
    }

    #mainIndex #questionContent .name:after {
        content: '';
        width: 0;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }

    #mainIndex .scrollWrap {
        height: 100%;
        /* position: absolute;
        top: 0px;
        left: 0px; */
        overflow: hidden;
        /* margin-top: 50px;*/
        width: 100%;
    }
    #mainIndex .report-link{
        height:50px;
        width:50px;
        display: inline-block;
        float: right;
        background: no-repeat url(imgs/icon-report.png);
        background-position:center;
        background-size: 28px;
    }
</style>
<template>
	<div class="viewBox">
		<div id="mainIndex">
			<mt-header fixed title="首页" >
				<router-link to="test" slot="right">
					 <mt-button >基础</mt-button>
				</router-link>
			</mt-header>
			<div class="content">
						<div class="scrollWrap">
							<div class="scroller">
								
									<div class="contentWrap" >
											<div id="funcContent">
													<div class="navigate-img">
															<img src="../main/imgs/top.png" width="100%" style="margin-top:-1px" />
													</div>
													<div id="funcNavi" class="clearfix">
															<div class="myPropose">
																	<div style="font-size:22px;color:#f76024" class="proposeNumber">{{mainCount && mainCount.applayCount || 0}}</div>
																	<div style="margin-top:10px">我的发起</div>
															</div>
															<div class="myDeal">
																	<div style="font-size:22px;color:#31c97c" class="dealNumber">{{ mainCount && mainCount.toDoCount || 0}}</div>
																	<div style="margin-top:10px">待办/已办</div>
															</div>
															<div class="myNotification">
																	<div style="font-size:22px;color:#03d0e8" class="noticeNumber">{{ mainCount && mainCount.notifyCount || 0}}</div>
																	<div style="margin-top:10px">我的知会</div>
															</div>
													</div>
											</div>
											<div id="questionContent" class="clearfix">
													<div>
															<div menuId="1" class="menuItem"  @click="goPage">
																	<div class="icon saleIcon"></div>
																	<div class="name">
																			<span>销售问题反馈</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="2" class="menuItem"  @click="goPage">
																	<div class="icon seviceIcon"></div>
																	<div class="name">
																			<span>服务问题反馈</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="3" class="menuItem"  @click="goPage">
																	<div class="icon channelIcon"></div>
																	<div class="name">
																			<span>渠道问题反馈</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="7" class="menuItem"  @click="goPage">
																	<div class="icon marketIcon"></div>
																	<div class="name">
																			<span>市场问题反馈</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="5" class="menuItem"  @click="goPage">
																	<div class="icon trainIcon"></div>
																	<div class="name">
																			<span> 培训问题反馈</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="6" class="menuItem"  @click="goPage">
																	<div class="icon productIcon"></div>
																	<div class="name">
																			<span>产品改款建议</span>
																	</div>
															</div>
													</div>
													<div>
															<div menuId="4" class="menuItem"  @click="goPage">
																	<div class="icon synIcon"></div>
																	<div class="name">
																			<span>综合问题反馈</span>
																	</div>
															</div>
													</div>
													
													<div>
															<div menuId="8" class="menuItem"  @click="goPage">
																	<div class="icon sysIcon"></div>
																	<div class="name">
																			<span>系统问题反馈</span>
																	</div>
															</div>
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
		</div>
		<!-- <mt-loadmore :top-method="loadTop" ref="loadmore" >
		  <ul>
		    <li v-for="(item,index) in list" :key="index">{{ item }}</li>
		  </ul>
		</mt-loadmore> -->
	</div>
</template>
<script>

import {mapState, mapMutaions, mapActions} from 'vuex';
import {Toast} from 'mint-ui';
	export default {
		beforeCreated(){
			console.log('创建之前'+this.test);
		},
		created(){
			//data属性可以访问
			this.getCount({});
			console.log('创建'+this.test +'el'+this.$el);
			console.log('组件this'+this);
		},
		beforeMount(){
			console.log('beforemount'+this.test+'el'+this.$el);
		},
		mounted(){
			//
			console.log('mounted'+this.test+'el'+this.$el);
		},
		beforeUpdate(){
			console.log('beforeupdate');
		},
		updated(){
			console.log('updated');
		},
		beforeDestroy(){
			console.log('beforedestroy');
		},
		destroyed(){
			console.log('destory');
		},
		data (){
			return {
				test:'数据数据'
			}
		},
		computed:{
			...mapState([
				'mainCount'
			])
		},
		methods:{
			...mapActions({
				getCount: 'fetchMainAction',
			}),
			goBack(){

			},
			goPage(event){
				const target=event.currentTarget;
				//const menuid=target.attributes['menuid'];
				//const menuName=target.getElementsByTagName('span').innerHTML;
				const menuid='1';
				const menuName='销售问题反馈';
				this.$router.push({name:'addQuestion',query:{menuid:menuid,menuName:menuName}});
			}
		}
	}
</script>