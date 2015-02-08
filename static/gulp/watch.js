'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject2'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,components}/**/*.scss',
    paths.src + '/{app,components}/**/*.js',
    'bower.json'
  ], ['inject2']);
});
