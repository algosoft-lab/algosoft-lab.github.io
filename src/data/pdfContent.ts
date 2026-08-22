import type { Locale, PdfPageContent } from '@/types/content';

export const PDF_LOGO = '/assets/img/logos/algopdf.svg';

export const PDF_STORE_URL = 'https://apps.microsoft.com/detail/9N9CJ9RKPW4S';

export const PDF_SETUP_URL = '/downloads/AlgoPDF-1.0.2-Setup.exe';

const zhContent: PdfPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: '/en/algopdf',
  alternateLabel: 'EN',
  meta: {
    title: 'AlgoPDF — 让 PDF 像 PPT 一样放映 | AlgoSoft',
    description:
      'AlgoPDF 是一款本地 PDF 播放器：多屏播放、双页 / 缩略图控场视图、画笔批注实时同步放映屏，把讲义变成放映。Windows 平台，即将登陆 Microsoft Store。',
    canonical: 'https://algosoft.cc/algopdf',
  },
  nav: {
    home: 'AlgoSoft 首页',
  },
  hero: {
    kicker: 'AlgoSoft 家族产品 · PDF 放映',
    title: '让 PDF 像 PPT 一样放映',
    subtitle:
      'AlgoPDF 是一款本地 PDF 播放器：第二块屏幕对外全屏放映，控制屏双页 / 缩略图控场，画笔批注实时同步——把讲义变成一场从容的演示。',
    primaryCta: '获取 AlgoPDF',
    primaryUrl: PDF_STORE_URL,
    secondaryCta: '返回 AlgoSoft 首页',
    directCta: '直接下载安装包',
    directUrl: PDF_SETUP_URL,
    note: 'v1.0.2 · Windows 10 / 11 · 微软商店或本页直接下载',
  },
  features: {
    kicker: '核心能力',
    title: '为讲解而生的播放器',
    subtitle: '从翻页到批注，每一步都为「站在讲台上的人」设计。',
    items: [
      {
        title: '多屏播放',
        description:
          '第二块屏幕以「扩展」方式接入后，一键选择对外放映的屏幕；控制屏翻页，放映屏实时跟随。',
        accent: 'violet',
      },
      {
        title: '双页视图',
        description: '当前页与下一页并排显示，讲解时永远先看一步，不再翻页翻到手忙脚乱。',
        accent: 'blue',
      },
      {
        title: '缩略图视图',
        description: '右侧滚动预览全部页面，进度与节奏一目了然，随时跳转到任意一页。',
        accent: 'emerald',
      },
      {
        title: '画笔批注',
        description:
          '控制屏随手圈点，批注实时同步到放映屏；橡皮逐迹擦除，颜色粗细可调，翻页自动清屏。',
        accent: 'red',
      },
      {
        title: '流畅渲染',
        description: 'hayro 渲染引擎配合预渲染队列，快速翻页不白屏、不卡顿，大文件同样顺滑。',
        accent: 'cyan',
      },
      {
        title: '中英双语',
        description: '界面跟随系统语言，也可以在「关于」中一键切换中文 / English。',
        accent: 'orange',
      },
    ],
  },
  scenes: {
    label: '适用场景',
    items: ['教学讲解', '学术答辩', '产品演示', '培训分享'],
  },
  cta: {
    title: '把讲义变成放映',
    subtitle: '现在就从 Microsoft Store 获取 AlgoPDF，下一场讲解交给它。',
    action: '获取 AlgoPDF',
    actionUrl: PDF_STORE_URL,
  },
  footer: {
    backHome: '返回 AlgoSoft 首页',
    privacyLabel: '隐私政策',
    privacyPath: '/algopdf/privacy',
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: PdfPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: '/algopdf',
  alternateLabel: '中文',
  meta: {
    title: 'AlgoPDF — Present PDFs like slides | AlgoSoft',
    description:
      'AlgoPDF is a local PDF player: mirror a full-screen playback to a second display, control it with dual-page or thumbnail views, and annotate live with a pen. Coming soon to the Microsoft Store for Windows.',
    canonical: 'https://algosoft.cc/en/algopdf',
  },
  nav: {
    home: 'AlgoSoft home',
  },
  hero: {
    kicker: 'AlgoSoft family · PDF playback',
    title: 'Present PDFs like slides',
    subtitle:
      'AlgoPDF is a local PDF player: the second screen faces the audience in full screen while you stay in control with dual-page and thumbnail views — with pen annotations mirrored live. Turn your handouts into a confident presentation.',
    primaryCta: 'Get AlgoPDF',
    primaryUrl: PDF_STORE_URL,
    secondaryCta: 'Back to AlgoSoft',
    directCta: 'Download installer',
    directUrl: PDF_SETUP_URL,
    note: 'v1.0.2 · Windows 10 / 11 · Microsoft Store or direct download',
  },
  features: {
    kicker: 'Core Features',
    title: 'A player built for presenting',
    subtitle: 'From page turns to annotations, every detail serves the person at the front of the room.',
    items: [
      {
        title: 'Multi-screen playback',
        description:
          'Once a second display is attached in extend mode, pick which screen faces the audience — your pages drive the full-screen playback live.',
        accent: 'violet',
      },
      {
        title: 'Dual-page view',
        description:
          'The current and next page sit side by side, so you always look one step ahead instead of scrambling.',
        accent: 'blue',
      },
      {
        title: 'Thumbnail view',
        description:
          'A scrolling preview of every page on the right — see the pace at a glance and jump to any page instantly.',
        accent: 'emerald',
      },
      {
        title: 'Pen annotation',
        description:
          'Jot and circle on the control screen; strokes mirror live to the audience screen. Erase stroke by stroke, and everything clears on page turn.',
        accent: 'red',
      },
      {
        title: 'Smooth rendering',
        description:
          'The hayro rendering engine with a prefetch queue keeps fast page turns free of blank flashes — even on large documents.',
        accent: 'cyan',
      },
      {
        title: 'Bilingual UI',
        description:
          'The interface follows your system language, with a one-click switch between Chinese and English.',
        accent: 'orange',
      },
    ],
  },
  scenes: {
    label: 'Use cases',
    items: ['Teaching', 'Thesis defense', 'Product demos', 'Training'],
  },
  cta: {
    title: 'Turn handouts into a presentation',
    subtitle: 'Get AlgoPDF from the Microsoft Store and hand your next talk over to it.',
    action: 'Get AlgoPDF',
    actionUrl: PDF_STORE_URL,
  },
  footer: {
    backHome: 'Back to AlgoSoft home',
    privacyLabel: 'Privacy Policy',
    privacyPath: '/en/algopdf/privacy',
    copyright: '© 2026 AlgoSoft',
  },
};

export const pdfContentByLocale: Record<Locale, PdfPageContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

export function getPdfContent(locale: Locale): PdfPageContent {
  return pdfContentByLocale[locale];
}
