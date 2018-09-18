const path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    entry: './main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 
          {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/[name].[hash:7].[ext]',
          }
        } ]
      },
    ]
  },
  plugins: [
  ],
  mode: "development"
}
