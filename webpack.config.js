let path = require("path");
let Hwp = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "build.js",
        path: path.join(__dirname,"/dist")
    },
    devServer:{
        open: true,
        port: 5000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new Hwp({
            template:"./src/index.html",
            filename: "index.html"
        })
    ]
};