'use strict';
/*
* Dependencias
*/

var gulp = require('gulp');
var jshint = require('gulp-jshint');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('default', function () {
	gulp.src('js/**/*.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'));
});