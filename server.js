var express = require("express");
var webpack = require("webpack");
var WebpackDevMiddleware = require("webpack-dev-middleware");

var app = express();
var config = require("./webpack.config");
var compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, function(){
    console.log("server is listening on port 3000");
})