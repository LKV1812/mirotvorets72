var gulp         = require('gulp'),
    less         = require('gulp-less'),
    sass         = require('gulp-sass'),
    pug          = require('gulp-pug'),
    htmlbeautify = require('gulp-html-beautify'),// пакет по настройке красивого вывода HTML
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cleanCss     = require('gulp-clean-css'),
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    sourcemaps   = require('gulp-sourcemaps'),
    wait         = require('gulp-wait'),// пакет чтобы поставить ожидание
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    babel        = require('gulp-babel'),
    runSequence  = require("run-sequence"),
    gulpif       = require('gulp-if'),
    webpackStream = require('webpack-stream'),
    webpackDevConfig = require('./webpack.dev.config.js'),
    webpackBuildConfig = require('./webpack.build.config.js');

let isDev = false;
let isProd = !isDev;

gulp.task('sass', function(){ // Создаем таск Sass
  return gulp.src('src/sass/*.scss') // Берем источник
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(wait(500))// ставим задержку выполнения тасков, чтобы все sass успели прогрузится иначе могут начаться проблемы с @import sass файлов
    .pipe(sass().on("error", notify.onError())) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(cleanCss({level: 2})) // Сжимаем
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css')) // Выгружаем результата в папку dist/assets/css
    .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('pug', function(){
  var options = {
    "indent_size": 1,
    "indent_char": "  ",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": false
  };

  return gulp.src('src/pug/pages/*.pug')// Берем источник
    .pipe(plumber({
      errorHandler: notify.onError(function(err){
        return {
          title: 'Pug',
          sound: false,
          message: err.message
        };
      })
    }))
    .pipe(pug())
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('dist'))// Выгружаем результата в папку dist
    .pipe(browserSync.reload({stream: true})); // Обновляем html на странице при изменении
});

gulp.task('js', function () {
  return gulp.src('src/js/entry.js')
    .pipe(gulpif(isDev, webpackStream(webpackDevConfig)))
    .pipe(gulpif(isProd, webpackStream(webpackBuildConfig)))
    .pipe(gulp.dest('dist/assets/js'))// переносим в продакшен
    .pipe(browserSync.reload({stream: true}));// Обновляем страницу при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
      baseDir: 'dist' // Директория для сервера - dist
    },
    notify: true // Отключаем уведомления
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(['src/sass/**/*.scss', 'src/sass/**/*.sass'], ['sass']); // Наблюдение за sass файлами в папке sass
  gulp.watch('src/pug/**/*.pug', ['pug']); // Наблюдение за pug файлами в папке pug
  gulp.watch('src/js/**/*.js', ['js']);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*') // Берем все изображения из src
    .pipe(gulpif(isProd, imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
      optimizationLevel: 7,
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/assets/img')); // Выгружаем на продакшен
});

gulp.task('default', function(callback){
  runSequence(
    'build',
    ['watch'],
    callback
  );
});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'img',
    'sass',
    ['pug', 'js'],
    callback
  );

  gulp.src('src/assets/**/*') // Переносим assets в котором лежат картинки шрифты и т.п. активы продакшен
    .pipe(gulp.dest('dist/assets'));
  gulp.src('src/libs/**/*')
    .pipe(gulp.dest('dist/vendor/libs'));
  gulp.src('src/php/**/*') // Переносим assets в котором лежат картинки шрифты и т.п. активы продакшен
  .pipe(gulp.dest('dist/php'));
});

gulp.task('clear', function () {
  cache.clearAll();
});
