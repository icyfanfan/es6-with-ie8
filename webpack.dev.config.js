/**
 * 开发环境webpack配置
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
    entry: entry({path:'',extra:{base: ['regularjs','base/polyfill.js']}}),
    output: output({path:distPath}),
    resolve: resolve({rootPath:rootPath}),
    module: modules({}),
    plugins: plugin({distPath:distPath,viewPath:viewPath,rootPath:rootPath}),
    devtool:'source-map',
    watch: true
};

// 开发模式使用cdn路径
config.output.publicPath = "/pub/";

module.exports = config;