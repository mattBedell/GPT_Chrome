// https://github.com/jpsierens/webpack-react-redux/blob/master/server.js
const path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js')({ BUILD_TYPE: 'popup', NODE_ENV: 'hot' });

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.resolve('extension'),
  hot: true,
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening on PORT: 3001');
});