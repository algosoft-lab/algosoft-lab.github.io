import { createApp } from 'vue';

import PrivacyApp from '@/pdf/PrivacyApp.vue';
import { getLocaleFromPath } from '@/i18n';
import { getPrivacyContent } from '@data/privacyContent';
import '@styles/main.css';

const locale = getLocaleFromPath(window.location.pathname);
const content = getPrivacyContent(locale);
document.documentElement.lang = content.htmlLang;
document.title = content.meta.title;

createApp(PrivacyApp).mount('#app');
