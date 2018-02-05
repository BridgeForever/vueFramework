const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    // hash值任何一个文件修改都会影响所有文件的hash，所有文件的hash是一样的，上线后，另外两个文件的浏览器缓存也全部失效。
    //chunkhash是根据具体模块文件的内容计算所得的hash值，所以某个文件的改动只会影响它本身的hash指纹，不会影响其他文件,每个文件的hash指纹都不相同，上线后无改动的文件不会失去缓存
    //hash可以作为版本控制的一环，将其作为编译输出文件夹的名称统一管理
    //webpack将style视为js的一部分，所以在计算chunkhash时，会把所有的js代码和style代码混合在一起计算,所以不论是单独修改了js代码还是style代码，编译输出的js/css文件都会打上全新的相同的hash指纹。
    //如何做到修改了js或css只修改相应文件的hash？
    output: {
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // 把入口文件vendors数组指定的第三方包打包成verdors.js
            name: 'vendors',
            filename: 'vendors.[chunkhash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            // 用于生成html文件，可定义多个 
            filename: '../index_prod.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ]
});