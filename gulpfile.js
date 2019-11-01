var gulp         = require('gulp'),
    less         = require('gulp-less'),
    sass         = require('gulp-sass'),
    pug          = require('gulp-pug'),
    htmlbeautify = require('gulp-html-beautify'),// пакет по настройке красивого вывода HTML
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
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
    babel        = require('gulp-babel');


// gulp.task('less', function(){ // Создаем таск less
//   return gulp.src(['src/less/**/*.less', '!src/less/libs.less']) // Берем источник
//     .pipe(sourcemaps.init())
//     .pipe(less().on('error', console.error.bind(console))) // Преобразуем less в CSS посредством gulp-less
//     .pipe(sourcemaps.write())
//     .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
//     .pipe(gulp.dest('dist/assets/css')) // Выгружаем результата в папку dist/assets/css
//     .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
// });

gulp.task('sass', function(){ // Создаем таск Sass
  return gulp.src(['src/sass/**/*.scss', 'src/sass/**/*.sass', '!src/sass/**/_*.sass', '!src/sass/**/_*.scss', '!src/sass/libs.sass']) // Берем источник
    .pipe(sourcemaps.init())
    .pipe(wait(500))// ставим задержку выполнения тасков, чтобы все sass успели прогрузится иначе могут начаться проблемы с @import sass файлов
    .pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(sourcemaps.write())
    .pipe(cssnano()) // Сжимаем
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
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
  return gulp.src('src/js/**/*.js')
   .pipe(babel({// из es6 в es5
        presets: ['env']
   }))
    .pipe(concat('main.js'))// объеденяем все собственные скрипты в одном файле
    .pipe(uglify())// сжимаем
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
  // gulp.watch('src/less/**/*.less', ['less']); // Наблюдение за sass файлами в папке sass
  gulp.watch('src/pug/**/*.pug', ['pug']); // Наблюдение за pug файлами в папке pug
  gulp.watch('src/js/**/*.js', ['js']);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*') // Берем все изображения из src
    .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/assets/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'pug', 'sass', 'js'], function() {
  gulp.src('src/assets/**/*') // Переносим assets в котором лежат картинки шрифты и т.п. активы продакшен
    .pipe(gulp.dest('dist/assets'));
  gulp.src('src/libs/**/*')
    .pipe(gulp.dest('dist/vendor/libs'));
  gulp.src('src/php/**/*') // Переносим assets в котором лежат картинки шрифты и т.п. активы продакшен
    .pipe(gulp.dest('dist'));
});

gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('default', ['build', 'watch']);
