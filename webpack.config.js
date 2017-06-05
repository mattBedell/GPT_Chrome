const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_ENTRY = path.join(__dirname, 'src/index.jsx');
const BG_ENTRY = path.join(__dirname, 'src/bg.js');
const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, '/build');

const config = {
    devtool: 'source-map',
    entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            APP_ENTRY,
            BG_ENTRY
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/build',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [ 'style-loader', 'css-loader' ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config;