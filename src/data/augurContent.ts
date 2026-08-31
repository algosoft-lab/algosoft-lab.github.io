import { withBase } from '@composables/useSiteRoutes';
import type { AugurPageContent, Locale } from '@/types/content';

export const AUGUR_GIT_LOGO = withBase('/assets/img/logos/augur-git.svg');
export const AUGUR_GIT_RELEASE_URL =
  'https://github.com/algosoft-lab/augur-git/releases/tag/nightly';
export const AUGUR_GIT_REPOSITORY_URL =
  'https://github.com/algosoft-lab/augur-git';

const zhContent: AugurPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: withBase('/en/augur-git/'),
  alternateLabel: 'EN',
  meta: {
    title: 'Augur Git — 审查改动，决定哪些成为历史 | AlgoSoft',
    description:
      'Augur Git 是面向本地 AI 辅助开发、以代码审查为先的开源 Git 客户端，让开发者在提交前理解、选择并确认工作区变更。',
    canonical: 'https://algosoft.cc/augur-git/',
  },
  nav: {
    home: 'AlgoSoft 首页',
  },
  hero: {
    kicker: 'AlgoSoft 开源产品 · 本地优先 Git 审查',
    title: '审查改动，决定哪些成为历史',
    subtitle:
      'Augur Git 把本地仓库变更转化为清晰、可导航的差异。它与终端、编辑器和编码代理并肩工作，把提交前的最终判断留给你。',
    primaryCta: '下载 Nightly',
    primaryUrl: AUGUR_GIT_RELEASE_URL,
    secondaryCta: '返回 AlgoSoft',
    secondaryUrl: withBase('/'),
    note: 'Windows · macOS · Linux · Apache License 2.0 · 无账号要求',
    visualLabel: 'Augur Git 工作区审查界面示意',
  },
  intro: {
    kicker: '为什么需要它',
    title: 'AI 让修改更快，理解和接受仍然需要人',
    subtitle:
      '编码代理可以在几分钟内改动许多文件，但开发者仍然需要判断这些改动是否正确、连贯、值得保留。',
    paragraphs: [
      'Augur Git 源于一条简单的本地工作流：在终端运行项目和开发工具，用编码代理完成较大范围的实现，在编辑器中做精确修正，然后在暂存、提交或推送之前审查最终变更。',
      '它不试图成为编码代理、编辑器或托管 Pull Request 平台，而是提供一个专注的本地审查层：让工作区中的可能未来与提交图记录的过去并置呈现，由开发者决定哪些改动真正成为历史。',
    ],
  },
  features: {
    kicker: '产品原则',
    title: '一个专注审查的 Git 工作界面',
    subtitle: '功能、边界和交互都围绕“看懂改动，再决定下一步”展开。',
    items: [
      {
        title: '以审查为先',
        description:
          '差异、变更文件和仓库上下文位于体验中心，审查不是藏在仓库管理功能之后的附属视图。',
        accent: 'violet',
      },
      {
        title: '本地优先',
        description:
          '通过系统 Git 检查本地仓库，不要求账号，也不依赖托管服务才能理解和审查变更。',
        accent: 'cyan',
      },
      {
        title: '人在回路中',
        description:
          '所有会改变仓库数据的操作都需要明确的用户动作，并把结果或错误清楚地呈现出来。',
        accent: 'orange',
      },
      {
        title: '适合 AI 辅助开发',
        description:
          '面对多文件、较大范围的代理改动，快速导航和清晰差异帮助你保持上下文，而不是被改动淹没。',
        accent: 'blue',
      },
      {
        title: '原生差异体验',
        description:
          '支持全部文件或单文件审查、行内 / 并排布局、语法感知渲染和字符级变更高亮。',
        accent: 'emerald',
      },
      {
        title: '开放构建',
        description: '开源代码、设计决策和开发过程都可以被检查、讨论和改进。',
        accent: 'red',
      },
    ],
  },
  workflow: {
    kicker: '工作流',
    title: '从可能的未来，到确定的历史',
    subtitle:
      'Augur Git 不接管你的工具链，只在变更进入历史之前提供清晰的观察点。',
    steps: [
      {
        number: '01',
        title: '产生变更',
        description:
          '使用编码代理完成较大范围的工作，或在编辑器中直接修改代码。',
      },
      {
        number: '02',
        title: '打开审查',
        description: '在 Augur Git 中查看工作区状态、变更文件和逐文件差异。',
      },
      {
        number: '03',
        title: '理解与修正',
        description: '定位问题，把需要修改的部分交回编辑器或编码代理。',
      },
      {
        number: '04',
        title: '决定历史',
        description: '暂存确认过的内容，然后提交或推送到仓库的下一段历史。',
      },
    ],
  },
  screenshots: {
    kicker: '界面预览',
    title: '把你的工作流放进来',
    subtitle: '这里预留真实截图位置，后续可以替换为 Augur Git 的实际界面。',
    items: [
      {
        title: '工作区审查',
        description: '展示 Changes / Staged 文件列表与逐文件差异。',
        placeholder: '截图占位符 · 工作区审查',
      },
      {
        title: '提交图与历史',
        description: '展示提交图、提交详情和文件差异。',
        placeholder: '截图占位符 · 提交图与历史',
      },
      {
        title: '版本比较',
        description: '展示 Base → Target 的只读版本比较窗口。',
        placeholder: '截图占位符 · 版本比较',
      },
    ],
  },
  cta: {
    title: '让下一次提交值得被保留',
    subtitle:
      '下载 Nightly 版本，在本地审查你的下一组变更；也可以查看源码和设计决策。',
    action: '下载 Augur Git',
    actionUrl: AUGUR_GIT_RELEASE_URL,
  },
  footer: {
    backHome: '返回 AlgoSoft 首页',
    docsLabel: '使用文档',
    docsPath: withBase('/docs/augur-git/'),
    githubLabel: 'GitHub 仓库',
    githubUrl: AUGUR_GIT_REPOSITORY_URL,
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: AugurPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: withBase('/augur-git/'),
  alternateLabel: '中文',
  meta: {
    title:
      'Augur Git — Review the change. Decide what becomes history. | AlgoSoft',
    description:
      'Augur Git is an open-source, local-first, review-first Git client for AI-assisted development, helping developers understand and approve changes before committing.',
    canonical: 'https://algosoft.cc/en/augur-git/',
  },
  nav: {
    home: 'AlgoSoft home',
  },
  hero: {
    kicker: 'AlgoSoft open source · Local-first Git review',
    title: 'Review the change. Decide what becomes history.',
    subtitle:
      'Augur Git turns local repository changes into clear, navigable diffs. It works beside your terminal, editor and coding agent, leaving the final decision before commit to you.',
    primaryCta: 'Download Nightly',
    primaryUrl: AUGUR_GIT_RELEASE_URL,
    secondaryCta: 'Back to AlgoSoft',
    secondaryUrl: withBase('/en/'),
    note: 'Windows · macOS · Linux · Apache License 2.0 · No account required',
    visualLabel: 'Augur Git working-tree review interface concept',
  },
  intro: {
    kicker: 'Why it exists',
    title: 'AI makes changes faster. Understanding them still takes people.',
    subtitle:
      'A coding agent can change many files in minutes; developers still need to decide whether those changes are correct, coherent and worth keeping.',
    paragraphs: [
      'Augur Git grew out of a practical local workflow: run the project and development tools in a terminal, use a coding agent for larger implementation work, make precise corrections in an editor, then review the final changes before staging, committing or pushing.',
      'It is not a coding agent, an editor or a hosted pull-request platform. It is the focused local review layer between a possible future in the working tree and the past recorded by the commit graph, where the developer decides which changes become history.',
    ],
  },
  features: {
    kicker: 'Design principles',
    title: 'A Git workspace focused on review',
    subtitle:
      'Every capability and boundary is shaped around understanding the change before deciding what happens next.',
    items: [
      {
        title: 'Review-first',
        description:
          'Diffs, changed files and repository context are the center of the experience, not a secondary view behind repository management.',
        accent: 'violet',
      },
      {
        title: 'Local-first',
        description:
          'Inspect local repositories through system Git, with no account requirement or hosted service required for review.',
        accent: 'cyan',
      },
      {
        title: 'Human in control',
        description:
          'Every repository-changing operation requires an explicit user action and surfaces its result or error.',
        accent: 'orange',
      },
      {
        title: 'Agent-friendly',
        description:
          'Fast navigation and clear diffs keep larger, multi-file agent changes understandable instead of overwhelming.',
        accent: 'blue',
      },
      {
        title: 'Native diff experience',
        description:
          'Review all files or one file with inline / side-by-side layouts, syntax-aware rendering and character-level highlighting.',
        accent: 'emerald',
      },
      {
        title: 'Built in the open',
        description:
          'The source code, design decisions and development process are available to inspect, discuss and improve.',
        accent: 'red',
      },
    ],
  },
  workflow: {
    kicker: 'The workflow',
    title: 'From a possible future to a deliberate history',
    subtitle:
      'Augur Git does not take over your toolchain; it gives you a clear observation point before changes enter history.',
    steps: [
      {
        number: '01',
        title: 'Create changes',
        description:
          'Use a coding agent for larger work, or make focused edits in your editor.',
      },
      {
        number: '02',
        title: 'Open review',
        description:
          'Inspect working-tree status, changed files and per-file diffs in Augur Git.',
      },
      {
        number: '03',
        title: 'Understand and revise',
        description:
          'Find issues and return the parts that need work to your editor or coding agent.',
      },
      {
        number: '04',
        title: 'Choose history',
        description:
          'Stage the reviewed content, then commit or push the next part of the repository history.',
      },
    ],
  },
  screenshots: {
    kicker: 'Interface previews',
    title: 'Bring your workflow into focus',
    subtitle:
      'These panels reserve space for real screenshots and can be replaced with Augur Git captures later.',
    items: [
      {
        title: 'Working-tree review',
        description:
          'Show the Changes / Staged file lists and a per-file diff.',
        placeholder: 'Screenshot placeholder · Working-tree review',
      },
      {
        title: 'Commit graph and history',
        description: 'Show the commit graph, commit details and file diffs.',
        placeholder: 'Screenshot placeholder · Commit graph',
      },
      {
        title: 'Revision comparison',
        description: 'Show the read-only Base → Target comparison window.',
        placeholder: 'Screenshot placeholder · Revision comparison',
      },
    ],
  },
  cta: {
    title: 'Make the next commit worth keeping',
    subtitle:
      'Download the Nightly build and review your next set of changes locally, or inspect the source and design decisions.',
    action: 'Download Augur Git',
    actionUrl: AUGUR_GIT_RELEASE_URL,
  },
  footer: {
    backHome: 'Back to AlgoSoft home',
    docsLabel: 'Documentation',
    docsPath: withBase('/en/docs/augur-git/'),
    githubLabel: 'GitHub repository',
    githubUrl: AUGUR_GIT_REPOSITORY_URL,
    copyright: '© 2026 AlgoSoft',
  },
};

export const augurContentByLocale: Record<Locale, AugurPageContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

export function getAugurContent(locale: Locale): AugurPageContent {
  return augurContentByLocale[locale];
}
