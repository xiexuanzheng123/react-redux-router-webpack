const webpack =  require('webpack');
const path = require('path');
const colors = require('colors');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',//source-map可以追溯错误位置
    entry: {
        vendor: [
            'react', 
            'react-dom', 
            'whatwg-fetch'
        ],//compress the file
        index: [
            'babel-polyfill',
            'webpack-hot-middleware/client?reload=true',
            'react-hot-loader',
            './index.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist')//__dirname: 文件所在的完整目录
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_models|browser_components)/,
                use: { 
                    loader: 'babel-loader'
                }
                    
            },
            {
                test: /\.css$/,
                use: [//需要的loader
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourceMap: true,
                        //     importLoaders: 1,
                        //     localIdentName: '[name].[local]',
                        //     modules: true
                        // }
                    }
                ]
            },{
                test: /\.(jpe?g | png | gif | svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//hot replace
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ //generate index.html and inject the css and js file
            title: 'index',
            hash: true,//
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            },
            chunks: ['index'],
            filename: 'index.html',
            template: './index.html',
            favicon: './src/images/react.jpg'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    // devServer: {
    //     inline: true,
    //     port: 3000
    // }
}