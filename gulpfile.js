var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-clean-css');
var minifyjs= require("gulp-uglify");
var concat=require('gulp-concat');


gulp.task('htmltask',function(){
	gulp.src('./*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('./die'))
});
gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./die/css'))
});
gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./die/css'))
});
gulp.task('jstask',function(){
		gulp.src('./js/*.js')  
		.pipe(minifyjs())   // 压缩
　　.pipe(concat('all.js')) // 合并后叫all.js
		.pipe(gulp.dest('./die/js')) //输出到die下js文件夹
	});
	gulp.task('watch', function () {
    				gulp.watch('*.html', ['htmltask']); //监听文件名  任务名
    		    	gulp.watch('css/*.css', ['csstask']);
　　gulp.watch('js/*.js', ['jstask']);
			});