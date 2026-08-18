import type { Locale } from '@/types/content';

export interface SiteRoutes {
  about: string;
  alternate: string;
  docs: string;
  faq: string;
  home: string;
  products: string;
}

function getBasePath(): string {
  const basePath = import.meta.env.BASE_URL;

  return basePath === '/' ? '/' : basePath.replace(/\/$/, '');
}

function withBase(path: string): string {
  const basePath = getBasePath();

  return basePath === '/' ? path : `${basePath}${path}`;
}

export function getSitePathname(pathname: string): string {
  const basePath = getBasePath();

  if (basePath === '/' || !pathname.startsWith(`${basePath}/`)) {
    return pathname;
  }

  return pathname.slice(basePath.length) || '/';
}

const documentSlugAliases: Record<string, string> = {
  'augur-term': 'algoterm',
};

export function normalizeDocumentSlug(slug: string): string {
  return documentSlugAliases[slug] ?? slug;
}

export function getDocumentSlugFromPath(pathname: string): string | null {
  const match = getSitePathname(pathname).match(
    /^\/(?:en\/)?docs\/([^/]+)\/?$/,
  );
  return match?.[1] ? normalizeDocumentSlug(match[1]) : null;
}

export function isDocsHomePath(pathname: string): boolean {
  return /^\/(?:en\/)?docs\/?$/.test(getSitePathname(pathname));
}

export function getSiteRoutes(
  locale: Locale,
  pathname = window.location.pathname,
): SiteRoutes {
  const home = withBase(locale === 'en' ? '/en/' : '/');
  const alternateHome = withBase(locale === 'en' ? '/' : '/en/');
  const slug = getDocumentSlugFromPath(pathname);
  const docsPath = slug ? `${home}docs/${slug}/` : `${home}docs/`;
  const alternate = slug
    ? `${alternateHome}docs/${slug}/`
    : isDocsHomePath(pathname)
      ? `${alternateHome}docs/`
      : alternateHome;

  return {
    home,
    products: `${home}#products`,
    faq: `${home}#faq`,
    about: `${home}#brand`,
    docs: docsPath,
    alternate,
  };
}
