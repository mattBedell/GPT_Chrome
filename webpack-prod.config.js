const webpack = require('webpack');
const path = require('path');

const APP_ENTRY = path.join(__dirname, 'src/index.jsx');
const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, '/extension/build');

const config = {
    devtool: 'source-map',
    entry: APP_ENTRY,
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
                include: APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [ 'style-loader', 'css-loader' ],
            },
        ]
    }
}

module.exports = config;