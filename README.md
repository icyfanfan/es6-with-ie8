# webpack+babel+ie8踩坑demo

## 运行

- 首先 npm install
- 命令说明：
    
    npm run dev 开发模式构建项目，开启服务器，监听8080端口，修改源码自动构建，自动刷新浏览器
   
    npm run dev-quite 安静模式，修改源码需要手动刷新浏览器
   
    npm run pro 线上模式构建项目，资源地址替换为cdn地址，需要配host指向本地
- 页面在entry目录下


## 目录结构

```
├── README.md  // 读我
├── package.json  
├── gulpfile.js  // gulp入口文件
├── webpack.config.js  // webpack入口文件-线上
├── entry  // 打包后的页面
├── pub  // 打包后的js,css,图片
├── src  // 源码目录
│   ├── assets  // 依赖资源
│   ├── javascript   // js源码目录
```

## 基本说明
