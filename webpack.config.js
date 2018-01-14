const webpack =  require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        verndor: ['react', 'react-dom'],
        index: [
            'babel-polyfill',
            'react-hot-loader',
            './index.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
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
    devServer: {
        inline: true,
        port: 3000
    }
}