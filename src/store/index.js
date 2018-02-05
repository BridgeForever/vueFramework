import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import main from './modules/main';
const store = new Vuex.Store({
    modules: {
        main,
    }
});
export default store;