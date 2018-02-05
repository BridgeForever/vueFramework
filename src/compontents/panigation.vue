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
	<div id="page">
    <Page :total="totalPage" :page-size="pageSize" @on-change="setCurrentPage" show-sizer show-total @on-page-size-change="changePage" :page-size-opts="pageOpts"></Page>
    
   
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data () {
            return {
                indexPage : 0,      
                pageData:[],
                pageOpts:[
                10,20,50,100
                ],
                pageSize:this.pageLength,
                totalPage:this.tableData.length

            }
        },
        computed:{
            
        },
        props:[
            'pageLength',
            'tableData'
        ],
        
        computed:{ 
            
            fetData(){
                return this.pageData;
            }
        },
        beforeUpdate () {
        debugger
            if(this.pageData.length == 0 && this.tableData.length>0){
                this.setCurrentPage();
            }
        },
        methods: {
            setCurrentPage(index){
                this.indexPage = index?index:1;
                var startPage = (Number(this.indexPage)-1)*this.pageSize;
                var endPage = (Number(this.indexPage))*this.pageSize;
                this.pageData = this.tableData.slice(startPage, endPage);
                return this.pageData;
            },
            changePage(pageSize){
                this.pageSize=Number(pageSize);
                this.setCurrentPage();
            }
        }
    }
</script>