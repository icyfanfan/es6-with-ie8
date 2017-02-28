const glob = require('glob')
const path = require('path');


/**
 * 根据文件匹配模式获取入口文件列表
 * 目录相对于项目根目录
 * @param {string} globPath
 * @returns entries
 * @example 
 * {index: ['./src/javascript/page/index.js'],
  test: ['./src/javascript/page/test.js']}
 */
function getEntry (globPath){
    var files = glob.sync(globPath);
    var entries = {},
        baseName, extName;
    files.forEach((entry) => {
        extName = path.extname(entry);
        baseName = path.basename(entry, extName);
        entries[baseName] = ['./' + entry];
    })
    return entries;
}

module.exports = {
    getEntry : getEntry
}