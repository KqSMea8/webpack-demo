const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const package = require('./package.json')

var config = {
  entry: {
    'one': './src/index1.js',
    'two': './src/index2.js',
    'three': './src/index3.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
     {
       test: '/\.js$/',
       use: ['babel-loader'],
       exclude: /(node_modules)/
     }
    ]

  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true,
      title: 'Development'
    })
  ]
}

module.exports = (env, argv) => {
  config.mode = env.mode
  return config
}