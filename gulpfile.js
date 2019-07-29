// require(d) gulp for compatibility with sublime-gulp.
var gulp = require('gulp');

const { src, dest, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Concatenate & Minify JS
function minify() {
	return gulp.src('js/main.js')
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
}

// Lint Task
function lint() {
	return gulp.src('js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
}

// Concatenate CSS
function concatcss() {  
	return gulp.src(['css/normalize.css', 'css/main.css', 'css/mobile.css'])
	.pipe(concat('all.css'))
	.pipe(gulp.dest('css'))
}

// Static server
function browsersync() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
}

exports.minify = minify;
exports.lint = lint;
exports.concatcss = concatcss;
exports.browsersync = browsersync;

exports.default = gulp.series(gulp.parallel(gulp.series(lint, minify), gulp.series(concatcss)), browsersync);