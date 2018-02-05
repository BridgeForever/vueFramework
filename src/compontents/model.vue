<template>
	<div>
	<p>{{title}}</p>
    <Button type="primary" @click="modal = true">子对话框</Button>
    <Modal
        v-model="modal"
        title="子对话框"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               modal:true
            }
        },
        props:[
        'title',
        'modal1'
        ],

        methods: {
            ok () {
               // this.$Message.info('点击了确定');
                this.$emit('myClick');
                this.$emit('clickSure')
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>