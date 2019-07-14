let express = require("express");
let app = express();
// 引入webpack
let webpack = require("webpack");
// 引入中间件
let middle = require("webpack-dev-middleware");
let config = require("./webpack.base.js/index.js");
let compiler = webpack(config);
app.use(middle(compiler));

app.get("/user",(req,res)=>{
    res.json({name:"yhy"})
})
app.listen(3000)
