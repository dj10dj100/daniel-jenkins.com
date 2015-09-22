var gulp 			= require('gulp'),
    sass 			= require('gulp-ruby-sass'),
    notify 			= require("gulp-notify"),
	cssmin 			= require('gulp-cssmin'),
    rename    		= require('gulp-rename'),
    bower 			= require('gulp-bower'),
    uglify 			= require('gulp-uglifyjs'),
	livereload = require('gulp-livereload');

;


var config = config || {
	themePath : './'
}

config.sassPath = "./scss";
config.bowerDir = './bower_components';

/* Run gulp bower to install all dependencies */
gulp.task('bower', function() {
    return bower().pipe(gulp.dest(config.bowerDir))
})

/* Adds font awesome to the fonts folder */
.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*').pipe(gulp.dest('./fonts'));
})

/** build for staging / testing */
.task('css', function() {
console.log(config.sassPath + '/styles.scss');
    return gulp.src(config.sassPath + '/styles.scss')
       .pipe(sass({
            style: 'expanded',
			compass : true,
            loadPath: [
				config.sassPath,
               //'./bower_components/bootstrap-sass-official/assets/stylesheets/',
                //config.bowerDir + '/fontawesome/scss',
            ]
        }).on("error", notify.onError(function (error) {
                return "Error: " + error.message;
        	})
		))
        .pipe(gulp.dest(config.themePath + '/css'))
		.pipe(livereload());
})

/* Build minified CSS */
.task('minify-css', function() {
    gulp.src('./css/styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));
})

/* Concat & Uglify JS */
gulp.task('uglify', function() {

	gulp.src(config.themePath + '/js/*.js')
		.pipe(uglify('app.min.js', {
				outSourceMap: true,
				compress : true
			})
		).pipe(gulp.dest('./js/min/'))
})

// Rerun the task when a file changes
.task('watch', function() {
	console.log(config.sassPath);
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
	gulp.watch('./css/**/*.css', ['minify-css']);
	gulp.watch('./js/*.js', ['uglify']);
})
.task('default', ['bower', 'icons', 'css','minify-css','uglify']);