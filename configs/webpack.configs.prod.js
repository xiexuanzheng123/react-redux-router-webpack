const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: [
            'babel-polyfill',
            './index.js'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin(),//compress the file, 
        new HtmlWebpackPlugin({
            title: 'index',
            minify: {
                collapseWhitespace: false,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'list',
            minify: {
                collapseWhitespace: false,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: 'list.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: false
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]',  // [name]__[local]--[hash:base64:5] -> name: module name, local: original name
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
}