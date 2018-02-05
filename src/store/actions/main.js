import axios from 'axios';
import config from '../../libs/config.js';
import http from '../../libs/util.js';
import * as types from '../constants/types.js';
import { Toast } from 'mint-ui';
export const mainActions = {
    fetchMainAction({ commit, state, dispatch }, params) {
        // axios('/processForm/processCount', config).then((res) => {
        //     if (res.data && res.data.code == 400) {
        //         commit(types.CHANGE_MAIN_COUNT, {
        //             data: res.data
        //         });
        //     }

        // }).catch((error) => {
        //     console.log(error);
        // });
        http.post('/processForm/processCount', params).then((res) => {
            if (res.data && res.data.code == 200) {
                commit(types.CHANGE_MAIN_COUNT, {
                    data: res.data
                });
            }
        }).catch((res) => {
            Toast('网络错误，请检查网络');
        });
    }
};