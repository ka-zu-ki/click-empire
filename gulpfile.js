const gulp = require('gulp');
const typescript = require('gulp-typescript');
const browserSync = require('browser-sync');

const { watch, series, task, src, dest, parallel } = require('gulp');

const paths = {
  root: './dist/',
  html: './',
  js: './dist',
  ts: './src/*.ts',
};

const typeScriptProject = typescript.createProject({
  declaration: false
});

// typescript
gulp.task('ts', function() {
  return gulp.src(paths.ts) // 対象ファイル(!は除外指定)
      .pipe(typeScriptProject())
      .pipe(gulp.dest(paths.js)); // 出力先
});

// browser-sync
task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: paths.html,
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
  watch(paths.ts, series('ts', 'reload'));
  done();
});

task('default', parallel('ts', 'watch', 'browser-sync'));
