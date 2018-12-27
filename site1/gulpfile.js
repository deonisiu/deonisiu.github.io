var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),

    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss'),

    browserSync = require('browser-sync').create();

// Отслеживание изменений в SCSS .html style.css .js
// ---
// Внутри watch добавляется конструкция {usePolling:true}
// позволяющая не увеличивать время выполнения таска
// ---
gulp.task('stream', ['browser-sync'], function () {
    watch('app/sass/**/*.scss', {usePolling:true}, function () {
        gulp.start('sass');
    });
    watch('app/*.html', {usePolling:true}, browserSync.reload);

    watch('app/css/style.css', {usePolling:true}, browserSync.reload);
    watch('app/css/style.css', {usePolling:true}, function () {
        gulp.start('autoprefixer');
    });

    watch('app/js/**/*.js', {usePolling:true}, browserSync.reload);
    watch(['app/js/start.js', 'app/js/scripts/**/*.js', 'app/js/end.js'], {usePolling:true}, function () {
        gulp.start('concat-js');
    });
});

gulp.task('concat-js', function () {
    return gulp.src(['app/js/start.js', 'app/js/scripts/**/*.js', 'app/js/end.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function () {
    return gulp.src("app/sass/style.scss")
        .pipe(sass({outputStyle: 'expanded'})).on('error', sass.logError)
        .pipe(gulp.dest("app/css"));
});

// Минификация css
gulp.task('minify-css', function () {
    return gulp.src("app/css/style.css")
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

// Сервер синхронизации
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('build', ['buildhtml', 'buildcss', 'buildjs', 'buildimg']);

// Build Html for dist folder
gulp.task('buildhtml', function () {
    return gulp.src("app/*.html")
        .pipe(gulp.dest("dist"));
});

// AutoPrefixer for 2 last versions in browsers
// + Minify CSS
gulp.task('buildcss', function () {
    return gulp.src('app/css/style.css')
        .pipe(postcss([ autoprefixer({browsers: ['last 2 version']}) ]))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

// Build JavaScript for dist folder
gulp.task('buildjs', function () {
    return gulp.src('app/js/script.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('buildimg', function () {
    return gulp.src('app/img/**')
        .pipe(gulp.dest('dist/img'));
});

// Test Task for PostCSS
gulp.task('postcss', function () {
    var processors = [
        autoprefixer({browsers: ['last 5 version']}),
        precss,
        cssnext
    ];

    return gulp.src("test/style.css")
        .pipe(postcss(processors))
        .pipe(gulp.dest("test/out"));
});