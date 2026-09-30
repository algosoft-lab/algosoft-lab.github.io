import { withBase } from '@composables/useSiteRoutes';
import type { GrepPageContent, Locale } from '@/types/content';

export const GREP_LOGO = withBase('/assets/img/logos/algogrep.svg');
export const GREP_PRIVACY_PATH = withBase('/algogrep/privacy/');
export const GREP_SCREENSHOT_SEARCH = withBase(
  '/assets/img/screenshots/algogrep-search.png',
);
export const CONTACT_EMAIL = '5266917@qq.com';

const zhContent: GrepPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: withBase('/en/algogrep/'),
  alternateLabel: 'EN',
  meta: {
    title: 'AlgoGrep — 给整个硬盘装上「正则眼镜」的本地文件搜索 | AlgoSoft',
    description:
      'AlgoGrep 是内嵌 ripgrep 内核的本地文件搜索工具：正则、文档、图片 OCR、扫描件 PDF 一网打尽，即搜即预览，全程离线。',
    canonical: 'https://algosoft.cc/algogrep/',
  },
  nav: {
    home: 'AlgoSoft 首页',
  },
  hero: {
    kicker: 'AlgoSoft 桌面产品 · 本地文件搜索',
    title: '给整个硬盘装上「正则眼镜」',
    subtitle:
      'AlgoGrep 内嵌 ripgrep 搜索内核：正则、文档、图片 OCR、扫描件 PDF 一网打尽，即搜即预览，全程离线。',
    primaryCta: '了解核心功能',
    primaryUrl: '#features',
    secondaryCta: '返回 AlgoSoft',
    secondaryUrl: withBase('/'),
    note: 'Windows · 即将登陆 Microsoft Store · 无账号 · 全程离线',
    visualLabel: 'AlgoGrep 实际运行界面：正则检索与即时预览',
    visualAlt: 'AlgoGrep 界面截图：用正则检索邮箱地址，命中高亮并同步代码预览',
  },
  intro: {
    kicker: '为什么需要它',
    title: '找一段代码、查一次报错、翻一个编号，都不该超过一秒',
    subtitle:
      '代码库里找一个函数、日志堆里追一次报错、几百份文档里翻一个合同编号、截图和扫描件里搜一行字——AlgoGrep 都能在几秒内给出答案，并在预览里直接框出命中位置。',
    paragraphs: [
      'AlgoGrep 把 ripgrep 以进程内组件的方式嵌入应用：不拼命令行、不起子进程，结果流式返回、随时可以取消，大仓库也不会假死。',
      '它不止搜纯文本：Word / PPT / Excel / PDF 的正文可以直接搜，截图和扫描件里的文字由本地 OCR 模型识别成可检索内容——所有识别都在你的电脑上完成。',
    ],
  },
  features: {
    kicker: '核心功能',
    title: '一个专注搜索的本地工作台',
    subtitle: '从正则检索到批量替换，每一步都先看清楚、再动手，全程不联网。',
    items: [
      {
        title: '快如 ripgrep',
        description:
          '搜索内核进程内直搜，不拼管道不起子进程，数万文件秒级出结果，大仓库也不假死。',
        accent: 'blue',
      },
      {
        title: '正则与文本搜索',
        description:
          '正则输入实时高亮与错误提示，整词、大小写、文件类型过滤、多目录范围、多模式 AND / OR，一个开关都不用翻文档。',
        accent: 'violet',
      },
      {
        title: '文档内容搜索',
        description: 'Word / PPT / Excel / PDF 直接搜正文，不走文件名碰运气。',
        accent: 'emerald',
      },
      {
        title: '图片 OCR 搜索',
        description:
          '截图、照片里的文字也能搜：本地 PP-OCRv6 识别，命中位置直接框在原图上。',
        accent: 'orange',
      },
      {
        title: '扫描件 PDF OCR',
        description:
          '扫描版 PDF 逐页自动识别，有文本层的页直接提取，页级缓存让重跑秒回。',
        accent: 'cyan',
      },
      {
        title: '即点即预览',
        description:
          '选中即预览：代码语法高亮，图片与 PDF 原样呈现，命中行与命中框随缩放平移实时跟随。',
        accent: 'red',
      },
    ],
  },
  workflow: {
    kicker: '工作流',
    title: '从一次检索，到放心交付',
    subtitle: 'AlgoGrep 不只是「搜到」，还帮你把结果收集成表、把替换改得放心。',
    steps: [
      {
        number: '01',
        title: '圈定范围',
        description: '添加一个或多个搜索目录，按文件类型设置包含与排除规则。',
      },
      {
        number: '02',
        title: '搜索与预览',
        description: '输入正则或关键词，结果流式返回，点开即预览命中上下文。',
      },
      {
        number: '03',
        title: '收集与导出',
        description:
          '跨文件勾选命中，提取捕获组并去重统计，一键导出 CSV / TSV。',
      },
      {
        number: '04',
        title: '预览式替换',
        description:
          '批量替换先看差异再写入：原子写入、自动备份、一键撤销，改错也能回头。',
      },
    ],
  },
  privacy: {
    kicker: '隐私承诺',
    title: '无账号，无遥测，无广告',
    subtitle:
      '搜索、识别、预览全部在本地完成，不收集任何个人信息，文件绝不离开你的设备。',
    items: [
      {
        title: '无账号',
        description: '不注册、不登录，打开即用。',
      },
      {
        title: '无遥测',
        description: '不埋点、不上报，应用不发起网络请求。',
      },
      {
        title: '无广告',
        description: '无广告组件，也不接入第三方数据服务。',
      },
      {
        title: '全程本地',
        description: 'OCR 与 PDF 渲染都在本机完成，结果只停留在本地。',
      },
    ],
    linkLabel: '阅读隐私政策 →',
    linkPath: GREP_PRIVACY_PATH,
  },
  cta: {
    title: '第一时间用上 AlgoGrep',
    subtitle:
      'AlgoGrep 即将登陆 Microsoft Store。想第一时间收到上线消息，或对产品有任何建议，欢迎来信。',
    action: '联系我们',
    actionUrl: `mailto:${CONTACT_EMAIL}`,
  },
  footer: {
    backHome: '返回 AlgoSoft 首页',
    privacyLabel: '隐私政策',
    privacyPath: GREP_PRIVACY_PATH,
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: GrepPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: withBase('/algogrep/'),
  alternateLabel: '中文',
  meta: {
    title:
      'AlgoGrep — Local file search that puts regex glasses on your whole disk | AlgoSoft',
    description:
      'AlgoGrep is local file search with a ripgrep core: regex, documents, image OCR and scanned PDFs, with instant preview. Fully offline.',
    canonical: 'https://algosoft.cc/en/algogrep/',
  },
  nav: {
    home: 'AlgoSoft home',
  },
  hero: {
    kicker: 'AlgoSoft desktop app · Local file search',
    title: 'Put regex glasses on your whole disk',
    subtitle:
      'AlgoGrep embeds the ripgrep search core: regex, documents, image OCR and scanned PDFs, with instant preview. Fully offline.',
    primaryCta: 'Explore features',
    primaryUrl: '#features',
    secondaryCta: 'Back to AlgoSoft',
    secondaryUrl: withBase('/en/'),
    note: 'Windows · Coming soon to the Microsoft Store · No account · Offline',
    visualLabel: 'AlgoGrep in action: regex search with instant preview',
    visualAlt:
      'AlgoGrep screenshot: searching email addresses with a regex, hits highlighted with a code preview',
  },
  intro: {
    kicker: 'Why it exists',
    title:
      'Finding a function, chasing an error, digging up an ID — none of it should take more than a second',
    subtitle:
      'Find a function in a codebase, chase an error through log files, dig a contract number out of hundreds of documents, or search text inside screenshots and scans. AlgoGrep answers in seconds and shows you exactly where it hit.',
    paragraphs: [
      'AlgoGrep embeds ripgrep as an in-process component: no command lines, no spawned processes. Results stream in, searches stay cancellable, and huge repositories never freeze the UI.',
      'It does not stop at plain text: the body text of Word, PowerPoint, Excel and PDF files is directly searchable, and text inside screenshots and scans is recognized by a local OCR model — everything runs on your computer.',
    ],
  },
  features: {
    kicker: 'Key features',
    title: 'A local workspace built around search',
    subtitle:
      'From regex lookup to batch replacement, every step shows you the change first — and never touches the network.',
    items: [
      {
        title: 'Ripgrep-fast',
        description:
          'The search core runs in-process — no shelling out, no pipelines. Tens of thousands of files return in seconds, and huge repositories never freeze the UI.',
        accent: 'blue',
      },
      {
        title: 'Regex and text search',
        description:
          'Live regex highlighting with instant error hints, whole-word and case-sensitive toggles, per-mode file masks, multiple root folders and multi-pattern AND / OR — no manuals required.',
        accent: 'violet',
      },
      {
        title: 'Search inside documents',
        description:
          'Search the body text of Word, PowerPoint, Excel and PDF files, not just their names.',
        accent: 'emerald',
      },
      {
        title: 'Image OCR search',
        description:
          'Text inside screenshots and photos becomes searchable. Recognition runs locally with PP-OCRv6, and hits are framed right on the image.',
        accent: 'orange',
      },
      {
        title: 'Scanned-PDF OCR',
        description:
          'Scanned PDFs are recognized page by page; pages with a text layer are extracted directly, and per-page caching makes re-runs instant.',
        accent: 'cyan',
      },
      {
        title: 'Instant preview',
        description:
          'Click a hit to preview it: syntax-highlighted code, images and PDF pages rendered as-is, with hit lines and hit boxes following every zoom and pan.',
        accent: 'red',
      },
    ],
  },
  workflow: {
    kicker: 'The workflow',
    title: 'From one search to a result you can trust',
    subtitle:
      'AlgoGrep does not stop at finding matches — it helps you collect them into a table and replace them with confidence.',
    steps: [
      {
        number: '01',
        title: 'Scope it',
        description:
          'Add one or more search folders and set include / exclude file masks.',
      },
      {
        number: '02',
        title: 'Search and preview',
        description:
          'Type a regex or keyword; results stream in and each hit opens in instant context preview.',
      },
      {
        number: '03',
        title: 'Collect and export',
        description:
          'Cherry-pick hits across files, extract capture groups with dedup and counts, and export as CSV / TSV.',
      },
      {
        number: '04',
        title: 'Replace with review',
        description:
          'Batch replacements preview as diffs before writing: atomic writes, automatic backups and one-click undo.',
      },
    ],
  },
  privacy: {
    kicker: 'Privacy promise',
    title: 'No account, no telemetry, no ads',
    subtitle:
      'Searching, recognition and preview all run locally. No personal data is collected, and your files never leave your device.',
    items: [
      {
        title: 'No account',
        description: 'No sign-up, no sign-in — launch and search.',
      },
      {
        title: 'No telemetry',
        description:
          'No tracking, no reporting; the app makes no network requests.',
      },
      {
        title: 'No ads',
        description: 'No ad components and no third-party data services.',
      },
      {
        title: 'All local',
        description:
          'OCR and PDF rendering run on your machine; results stay local.',
      },
    ],
    linkLabel: 'Read the privacy policy →',
    linkPath: withBase('/en/algogrep/privacy/'),
  },
  cta: {
    title: 'Be first to try AlgoGrep',
    subtitle:
      'AlgoGrep is coming soon to the Microsoft Store. To hear about the launch first, or to share feedback, drop us a line.',
    action: 'Contact us',
    actionUrl: `mailto:${CONTACT_EMAIL}`,
  },
  footer: {
    backHome: 'Back to AlgoSoft home',
    privacyLabel: 'Privacy policy',
    privacyPath: withBase('/en/algogrep/privacy/'),
    copyright: '© 2026 AlgoSoft',
  },
};

export const grepContentByLocale: Record<Locale, GrepPageContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

export function getGrepContent(locale: Locale): GrepPageContent {
  return grepContentByLocale[locale];
}
