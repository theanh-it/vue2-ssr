const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        publicPath: "/",
        filename: 'js/[name].bundle.js?v=[hash:8]',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import']
                    },
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css'   : [
                            process.env.NODE_ENV !== 'production' ? 'css-loader' : MiniCssExtractPlugin.loader,
                        ],
                        'scss'  : [
                            process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass'  : [
                            process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            { 
                test: /\.(scss|sass)$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: '../dist/fonts',    // where the fonts will go
                    publicPath: '/public/fonts'       // override the default path
                }
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: '../dist/fonts',    // where the fonts will go
                    publicPath: '/public/fonts/'       // override the default path
                }
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css?v=[hash:8]"
        })
    ]
}