const gulp = require('gulp');
const browserSync = require('browser-sync');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

const { watch, series, task, parallel } = require('gulp');

const paths = {
  root: './public/',
  html: './',
  js: './public',
  ts: './src/ts/*.ts',
};

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
    .on('error', function (e) {
      this.emit('end');
    })
    .pipe(gulp.dest('public'));
});

// browser-sync
task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: './public/',
      index: 'index.html',
    },
    port: 3000,
    reloadOnRestart: true,
  });
});

// browser-sync reload
task('reload', (done) => {
  browserSync.reload();
  done();
});

//watch
task('watch', (done) => {
  watch('./public/index.html', series('reload'));
  watch(paths.ts, series('webpack', 'reload'));
  done();
});

task('default', parallel('webpack', 'watch', 'browser-sync'));
