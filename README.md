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

## 线上部署（algocode.cc 服务器）

站点部署在 algocode.cc 服务器（103.85.226.45）上，由 `algocode-proxy` 直接作为静态文件服务：

- 网站文件：`/var/www/algosoft.cc/`（属主 `algocode`）
- 域名：`algosoft.cc` / `www.algosoft.cc` → 静态站；`algocode.cc` / `www.algocode.cc` → 反代 127.0.0.1:8080
- 证书：Let's Encrypt（`--cert-name algocode-cc`，四域名 SAN），certbot 自动续期，
  续期钩子 `/etc/letsencrypt/renewal-hooks/deploy/50-algocode-proxy.sh` 会替换证书并重启 proxy

更新网站内容：

```bash
# 本机（WSL）同步到服务器
rsync -az --delete --exclude '.git' --exclude 'README.md' \
  /home/lionel/algo-soft/ root@algocode.cc:/var/www/algosoft.cc/
```

代理配置与源码：`/home/lionel/algocode_proxy`（服务器配置 `/etc/algocode-proxy/config.toml`）。

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
