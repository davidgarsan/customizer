/* global require, module */

const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let libraryName = 'Customizer';
let plugins = [], outputFile;

plugins.push(new HTMLWebpackPlugin({
  template: 'demo/index.html',
  filename: 'demo/index.html'
}));

if (process.env.NODE_ENV === 'production') {
  outputFile = libraryName.toLowerCase() + '.min.js';
} else {
  outputFile = libraryName.toLowerCase() + '.js';
}

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};
