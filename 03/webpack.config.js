const path = require('path')

module.exports = {
  entry: {
    entry: './main.js',
    entry1: './main1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: "development"
}
