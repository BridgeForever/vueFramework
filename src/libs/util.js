import axios from 'axios';
import env from '../config/env';
import config from './config.js';
axios.defaults.baseURL = env === 'development' ?
    'http://cmp.changan-car.com:9094/cmpportal/weixin/qtms' :
    env === 'production' ?
    'http://cmp.changan-car.com:9094/cmpportal/weixin/qtms' :
    'http://10.17.5.99:8400/qtm/weixin/qtms';

export default {
    post(url, params) {
        config.method = 'post';
        config.data = Object.assign(config.data, params);
        return new Promise(function(resolve, reject) {
            axios(url, config).then((res) => {
                resolve(res);
            }).catch((res) => {
                reject(res);
            })
        })
    },
    get(url, params) {
        config.method = 'get';
        return new Promise(function(resolve, reject) {
            axios(url, config).then((res) => {
                resolve(res);
            }).catch((res) => {
                reject(res);
            })
        })

    }
}