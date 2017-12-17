const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');


const APP_DIR = path.join(__dirname, 'src');
const SCRIPTS_DIR = path.join(__dirname, 'src/scripts');
const EXTENSION_DIR = path.join(__dirname, 'extension/dist');

const POPUP_ENTRY = path.join(__dirname, 'src/index.jsx');


const scriptsConfig = {
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

const hotConfig = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    POPUP_ENTRY,
  ],
  output: {
    path: EXTENSION_DIR,
    publicPath: '/dist',
    filename: 'popup.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [["es2015", {"modules": false}], "stage-0", "react"],
          plugins: ["react-hot-loader/babel"]
        }
      }]
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};


module.exports = ((env = {}) => {
  let config = {};

  switch (env.BUILD_TYPE) {
    case 'scripts':
      config = Object.assign({}, scriptsConfig);
    break;

    case 'hot':
      config = Object.assign({}, hotConfig);
    break;

    case 'popup':
      config = Object.assign({}, hotConfig);
      config.entry = POPUP_ENTRY;
      config.module.rules = hotConfig.module.rules.map(rule => {
        if (rule.loader === 'babel-loader') {
          rule.options.presets = ["es2015", "stage-0", "react"];
          delete rule.options.plugins;
        };
        return rule;
      });
      config.plugins = hotConfig.plugins.filter(plugin => {
        if (plugin instanceof webpack.HotModuleReplacementPlugin || plugin instanceof webpack.NamedModulesPlugin) return false;
        return true;
      });
    break;
  }

  if (env.NODE_ENV === 'production') {
    config.devtool = 'source-map';
    config.plugins.push(new MinifyPlugin({}, { test: /\.(js|jsx)$/i }));
  } else if (env.visualizer) {
    config.plugins.push(new Visualizer());
  };

  return config;
})

// module.exports = (env = {}) => {
//   return {
//     devtool: (() => env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map')(),
//     entry: (() => {
//       switch (env.BUILD_TYPE) {
//         case 'scripts':
//           return {
//             background: `${SCRIPTS_DIR}/background.js`,
//             inject_script: `${SCRIPTS_DIR}/inject_script.js`,
//           }
//         case 'hot':
//           return [
//             'webpack-dev-server/client?http://localhost:3001',
//             'webpack/hot/only-dev-server',
//             POPUP_ENTRY,
//           ];
//         case 'app':
//           return POPUP_ENTRY;

//         default:
//           return {
//             background: `${SCRIPTS_DIR}/background.js`,
//             inject_script: `${SCRIPTS_DIR}/inject_script.js`,
//           };
//       };
//     })(),
//     output: {
//       path: EXTENSION_DIR,
//       filename: (() => env.BUILD_TYPE === 'scripts' ? '[name].js' : 'popup.js')(),
//     },
//     module: {
//       rules: (() => {
//         switch(env.BUILD_TYPE) {
//           case 'scripts':
//             return [
//               {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: [{
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ['es2015', 'stage-0'],
//                   }
//                 }],
//               }
//             ];
        
//           case 'hot':
//             return [
//               {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: [{
//                   loader: 'babel-loader',
//                   options: {
//                     presets: [["es2015", {"modules": false}], "stage-0", "react"],
//                     plugins: ["react-hot-loader/babel", "transform-class-properties"]
//                   }
//                 }],
//               },
//               {
//                 test: /\.css$/,
//                 exclude: /node_modules/,
//                 use: ['style-loader', 'css-loader'],
//               }
//             ];
//           case 'app':
//             return [
//               {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: [{
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ["es2015", "stage-0", "react"],
//                     plugins: ["transform-class-properties"],
//                   }
//                 }],
//               },
//             ]
//         };
//       })()
//     }
//   };
// };
