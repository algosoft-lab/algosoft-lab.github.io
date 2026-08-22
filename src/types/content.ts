export type Locale = 'zh-CN' | 'en';

export interface Product {
  name: string;
  logo: string;
  accent: string;
  tagline: string;
  features: readonly string[];
  category: string;
  url?: string;
  siteLabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  answerPrefix?: string;
  answerSuffix?: string;
  answerLink?: {
    label: string;
    href: string;
  };
}

export interface ValueItem {
  title: string;
  description: string;
  accent: string;
  icon: 'bolt' | 'shield' | 'clock';
}

export interface SiteContent {
  locale: Locale;
  htmlLang: string;
  alternateLocale: Locale;
  alternateLabel: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  navigation: {
    products: string;
    faq: string;
    about: string;
    cta: string;
  };
  hero: {
    titleBefore: string;
    titleAfter: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    terminalLabel: string;
  };
  products: {
    kicker: string;
    title: string;
    subtitle: string;
    items: readonly Product[];
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: readonly FaqItem[];
  };
  brand: {
    kicker: string;
    title: string;
    subtitle: string;
    values: readonly ValueItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    action: string;
  };
  footer: {
    tagline: string;
    navigationLabel: string;
    copyright: string;
  };
}

export interface PdfFeature {
  title: string;
  description: string;
  accent: string;
}

export interface PdfPageContent {
  locale: Locale;
  htmlLang: string;
  alternatePath: string;
  alternateLabel: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  nav: {
    home: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryUrl: string;
    secondaryCta: string;
    note: string;
    directCta?: string;
    directUrl?: string;
  };
  features: {
    kicker: string;
    title: string;
    subtitle: string;
    items: readonly PdfFeature[];
  };
  scenes: {
    label: string;
    items: readonly string[];
  };
  cta: {
    title: string;
    subtitle: string;
    action: string;
    actionUrl: string;
  };
  footer: {
    backHome: string;
    privacyLabel: string;
    privacyPath: string;
    copyright: string;
  };
}

export interface PrivacySection {
  heading: string;
  paragraphs: readonly string[];
}

export interface PrivacyPageContent {
  locale: Locale;
  htmlLang: string;
  alternatePath: string;
  alternateLabel: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  nav: {
    home: string;
    product: string;
    productPath: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    updated: string;
  };
  sections: readonly PrivacySection[];
  footer: {
    backHome: string;
    product: string;
    productPath: string;
    copyright: string;
  };
}
