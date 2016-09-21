var gulp = require('gulp')
var webpack = require('webpack')
var baseConfig = require('./webpack.base.config')
var deepmerge = require('deep-merge')(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source)
  }
  return source
})
var createConfig = function(overrides) {
  return deepmerge(baseConfig, overrides || {})
}

var serverConfig = createConfig(require('./webpack.server.config'))
var frontendConfig = createConfig(require('./webpack.frontend.config'))

gulp.task('build-server', function(done) {
  webpack(serverConfig).run(function(err, stats) {
    if(err) {
      console.log('Error', err)
    }
    else {
      console.log(stats.toString())
    }
    done()
  })
})

gulp.task('build-frontend', function(done) {
  webpack(frontendConfig).run(function(err, stats) {
    if(err) {
      console.log('Error', err)
    }
    else {
      console.log(stats.toString())
    }
    done()
  })
})

gulp.task('default', ['build-server', 'build-frontend'])
