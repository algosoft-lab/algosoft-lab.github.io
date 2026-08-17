import { createApp } from 'vue';
import 'element-plus/es/components/button/style/css';
import 'element-plus/es/components/tag/style/css';

import App from '@/App.vue';
import { getDocumentSlugFromPath } from '@composables/useSiteRoutes';
import { getLocaleFromPath, i18n } from '@/i18n';
import '@styles/main.css';

const locale = getLocaleFromPath(window.location.pathname);
const isDocsPage = getDocumentSlugFromPath(window.location.pathname) !== null;
document.documentElement.lang = locale;
if (!isDocsPage) document.title = i18n.global.t('meta.title');

async function mountPage(): Promise<void> {
  const page = isDocsPage
    ? (await import('@components/DocsPage.vue')).default
    : App;

  createApp(page).use(i18n).mount('#app');
}

void mountPage();
