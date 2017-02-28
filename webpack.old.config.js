/** 
 * 原webpack配置，仅做参考，已废弃
 */
const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 提取公共代码
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// 处理HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntries (){
    var src = './src/javascript/page'

}

var config =  {
    context: __dirname + "/src",
    // 入口，每个入口打包成一个文件
    entry:{
        index: "./javascript/page/index.js",
        test: "./javascript/page/test.js",
        // 必须和插件中定义的name一致
        common: ["regularjs"]
    },
    output: {
        path: __dirname + '/pub' ,
        // 打包结果命名格式 入口文件名_文件HASH.js
        // filename: "[name]_[hash].js"  
        // 输出文件名，如果不使用[name]，且插件中未制定filename，则只会输出插件name文件 
        filename: "[name].js"   
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw" },
            { 
                test: /\.js$/,
                loader: "babel",
                exclude: /(regularjs)/,
                query: {
                    presets: ["es2015"],
                    plugins: [
                        // "es3ify"
                        // object字面变量表示中，保证key加上双引号
                    "transform-es3-property-literals",
                        // objcet.key => object["key"]，避免IE8 catch default作为保留字，使用.操作符报错
                    "transform-es3-member-expression-literals",
                        // 将 ES6 模块标准 转换成 Node.js 用的 CMD模块标准
                    // "transform-es2015-modules-simple-commonjs"
                    ]
                }
            },
            {
        　　　　　test: /\.(png|jpg)$/,
        　　　　　loader: 'url-loader?limit=64'
    　　　　 },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // mcss文件loader
            {
                test: /\.mcss$/,
                // 使用extracttextplugin将css从bundle中抽取出来
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!mcss-loader")
            }
        ]

    },
    // externals: ['path', /server/ ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        // 拷贝第三方依赖到output
        new CopyWebpackPlugin([
            { from: '/assets' }
        ]),
        // 从bundle中抽取指定text到独立文件，这里配置css独立文件命名
        new ExtractTextPlugin("[name].css"),
        // 配置抽取公共代码
        // 公用模块和entry指定的基本类库都会打包到common.js中
        new CommonsChunkPlugin({
            // 可配置字符串列表，entry
            name: "common",
            // 忽略则以name为输出文件的名字，否则以此为输出文件名字
            // filename: "common.js", 
            // 配置为infinity则不会抽取公共代码
            minChunks:2,

        }),
        // 针对每个html入口都需要new一个插件实例，
        // TODO 考虑通过function自动监测入口目录生成
        // TODO 或者使用模板文件语法
        new HtmlWebpackPlugin({
          title:'页面一',
          template: './views/index.html', // 源模板文件
          filename: '../entry/index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
          showErrors: true,
          inject: 'body',
          chunks: ["common",'index']
        }),
        new HtmlWebpackPlugin({
          title:'页面二',
          template: './views/test.html', // 源模板文件
          filename: '../entry/test.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
          showErrors: true,
          inject: 'body', // 脚本注入的节点
        //  插入到模板中的chunk，不配置此项默认会将entry中所有的chunk注入到模板中。在配置多个页面时，每个页面注入的chunk应该是不相同的，需要通过该配置为不同页面注入不同的chunk
        //  插入顺序和指定顺序相同
          chunks: ["common",'test']  
      })

    ],
    devtool:'source-map',
    watch: true
};

if(argv.production){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ); 
    delete config.devtool;
    delete config.watch;
}


module.exports = config;