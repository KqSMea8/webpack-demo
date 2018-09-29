const path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    entry: './main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/[name].[hash:7].[ext]',
          }
        }]
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'webpack demo',
      filename: 'index.html',
      template: 'index.html',
      favicon: './static/bees_bee.ico'
  })
  ],
  mode: "development"
}
