const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'client'),
  ],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      }
    ],
  },

  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/js/',
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
