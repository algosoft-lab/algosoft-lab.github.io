import type { Locale } from '@/types/content';

export interface SiteRoutes {
  about: string;
  alternate: string;
  docs: string;
  faq: string;
  home: string;
  products: string;
}

export function getDocumentSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/(?:en\/)?docs\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

export function getSiteRoutes(
  locale: Locale,
  pathname = window.location.pathname,
): SiteRoutes {
  const home = locale === 'en' ? '/en/' : '/';
  const alternateHome = locale === 'en' ? '/' : '/en/';
  const slug = getDocumentSlugFromPath(pathname);
  const docsPath = `${home}docs/${slug ?? 'algocode'}/`;
  const alternate = slug ? `${alternateHome}docs/${slug}/` : alternateHome;

  return {
    home,
    products: `${home}#products`,
    faq: `${home}#faq`,
    about: `${home}#brand`,
    docs: docsPath,
    alternate,
  };
}
