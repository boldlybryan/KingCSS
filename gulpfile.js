var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");

//Compile all scss files in scss dir, send to destination folder (css/)
gulp.task("sassify", function(){
  gulp.src("scss/king.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename({
      basename: "king",
      extname: ".min.css"
    }))
    .pipe(gulp.dest("./css/"))
});

//Gulp watch task
gulp.task("default", function(){
  gulp.watch("scss/**/*.scss", ["sassify"]);
});
