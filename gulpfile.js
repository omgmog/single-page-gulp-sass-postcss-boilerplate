var SRC_ROOT = './src/';
var DIST_ROOT = './dist';
var CSS_ROOT = SRC_ROOT + 'css/';

var SCSS_FILES = '*.scss';
var SCSS_FILES_PATH = SRC_ROOT + SCSS_FILES;

var CSS_FILES = '*.css';
var CSS_FILES_PATH = CSS_ROOT + CSS_FILES;

var LIQUID_FILES = '*.liquid';
var LIQUID_FILES_PATH = SRC_ROOT + LIQUID_FILES;

var AUTOPREFIXER_BROWSERS = '> 1%';

var DATA = require(SRC_ROOT + 'data.json');

// gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var mergeRules = require('postcss-merge-rules');
var autoprefixer = require('autoprefixer');
var replaceExtension = require('gulp-ext-replace');
var liquid = require('gulp-liquid');
var styleInject = require('gulp-style-inject');
var webserver = require('gulp-webserver');

gulp.task('build:scss', function () {
  return gulp.src(SCSS_FILES_PATH)
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('build:postcss', ['build:scss'], function () {
  var processors = [
    mergeRules,
    autoprefixer({
      browsers: [AUTOPREFIXER_BROWSERS]
    })
  ];

  return gulp.src(CSS_FILES_PATH)
    .pipe(postcss(processors))
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('build:html', ['build:postcss'], function () {
  return gulp.src(LIQUID_FILES_PATH)
    .pipe(
      liquid({
        locals: DATA
      })
    )
    .pipe(replaceExtension('.html'))
    .pipe(styleInject())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('build', ['build:html', 'build:postcss', 'build:scss'], function () {});

gulp.task('watch', function () {
  gulp.watch(SRC_ROOT + '**/*.*', ['build']);
});

gulp.task('serve', ['watch'], function () {
  gulp.src('dist')
    .pipe(
      webserver({
        livereload: true,
        fallback: 'index.html'
      })
    );
});

gulp.task('default', ['build', 'watch']);

