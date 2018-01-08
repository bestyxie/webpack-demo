/**
 * Created by admin on 2018/1/5.
 */
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "Production"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}