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
├── README.md  
├── package.json  
├── .eslintrc  
├── .babelrc  
├── .gitignore  
├── package.json  
├── gulpfile.js  
├── webpack.config.js  
├── webpack.dev.config.js  
├── config  // 构建配置  
├── entry  // 打包后的页面入口
├── pub  // 打包后的js,css,图片
├── node_modules  // 依赖的npm包
├── src  // 源码目录
│   ├── icons  // 图标（合并前）
│   ├── sprites  // 图标（合并后），生成图标css
│   ├── base   // Regular组件扩展，基础依赖
│   ├── util   // 工具类
│   ├── common   // 基础组件
│   ├── specific   // 业务组件
│   ├── module   // 页面模块
│   ├── views   // 入口页面
```

## 基本说明
```
├── component  // 组件
│   ├── component.js  // 组件逻辑
│   ├── component.mcss  // 组件样式
│   ├── component.rgl   // 组件模板，如果模板较小，可以合并放到逻辑文件中
```
