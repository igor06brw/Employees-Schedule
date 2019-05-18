const gulp = require('gulp');
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');



function styles() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
};

function  sassWatch() {
  gulp.watch('./src/sass/*.scss', ['sass']);
};

function scripts() {
  return gulp.src('./src/*.js', { sourcemaps: true })
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
}

let build = gulp.series(scripts, sass, sassWatch);

exports.styles = styles;
exports.scripts = scripts;
exports.sassWatch = sassWatch;

exports.default = build;