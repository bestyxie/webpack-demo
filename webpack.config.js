var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    devtool: "inline-source-map",/*设置开发环境，使得debug的时候浏览器可以通过sourcemap文件得知错误确切出现在那个文件*/
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "web app"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    }
}