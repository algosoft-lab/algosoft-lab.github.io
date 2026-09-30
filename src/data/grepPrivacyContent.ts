import { withBase } from '@composables/useSiteRoutes';
import type { Locale, PrivacyPageContent } from '@/types/content';

const CONTACT_EMAIL = '5266917@qq.com';

const zhContent: PrivacyPageContent = {
  locale: 'zh-CN',
  htmlLang: 'zh-CN',
  alternatePath: withBase('/en/algogrep/privacy/'),
  alternateLabel: 'EN',
  meta: {
    title: 'AlgoGrep 隐私政策 | AlgoSoft',
    description:
      'AlgoGrep 不收集、不传输、不共享任何个人信息：无账号、无遥测、无广告，搜索、OCR 识别与预览全部在本地完成。',
    canonical: 'https://algosoft.cc/algogrep/privacy/',
  },
  nav: {
    home: 'AlgoSoft 首页',
    product: 'AlgoGrep 产品页',
    productPath: withBase('/algogrep/'),
  },
  hero: {
    kicker: 'AlgoGrep · 隐私政策',
    title: '你的文件，只属于你',
    subtitle:
      'AlgoGrep 不收集、不传输、不共享任何个人信息。本页说明应用对数据的全部处理方式——它很短，因为确实没什么可收集的。',
    updated: '生效日期：2026 年 9 月 15 日 · 发布者：Lionel Fung（AlgoSoft）',
  },
  sections: [
    {
      heading: '我们不收集个人信息',
      paragraphs: [
        'AlgoGrep 没有账号系统，没有遥测（telemetry），没有分析统计 SDK，没有广告组件，也不接入任何第三方数据服务。应用不会收集、存储或传输可用于识别你身份的任何信息。',
      ],
    },
    {
      heading: '应用不发起任何网络请求',
      paragraphs: [
        'AlgoGrep 的全部功能都在你的电脑上完成：搜索、识别、预览、替换，都不会把你的文件或文件内容发送到任何服务器。应用不包含上传、同步或「云」功能。',
        '唯一的例外是应用本身通过 Microsoft Store 分发：下载与更新过程中的数据处理由微软按其《Microsoft 隐私声明》进行，与 AlgoGrep 无关。',
      ],
    },
    {
      heading: '搜索、OCR 与预览都在本地',
      paragraphs: [
        '搜索内核（ripggrep）以进程内组件方式运行，不产生子进程也不产生网络流量；图片与扫描件 PDF 的文字识别（OCR）由应用自带的本地 PP-OCRv6 模型完成；PDF 渲染同样在本地进行。',
        '你搜索到的内容、命中的位置、预览过的文件，都只停留在本地内存中；关闭应用即被释放，绝不离开你的设备。',
      ],
    },
    {
      heading: '替换功能与本地备份',
      paragraphs: [
        '「替换」只在你明确点击执行后才会改写文件：先原子写入临时文件再替换原文件，替换成功前，被覆盖文件的原始字节会先备份到本地，用于一键撤销。',
        '备份只保存在你电脑上的应用数据目录里，不会上传；你可以在应用内清理，或随时手动删除整个备份目录。',
      ],
    },
    {
      heading: '本地保存的设置与日志',
      paragraphs: [
        '应用在你的电脑上仅写入以下文件（Windows 为 %APPDATA%\\algogrep\\，macOS / Linux 为用户配置目录下的 algogrep）：',
        'algogrep.redb —— 应用设置与搜索历史，仅保存在本地；',
        'logs\\ —— 运行日志，仅用于排查问题，且已对路径与内容做脱敏处理；',
        'backups\\ —— 替换备份（仅在你使用替换功能时产生）。',
        '这些文件只保存在你的设备上，应用不会以任何方式读取或传出它们的内容。你可以随时手动删除整个 algogrep 目录，删除后应用仍可正常使用。',
      ],
    },
    {
      heading: '儿童隐私',
      paragraphs: [
        'AlgoGrep 不收集任何用户的个人信息，儿童也不例外。应用不面向儿童设计，也不知道也不会询问用户的年龄。',
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
    product: 'AlgoGrep 产品页',
    productPath: withBase('/algogrep/'),
    copyright: '© 2026 AlgoSoft',
  },
};

const enContent: PrivacyPageContent = {
  locale: 'en',
  htmlLang: 'en',
  alternatePath: withBase('/algogrep/privacy/'),
  alternateLabel: '中文',
  meta: {
    title: 'AlgoGrep Privacy Policy | AlgoSoft',
    description:
      'AlgoGrep collects, transmits, and shares no personal information: no accounts, no telemetry, no ads — searching, OCR, and preview all run locally.',
    canonical: 'https://algosoft.cc/en/algogrep/privacy/',
  },
  nav: {
    home: 'AlgoSoft home',
    product: 'AlgoGrep product page',
    productPath: withBase('/en/algogrep/'),
  },
  hero: {
    kicker: 'AlgoGrep · Privacy Policy',
    title: 'Your files stay yours',
    subtitle:
      'AlgoGrep does not collect, transmit, or share any personal information. This page describes everything the app does with data — it is short because there is simply nothing to collect.',
    updated:
      'Effective date: September 15, 2026 · Published by Lionel Fung (AlgoSoft)',
  },
  sections: [
    {
      heading: 'We collect no personal information',
      paragraphs: [
        'AlgoGrep has no account system, no telemetry, no analytics SDKs, no advertising components, and no third-party data services. The app never collects, stores, or transmits any information that could identify you.',
      ],
    },
    {
      heading: 'The app makes no network requests',
      paragraphs: [
        'Every AlgoGrep feature runs entirely on your computer: searching, recognition, preview, and replacement never send your files or their contents to any server. There is no upload, sync, or "cloud" functionality.',
        'The only exception is distribution itself: downloading and updating the app through the Microsoft Store is handled by Microsoft under the Microsoft Privacy Statement and is unrelated to AlgoGrep.',
      ],
    },
    {
      heading: 'Searching, OCR, and preview stay local',
      paragraphs: [
        'The search core (ripgrep) runs as an in-process component — no subprocesses, no network traffic. Text recognition (OCR) for images and scanned PDFs is performed by local PP-OCRv6 models bundled with the app; PDF rendering is local as well.',
        'What you search, where it hit, and what you preview exist only in local memory; closing the app releases everything. Nothing ever leaves your device.',
      ],
    },
    {
      heading: 'Replacement and local backups',
      paragraphs: [
        'Replacement only rewrites files after you explicitly confirm: writes are atomic (a temporary file replaces the original only after it is fully written), and before a successful write the original bytes are backed up locally so you can undo with one click.',
        'Backups stay in the app data directory on your computer and are never uploaded. You can clean them from inside the app or delete the backup folder manually at any time.',
      ],
    },
    {
      heading: 'Locally stored settings and logs',
      paragraphs: [
        'The app writes only the following files on your computer (%APPDATA%\\algogrep\\ on Windows; an algogrep folder under the user configuration directory on macOS / Linux):',
        'algogrep.redb — app settings and search history, stored locally only;',
        'logs\\ — runtime logs, kept solely for troubleshooting and redacted to avoid paths and file contents;',
        'backups\\ — replacement backups (created only when you use the replace feature).',
        'These files stay on your device and are never read back or sent anywhere. You can delete the entire algogrep folder at any time; the app keeps working.',
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        'AlgoGrep collects no personal information from anyone, including children. The app is not directed at children and never asks for or knows a user\u2019s age.',
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
    product: 'AlgoGrep product page',
    productPath: withBase('/en/algogrep/'),
    copyright: '© 2026 AlgoSoft',
  },
};

export const grepPrivacyContentByLocale: Record<Locale, PrivacyPageContent> = {
  'zh-CN': zhContent,
  en: enContent,
};

export function getGrepPrivacyContent(locale: Locale): PrivacyPageContent {
  return grepPrivacyContentByLocale[locale];
}
