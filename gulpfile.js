const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');  
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//Compilando o sass, add autoprefixer e dando refresh na page
function compilaSass() {
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist:['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

//tarefas  do sass
gulp.task('sass', compilaSass);


//Plugins css
function pluginCSS() {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginCSS);

//function js
function gulpJs() {
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
gulp.task('alljs', gulpJs);

function pluginsJs() {
    return gulp
    .src(['./js/lib/aos.min.js','./js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
gulp.task('pluginsjs', pluginsJs);


// função do browsersync
function browser() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    })
}

//tarefa do browser sync
gulp.task('browser-sync', browser);

//função do watch para alterações do sass e html 
function watch() {
    gulp.watch('scss/*scss', compilaSass);
    gulp.watch('css/lib/*.css', pluginCSS);
    gulp.watch('*.html').on('change',browserSync.reload);
    gulp.watch('js/scripts/*js', gulpJs);
    gulp.watch('js/lib/*.js', pluginsJs);
    
}

//tarefa do waatch
gulp.task('watch', watch);

//tarefa que executa watch e browser sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass','plugincss', 'alljs', 'pluginsjs'));