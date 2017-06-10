'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('sass', function() {
	return gulp.src('./assets/scss/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./assets/sass/*.scss', ['sass']);
});

gulp.task('js', function() {
	return gulp.src('assets/js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build/js'));
});

gulp.task('js:watch', function() {
	gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'sass:watch', 'js:watch']);
