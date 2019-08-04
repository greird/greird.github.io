// require(d) gulp for compatibility with sublime-gulp.
var gulp = require('gulp');

const { src, dest, series, parallel } = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Erase build directory
function cleandist() {
	return gulp.src('dist', {read: false, allowEmpty: true})
	.pipe(clean())
}

// Concatenate & Minify JS
function minify() {
	return gulp.src('js/main.js')
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
}

// Lint Task
function lint() {
	return gulp.src('js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
}

// Concatenate CSS
function concatcss() {  
	return gulp.src(['css/normalize.css', 'css/main.css', 'css/mobile.css'])
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concatCss('main.css'))
	.pipe(gulp.dest('dist/css'))
}

// Move HTML to dist 
function moveHTMLToDist() {
	return gulp.src(['index.html'])
	.pipe(gulp.dest('dist'))
}

// Move img to dists
function moveImgToDist() {
	return gulp.src(['img/*.*'])
	.pipe(gulp.dest('dist/img'))
}

function serve() {
	// Static server
	browserSync.init({
		server: {
			baseDir: "./dist/"
		}
	});

	// Watcher
	gulp.watch("index.html").on('change', browserSync.reload);
}

exports.lint = lint;

exports.build = gulp.series(cleandist, gulp.parallel(gulp.series(lint, minify), gulp.series(concatcss)), gulp.parallel(moveHTMLToDist, moveImgToDist));
exports.default = gulp.series(cleandist, gulp.parallel(gulp.series(lint, minify), gulp.series(concatcss)), gulp.parallel(moveHTMLToDist, moveImgToDist), serve);
