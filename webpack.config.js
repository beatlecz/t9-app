var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  entry: './app.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: './',
    filename: 'backend.js'
  },
  node: {
    __dirname: true
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'node5']
          }
        }
    ]
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'
}
