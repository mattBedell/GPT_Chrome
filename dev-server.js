// https://github.com/jpsierens/webpack-react-redux/blob/master/server.js
const path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.resolve('extension'),
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
});