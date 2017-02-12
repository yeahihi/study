/**
 * Created by Yeji Lee on 2017-02-12.
 */
module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        filename: 'bundle.js'
    },
    module :{
        loaders : [{
            test : /\.hbs$/, // 모든 js 파일을 뒤지겠다는 의미, 정규식
            loader : 'handlebars-loader'
        }, {
            test :/\.js$/,
            loader : 'babel-loader',
            exclude : /node_modules/,
            query : {
                presets : ['es2015']
            }// 옵션
        }] // 여러개의 로더를 로딩할 수 있음.
    },
    devServer : {
        inline : true,
        port : 7777,
        contentBase : __dirname,
        historyApiFallback: true
    }
};