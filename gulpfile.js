const babel = require("rollup-plugin-babel");
const gulp = require("gulp");
const rollup = require("gulp-rollup");
const webserver = require("gulp-webserver");

gulp.task("build", () => {
    return gulp
        .src("./src/main.js")
        .pipe(rollup({
            allowRealFiles: true,
            format: "iife",
            plugins: [
                babel({
                    "presets": [["es2015", { "modules": false }]],
                    "plugins": ["external-helpers"]
                })
            ],
            entry: "./src/main.js"
        }))
        .pipe(gulp.dest("'./dist"));
});

gulp.task("webserver", ["build"], function () {
    gulp
        .src("./")
        .pipe(webserver({
            directoryListing: false,
            fallback: "index.html",
            livereload: true,
            open: true,
            port: 8123
        }));
});

gulp.task("default", ["webserver"], function () {
    gulp.watch("./src/**/*.js", ["build"]);
});