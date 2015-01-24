var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');
 
var paths = {
  test: ['./**.spec.js']
};
 
/**
 * tests the testing directory with jasmine.
 */
gulp.task('test', function() {
  gulp.src(paths.test)
    .pipe(plugins.jasmine());
});
 