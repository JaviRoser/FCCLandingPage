const gulp =require ('gulp')
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var webserver= require('gulp-webserver')
/*
gulp.task 	-	Define  task
gulp.src 	- 	Point to file to use
gulpt.dest 	- 	Point to folder to output
gulp.watch 	- 	Watch files and folders for changes
*/

//LOGS MESSAGE


gulp.task('message', () => {
    return console.log('Gulp is running...')
})



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.css").on("change", reload);
});

//Run al the task at once
gulp.task('default', ['message', 'browser-sync'])