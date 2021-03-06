var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                options: {
                    presets: ['env'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')] // added
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    name: utils.assetsPath('img/[name].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    name: utils.assetsPath('media/[name].[ext]')
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    name: utils.assetsPath('fonts/[name].[ext]')
                    // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')

                    // name: "static/fonts/[name].[ext]",
                },
            },
            // {
            //   test: /\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/,
            //   loader: 'url-loader',
            //   options: {
            //     limit: 10000,
            //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //   }
            // }
        ]
    }
}
