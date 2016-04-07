var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var browserSync = require('browser-sync').create();


gulp.task('express', function () {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000, '0.0.0.0');
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('styles', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', ['styles']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
})

gulp.task('default', ['express', 'browserSync', 'watch'], function () {
    // console.log('one');
});