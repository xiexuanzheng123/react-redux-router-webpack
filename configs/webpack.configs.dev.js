const webpack =  require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        verndor: ['react', 'react-dom', 'whatwg-fetch'],
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
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_models|browser_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
                    
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './index.html'
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