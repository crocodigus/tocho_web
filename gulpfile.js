var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');

var config = {
	styles: {
		main: './src/styles/main.styl',
		watch: './src/styles/**/*.styl',
		output: './build/css'
	},
	html: {
		watch: './src/*.html',
		output: './build'
	}
}

gulp.task('server',function() {
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8080,
			livereload: true
		}))
});

gulp.task('build:css', function(){
	gulp.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css': true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output));
});

gulp.task('build:html',function(){
	gulp.src(config.html.watch)
		.pipe(gulp.dest(config.html.output));
});



gulp.task('watch',function(){
	gulp.watch(config.html.watch,['build:html']);
	gulp.watch(config.styles.watch, ['build:css']);
	
})

gulp.task('build',['build:css','build:html']);

gulp.task('default',['server','watch','build']);