var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var del = require('del');

var paths = {
  app: {
    src: 'app'
  },
  sass: {
    src: 'app/style/**/*.scss',
    dest: 'app/style',
    suffix: '.build'
  },
  appBuild: {
    src: ['app/**/*', '!app/**/*.scss'],
    dest: 'build'
  }
};

gulp.task('webserver', ['sass'], function() {
  gulp.src(paths.app.src)
    .pipe(webserver({
      port: 9001,
      livereload: true,
      open: true
    }));
});

gulp.task('sass', function() {
    return gulp.src(paths.sass.src)
      .pipe(rename({suffix: paths.sass.suffix}))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('clean-build', function (cb) {
  del([
    paths.appBuild.dest
  ], cb);
});

gulp.task('copy-build', ['sass'], function () {
  gulp.src(paths.appBuild.src)
    .pipe(gulp.dest(paths.appBuild.dest));
});

gulp.task('copy-gitignore', function () {
  gulp.src('gitignore.build')
    .pipe(rename('.gitignore'))
    .pipe(gulp.dest(paths.appBuild.dest));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass.src, ['sass']);
});

gulp.task('serve', ['watch', 'webserver']);
gulp.task('build', ['copy-build', 'copy-gitignore']);
