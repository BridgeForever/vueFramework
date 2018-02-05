/*
本地分页情况：需要必传columns，tableData字段，pageLength可以不必传
服务器分页情况:

*/
<style scoped>

    .page-item{
        width: 24px;
        text-align: center;
        line-height: 24px;
        border-left: 1px solid #c1c1c1;
        display: inline-block;
        cursor:pointer;
    }
    .page-item:first-child{
        border-left: none;
    }

    #c-page{
        margin-top: 10px;
        float: left;
        border: 1px solid #c1c1c1;
    }
</style>
<template>
    <div id="monitor">
    <Row style="margin:20px 0">
    <Col span="12">
     <div>
            <label>每页显示
                <Select v-model="pageSize" style="width:60px" @on-change="changePage">
                    <!--下拉选框-->
                    <Option v-for="num in pageOpts" :value="num" :key="num">{{ num }}</Option>
                </Select>
                条数据
            </label>
        </div>
    </Col>
    <Col span="12" v-if="searching">
                <div style="float: right;">
                    <span>查询:</span> <Input type="text" placeholder="请输入..." v-model="searchParm" style="width: 250px" @on-change="searchList"></Input>
                </div>
    </Col>
    </Row>
    <Table border :columns="columns" v-bind:data="fetData"></Table>
    <Page :total="totalPage" :page-size="pageSize" :current="indexPage" @on-change="setCurrentPage"  show-total :page-size-opts="pageOpts" style="marginTop:20px"></Page>
    
   
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                indexPage : 1,      
                pageData:[],
                pageOpts:[
                10,20,50,100
                ],
                pageSize:this.pageLength,
                searchParm:'',
                countPage:1,
                storeTableData:[]//记录表格数据可以修改

            }
        },
        props:{
            'columns':{
                type:Array,
                required:true
            },
            'pageLength':{
                type: Number,
               default: 10
            },
            'tableData':{
               // required:true,

            },
            'searching':{
                default:false
            },
             'async': {
                type: Boolean,
                default: false
            },
            'ajaxServer':{

            },
            'ajaxParams':{
                 type: Object,
                default: function () {
                    return {}
                }

            },
            'pageNumber':{
                type:Number,
                default:1
            },
            'successCallback':{

            },
            'errorCallback':{

            }
        },
     /*   props:[
            'columns',
            'pageLength',
            'totalPage',
            'tableData'
        ],*/
        
        computed:{ 
            
            fetData(){
                return this.pageData;
            },
            totalPage(){
                if(this.async){
                    return this.countPage
                }else{
                    return this.storeTableData.length
                }
                
            },
            changeTableData:{
                get:function(){
                    return this.storeTableData
                },
                set:function(v){
                    this.storeTableData=v;
                }
              
            }
        },
        beforeUpdate () {
          
          /*  if(this.pageData.length == 0 && this.tableData.length>0){
                this.setCurrentPage();
            }*/
            console.log("更新");
            
        },
        created(){
            if(this.async){
               // this.ajaxServer();
                this.getData();
            }
        },
        methods: {
            setCurrentPage(index){
                if(this.async){
                        this.indexPage = index?index:1;
                        this.getData();
                }else{
                     if(this.storeTableData.length>0){
                     this.indexPage = index?index:1;

                    var startPage = (Number(this.indexPage)-1)*this.pageSize;
                    var endPage = (Number(this.indexPage))*this.pageSize;
                    this.pageData = this.storeTableData.slice(startPage, endPage);
                    return this.pageData;
                    }
                }
               
               
            },
            changePage(pageSize){
                this.pageSize=Number(pageSize);
                this.setCurrentPage();
            },
            initParams(){
                this.indexPage=1;
                this.pageData=[];
            },
            searchList(e){
                 var v = e.target.value,
                 self = this;
                 var colList=this.columns;
                if (v) {
                    var ss = [];

                    // 过滤需要的数据
                    this.tableData.forEach(function (item) {
                        for(var  i=0;i<colList.length;i++){
                            if (item[colList[i].key]&&item[colList[i].key].search(v) > -1) {
                           
                            ss.push(item);
                            break;
                             }
                        }
                        
                    });
                    this.setSlist(ss); // 将过滤后的数据给了slist
                } else {
                    // 没有搜索内容，则展示全部数据
                   this.setSlist(this.tableData);
                }
            },
            setSlist(arr) {
                this.storeTableData =arr;
            },
             getData(){
               axios(this.ajaxParams).then((res)=>{ 
               console.log(res)
               this.pageData=res.data.data.rows;
               this.countPage=res.data.data.total;

               }).catch((res)=>{
                console.log(res);
               });
            }
        },
        watch:{
            tableData:function(val,oldVal){
                this.storeTableData=val;
            },
            storeTableData:function(val,oldVal){

                 this.initParams();
                if(val &&( val instanceof  Array)){

                  this.setCurrentPage();
                }
            }
        }
    }
</script>