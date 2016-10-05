var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify    = require('gulp-uglify'),
    babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('src/css/*.css')
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function () {
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.js'))
//        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['default'])
    gulp.watch('src/js/*.js', ['compress'])
});
