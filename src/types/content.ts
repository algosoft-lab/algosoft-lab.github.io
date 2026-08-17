export type Locale = 'zh' | 'en';

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
