const path = require("path")
const HtmlWebpackPlutin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require("webpack")
module.exports = {
    // mode: "development",
    entry:{
        index: "./src/index.js",
    },
    output:{
        filename: "main.js",
        path: path.join(__dirname,"/dist")
    },
    // watch:true,
    // watchOptions:{ // 监控打包的选项
    //     poll: 1000, // 每秒监听多少次
    //     aggregateTimeout: 500, // 当第一个文件更改了，在重新构建之前增加延迟，俗称防抖,单位毫秒
    //     ignored: /node_modules/ // 不需要监听的文件
    // },
    devServer:{
        port: 5000,
        open: true
    },
    resolve:{// 解析配置的意思
        modules: [path.resolve("node_modules")],//表示引入第三方包时，只从这个文件里找
        alias: { // 别名
            bootstrap: 'bootstrap/dist/css/bootstrap.css' //前面是后面的别名
        },
        mainFields:["style","main"], //有一些第三方模块会针对不同环境提供几分代码，该配置决定先采用哪份代码
        extensions:[".js",".css"] // 省略后缀，有顺序问题，优先找写在前面的，找不到才会寻找下一个
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
            },
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            DEV: JSON.stringify("dev"),
            hello: "true"
        }),
        new HtmlWebpackPlutin({
            template:"./src/index.html",
            filename: "index.html",
        }),

        // new CopyPlugin([
        //     {from:'./doc',to:"./"}
        // ]),
        // 清空地址取决于webapck的output中的path
        new CleanWebpackPlugin(),
        // new webpack.BannerPlugin("contribute by yhy 2019/7/12:15:14")
    ]
}