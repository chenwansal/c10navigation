# C10 导航

## Quick Start
```
// ==== 安装依赖 ====
// 0. 运行环境
nodejs 14.0.0

// 1. 安装全局依赖
npm i -g typescript
npm i -g webpack

// 2. 安装前端依赖
cd web
npm i 

// 3. 安装服务端依赖
cd server
npm i
```

```
// ==== 编译前端 ====
cd web
npm run build
```

```
// ==== 编译服务端 && 启动 ====
// 注: port=你自定义的端口
cd server
npm start -- --port=9150
```

```
// ==== 访问网站 ====
// 打开浏览器, 输入 localhost:9150 即可访问
```