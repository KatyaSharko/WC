'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {

});

gulp.task('build-js', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(sourcemaps.init())



});

gulp.task('default', ['styles', 'build-js'], function() {

});