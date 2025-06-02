# Web Demo 项目

这是一个使用 Node.js 后端和原生前端技术栈的网站项目。

## 技术栈

- 后端：Node.js + Express
- 前端：原生 HTML + CSS + JavaScript
- 数据库：MySQL

## 项目结构

```
web-demo/
├── src/
│   ├── server/         # 后端代码
│   │   ├── config/     # 配置文件
│   │   ├── controllers/# 控制器
│   │   ├── models/     # 数据模型
│   │   ├── routes/     # 路由
│   │   └── utils/      # 工具函数
│   └── client/         # 前端代码
│       ├── css/        # 样式文件
│       ├── js/         # JavaScript文件
│       └── assets/     # 静态资源
├── .env               # 环境变量
└── package.json       # 项目配置
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 配置环境变量：
复制 `.env.example` 到 `.env` 并填写相应配置

3. 启动开发服务器：
```bash
npm run dev
```

4. 访问网站：
打开浏览器访问 `http://localhost:3000` 