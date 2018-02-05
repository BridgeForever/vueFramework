import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router/index';
import store from './store/index';
import App from './app.vue';
import './libs/common.css';
Vue.use(VueRouter);
Vue.use(MintUI);
router.beforeEach((to, from, next) => {
    next();
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});