'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', ['styles'], function () {

  var injectStyles = gulp.src([
    paths.tmp + '/serve/{app,components}/**/*.css',
    '!' + paths.tmp + '/serve/app/vendor.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.src + '/{app,components}/**/*.js',
    '!' + paths.src + '/{app,components}/**/*.spec.js',
    '!' + paths.src + '/{app,components}/**/*.mock.js'
  ]).pipe($.angularFilesort());

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: [/foundation\.js/, /foundation\.css/, /bootstrap\.css/, /foundation\.css/]
  };

  return gulp.src(paths.src + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));

});
gulp.task('inject2', ['styles'], function () {

  var injectStyles = gulp.src([
    paths.tmp + '/serve/{app,components}/**/*.css',
    '!' + paths.tmp + '/serve/app/vendor.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.src + '/{app,components}/**/*.js',
    '!' + paths.src + '/{app,components}/**/*.spec.js',
    '!' + paths.src + '/{app,components}/**/*.mock.js'
  ]).pipe($.angularFilesort());

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    transform: function (filePath) {
      if(filePath.match(/\.js/g))
        return '<script src="static/src/' + filePath + '"></script>';
      else
        return '<link rel="stylesheet" href="static/.tmp/serve/'+ filePath +'"/>';
    },
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: [/foundation\.js/, /foundation\.css/, /bootstrap\.css/, /foundation\.css/],
    ignorePath: '../',
    fileTypes: {
      html: {
        block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
        detect: {
          js: /<script.*src=['"]([^'"]+)/gi,
          css: /<link.*href=['"]([^'"]+)/gi
        },
        replace: {
          js: '<script src="static/{{filePath}}"></script>',
          css: '<link rel="stylesheet" href="test{{filePath}}" />'
        }
      }
    }
  };

  return gulp.src(paths.src + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))

    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));

});