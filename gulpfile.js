var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var typescript  = require('gulp-tsc');
var watch = require('gulp-watch');
var mainBowerFiles  = require('main-bower-files');


gulp.task('ts', function() {
  gulp.src(['app/scripts/index.ts'])
    .pipe(plumber())
    .pipe(typescript({ out: 'main.js' }))
    .pipe(gulp.dest('public/'));
});

gulp.task('vendor', function() {
  var files = mainBowerFiles();
  files.push('bower_components/EaselJS/lib/movieclip-0.7.1.combined.js');
  gulp.src(files)
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
  gulp.watch(['bower_components/**/*.js'], ['vendor']);
});

gulp.task('build', ['vendor', 'ts']);
gulp.task('default', ['build']);