# Aura Living - 养老服务官网 (Aura Living Senior Care)

本项目是西雅图 Aura Living 精品家园的官方网站。采用 React + Vite 开发，并利用 Cloudflare 技术栈实现高性能托管。

## 🔗 核心链接
- **主域名**: [https://auralivingcare.com](https://auralivingcare.com)
- **后端接口**: `https://formhandler.auralivingcare.workers.dev`
- **代码仓库**: [GitHub Repo](https://github.com/sfq24/Auraliving)

## 🛠️ 本地开发环境配置

如果你是第一次在本地操作，请确保：
1. 安装 [Node.js (LTS 版本)](https://nodejs.org/)。
2. 若终端执行 `npm` 报错权限，请以管理员身份运行 PowerShell 并执行一次：
   `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### 快速启动
```bash
# 安装项目依赖
npm install

# 启动本地开发服务器
npm run dev