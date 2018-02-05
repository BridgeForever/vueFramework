const path = require('path');
const webpack = require('webpack');
// 将css独立引入变成link标签形式, 使用该插件需要独立下载'npm install extract-text-webpack-plugin --save-dev', 同时下面的rules也必须更改
// 样式从js文件中分离出来
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {

        main: ["babel-polyfill", './src/main'],
        vendors: './src/vendors'
    },
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        // css-loader能够使用类似@import和url()的方法实现require()的功能
        // style-loader将所有计算后的属性加入页面中
        // 二者组合使用可以把样式表嵌入打包后的js中
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // 提取css
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'autoprefixer-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract("css-loader!sass-loader")

                    }
                }
            },
            {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    // 解析css, 并把css变成文件通过link标签引入
                    use: ['css-loader?minimize', 'sass-loader', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                //把较小的图片转换成base64的字符串内嵌在生成的js文件里
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
};