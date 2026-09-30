import { createApp } from 'vue';
import 'element-plus/es/components/button/style/css';

import GrepApp from '@/grep/GrepApp.vue';
import { startAnalytics } from '@/analytics';
import { getGrepContent } from '@data/grepContent';
import { getLocaleFromPath } from '@/i18n';
import '@styles/main.css';
import '@styles/grep.css';

startAnalytics();

const content = getGrepContent(getLocaleFromPath(window.location.pathname));
document.documentElement.lang = content.htmlLang;
document.title = content.meta.title;

createApp(GrepApp).mount('#app');
