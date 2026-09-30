import { withBase } from '@composables/useSiteRoutes';
import type { Locale, PrivacyPageContent } from '@/types/content';

const CONTACT_EMAIL = '5266917@qq.com';

const zhContent: PrivacyPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: withBase('/en/algopdf/privacy/'),
  alternateLabel: 'EN',
  meta: {
    title: 'AlgoPDF 隐私政策 | AlgoSoft',
    description:
      'AlgoPDF 不收集、不传输、不共享任何个人信息：无账号、无遥测、无广告，所有 PDF 均在本地解析渲染。',
    canonical: 'https://algosoft.cc/algopdf/privacy/',
  },
  nav: {
    home: 'AlgoSoft 首页',
    product: 'AlgoPDF 产品页',
    productPath: withBase('/algopdf/'),
  },
  hero: {
    kicker: 'AlgoPDF · 隐私政策',
    title: '你的文件，只属于你',
    subtitle:
      'AlgoPDF 不收集、不传输、不共享任何个人信息。本页说明应用对数据的全部处理方式——它很短，因为确实没什么可收集的。',
    updated: '生效日期：2026 年 8 月 19 日 · 发布者：Lionel Fung（AlgoSoft）',
  },
  sections: [
    {
      heading: '我们不收集个人信息',
      paragraphs: [
        'AlgoPDF 没有账号系统，没有遥测（telemetry），没有分析统计 SDK，没有广告组件，也不接入任何第三方数据服务。应用不会收集、存储或传输可用于识别你身份的任何信息。',
      ],
    },
    {
      heading: '应用不发起任何网络请求',
      paragraphs: [
        'AlgoPDF 的全部功能都在你的电脑上完成：你打开的文档、写下的批注、翻过的页面，都不会离开你的设备。应用不包含上传、同步或「云」功能。',
        '唯一的例外是应用本身通过 Microsoft Store 分发：下载与更新过程中的数据处理由微软按其《Microsoft 隐私声明》进行，与 AlgoPDF 无关。',
      ],
    },
    {
      heading: 'PDF 文件的处理',
      paragraphs: [
        '你打开的 PDF 仅在本地内存中解析与渲染，应用不上传、不复制、不修改源文件。关闭应用后，内存中的内容即被释放。',
      ],
    },
    {
      heading: '本地保存的设置与日志',
      paragraphs: [
        '应用在你的电脑上仅写入两类文件：',
        '%LOCALAPPDATA%\\AlgoPdf\\config.json —— 仅记录一项界面语言偏好；',
        '%LOCALAPPDATA%\\AlgoPdf\\log\\ —— 运行日志与崩溃记录，仅用于排查问题。',
        '这些文件只保存在你的设备上，应用不会以任何方式读取或传出它们的内容。你可以随时手动删除整个 AlgoPdf 目录，删除后应用仍可正常使用（语言偏好回到默认值）。',
      ],
    },
    {
      heading: '儿童隐私',
      paragraphs: [
        'AlgoPDF 不收集任何用户的个人信息，儿童也不例外。应用不面向儿童设计，也不知道也不会询问用户的年龄。',
      ],
    },
    {
      heading: '政策变更',
      paragraphs: [
        '若本政策发生变化，我们会更新本页内容并标注新的生效日期。重大变更会随应用更新一并说明。',
      ],
    },
    {
      heading: '联系我们',
      paragraphs: [
        `对本政策或应用本身有疑问，请发邮件至 ${CONTACT_EMAIL}，我们会在合理时间内回复。`,
      ],
    },
  ],
  footer: {
    backHome: '返回 AlgoSoft 首页',
    product: 'AlgoPDF 产品页',
    productPath: withBase('/algopdf/'),
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: PrivacyPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: withBase('/algopdf/privacy/'),
  alternateLabel: '中文',
  meta: {
    title: 'AlgoPDF Privacy Policy | AlgoSoft',
    description:
      'AlgoPDF collects, transmits, and shares no personal information: no accounts, no telemetry, no ads — every PDF is parsed and rendered locally.',
    canonical: 'https://algosoft.cc/en/algopdf/privacy/',
  },
  nav: {
    home: 'AlgoSoft home',
    product: 'AlgoPDF product page',
    productPath: withBase('/en/algopdf/'),
  },
  hero: {
    kicker: 'AlgoPDF · Privacy Policy',
    title: 'Your files stay yours',
    subtitle:
      'AlgoPDF does not collect, transmit, or share any personal information. This page describes everything the app does with data — it is short because there is simply nothing to collect.',
    updated:
      'Effective date: August 19, 2026 · Published by Lionel Fung (AlgoSoft)',
  },
  sections: [
    {
      heading: 'We collect no personal information',
      paragraphs: [
        'AlgoPDF has no account system, no telemetry, no analytics SDKs, no advertising components, and no third-party data services. The app never collects, stores, or transmits any information that could identify you.',
      ],
    },
    {
      heading: 'The app makes no network requests',
      paragraphs: [
        'Every feature of AlgoPDF runs entirely on your computer: the documents you open, the annotations you draw, and the pages you turn never leave your device. There is no upload, sync, or "cloud" functionality.',
        'The only exception is distribution itself: downloading and updating the app through the Microsoft Store is handled by Microsoft under the Microsoft Privacy Statement and is unrelated to AlgoPDF.',
      ],
    },
    {
      heading: 'How PDF files are handled',
      paragraphs: [
        'PDFs you open are parsed and rendered in local memory only. The app never uploads, copies, or modifies your source files; closing the app releases everything from memory.',
      ],
    },
    {
      heading: 'Locally stored settings and logs',
      paragraphs: [
        'The app writes only two kinds of files to your computer:',
        '%LOCALAPPDATA%\\AlgoPdf\\config.json — stores a single preference: your UI language;',
        '%LOCALAPPDATA%\\AlgoPdf\\log\\ — runtime and crash logs, kept solely for troubleshooting.',
        'These files stay on your device and are never read back or sent anywhere. You can delete the entire AlgoPdf folder at any time; the app keeps working and simply falls back to default settings.',
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        'AlgoPDF collects no personal information from anyone, including children. The app is not directed at children and never asks for or knows a user\u2019s age.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'If this policy changes, we will update this page with a new effective date. Significant changes will be announced alongside app updates.',
      ],
    },
    {
      heading: 'Contact us',
      paragraphs: [
        `Questions about this policy or the app itself? Email ${CONTACT_EMAIL} and we will reply within a reasonable time.`,
      ],
    },
  ],
  footer: {
    backHome: 'Back to AlgoSoft home',
    product: 'AlgoPDF product page',
    productPath: withBase('/en/algopdf/'),
    copyright: '© 2026 AlgoSoft',
  },
};

export const privacyContentByLocale: Record<Locale, PrivacyPageContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

// ---------------------------------------------------------------------------
// Deckle Reader（EPUB 阅读器）—— /deckle/privacy 与 /en/deckle/privacy
// ---------------------------------------------------------------------------

const deckleZhContent: PrivacyPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: withBase('/en/deckle/privacy/'),
  alternateLabel: 'EN',
  meta: {
    title: 'Deckle Reader 隐私政策 | AlgoSoft',
    description:
      'Deckle Reader 不收集、不传输、不共享任何个人信息：无账号、无遥测、无广告，排版与播放全部在本地完成，书文件绝不离开你的设备。',
    canonical: 'https://algosoft.cc/deckle/privacy/',
  },
  nav: {
    home: 'AlgoSoft 首页',
    product: 'Microsoft Store 页',
    productPath: 'https://apps.microsoft.com/detail/9PG0X56J3C41',
  },
  hero: {
    kicker: 'Deckle Reader · 隐私政策',
    title: '你的书，只属于你',
    subtitle:
      'Deckle Reader 是一款本地电子书阅读器：不收集、不传输、不共享任何个人信息。本页说明应用对数据的全部处理方式——它很短，因为确实没什么可收集的。',
    updated: '生效日期：2026 年 9 月 30 日 · 发布者：Lionel Fung（AlgoSoft）',
  },
  sections: [
    {
      heading: '我们不收集个人信息',
      paragraphs: [
        'Deckle Reader 没有账号系统，没有遥测（telemetry），没有分析统计 SDK，没有广告组件，也不接入任何第三方数据服务。应用不会收集、存储或传输可用于识别你身份的任何信息。',
      ],
    },
    {
      heading: '你的书文件绝不离开设备',
      paragraphs: [
        '你打开的 EPUB 仅在本地内存中解析与渲染：排版、数学公式渲染、视频与音频解码全部在你的电脑上完成，应用不上传、不复制、不外传任何书内容。',
      ],
    },
    {
      heading: '应用不发起网络请求',
      paragraphs: [
        'Deckle Reader 是离线应用，正常使用不需要网络连接。',
        '唯一的例外是你主动点击书内超链接：链接由你的系统默认浏览器打开，此后发生的网络访问由浏览器及目标网站各自的隐私政策管辖，与本应用无关。应用自身不发起任何网络请求。',
        '另一项与分发相关的处理：通过 Microsoft Store 下载与更新应用时的数据处理由微软按其《Microsoft 隐私声明》进行，与 Deckle Reader 无关。',
      ],
    },
    {
      heading: '本地保存的设置',
      paragraphs: [
        '应用在你的电脑上仅写入一处数据：%APPDATA%\algoepub\ 下的本地数据库，记录界面偏好（主题深浅、页面边距模式）与最近一次打开的书（路径），仅用于启动时恢复。',
        '这些数据只保存在你的设备上，应用不会以任何方式读出或传出其内容。卸载应用即随之删除。',
      ],
    },
    {
      heading: '儿童隐私',
      paragraphs: [
        'Deckle Reader 不收集任何用户的个人信息，儿童也不例外。应用不面向特定年龄群体设计，也没有任何可收集数据的通道。',
      ],
    },
    {
      heading: '政策变更',
      paragraphs: [
        '若本政策发生变化，我们会更新本页内容并标注新的生效日期。重大变更会随应用更新一并说明。',
      ],
    },
    {
      heading: '联系我们',
      paragraphs: [
        `对本政策或应用本身有疑问，请发邮件至 ${CONTACT_EMAIL}，我们会在合理时间内回复。`,
      ],
    },
  ],
  footer: {
    backHome: '返回 AlgoSoft 首页',
    product: 'Microsoft Store 页',
    productPath: 'https://apps.microsoft.com/detail/9PG0X56J3C41',
    copyright: '© 2026 AlgoSoft',
  },
};

const deckleEnContent: PrivacyPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: withBase('/deckle/privacy/'),
  alternateLabel: '中文',
  meta: {
    title: 'Deckle Reader Privacy Policy | AlgoSoft',
    description:
      'Deckle Reader collects, transmits, and shares no personal information: no accounts, no telemetry, no ads — typesetting and playback run entirely on your device, and your books never leave it.',
    canonical: 'https://algosoft.cc/en/deckle/privacy/',
  },
  nav: {
    home: 'AlgoSoft home',
    product: 'Microsoft Store page',
    productPath: 'https://apps.microsoft.com/detail/9PG0X56J3C41',
  },
  hero: {
    kicker: 'Deckle Reader · Privacy Policy',
    title: 'Your books stay yours',
    subtitle:
      'Deckle Reader is a local e-book reader: it does not collect, transmit, or share any personal information. This page describes everything the app does with data — it is short because there is simply nothing to collect.',
    updated:
      'Effective date: September 30, 2026 · Published by Lionel Fung (AlgoSoft)',
  },
  sections: [
    {
      heading: 'We collect no personal information',
      paragraphs: [
        'Deckle Reader has no account system, no telemetry, no analytics SDKs, no advertising components, and no third-party data services. The app never collects, stores, or transmits any information that could identify you.',
      ],
    },
    {
      heading: 'Your books never leave the device',
      paragraphs: [
        'EPUBs you open are parsed and rendered in local memory only: typesetting, formula rendering, and video/audio decoding all happen on your computer. The app never uploads, copies, or shares any book content.',
      ],
    },
    {
      heading: 'The app makes no network requests',
      paragraphs: [
        'Deckle Reader is an offline app; normal use requires no network connection.',
        'The only exception is one you trigger yourself — clicking a hyperlink inside a book. Links open in your system’s default browser; whatever happens after that is governed by the browser’s and the destination site’s own privacy policies, not by this app. The app itself initiates no network requests.',
        'One distribution-related note: downloading and updating the app through the Microsoft Store is handled by Microsoft under the Microsoft Privacy Statement and is unrelated to Deckle Reader.',
      ],
    },
    {
      heading: 'Settings stored locally',
      paragraphs: [
        'The app writes exactly one thing to your computer: a local database under %APPDATA%\algoepub\ holding your interface preferences (theme, page-margin mode) and the path of the most recently opened book, used only to restore it on startup.',
        'This data stays on your device and is never read out or transmitted. Uninstalling the app removes it.',
      ],
    },
    {
      heading: 'Children’s privacy',
      paragraphs: [
        'Deckle Reader collects no personal information from anyone, including children. The app is not directed at any age group and has no channel through which data could be collected.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'If this policy changes, we will update this page with a new effective date. Significant changes will be announced alongside app updates.',
      ],
    },
    {
      heading: 'Contact us',
      paragraphs: [
        `Questions about this policy or the app itself? Email ${CONTACT_EMAIL} and we will reply within a reasonable time.`,
      ],
    },
  ],
  footer: {
    backHome: 'Back to AlgoSoft home',
    product: 'Microsoft Store page',
    productPath: 'https://apps.microsoft.com/detail/9PG0X56J3C41',
    copyright: '© 2026 AlgoSoft',
  },
};

export type PrivacyAppId = 'algopdf' | 'deckle';

const privacyByApp: Record<PrivacyAppId, Record<Locale, PrivacyPageContent>> = {
  algopdf: privacyContentByLocale,
  deckle: { 'zh-CN': deckleZhContent, en: deckleEnContent },
};

export function getPrivacyContent(app: PrivacyAppId, locale: Locale): PrivacyPageContent {
  return privacyByApp[app][locale];
}


