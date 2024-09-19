const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

async function getAutoprefixer() {
  const autoprefixer = await import('gulp-autoprefixer');
  return autoprefixer.default;
}

const paths = {
  scss: './src/**/*.scss',
  css: './src/'
};

async function styles() {
  const autoprefixer = await getAutoprefixer();
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css));
}

function watch() {
  gulp.watch(paths.scss, styles);
}

exports.styles = styles;
exports.watch = watch;
