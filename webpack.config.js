const path = require("path")
const HtmlWebpackPlutin = require("html-webpack-plugin")
// const CleanWebpackPlugin = require("clean-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {BannerPlugin} = require("webpack")
module.exports = {
    devServer:{
        port:8000,  //启动端口号修改
        progress:true, //内存中打包，希望有进度条
        open:true,  //打开浏览器
    },
    mode: "production",
    entry:{
        index: "./src/index.js",
    },
    watch:true,
    watchOptions:{ // 监控打包的选项
        poll: 1000, // 每秒监听多少次
        aggregateTimeout: 500, // 当第一个文件更改了，在重新构建之前增加延迟，俗称防抖,单位毫秒
        ignored: /node_modules/ // 不需要监听的文件
    },
    output:{
        filename: "[name].js",
        path: path.join(__dirname,"/dist")
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins:[
        // 清空地址取决于webapck的output中的path
        new HtmlWebpackPlutin({
            template:"./index.html",
            filename: "nnoo.html",
        }),

        new CopyPlugin([
            {from:'./doc',to:"./"}
        ]),
        new CleanWebpackPlugin(),
        new BannerPlugin("contribute by yhy 2019/7/12:15:14")
    ]
}