var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
})};

gulp.task('sass', function() {
    gulp.src('./assets/css/*.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

gulp.task('scripts', function() {
    gulp.src('assets/js/src/*.js')
        .pipe(plumber(plumberErrorHandler))
        .pipe(jshint())
        .pipe(jshint.reporter('fail'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/js'))
        .pipe(livereload());
});

gulp.task('img', function() {
    gulp.src('assets/images/src/*.{png,jpg,gif,svg}')
        .pipe(plumber(plumberErrorHandler))
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest('./assets/images'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/css/*.scss', ['sass']);
    gulp.watch('assets/js/src/*.js', ['scripts']);
    gulp.watch('assets/images/src/*.{png,jpg,gif,svg}', ['img']);
});

gulp.task('default', ['sass', 'scripts', 'img', 'watch']);