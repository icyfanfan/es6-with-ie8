/**
 * 线上环境webpack配置
 */
// 参数配置
const path = require('path');
const rootPath = path.resolve(__dirname);
const distPath = path.join(rootPath,'pub');
const viewPath = path.join(rootPath,'entry');
// 获取js入口文件
const entry = require('./configs/entry.config.js');
const output = require('./configs/output.config.js');
const plugin = require('./configs/plugins.config.js');
const modules = require('./configs/module.config.js');
const resolve = require('./configs/resolve.config.js');

var config =  {
    entry: entry({path:'', extra:{base: ['regularjs','./src/javascript/base/polyfill.js']}}),
    output: output({production:true, path:distPath}),
    resolve: resolve({rootPath:rootPath}),
    module: modules({production:true}),
    plugins: plugin({production:true, distPath:distPath,viewPath:viewPath,rootPath:rootPath}),
};
// 线上/测试模式使用cdn路径
config.output.publicPath = 'https://test.cdn/haoma/';
// 代码压缩
const webpack = require('webpack');

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}))

module.exports = config;