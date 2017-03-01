const path = require('path');

module.exports = function(options){
    var filename = options.production?'js/[name]_[hash].js':'js/[name].js'
    return {
        path: options.path,
        // 输出文件名，如果不使用[name]，且chunk插件中未制定filename，则只会输出插件name文件 
        filename: filename
    };  
};