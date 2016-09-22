var gulp = require('gulp')
var path = require('path')
var webpack = require('webpack')
var baseConfig = require('./webpack.base.config')
var nodemon = require('nodemon')

// CONFIGS
// =============================================================================

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


// TASKS
// =============================================================================

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('build-server', function(done) {
  webpack(serverConfig).run(onBuild(done))
})
gulp.task('watch-server', function() {
  webpack(serverConfig).watch(100, function(err, stats) {
    onBuild()(err, stats)
    nodemon.restart()
  })
})

gulp.task('build-frontend', function(done) {
  webpack(frontendConfig).run(onBuild(done))
})
gulp.task('watch-frontend', function() {
  webpack(frontendConfig).watch(100, onBuild(), {color: true, verbose: false})
})

gulp.task('run', ['watch-server', 'watch-frontend'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!')
  })
})

gulp.task('default', ['build-server', 'build-frontend'])
