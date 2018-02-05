<template>
	<div id="monitorTable">
    <Table border :columns="columns7" v-bind:data="monitor.list.topN"></Table>
     <Page v-bind:total="MONITOR_LENGTH" :page-size=50 @on-change="changePage"></Page>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '姓名',
                        key: 'snapUserFullName',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.snapUserFullName)
                            ]);
                        }
                    },
                    {
                        title: '部门',
                        key: 'snapDept'
                    },
                    {
                        title: '职位',
                        key: 'snapPost'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div',{

                            } ,[
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Dropdown',
                                {
                                	props:{
                                		trigger:"click"
                                	},
                                	on:{
                                	'on-click':()=>{
                                	window.open('http://10.64.13.23:8905/cmp/contact/api/v1/monitor/weixin/download')
                                	}
                                	},
                                	style:{marginLeft:"20px"}
                                },
                                [
                                	h('Button',{
                                		props: {
                                        type: 'primary'
                                   		 }
                                	},'下拉'),
                                	h('Dropdown-menu',
                                	{
                                		slot:"list"
                                		
                                	},[
                                	  h('Dropdown-item',{


                                	  },[
                                        h('A',{
                                        props:{
                                         href:"http://10.64.13.23:8905/cmp/contact/api/v1/monitor/weixin/download"
                                        },
                                        style:{
                                            color:'red'
                                        }


                                        },'下载')
                                      ],
                                	  '下拉项')
                                	])
                                ])

                            ]);
                        }
                    }
                ],
                dataList: [
                ]
            }
        },
        
        computed:{
        	...mapState([
        	'monitor'
        	]),
        	...mapGetters([
            'MONITOR_LENGTH'
            ])
        },
        created(){
        	this.getData();
        },
        methods: {
        	...mapMutations([
        	]),
        	...mapActions([
        	'fetchMonitorListAction'
        	]),
            show (index) {
               /* this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                }) */
            },
            remove (index) {
               // this.data6.splice(index, 1);
            },
            getData(){
            	this.fetchMonitorListAction()
            },
            changePage(page){

            }
        }
    }
</script>