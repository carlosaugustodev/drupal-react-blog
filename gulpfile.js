var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var reload = bs.reload;

gulp.task('sass', function() {
    return gulp.src("src/styles/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/styles/"))
        .pipe(reload({stream:true}));
});

gulp.task('serve', ['sass'], function() {

    bs.init({
        proxy: "localhost:3000",
        port: 8080
    })

    gulp.watch("src/styles/**/*.scss", ['sass']);
});
