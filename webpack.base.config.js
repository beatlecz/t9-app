var webpack = require('webpack')
var path = require('path')

module.exports = {
  module: {
    loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
    ]
  }
}
