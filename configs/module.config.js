const ExtractTextPlugin = require("extract-text-webpack-plugin");
const mcssLoader = ExtractTextPlugin.extract("style-loader", "css-loader!mcss-loader");
const cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader");
    
module.exports = function(options) {
    var loaders = [],
        imgname = options.production?'img/[name]_[hash].[ext]':'img/[name].[ext]';
    // html文件处理
    loaders.push({
        test: /\.html$/, loader: "raw" 
    });
    loaders.push({
        test: /\.hbs$/, loader: "handlebars" 
    });
    // js文件处理
    loaders.push({
        test: /\.js$/,
        loader: "babel?cacheDirectory",
        exclude: /(regularjs)/
    });
    // 图片
    loaders.push({
        test: /\.(png|jpg|gif)$/,
    　　 loader: 'url-loader?limit=8&name='+imgname
    });
    // mcss
   loaders.push({
        test: /\.mcss$/,
        // 使用extracttextplugin将css从bundle中抽取出来
        loader: mcssLoader
    });
    // css
    loaders.push({
        test: /\.css$/,
        loader: cssLoader
    }); 

    return {loaders:loaders}
}