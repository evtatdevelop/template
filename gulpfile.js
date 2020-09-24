const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpSourcemaps = require('gulp-sourcemaps')
const gulpAutoprefixer = require('gulp-autoprefixer')
const gulpConcat = require('gulp-concat')
const gulpCleanCss = require('gulp-clean-css')
const gulpIf = require('gulp-if')

const config = {
    paths: {
        scss: './src/scss/**/*.scss',
        html: './dist/index.html',
    },
    output: {
        cssName: 'bundle.min.css',
        path: './dist',
    },
    isDevelop: true,
}

const scss = () => {
    return gulp.src( config.paths.scss )
        .pipe( gulpIf( config.isDevelop, gulpSourcemaps.init() ) )
        .pipe( gulpSass() )
        .pipe( gulpConcat( config.output.cssName ) )
        .pipe( gulpAutoprefixer() )
        .pipe( gulpIf( config.isDevelop, gulpSourcemaps.write() ) )
        .pipe( gulpIf( !config.isDevelop, gulpCleanCss() ) )
        .pipe( gulp.dest( config.output.path ) )
}

function defaultTask(cb) {
    scss()
    cb();
  }
  
  exports.default = defaultTask