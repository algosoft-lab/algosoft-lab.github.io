import { createApp } from 'vue'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tag/style/css'

import App from '@/App.vue'
import { getContent } from '@data/content'
import type { Locale } from '@/types/content'
import '@styles/main.css'

const locale: Locale = window.location.pathname.startsWith('/en') ? 'en' : 'zh'
const content = getContent(locale)

document.documentElement.lang = content.htmlLang
document.title = content.meta.title

createApp(App, { content }).mount('#app')
