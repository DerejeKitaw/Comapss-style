var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat');
    path = require('path');

var sassSources,
    outputDir,
    sassStyle;

 outputDir = 'builds/development/';
 sassStyle = 'compressed';

sassSources = ['components/sass/style.scss'];


gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      css: outputDir + 'css',
      image: outputDir + 'images',
      style: sassStyle,
      require: ['susy', 'breakpoint']
    })
    .on('error', gutil.log))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(['components/sass/*.scss', 'components/sass/*/*.scss', ['compass']]);
});



gulp.task('default', ['watch', 'compass']);