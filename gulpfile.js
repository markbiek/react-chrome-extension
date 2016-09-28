var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('watch', function () {
    gulp.watch('assets/js/**/*.jsx', ['default']);
});

gulp.task('default', function () {
    return gulp.src('index.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/js'));
});
