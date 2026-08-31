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

export function getPrivacyContent(locale: Locale): PrivacyPageContent {
  return privacyContentByLocale[locale];
}
