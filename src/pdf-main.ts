import { createApp } from 'vue';
import 'element-plus/es/components/button/style/css';

import PdfApp from '@/pdf/PdfApp.vue';
import { getLocaleFromPath } from '@/i18n';
import { getPdfContent } from '@data/pdfContent';
import '@styles/main.css';

const locale = getLocaleFromPath(window.location.pathname);
const content = getPdfContent(locale);
document.documentElement.lang = content.htmlLang;
document.title = content.meta.title;

createApp(PdfApp).mount('#app');
