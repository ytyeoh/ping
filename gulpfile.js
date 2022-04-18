var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano');

gulp.task('css', function () {
    return gulp.src('./src/css/*.css',)
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
      .pipe(concatCss('page.css'))
      .pipe(cssnano({
        reduceIdents: false,
        discardComments: {removeAll: true}
      }))
      .pipe(gulp.dest('static/css/'));
    watch(
      ['tailwind.config.js','./src/css/*.css', './content/**/*.md','./layouts/**/*.html'],
      series(processCSS)
    );
  });