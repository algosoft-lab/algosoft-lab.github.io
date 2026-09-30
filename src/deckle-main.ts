import { createApp } from 'vue';
import 'element-plus/es/components/button/style/css';

import DeckleApp from '@/deckle/DeckleApp.vue';
import { startAnalytics } from '@/analytics';
import { getDeckleContent } from '@data/deckleContent';
import { getLocaleFromPath } from '@/i18n';
import '@styles/main.css';

startAnalytics();

const content = getDeckleContent(getLocaleFromPath(window.location.pathname));
document.documentElement.lang = content.locale === 'en' ? 'en' : 'zh-CN';
document.title =
  content.locale === 'en'
    ? 'Deckle Reader — a pure-Rust EPUB 3.3 reader | AlgoSoft'
    : 'Deckle Reader — 纯 Rust 的 EPUB 3.3 阅读器 | AlgoSoft';

createApp(DeckleApp).mount('#app');
