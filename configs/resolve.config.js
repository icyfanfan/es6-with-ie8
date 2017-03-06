module.exports = function(options){
    var rootPath = options.rootPath;
    const path = require('path');
    return {
        alias: {
            sprites: path.join(rootPath, "src/icons/sprites"),
            src: path.join(rootPath, "src"),
            base: path.join(rootPath, "src/base"),
            module: path.join(rootPath, "src/module")
        }
    }

}