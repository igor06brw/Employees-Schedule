const gulp = require('gulp');
const { watch, series, parallel } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


function styles() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('./dest/css'))

};

function scripts() {              
  return gulp.src('./src/*.js', { sourcemaps: true })
    .pipe(rename('main.min.js'))                        //rename to main.min.js
    .pipe(uglify())                                     //minify ES5+
    .pipe(gulp.dest('./dest/js'))                       //finish to dest folder js

}

// function syncBrowser() {
//   browserSync.init(["./dest/css/*.css", "./dest/js/*.js"], {
//     server: {
//         baseDir: "./"
//     }
//   });
// }

function watchThis() {
  watch('./src/sass/*', styles);       
  watch('./src/scripts/*', scripts);    
};

gulp.task('default', function() {
  styles();
});
// let build = gulp.series(parallel(scripts, sass), sassWatch);

exports.styles = styles;
exports.scripts = scripts;
exports.browserSync = syncBrowser;

exports.watchThis = watchThis;