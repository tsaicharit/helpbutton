var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: [
  //   './src/app.js',
  //   './src/app1.js'
  // ],
  entry: {
    'js/app': './src/app.js', // will be  ./build/application/bundle.js,
    'js/app1': './src/app1.js'// will be  ./build/library/bundle.js
  },
  write: true,
  devtool: 'eval-source-map',
  output: {
    path: '/js/',
    // path: __dirname,
    filename: '[name].js',
    // publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
};