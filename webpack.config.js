/**
 * Created by Yeji Lee on 2017-02-12.
 */
module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer : {
        inline : true,
        port : 7777,
        contentBase : __dirname,
        historyApiFallback: true
    }
};