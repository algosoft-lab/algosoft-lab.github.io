import { createApp } from 'vue';
import 'element-plus/es/components/button/style/css';
import 'element-plus/es/components/tag/style/css';

import App from '@/App.vue';
import { getLocaleFromPath, i18n } from '@/i18n';
import '@styles/main.css';

const locale = getLocaleFromPath(window.location.pathname);
document.documentElement.lang = locale;
document.title = i18n.global.t('meta.title');

createApp(App).use(i18n).mount('#app');
