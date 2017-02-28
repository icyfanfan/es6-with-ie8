const util = require('./util.js');
const path = require('path');
const webpack = require('webpack');
// 删除文件夹
const CleanPlugin = require('clean-webpack-plugin');
// 拷贝文件，文件目录
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 提取公共代码
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// 处理HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 从打包结果中抽取指定类型为独立文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =  function(options){
    const distPath = options.distPath||'pub';
    const viewPath = options.viewPath||'entry';
    var plugins = [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        // 清除打包结果文件夹
        new CleanPlugin([distPath,viewPath],{
            root: options.rootPath
        }),
        // 拷贝第三方依赖到output
        // new CopyWebpackPlugin([
        //     { from: '/assets' }
        // ]),
        // 从bundle中抽取指定text到独立文件，这里配置css独立文件命名
        new ExtractTextPlugin('[name]_[hash].css'),
        // 配置抽取公共代码
        // 公用模块和entry指定的基本类库都会打包到common.js中
        new CommonsChunkPlugin({
            // 可配置字符串列表，如要配置基础库和公用代码库并存，必须包含entry中
            // 基础库入口key名称，依赖顺序从右到左
            name: ["common","base"],
                // 忽略则以name为输出文件的名字，否则以此为输出文件名字
                // filename: "common.js", 
                // 配置为infinity则不会抽取公共代码
                minChunks:2,

        })
    ];

    var htmlEntry = util.getEntry('src/views/*.hbs');
    var pluginTem = {
        showErrors: true,
        inject: 'body',
        chunks: ["base", "common"]
    }
    for (var key in htmlEntry) {
        if (htmlEntry.hasOwnProperty(key)) {
            var htmlPlugin = Object.assign({},pluginTem,{
                template: htmlEntry[key][0],
                filename: path.join(viewPath, key+'.html')
            });
            htmlPlugin.chunks = pluginTem.chunks.concat(key);
            plugins.push(new HtmlWebpackPlugin(htmlPlugin));
            htmlPlugin = {}
        }
    }
    return plugins;
};

