const util = require('./util.js');

// console.log(entry);
module.exports = function(options){
    var path = options.globPath || 'src/view/!(config)/*.js';

    var entry = util.getEntry(path);

    entry = options && options.extra && Object.assign({}, entry, options.extra);
    
    // console.log(entry);
    
    return entry;
};