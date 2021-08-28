const gulp = require('gulp');
const browserSync = require('browser-sync');
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");

const { watch, series, task, parallel } = require('gulp');

const paths = {
  root: './dist/',
  html: './',
  js: './dist',
  ts: './src/*.ts',
};

gulp.task("webpack", (done) => {
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("./dist/"));
  done();
});

// browser-sync
task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
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
  watch("./index.html", series('reload'));
  watch(paths.ts, series('webpack', 'reload'));
  done();
});

task('default', parallel('webpack', 'watch', 'browser-sync'));
