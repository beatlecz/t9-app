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
    })
  ],
  resolve: {
    alias: {
      'local': path.join(__dirname, 'local_modules')
    },
    extensions: ['', '.js', '.jsx', '.react.js', '.json', '.coffee']
  }
}
