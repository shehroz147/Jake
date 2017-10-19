const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: {
    scripts: [
      'babel-polyfill',
      path.join(__dirname, 'src', 'client'),
    ],
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'static', 'js'),
  },

  plugins: [
    new CleanWebpackPlugin('static/js'),

    new webpack.optimize.CommonsChunkPlugin({
      filename: '[name].[chunkhash].js',
      minChunks: module => /node_modules/.test(module.resource),
      name: 'vendor',
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),

    new ManifestPlugin({ basePath: '/js/'}),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
