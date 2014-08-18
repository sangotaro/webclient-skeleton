var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var typescript  = require('gulp-tsc');
var mainBowerFiles  = require('main-bower-files');


gulp.task('ts', function() {
  gulp.src(['app/scripts/index.ts'])
    .pipe(typescript({ out: 'main.js' }))
    .pipe(gulp.dest('public/'));
});

gulp.task('vendor', function() {
  var files = mainBowerFiles();
  files.push('bower_components/EaselJS/lib/movieclip-0.7.1.combined.js');
  gulp.src(files)
    .pipe(concat('vendor.js'))
    .pipe(plumber())
    .pipe(gulp.dest('public/'));
});

gulp.task('test', function() {
  var files = mainBowerFiles();
  files.push('bower_components/EaselJS/lib/movieclip-0.7.1.combined.js');
  console.log(files);
});

gulp.task('build', ['vendor', 'ts']);
gulp.task('default', ['build']);