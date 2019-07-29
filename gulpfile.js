// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');
    browserSync = require('browser-sync').create();	

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/main.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify({ preserveComments: "license" }))
        .pipe(gulp.dest('js'))
});

// Concatenate CSS
gulp.task('css', function() {
    return gulp.src(['css/normalize.css', 'css/main.css', 'css/mobile.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('css'))
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Default task
 gulp.task('default', ['watch'], function() {
   gulp.start('lint', 'scripts', 'css', 'browser-sync');
 });

// Watch
gulp.task('watch', function() {

  gulp.watch('js/main.js', ['lint', 'scripts']);
  gulp.watch(['css/normalize.css', 'css/main.css', 'css/mobile.css'], ['css']);

});
