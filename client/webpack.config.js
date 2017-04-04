var path    = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval", //"eval" (DEV) || "source-map" (PROD)
    entry: "./dev/js/main.js",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.join(__dirname, "../public/js"),
        filename: "bukomark.js"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
    ]
};