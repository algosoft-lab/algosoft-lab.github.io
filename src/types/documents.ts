import type { Locale } from '@/types/content';

export interface DocumentFrontmatter {
  title: string;
  description: string;
  product: string;
}

export interface DocumentTocItem {
  id: string;
  level: number;
  title: string;
}

export interface SiteDocument {
  locale: Locale;
  slug: string;
  frontmatter: DocumentFrontmatter;
  html: string;
  toc: readonly DocumentTocItem[];
}
