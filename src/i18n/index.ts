import { createI18n } from 'vue-i18n';

import { contentByLocale } from '@data/content';
import { getSitePathname } from '@composables/useSiteRoutes';
import type { Locale } from '@/types/content';

export const supportedLocales: readonly Locale[] = ['zh-CN', 'en'];

export function getLocaleFromPath(pathname: string): Locale {
  const sitePathname = getSitePathname(pathname);

  return sitePathname === '/en' || sitePathname.startsWith('/en/')
    ? 'en'
    : 'zh-CN';
}

const messages = contentByLocale as any;

export const i18n = createI18n<false>({
  legacy: false,
  locale: getLocaleFromPath(window.location.pathname),
  fallbackLocale: 'en',
  messages,
});
