const path = require('path');
const gulp = require('gulp');
// clean流程用
const rm = require('gulp-rimraf');
const webpack = require('gulp-webpack');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const shell = require('gulp-shell');
const spritesmith = require('gulp.spritesmith');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');

const webpackConfig = require('./webpack.config.js');

const dest = './pub'

// 任务-清理目录
gulp.task('clean', (done) => {
    return gulp.src(dest, { read: false }).pipe(rm());
});


// 任务-图片合并
gulp.task('sprite', function() {
    var spriteStream =  gulp.src('src/icons/png/*.png')//需要合并的图片地址
        .pipe(spritesmith({
            cssSpritesheetName: 'i-icon',  //对应sprite.hbs里spritesheet_info.name
            imgName: 'sprite.png',//保存合并后图片的地址
            cssName: 'css/sprite.css',//保存合并后css样式的地址
            padding: 4, // 生成图片之间的间距
            cssTemplate: __dirname + '/sprite.hbs',  // 生成css模板文件
            retinaSrcFilter: 'src/icons/png/*@x2.png',  // 该文件夹下，每个图片文件必须有一个@x2版本，且两个图片像素不能相同
            retinaImgName: 'sprite-x2.png', // 合并后保存图片地址
        }));
      
    return new Promise((resolve, reject) => {
        spriteStream.img
            .pipe(buffer())
            .pipe(imagemin())
            .pipe(gulp.dest('src/images'))
            .on('end', () =>
        spriteStream.css
            .pipe(gulp.dest('src/images'))
            .on('end', () =>
        resolve()));
    });
})

// 任务-webpack打包
gulp.task('webpack',  function() {


  gulp.src("./src/javascript/page/index.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./pub'))
    .on("error", function(err){
      throw err
    })
});
// 任务-构建打包
gulp.task('build', ['sprite','webpack']);

gulp.task('serve', [ "build"], function(){
  browserSync({
    server: {
      baseDir: ''
    }
  });
  gulp.watch(['*.html','pub/*.js'], reload);
})

gulp.task('dev-ie8',['build'],function(){
    connect.server();
})

gulp.task('server', function(){
    connect.server();
})
