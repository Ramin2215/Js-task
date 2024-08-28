const { src, dest, watch, series } = require('gulp')
//  src - source dest - destination
const sass = require('gulp-sass')(require('sass'))
// compiler function
function buildStyles() {
  // src , dest
  return (
    src('index.scss')
      //relative file for compile
      .pipe(sass()) // compiles
      .pipe(dest('css')) // compiles to css gfolder // index.css
  )
}
// watching function , to stay sync
function watchTask() {
  watch(['index.scss'], buildStyles) // files we need to watch
}

//watch second argument is that func we want to run for every watch task
exports.default = series(buildStyles,watchTask )
//runs buildstyle then watchtask