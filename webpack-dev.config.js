const webpack = require('webpack');
const path = require('path');

const APP_ENTRY = path.join(__dirname, 'src/index.jsx');
const BG_DIR = /src\/background/
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, '/extension/build');

const config = {
    devtool: 'source-map',
    entry: APP_ENTRY,
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test : /\.(js|jsx)$/,
                exclude: [/node_modules/, BG_DIR],
                include: APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                exclude: BG_DIR,
                use: [ 'style-loader', 'css-loader' ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config;