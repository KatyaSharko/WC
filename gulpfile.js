'use strict';

var gulp = require('gulp');

gulp.task('styles', function() {
    var cleanCSS = require('gulp-clean-css'),
        concat = require('gulp-concat');
    return gulp.src('src/css/*.css')
        .pipe(concat('main.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('styles'));

});

gulp.task('build-js', function() {
    var uglify = require('gulp-uglify'),
        concat = require('gulp-concat');
    return gulp.src('src/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('scripts/'));
});

gulp.task('default', ['styles', 'build-js'], function() {
    var livereload = require('gulp-livereload'),
        open = require('gulp-open'),
        options = {
            uri: 'http://localhost:5000',
            app: 'chrome'
        };

    livereload.listen({
        start: true,
        port: 35729
    });

    gulp.watch('src/css/*.css', ['styles']);
    gulp.watch('src/scripts/*.js', ['build-js']);
    gulp.watch(['styles/main.css', 'scripts/main.js']).on('change', livereload.changed);

    gulp.src('index.html').pipe(open(options));
});
