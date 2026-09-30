import { createApp } from 'vue';

import PrivacyApp from '@/pdf/PrivacyApp.vue';
import { startAnalytics } from '@/analytics';
import { getLocaleFromPath } from '@/i18n';
import { getPrivacyContent, type PrivacyAppId } from '@data/privacyContent';
import '@styles/main.css';

startAnalytics();

const locale = getLocaleFromPath(window.location.pathname);
// 应用从路径识别：/deckle/... → deckle；缺省 algopdf（首个上架应用）。
const app: PrivacyAppId = window.location.pathname.includes('/deckle')
  ? 'deckle'
  : 'algopdf';
const content = getPrivacyContent(app, locale);
document.documentElement.lang = content.htmlLang;
document.title = content.meta.title;

createApp(PrivacyApp).mount('#app');
