const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//通过 npm 安装
const webpack = require('webpack')

const package = require('./package.json')

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './index.html',
       inject: true})
  ],
  mode: "development" // production  development
}