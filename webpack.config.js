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
    plugins:[
        new Hwp({
            template:"./src/index.html",
            filename: "index.html"
        })
    ]
};