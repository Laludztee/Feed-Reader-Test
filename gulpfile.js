const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const image = require('gulp-image');

/*
--Top Level Functions--
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - watch files and folders for changes
*/

gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});
 
gulp.task('optimize-image', function () {
  gulp.src('.src/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});
 
gulp.task('default', ['image']);