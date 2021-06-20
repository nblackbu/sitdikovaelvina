const gulp = require('gulp');
const babel = require("@babel/core":"^7.0.0");

gulp.task('default', function() {
// исходный код для Node
gulp.src("esб/**/*.js")
.pipe (babel())
.pipe (gulp.dest("dist"));
// исходный код для браузера
gulp.src("public/es6/**/*.js")
.pipe (babel())
.pipe (gulp.dest("public/dist"));
});