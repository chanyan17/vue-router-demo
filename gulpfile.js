// 文档 http://www.browsersync.cn/docs/gulp/
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器
gulp.task('run', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html').on('change', reload);
});

// 代理
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: '192.168.0.107'
//     });
// });

