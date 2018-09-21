const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development', // production  development
  plugins:[
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true 
    }),
  ]
};