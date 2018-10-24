const path = require('path')
const webpack = require('webpack')

const package = require('./package.json')

var webpackDefinePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
})

// 不分离出第三方库和自定义公共模块
// module.exports = {
//   entry: {
//     first: './src/first.js',
//     second: './src/second.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js'
//   },
//   module: {
//     rules: [{
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [{
//           loader: 'url-loader',
//           options: {
//             limit: 8192,
//             name: 'static/[name].[hash:7].[ext]',
//           }
//         }]
//       },
//     ]
//   },
//   plugins: [
//     webpackDefinePlugin,
//   ],
//   mode: "development"
// }
// 分离出第三方库、自定义公共模块、webpack运行文件
// 新增一个入口文件vendor和CommonsChunkPlugin插件进行公共模块的提取
module.exports = {
  entry: {
    first: './src/first.js',
    second: './src/second.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    webpackDefinePlugin
  ],
  mode: "development"
}