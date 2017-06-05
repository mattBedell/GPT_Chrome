const webpack = require('webpack');
const path = require('path');

const BG_ENTRY = path.join(__dirname, 'src/bg.js');
const BUILD_DIR = path.join(__dirname, '/build');

const config = {
    devtool: 'source-map',
    entry: [BG_ENTRY],
    output: {
        path: BUILD_DIR,
        publicPath: '/build',
        filename: 'bg.js',
    },
    module: {
        loaders: [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
        ]
    }
}

module.exports = config;