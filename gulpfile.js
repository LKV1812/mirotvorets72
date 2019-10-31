var gulp         = require('gulp'),
    less         = require('gulp-less'),
    sass         = require('gulp-sass'),
    pug          = require('gulp-pug'),
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
    babel        = require('gulp-babel');


// gulp.task('less', function(){ // Создаем таск less
//   return gulp.src(['src/less/**/*.less', '!src/less/libs.less']) // Берем источник
//     .pipe(sourcemaps.init())
//     .pipe(less().on('error', console.error.bind(console))) // Преобразуем less в CSS посредством gulp-less
//     .pipe(sourcemaps.write())
//     .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
//     .pipe(gulp.dest('dist/vendor/css')) // Выгружаем результата в папку dist/vendor/css
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
    .pipe(gulp.dest('dist/vendor/css')) // Выгружаем результата в папку dist/vendor/css
    .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('pug', function(){
  return gulp.src('src/pug/**/*.pug')// Берем источник
    .pipe(plumber())
    .pipe(pug({
        pretty: true// Преобразуем pug в html посредством gulp-pug и отменяем минфикацию html
    }))
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
    .pipe(gulp.dest('dist/vendor/js'))// переносим в продакшен
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
});

gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('default', ['build', 'watch']);
