import { withBase } from '@composables/useSiteRoutes';
import type { Locale } from '@/types/content';

export const DECKLE_STORE_URL = 'https://apps.microsoft.com/detail/9PG0X56J3C41';

interface DeckleCopy {
  locale: Locale;
  note: string;
  storeCta: string;
  privacyCta: string;
  headline: string;
  sub: string;
  featuresHead: { kicker: string; title: string };
  features: Array<{ title: string; text: string }>;
  shotsHead: { kicker: string; title: string };
  privacy: { title: string; text: string; cta: string };
}

const zh: DeckleCopy = {
  locale: 'zh-CN',
  note: 'Windows · Microsoft Store 已上线 · 无账号 · 全程离线',
  storeCta: '从 Microsoft Store 获取',
  privacyCta: '隐私政策',
  headline: '把书排成书原本的样子',
  sub: 'Deckle Reader 是一款纯 Rust 的 EPUB 3.3 阅读器：数学公式逐条排版、中日文竖排原样呈现、书内视频音频直接播放——不连网，不打扰。',
  featuresHead: {
    kicker: '核心能力',
    title: '公式、竖排、媒体，一样都不将就',
  },
  features: [
    {
      title: 'MathML 公式排版',
      text: '内嵌 MathML Core 引擎：分式、根式、上下标、大型算符拉伸，与浏览器同源的排版规则——公式是排出来的，不是贴图。',
    },
    {
      title: '竖排 CJK',
      text: 'writing-mode: vertical-rl/lr 完整支持：中日文自右向左成列、縦中横压格、竖排里的超链接点击可开。',
    },
    {
      title: '排版保真',
      text: 'CSS 2.1 排版子集：浮动绕排、表格、列表、负边距、行内样式——书怎么写，就怎么排。',
    },
    {
      title: '媒体播放',
      text: '书内视频（H.264 / HEVC / VP9）与音频（MP3 / AAC）直接播放，全部本地软解，一次一个，互不打扰。',
    },
    {
      title: '超链接',
      text: '书内链接蓝色标识，点击弹系统浏览器；资源零外传。',
    },
    {
      title: '纯 Rust',
      text: '无 Node、无 C 运行时、无 Electron——安装包小、启动快、不驻留后台。',
    },
  ],
  shotsHead: {
    kicker: '实际画面',
    title: '公式页与竖排页',
  },
  privacy: {
    title: '你的书，只属于你',
    text: '无账号、无遥测、无广告：排版与播放全部在本地完成，书文件绝不离开你的设备。',
    cta: '阅读隐私政策',
  },
};

const en: DeckleCopy = {
  locale: 'en',
  note: 'Windows · Now on the Microsoft Store · No account · Fully offline',
  storeCta: 'Get it from the Microsoft Store',
  privacyCta: 'Privacy policy',
  headline: 'Books, laid out the way they were written',
  sub: 'Deckle Reader is a pure-Rust EPUB 3.3 reader: MathML formulas typeset line by line, vertical CJK rendered as authored, and in-book video and audio that just play — offline, and without nagging.',
  featuresHead: {
    kicker: 'Capabilities',
    title: 'Formulas, vertical text, media — no compromises',
  },
  features: [
    {
      title: 'MathML typesetting',
      text: 'An embedded MathML Core engine: fractions, radicals, scripts and stretched operators follow the same rules browsers use — formulas are typeset, not pasted.',
    },
    {
      title: 'Vertical CJK',
      text: 'Full writing-mode: vertical-rl/lr — Japanese and Chinese flow in right-to-left columns, with tate-chū-yoko and clickable links inside vertical text.',
    },
    {
      title: 'Typographic fidelity',
      text: 'A CSS 2.1 subset: floats, tables, lists, negative margins, inline styles — the book is laid out as authored.',
    },
    {
      title: 'Media playback',
      text: 'Video (H.264 / HEVC / VP9) and audio (MP3 / AAC) embedded in books play on the page — decoded locally, one at a time.',
    },
    {
      title: 'Hyperlinks',
      text: 'Links are shown in blue and open in your system browser; book resources never leave the device.',
    },
    {
      title: 'Pure Rust',
      text: 'No Node, no C runtime, no Electron — a small package that starts fast and never lingers in the background.',
    },
  ],
  shotsHead: {
    kicker: 'In use',
    title: 'Formula pages and vertical pages',
  },
  privacy: {
    title: 'Your books stay yours',
    text: 'No account, no telemetry, no ads: typesetting and playback run entirely on your device, and your books never leave it.',
    cta: 'Read the privacy policy',
  },
};

const byLocale: Record<Locale, DeckleCopy> = {
  'zh-CN': zh,
  en,
};

export function getDeckleContent(locale: Locale): DeckleCopy {
  return byLocale[locale];
}
