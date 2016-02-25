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
	},
	html_sec: {
		watch: './src/secciones/*.html',
		output: './build/secciones/'
	},
	js: {
		watch: './src/js/*.js',
		output: './build/js'
	}
}

gulp.task('server',function() {
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 80,
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

gulp.task('build:htmlsec',function(){
	gulp.src(config.html_sec.watch)
		.pipe(gulp.dest(config.html_sec.output));
});

gulp.task('build:js',function(){
	gulp.src(config.js.watch)
		.pipe(gulp.dest(config.js.output));
});



gulp.task('watch',function(){
	gulp.watch(config.html.watch,['build:html']);
	gulp.watch(config.styles.watch, ['build:css']);
	gulp.watch(config.js.watch, ['build:js']);	
	gulp.watch(config.html_sec.watch, ['build:htmlsec']);	
})

gulp.task('build',['build:css','build:js','build:html','build:htmlsec']);

gulp.task('default',['server','watch','build']);