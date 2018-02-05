// var user = window.localStorage && window.localStorage.wxUserInfo && JSON.parse(window.localStorage.wxUserInfo);
import Qs from 'qs';
export default {
    baseURL: 'http://cmp.changan-car.com:9094/cmpportal/weixin/qtms',
    method: 'POST',

    transformRequest: [function(data) {
        //为了避免qs格式化时对内层对象的格式化先把内层的对象转为

        //由于使用的form-data传数据所以要格式化
        data = Qs.stringify(data);
        return data;
    }],


    transformResponse: [function(data) {

        return data;
    }],

    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },


    params: {

    },


    paramsSerializer: function(params) {
        return Qs.stringify(params)
    },


    data: {
        userId: '15826406072'
    },


    timeout: 1000,


    withCredentials: false, // default


    responseType: 'json', // default



    onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },


    onDownloadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },


    maxContentLength: 2000,


    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },


    maxRedirects: 5, // default
};