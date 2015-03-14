'use strict';

var
  fs = require('fs'),
  gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  mocha = require('gulp-mocha'),
  jsdoc = require("gulp-jsdoc"),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  watchify = require('watchify'),
  deglobalify = require('deglobalify'),
  deamdify = require('deamdify'),
  debowerify = require('debowerify'),
  decomponentify = require('decomponentify'),
  reactify = require('reactify'),
  clean = require('gulp-clean'),
  rename = require('gulp-rename'),
  gutil = require('gulp-util'),
  filesize = require('gulp-filesize'),
  header = require("gulp-header"),
  pkg = require('./package.json'),
  jsdoc2md = require("gulp-jsdoc-to-markdown");


// Get version from package.json
var getVersion = function() {
  return pkg.version;
}

// Get name from package.json
var getName = function() {
  return pkg.name;
}

//minified js file name
var getBundleName = function() {
  return getName() + '.' + getVersion() + '.' + 'min.js';
};

// Get copyright using NodeJs file system
var getCopyright = function() {
  return fs.readFileSync('./resources/COPYRIGHT');
};

var getYear = function() {
  return new Date().getFullYear();
}

gulp.task('lint', function() {
  return gulp.src(['*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('test/**/*.js')
    .pipe(mocha());
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('<%= jshint.js.src %>', ['lint']);
  gulp.watch(['<%= jshint.js.src %>', '<%= jshint.test.src %>'], ['lint', 'test']);
});

gulp.task('docs:html', function() {
  gulp.src("./lib/**/*.js")
    .pipe(jsdoc('./doc/html'))
});

gulp.task('clean', function() {
  return gulp.src('build', {
      read: false
    })
    .pipe(clean());
});

gulp.task("docs:md", function() {
  return gulp.src("lib/**/*.js")
    .pipe(jsdoc2md())
    .on("error", function(err) {
      gutil.log(gutil.colors.red("jsdoc2md failed"), err.message)
    })
    .pipe(rename(function(path) {
      path.extname = ".md";
    }))
    .pipe(gulp.dest("./doc/md"));
});

gulp.task('browserify', function() {
  var b = browserify({
    standalone: 'JAL'
  });
  b.transform(reactify);
  b.transform(deglobalify);
  b.transform(deamdify);
  b.transform(debowerify);
  b.transform(decomponentify);
  b.add("./lib/Jal.js");
  return b.bundle()
    .on('error', function(err) {
      gutil.log(err.message)
      this.emit('end');
    })
    .pipe(source('jal.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(header(getCopyright(), {
      version: getVersion(),
      year: getYear()
    }))
    .pipe(gulp.dest('dist'))
    //.pipe(filesize())
    .pipe(uglify({
      mangle: false,
      output: {
        max_line_len: 1024
      }
    }))
    .pipe(rename(getBundleName()))
    .pipe(header(getCopyright(), {
      version: getVersion(),
      year: getYear()
    }))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)
});

gulp.task('build', ['lint', 'test', 'doc', 'clean', 'browserify']);
gulp.task('default', ['lint', 'test', 'watch']);
gulp.task('doc', ['docs:md', 'docs:html']);
