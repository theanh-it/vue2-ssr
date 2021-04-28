const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base.config')
const ClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = webpackMerge(base, {
    devtool: process.env.NODE_ENV === 'production' ? false : "inline-source-map",
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: { 
        client: [
            path.resolve(__dirname, '../src/client-entry.js')
        ],
        // "core-entry": [
        //     path.resolve(__dirname,"../public/fontawesome/css/fontawesome.min.css"),
        //     //path.resolve(__dirname,"../public/bootstrap/dist/css/bootstrap.min.css"),
        //     //path.resolve(__dirname,"../public/css/core.css")
        // ]
    },
    plugins: [
        new ClientPlugin(),
        new HtmlWebpackPlugin({
            //favicon: "../public/img/logo.png",
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
            minify: {
                html5                           : true,
                collapseWhitespace              : true,
                minifyCSS                       : true,
                minifyJS                        : true,
                minifyURLs                      : true,
                removeAttributeQuotes           : true,
                removeComments                  : true, // false for Vue SSR to find app placeholder
                removeEmptyAttributes           : true,
                removeOptionalTags              : true,
                removeRedundantAttributes       : true,
                removeScriptTypeAttributes      : true,
                removeStyleLinkTypeAttributese  : true,
                useShortDoctype                 : true,
                caseSensitive                   : true,
                keepClosingSlash                : true,
                sortAttributes                  : true,
                sortClassName                   : true,
                trimCustomFragments             : true
            }
        })
    ]
})