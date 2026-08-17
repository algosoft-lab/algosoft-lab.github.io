import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import type { SiteContent } from '@/types/content';
import type { Locale } from '@/types/content';

export function useSiteContent() {
  const { locale, tm } = useI18n();

  const content = computed<SiteContent>(() => {
    const message = <T>(path: string): T => tm(path) as T;
    const currentLocale = locale.value as Locale;

    return {
      locale: currentLocale,
      htmlLang: currentLocale,
      alternateLocale: currentLocale === 'en' ? 'zh-CN' : 'en',
      alternateLabel: message<string>('alternateLabel'),
      meta: message<SiteContent['meta']>('meta'),
      navigation: message<SiteContent['navigation']>('navigation'),
      hero: message<SiteContent['hero']>('hero'),
      products: message<SiteContent['products']>('products'),
      faq: message<SiteContent['faq']>('faq'),
      brand: message<SiteContent['brand']>('brand'),
      cta: message<SiteContent['cta']>('cta'),
      footer: message<SiteContent['footer']>('footer'),
    };
  });

  return { content, locale };
}
