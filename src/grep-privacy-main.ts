import { createApp } from 'vue';

import PrivacyApp from '@components/PrivacyApp.vue';
import { startAnalytics } from '@/analytics';
import { getLocaleFromPath } from '@/i18n';
import { getGrepPrivacyContent } from '@data/grepPrivacyContent';
import '@styles/main.css';

startAnalytics();

const locale = getLocaleFromPath(window.location.pathname);
const content = getGrepPrivacyContent(locale);
document.documentElement.lang = content.htmlLang;
document.title = content.meta.title;

createApp(PrivacyApp, { content }).mount('#app');
