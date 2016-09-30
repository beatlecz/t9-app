var webpack = require('webpack')
var path = require('path')
var ComponentPlugin = require("component-webpack-plugin")

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"debug"'
      }
    }),
    new ComponentPlugin()
  ],
  resolve: {
    alias: {
      'local': path.join(__dirname, 'local_modules')
    },
    extensions: ['', '.js', '.jsx', '.react.js', '.json', '.coffee']
  },
  evServer: {
    stats: 'minimal'
  }
}
