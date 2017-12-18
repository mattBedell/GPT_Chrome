const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const merge = require('webpack-merge');

const SCRIPTS_DIR = path.join(__dirname, 'src/scripts');
const EXTENSION_DIR = path.join(__dirname, 'extension/dist');

const POPUP_ENTRY = path.join(__dirname, 'src/index.jsx');


const production = {
  devtool: 'source-map',
  plugins: [
    new MinifyPlugin({}, { test: /\.(js|jsx)$/i }),
  ]
}

const hot = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server'
  ],
  output: {
    publicPath: '/dist',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [["es2015", {"modules": false}]],
          plugins: ["react-hot-loader/babel"]
        }
      }]
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};

const scripts = {
  devtool: 'eval-source-map',
  entry: {
    background: `${SCRIPTS_DIR}/background.js`,
    inject_script: `${SCRIPTS_DIR}/inject_script.js`,
  },
  output: {
    path: EXTENSION_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
        }
      }],
    }],
  },
  plugins: [],
};

const popup = {
  devtool: 'eval-source-map',
  entry: [POPUP_ENTRY],
  output: {
    path: EXTENSION_DIR,
    filename: 'popup.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "stage-0", "react"],
        }
      }]
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: []
}

const configs = {
  production,
  hot,
  scripts,
  popup,
}


module.exports = ((env = {}) => {
  const { BUILD_TYPE, NODE_ENV } = env;
  const base = configs[BUILD_TYPE];

  return merge.smartStrategy({ entry: 'prepend' })(base, configs[NODE_ENV] || {});
});
