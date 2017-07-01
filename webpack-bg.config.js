const webpack = require('webpack');
const path = require('path');

const BG_ENTRY = path.join(__dirname, 'src/background/bg.js');
const BUILD_DIR = path.join(__dirname, '/extension/build');

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
                use: {
                    loader : 'babel-loader',
                    options: {
                        presets: ['es2015' ,'stage-0'],
                    }
                }
            },
        ]
    }
}

module.exports = config;