//onderdelen inporteren
const gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-sass');

sass.compiler = require('node-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// taak aanmaken
gulp.task('scss', function(){
var processors = [
  autoprefixer,
  cssnano
];
return gulp.src('./gulp/scss/**/*.scss')
.pipe(sourcemaps.init())
.pipe(sass().on('error', sass.logError))
.pipe(postcss(processors))
.pipe(sourcemaps.write('./map'))
.pipe(gulp.dest('./dist'))
.pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
});

// standaard taak instellen
gulp.task('default',['scss','serve']);
