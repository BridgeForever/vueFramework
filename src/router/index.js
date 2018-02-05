import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routers = [{
    path: '/index',
    name: 'index',
    component: (resolve) => require(['../views/main/index.vue'], resolve)
}, {
    path: '/addQuestion',
    name: 'addQuestion',
    component: (resolve) => require(['../views/question/addQuestion.vue'], resolve)
}, {
    path: '/float',
    name: 'float',
    component: (resolve) => require(['../views/test/float.vue'], resolve)
}, {
    path: '/test',
    name: 'test',
    component: (resolve) => require(['../views/test/test.vue'], resolve)
}, {
    path: '/center',
    name: 'center',
    component: (resolve) => require(['../views/test/center.vue'], resolve)
}, {
    path: '/animate',
    name: 'animate',
    component: (resolve) => require(['../views/test/animate.vue'], resolve)
}, {
    path: '/canvas',
    name: 'canvas',
    component: (resolve) => require(['../views/test/canvas.vue'], resolve)
}, {
    path: '/prototype',
    name: 'prototype',
    component: (resolve) => require(['../views/test/prototype.vue'], resolve)
}, {
    path: '/vue',
    name: 'vue',
    component: (resolve) => require(['../views/test/vue.vue'], resolve)
}, {
    path: '/list',
    name: 'list',
    component: (resolve) => require(['../views/test/list.vue'], resolve)
}];

// 路由配置
const RouterConfig = {
    routes: routers
};
const router = new VueRouter(RouterConfig);

export default router;