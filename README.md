# AlgoSoft 官网（algosoft.cc）

[algosoft.cc](https://algosoft.cc) 的官方网站，介绍 AlgoSoft 旗下的六款产品：

| 产品 | 定位 |
| --- | --- |
| **AlgoCOM** | 串口通信与调试 |
| **AlgoTerm** | 终端模拟器 |
| **AlgoGit** | Git 图形化客户端 |
| **AlgoPDF** | PDF 工具箱 |
| **AlgoCode** | 代码编辑器 |
| **AlgoClass** | 编程教学课堂平台 |

## 技术说明

纯静态单页站点，无构建步骤、无外部依赖（字体、图标均为本地 / 内联资源）：

```
index.html            页面结构（默认中文，data-i18n 标记可切换文案）
assets/css/main.css   样式（深色主题、响应式、入场动画）
assets/js/main.js     中英切换 + 滚动交互（i18n 文案表在此文件内）
assets/img/favicon.svg
```

- 支持中 / 英文切换，偏好保存在 `localStorage`
- 响应式布局，移动端单列显示
- 尊重系统「减弱动态效果」（prefers-reduced-motion）设置

## 本地预览

任意静态文件服务器均可，例如：

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 algosoft.cc

任选一种静态托管：

- **GitHub Pages**：推送到仓库后在 Settings → Pages 开启，并在域名服务商处添加 CNAME 记录指向 GitHub Pages，仓库根目录放置 `CNAME` 文件（内容为 `algosoft.cc`）。
- **Vercel / Netlify**：导入仓库即可自动部署，再按平台指引绑定自定义域名 `algosoft.cc` 并添加 DNS 记录。

## 待完善

- [ ] 各产品接入真实下载 / 文档链接（当前产品卡片未放置跳转）
- [ ] 替换 `hello@algosoft.cc` 为正式联系邮箱（如已开通）
- [ ] 产品介绍文案按实际情况校对（当前为初稿）
