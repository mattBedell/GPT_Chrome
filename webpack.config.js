const { execSync } = require('child_process');
const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const WebpackOnBuildPlugin = require('on-build-webpack');
const merge = require('webpack-merge');

const SCRIPTS_DIR = path.join(__dirname, 'src/scripts');
const EXTENSION_DIR = path.join(__dirname, 'extension/dist');

const POPUP_ENTRY = path.join(__dirname, 'src/index.jsx');

function getActiveTab() {
  let activeTab = execSync('chrome-cli info');
  return activeTab.toString().split('\n')[0].split(': ')[1];
}

function createOrReloadExtensions(activeTab) {
  let chromeTabs = execSync('chrome-cli list tabs');

  if (chromeTabs.includes('Extensions')) {
    const extExp = /\]\ Extensions$/s;
    let tab = chromeTabs.toString().split('\n').reduce((val, next) => {
      if (extExp.test(next)) {
        return next;
      }
      return val;
    }, '');
    if (tab) {
      let closeBracketInd = tab.indexOf(']');
      let windowInd = tab.indexOf(':');
      let tabId = windowInd ? tab.substring(windowInd + 1, closeBracketInd) : tab.substring(1, closeBracketInd);
      execSync(`chrome-cli reload -t ${tabId}; chrome-cli reload -t ${activeTab}`);
    } else {
      execSync(`chrome-cli open chrome://extensions; chrome-cli activate -t ${activeTab}; chrome-cli reload -t ${activeTab}`);
    }
  } else {
    execSync(`chrome-cli open chrome://extensions; chrome-cli activate -t ${activeTab}; chrome-cli reload -t ${activeTab}`);
  }
}















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
    script: `${SCRIPTS_DIR}/script.js`,
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
  plugins: [
    new WebpackOnBuildPlugin(function(stats) {
      createOrReloadExtensions(getActiveTab());
    }),
  ],
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
  
  console.log(merge.smartStrategy({ entry: 'prepend', plugins: 'replace' })(base, configs[NODE_ENV] || {}));
  return merge.smartStrategy({ entry: 'prepend', plugins: 'replace' })(base, configs[NODE_ENV] || {});
});

// "chrome-cli reload -t $((chrome-cli list tabs | grep -q ]\\ Extensions$ || chrome-cli open chrome://extensions; chrome-cli list tabs) | grep ]\\ Extensions$ | perl -pe 's/(.*(?=:):)|\\[//g' | sed -e 's/\\] Extensions//g') || exit 0"
