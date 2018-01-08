/**
 * Created by admin on 2018/1/5.
 */
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
        	sourceMap: true
        })
    ]
})