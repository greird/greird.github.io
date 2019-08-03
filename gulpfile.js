// require(d) gulp for compatibility with sublime-gulp.
var gulp = require('gulp');

const { src, dest, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Concatenate & Minify JS
function minify() {
	return gulp.src('src/js/main.js')
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
}

// Lint Task
function lint() {
	return gulp.src('src/js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
}

// Concatenate CSS
function concatcss() {  
	return gulp.src(['src/css/normalize.css', 'src/css/main.css', 'src/css/mobile.css'])
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concatCss('main.css'))
	.pipe(gulp.dest('css'))
}

function serve() {
	// Static server
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	// Watcher
	gulp.watch("index.html").on('change', browserSync.reload);
}

exports.minify = minify;
exports.lint = lint;
exports.concatcss = concatcss;
exports.serve = serve;

exports.default = gulp.series(gulp.parallel(gulp.series(lint, minify), gulp.series(concatcss)), serve);