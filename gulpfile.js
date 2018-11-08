//onderdelen inporteren
const gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// taak aanmaken
gulp.task('scss', function(){
return gulp.src('./gulp/scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
});

// standaard taak instellen
gulp.task('default',['scss','watch']);
