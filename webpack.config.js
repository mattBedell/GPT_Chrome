
const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const merge = require('webpack-merge');

const SCRIPTS_DIR = path.join(__dirname, 'src/scripts');
const EXTENSION_DIR = path.join(__dirname, 'extension/dist');

const POPUP_ENTRY = path.join(__dirname, 'src/index.jsx');

const production = {
  devtool: 'source-map',
  plugins: [
    new MinifyPlugin({}, { test: /\.(js|jsx)$/i }),
  ],
};

const hot = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
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
          presets: [
            ['@babel/preset-es2015', { modules: false }],
          ],
          plugins: ['react-hot-loader/babel'],
        },
      }],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

const scripts = {
  devtool: 'eval-source-map',
  entry: {
    background: `${SCRIPTS_DIR}/background.js`,
    content_script: `${SCRIPTS_DIR}/content_script.js`,
    inject_script: `${SCRIPTS_DIR}/inject_script.js`,
  },
  output: {
    path: EXTENSION_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-es2015'],
                ['@babel/preset-stage-0'],
              ],
            },
          },
          'eslint-loader',
        ],
      },
    ],
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
          plugins: [
            '@babel/plugin-transform-runtime',
          ],
          presets: [
            ['@babel/preset-es2015'],
            ['@babel/preset-stage-0'],
            ['@babel/preset-react'],
          ],
        },
      }],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.ttf$/,
      exclude: /node_modules/,
      use: 'file-loader',
    }],
  },
  plugins: [],
};

const configs = {
  production,
  hot,
  scripts,
  popup,
};


module.exports = ((env = {}) => {
  const { BUILD_TYPE, NODE_ENV } = env;
  const base = configs[BUILD_TYPE];

  return merge.smartStrategy({ entry: 'prepend', plugins: 'replace' })(base, configs[NODE_ENV] || {});
});

// "chrome-cli reload -t $((chrome-cli list tabs | grep -q ]\\ Extensions$ || chrome-cli open chrome://extensions; chrome-cli list tabs) | grep ]\\ Extensions$ | perl -pe 's/(.*(?=:):)|\\[//g' | sed -e 's/\\] Extensions//g') || exit 0"
