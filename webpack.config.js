const debug = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const path = require('path');

var entry = [
  path.resolve(__dirname, 'src/client/client.jsx'),
];

if (debug) {
  entry.unshift('react-hot-loader/patch');
}

var publicPath = '/js';

if (debug) {
  publicPath = 'http://localhost:3333/js';
}

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,

  entry: entry,

  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js'),
    publicPath: publicPath,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /.jsx?$/,
      },
      {
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },
    ],
  },

  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./styles")]
  // },

  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
