/**
 * Created by admin on 2018/1/5.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    }
})