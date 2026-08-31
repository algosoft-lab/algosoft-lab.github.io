import type { Locale, SiteContent } from '@/types/content';

const assetBase = import.meta.env.BASE_URL;

const productLogos = {
  algocom: `${assetBase}assets/img/logos/algocom.svg`,
  algoterm: `${assetBase}assets/img/logos/algoterm.svg`,
  algogit: `${assetBase}assets/img/logos/algogit.svg`,
  algopdf: `${assetBase}assets/img/logos/algopdf.svg`,
  algocode: `${assetBase}assets/img/logos/algocode.png`,
  algoclass: `${assetBase}assets/img/logos/algoclass.png`,
} as const;

const sharedProducts = [
  {
    name: 'AlgoCOM',
    logo: productLogos.algocom,
    accent: 'blue',
  },
  {
    name: 'AlgoTerm',
    logo: productLogos.algoterm,
    accent: 'emerald',
  },
  {
    name: 'AlgoGit',
    logo: productLogos.algogit,
    accent: 'red',
  },
  {
    name: 'AlgoPDF',
    logo: productLogos.algopdf,
    accent: 'violet',
  },
  {
    name: 'AlgoCode',
    logo: productLogos.algocode,
    accent: 'cyan',
    url: 'https://algocode.cc',
  },
  {
    name: 'AlgoClass',
    logo: productLogos.algoclass,
    accent: 'orange',
  },
] as const;

const zhContent: SiteContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternateLocale: 'en',
  alternateLabel: 'EN',
  meta: {
    title: 'AlgoSoft — 为开发者打造的工具家族',
    description:
      'AlgoSoft 旗下产品：AlgoCOM、AlgoTerm、AlgoGit、AlgoPDF、AlgoCode 与 AlgoClass，为开发者打造的算法级工具家族。',
    canonical: 'https://algosoft.cc/',
  },
  navigation: {
    products: '产品',
    faq: '常见问题',
    about: '关于',
    docs: '文档',
    cta: '开始探索',
  },
  hero: {
    titleBefore: '为开发者打造的',
    titleAfter: '算法级工具家族',
    subtitle:
      '六款精心打磨的工具，覆盖串口通信、终端、版本控制、文档处理、代码编辑与编程教学。',
    primaryCta: '浏览产品',
    secondaryCta: '了解 AlgoSoft',
    terminalLabel: '终端窗口：AlgoSoft 产品列表',
  },
  products: {
    kicker: '产品矩阵',
    title: '六款工具，一个家族',
    subtitle: '每一款都围绕真实开发场景反复打磨，轻量、快速、可靠。',
    items: [
      {
        ...sharedProducts[0],
        tagline: '串口通信与调试工具，让每一次收发都清晰可控。',
        features: [
          '多串口实时监视与数据收发',
          '十六进制 / 文本双视图，时间戳完整记录',
          '常用波特率一键切换，脚本化自动应答',
        ],
        category: '串口调试',
      },
      {
        ...sharedProducts[1],
        tagline: '现代化终端模拟器，快得像本地 Shell 一样自然。',
        features: [
          'GPU 加速渲染，流畅滚动不掉帧',
          'SSH / 串口 / 本地多会话，标签页自由分组',
          '分屏、主题、字体一键定制，配置随账号同步',
        ],
        category: '终端模拟',
        docsUrl: `${assetBase}docs/algoterm/`,
        docsLabel: '查看文档 →',
      },
      {
        ...sharedProducts[2],
        tagline: '所见即所得的 Git 客户端，版本历史一目了然。',
        features: [
          '分支图谱可视化，提交记录随意检视',
          '暂存、比对、解决冲突，全部图形化操作',
          '内置常用工作流，rebase / cherry-pick 不再高危',
        ],
        category: '版本控制',
      },
      {
        ...sharedProducts[3],
        tagline: '让 PDF 像 PPT 一样放映的本地播放器。',
        features: [
          '第二块屏幕全屏放映，翻页实时联动',
          '双页 / 缩略图两种控场视图',
          '画笔批注实时同步放映屏，翻页自动清屏',
        ],
        category: 'PDF 放映',
        url: '/algopdf',
        siteLabel: '了解详情 →',
      },
      {
        ...sharedProducts[4],
        tagline: '轻量强悍的代码编辑器，为算法与日常开发而生。',
        features: [
          '秒级启动，大文件照样丝滑',
          '多语言语法高亮与智能补全',
          '内置算法题调试环境，即写即跑',
        ],
        category: '代码编辑',
        siteLabel: '访问官网 →',
      },
      {
        ...sharedProducts[5],
        tagline: '编程教学课堂平台，让教与学实时联动。',
        features: [
          '教师一键下发习题，学生进度实时可见',
          '在线代码运行与自动判题，即时反馈',
          '课堂数据统计，薄弱知识点一屏掌握',
        ],
        category: '编程教学',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: '常见问题',
    subtitle: '关于 AlgoSoft 与各款产品，你可能想问的。',
    items: [
      {
        question: 'AlgoSoft 是什么？',
        answer:
          'AlgoSoft 是一个开发者工具品牌，旗下有六款产品：AlgoCOM、AlgoTerm、AlgoGit、AlgoPDF、AlgoCode 与 AlgoClass。',
      },
      {
        question: 'AlgoCOM、AlgoTerm、AlgoGit、AlgoPDF 分别是做什么的？',
        answer:
          'AlgoCOM 是串口通信与调试工具，AlgoTerm 是终端模拟器，AlgoGit 是 Git 图形化客户端，AlgoPDF 是让 PDF 像 PPT 一样放映的本地播放器。',
      },
      {
        question: 'AlgoCode 和 AlgoClass 是什么关系？',
        answer:
          '它们是面向 C++ 算法教学的一体化方案：AlgoCode 是学生端 IDE，AlgoClass 是教师端课堂工具，两者配套使用。',
      },
      {
        question: '这些软件收费吗？',
        answer:
          'AlgoCode 与 AlgoClass 免费使用，AlgoPDF 即将登陆 Microsoft Store。AlgoCOM、AlgoTerm、AlgoGit 尚未发布，定价以后续公告为准。',
      },
      {
        question: '在哪里下载这些软件？',
        answer: 'AlgoCode 与 AlgoClass 可在',
        answerSuffix:
          '下载。AlgoPDF 可从 Microsoft Store 获取；AlgoCOM、AlgoTerm、AlgoGit 尚未发布，敬请期待。',
        answerLink: { label: 'algocode.cc', href: 'https://algocode.cc' },
      },
      {
        question: 'algosoft.cc 和 algocode.cc 是什么关系？',
        answer:
          'algosoft.cc 是 AlgoSoft 产品家族官网；algocode.cc 是 AlgoCode 与 AlgoClass 的线上站点。',
      },
      {
        question: '如何联系作者？',
        answer: '可以通过邮箱',
        answerSuffix: '联系作者。',
        answerLink: { label: '5266917@qq.com', href: 'mailto:5266917@qq.com' },
      },
    ],
  },
  brand: {
    kicker: '关于我们',
    title: 'Algo，取自 Algorithm',
    subtitle:
      'AlgoSoft 是一个独立的开发者工具品牌：小而精，慢而稳，每一款产品都先说服自己，再交到你手上。',
    values: [
      {
        title: '极致性能',
        description: '启动快、响应快、占用低。性能不是卖点，是底线。',
        accent: 'cyan',
        icon: 'bolt',
      },
      {
        title: '隐私优先',
        description: '能本地完成的处理绝不联网，你的数据只属于你。',
        accent: 'violet',
        icon: 'shield',
      },
      {
        title: '长期主义',
        description: '不追热点，不做订阅绑架，把每款工具长期打磨下去。',
        accent: 'orange',
        icon: 'clock',
      },
    ],
  },
  cta: {
    title: '准备好试试了吗？',
    subtitle: '访问对应产品页面，或通过邮件与我们联系。',
    action: '联系我们',
  },
  footer: {
    tagline: '为开发者打造的算法级工具家族',
    navigationLabel: '页脚导航',
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  alternateLocale: 'zh-CN',
  alternateLabel: '中文',
  meta: {
    title: 'AlgoSoft — A family of tools built for developers',
    description:
      'Products by AlgoSoft: AlgoCOM, AlgoTerm, AlgoGit, AlgoPDF, AlgoCode and AlgoClass — a family of algorithm-grade tools for developers.',
    canonical: 'https://algosoft.cc/en/',
  },
  navigation: {
    products: 'Products',
    faq: 'FAQ',
    about: 'About',
    docs: 'Docs',
    cta: 'Get Started',
  },
  hero: {
    titleBefore: 'A family of tools',
    titleAfter: 'built for developers',
    subtitle:
      'Six carefully crafted tools covering serial communication, terminal, version control, documents, code editing and coding education.',
    primaryCta: 'Explore Products',
    secondaryCta: 'About AlgoSoft',
    terminalLabel: 'Terminal window listing AlgoSoft products',
  },
  products: {
    kicker: 'Product Matrix',
    title: 'Six tools, one family',
    subtitle:
      'Every product is iterated around real development workflows — lightweight, fast and reliable.',
    items: [
      {
        ...sharedProducts[0],
        tagline:
          'Serial communication and debugging, with every byte under control.',
        features: [
          'Real-time monitoring and transceiving on multiple ports',
          'Hex / text dual view with full timestamps',
          'One-click baud rates and scripted auto-response',
        ],
        category: 'Serial Port',
      },
      {
        ...sharedProducts[1],
        tagline:
          'A modern terminal emulator that feels as fast as a local shell.',
        features: [
          'GPU-accelerated rendering, smooth scrolling',
          'SSH / serial / local sessions with flexible tab groups',
          'Split panes, themes and fonts, synced across devices',
        ],
        category: 'Terminal',
        docsUrl: `${assetBase}en/docs/algoterm/`,
        docsLabel: 'Read docs →',
      },
      {
        ...sharedProducts[2],
        tagline: 'A visual Git client where history is crystal clear.',
        features: [
          'Visual branch graph, inspect any commit',
          'Staging, diffing and conflict resolution, all graphical',
          'Guided workflows make rebase / cherry-pick safe',
        ],
        category: 'Version Control',
      },
      {
        ...sharedProducts[3],
        tagline: 'A local PDF player that presents PDFs like slides.',
        features: [
          'Full-screen playback on a second display, pages in sync',
          'Dual-page and thumbnail views for the presenter',
          'Live pen annotations, cleared on every page turn',
        ],
        category: 'PDF Playback',
        url: '/algopdf',
        siteLabel: 'Learn more →',
      },
      {
        ...sharedProducts[4],
        tagline:
          'A lightweight yet powerful code editor for algorithms and daily work.',
        features: [
          'Launches in seconds, stays smooth on huge files',
          'Syntax highlighting and smart completion for many languages',
          'Built-in debugging environment for algorithm problems',
        ],
        category: 'Code Editor',
        siteLabel: 'Visit site →',
      },
      {
        ...sharedProducts[5],
        tagline:
          'A coding-classroom platform connecting teaching and learning in real time.',
        features: [
          'Teachers assign exercises and watch live progress',
          'In-browser code execution with auto-judging feedback',
          'Classroom analytics reveal weak spots at a glance',
        ],
        category: 'Education',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'What you might want to know about AlgoSoft and its products.',
    items: [
      {
        question: 'What is AlgoSoft?',
        answer:
          'AlgoSoft is a developer-tools brand with six products: AlgoCOM, AlgoTerm, AlgoGit, AlgoPDF, AlgoCode and AlgoClass.',
      },
      {
        question: 'What do AlgoCOM, AlgoTerm, AlgoGit and AlgoPDF do?',
        answer:
          'AlgoCOM is a serial communication and debugging tool, AlgoTerm is a terminal emulator, AlgoGit is a visual Git client, and AlgoPDF is a local PDF player that presents PDFs like slides.',
      },
      {
        question: 'What is the relationship between AlgoCode and AlgoClass?',
        answer:
          "They are an integrated solution for teaching C++ algorithms: AlgoCode is the student's IDE and AlgoClass is the teacher's classroom tool, used together.",
      },
      {
        question: 'Are these products free?',
        answer:
          'AlgoCode and AlgoClass are free to use, and AlgoPDF is coming soon to the Microsoft Store. AlgoCOM, AlgoTerm and AlgoGit are not released yet; pricing will be announced later.',
      },
      {
        question: 'Where can I download the software?',
        answer: 'AlgoCode and AlgoClass can be downloaded from',
        answerSuffix:
          '. AlgoPDF is available on the Microsoft Store; AlgoCOM, AlgoTerm and AlgoGit are not released yet.',
        answerLink: { label: 'algocode.cc', href: 'https://algocode.cc' },
      },
      {
        question:
          'What is the relationship between algosoft.cc and algocode.cc?',
        answer:
          'algosoft.cc is the official site of the AlgoSoft product family; algocode.cc is the online site of AlgoCode and AlgoClass.',
      },
      {
        question: 'How can I contact the author?',
        answer: 'You can reach the author by email at',
        answerSuffix: '.',
        answerLink: { label: '5266917@qq.com', href: 'mailto:5266917@qq.com' },
      },
    ],
  },
  brand: {
    kicker: 'About Us',
    title: 'Algo, as in Algorithm',
    subtitle:
      'AlgoSoft is an independent developer-tools brand: small but focused, steady and patient. Every product must convince us first, before it reaches your hands.',
    values: [
      {
        title: 'Performance First',
        description:
          'Fast to launch, fast to respond, light on resources. Performance is the baseline, not a feature.',
        accent: 'cyan',
        icon: 'bolt',
      },
      {
        title: 'Privacy by Default',
        description:
          'Whatever can be done locally stays local. Your data belongs to you.',
        accent: 'violet',
        icon: 'shield',
      },
      {
        title: 'In It for the Long Run',
        description:
          'No hype-chasing, no subscription traps — just tools polished for years.',
        accent: 'orange',
        icon: 'clock',
      },
    ],
  },
  cta: {
    title: 'Ready to give them a try?',
    subtitle: 'Visit the product pages, or reach out by email.',
    action: 'Contact Us',
  },
  footer: {
    tagline: 'A family of algorithm-grade tools for developers',
    navigationLabel: 'Footer navigation',
    copyright: '© 2026 AlgoSoft',
  },
};

export const contentByLocale: Record<Locale, SiteContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}
