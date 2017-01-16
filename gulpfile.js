/*eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin'); //losslessly compress JPEGs, GIFS, PNGs and SVGs 
//Lossy compression
const pngquant = require('imagemin-pngquant');

gulp.task('default', ['copy-html', 'copy-images','styles'], ()=>{
	gulp.watch('./sass/**/*.scss',['styles']);
	gulp.watch('./index.html', ['copy-html']);
	gulp.watch('./img/*', ['copy-images']);
	gulp.watch('./dist/index.html');

});

gulp.task('dist', [
	'copy-html',
	'copy-images',
	'styles',
	'lint',
	'scripts-dist'
]);


gulp.task('libs', ()=>{
	gulp.src(['./public/bower_components/angular/angular.js',
		'./public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'./public/bower_components/angular-route/angular-route.min.js',
		'./public/bower_components/bootstrap/dist/js/bootstrap.js',
		'./public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
		'./public/bower_components/angular-cookies/angular-cookies.js',
		'./public/bower_components/angular-material/angular-material.js',
		'./public/bower_components/angular-animate/angular-animate.js',
		'./public/bower_components/angular-aria/angular-aria.js',
		'./public/bower_components/angular-messages/angular-messages.js',
		'./public/bower_components/angular-material-icons/angular-material-icons.min.js',
		'./public/bower_components/moment-picker/dist/angular-moment-picker.min.js',
		'./public/bower_components/jquery/dist/jquery.js'
		])
	.pipe(gulp.dest('./dist/libs'));

	gulp.src(['./public/bower_components/bootstrap/**/*',])
	.pipe(gulp.dest('./dist/libs/bootstrap'));

	gulp.src(['./public/bower_components/components-font-awesome/**/*',])
	.pipe(gulp.dest('./dist/libs/font-awesome'));	


});

gulp.task('scripts', ()=>{
	gulp.src('./public/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist/js'));	

	gulp.src('./public/src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/js'));	

});

gulp.task('scripts-dist', ()=>{
	gulp.src('./public/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js'));

	gulp.src('./public/src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js'));
});


gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
	return gulp.src(['**/*.js','!node_modules/**', '!server/**', 
		'!public/bower_components/**', '!dist/**'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});


gulp.task('copy-html', ()=>{
	gulp.src(['./public/src/**/*', './public/index.html'])
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', ()=>{
	gulp.src('./public/img/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/img'));
});


gulp.task('styles', ()=>{
	gulp.src('./public/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['> 5%']
			//'last 2 version', '> 5%', 'safari 5','ie 80', 'ie 9', 'opera 12.1', 'iOS 7', 'android 4'
		}))
		.pipe(gulp.dest('./dist/css'));

	gulp.src(['./public/bower_components/rdash-ui/dist/css/rdash.css',
		'./public/bower_components/angular-material-icons/angular-material-icons.css',
		'./public/bower_components/moment-picker/dist/angular-moment-picker.min.css',
		'./public/bower_components/angular-material/angular-material.css'])
	.pipe(gulp.dest('./dist/libs/css'));

});



