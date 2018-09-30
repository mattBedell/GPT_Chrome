const { DefinePlugin, ExtendedAPIPlugin } = require('webpack');
const OnBuildWebpackPlugin = require('on-build-webpack');

const { execSync } = require('child_process');
const path = require('path');

const SCRIPTS_DIR = path.resolve('src', 'scripts');
const EXTENSION_DIR = path.resolve('extension', 'dist');
const config = {
  entry: {
    background: `${SCRIPTS_DIR}/background.js`,
    content_script: `${SCRIPTS_DIR}/content_script.js`,
    inject_script: `${SCRIPTS_DIR}/inject_script.js`,
    popup: path.resolve('src', 'components', 'index.jsx'),
  },
  output: {
    path: EXTENSION_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js(x|)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.ttf$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [],
};

module.exports = (env, argv) => {
  // webpack is failing to set process.env.NODE_ENV on definePlugin so do it here
  // https://webpack.js.org/concepts/mode/#usage
  config.plugins.push(new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(argv.mode),
  }));

  if (argv.mode === 'development') {
    config.plugins = [
      ...config.plugins,
      new ExtendedAPIPlugin(),
      new OnBuildWebpackPlugin(() => {
        // reload the active chrome tab
        const activeTab = execSync('chrome-cli info');
        const tabId = activeTab.toString().split('\n')[0].split(': ')[1];
        execSync(`chrome-cli reload -t ${tabId}`);
      }),
    ];
  }

  return config;
};
