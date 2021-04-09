const { src, dest, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const tinypng = require('gulp-tinypng-extended');
const uglify = require('gulp-uglify');

function moveSvg(cb)
{
    return src('./src/img/**/*.svg')
        .pipe(dest('dist/img/')),
        cb();
}
function tinyPng(cb) {
	return src('./src/img/**/*.{png,jpg,jpeg}')
		.pipe(plumber())
		.pipe(tinypng({
			key: 'wyw4Z4XSEDRaf1eeGnxENiHvTxhUJoer',
		}))
		.pipe(dest('dist/img/')),
        cb();
};

function minJs(cb)
{
    return src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(rename({extname:'.min.js'}))
    .pipe(dest('dist/scripts')),
    cb();
}
function moveFonts(cb)
{
    return src('./src/fonts/*')
    .pipe(dest('dist/fonts')),
    cb();
}
function minCss(cb)
{
    return src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname:'.min.css'}))
    .pipe(dest('dist/css')),
    cb();
}
function moveHtml(cb)
{
    return src('./src/*.html')
    .pipe(dest('dist/')),
    cb();
}
function defaultTask(cb)
{
    console.log("\nЗадача успешно выполнена!\n\n"),
    cb();
}
// exports.movBoy = series(moveFonts, moveHtml)
// exports.minBoy = series(minJs, minCss)
// exports.picBoy = series(tinyPng, moveSvg)
exports.build = parallel(
    series(moveFonts, moveHtml),
    series(minJs, minCss),
    series(tinyPng, moveSvg)
)
exports.default = defaultTask