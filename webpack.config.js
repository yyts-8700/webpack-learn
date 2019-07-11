var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
	template : path.join(__dirname,'./src/index.html'),  //源文件位置
	filename : 'index.html'      //生成的内存中首页名称
})
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// let MiniCssExtractPluginless = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    plugins:[
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    module:{ // 模块
        rules:[  //规则
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.less/,
                use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
            }
        ]
        
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,"hahaha")
    },
    devServer:{ //开发服务器配置
        port: 4500,
        progress: true,
        // contentBase: "./hahaha",
        open: true
    }
}