# AlgoSoft 官网

AlgoSoft 官方产品家族官网，现已迁移为 Vite + Vue + TypeScript 7 项目，支持中文 / 与英文 /en/ 两个静态入口。

## 技术栈

- Vite 8.2.1
- Vue 3.5.41
- TypeScript 7.0.2
- ES2024
- Element Plus 2.14.4
- TypeScript path aliases（@/、@components/、@composables/、@data/、@styles/）

## 本地开发

    pnpm install
    pnpm dev

## 校验与构建

    pnpm typecheck
    pnpm build
    pnpm preview

pnpm build 会生成包含 / 和 /en/ 两个入口的 dist/ 静态站点。

## 目录结构

    src/
      components/    页面组件
      composables/   Vue composables
      data/          中英文内容数据
      styles/        全局样式
      types/         TypeScript 类型
    public/assets/   logo、favicon 等静态资源

站点部署在 algosoft.cc 时，需要将 dist/ 内容作为静态文件根目录，并确保 /en/ 映射到 dist/en/index.html。
