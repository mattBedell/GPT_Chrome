// https://github.com/jpsierens/webpack-react-redux/blob/master/server.js
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js')({ BUILD_TYPE: 'popup', NODE_ENV: 'hot' });

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.resolve('extension'),
  hot: true,
  stats: {
    colors: true,
  },
}).listen(3001, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening on PORT: 3001');
});
