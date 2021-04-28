const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base.config')
const externals = require('webpack-node-externals')
const ServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = webpackMerge(base, {
    mode: "production",
    entry: {
        server: [
            path.resolve(__dirname, '../src/server-entry.js')
        ],
    },
    externals: [externals()],
    target: 'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new ServerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: path.resolve(__dirname, '../public/index.ssr.html'),
            excludeChunks: ['server'],
            hash: true,
            minify: {
                html5                           : true,
                collapseWhitespace              : true,
                minifyCSS                       : true,
                minifyJS                        : true,
                minifyURLs                      : true,
                removeAttributeQuotes           : true,
                removeComments                  : false, // false for Vue SSR to find app placeholder
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