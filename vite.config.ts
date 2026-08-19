import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        zh: fileURLToPath(new URL('./index.html', import.meta.url)),
        en: fileURLToPath(new URL('./en/index.html', import.meta.url)),
        pdfZh: fileURLToPath(new URL('./algopdf/index.html', import.meta.url)),
        pdfEn: fileURLToPath(
          new URL('./en/algopdf/index.html', import.meta.url),
        ),
        privacyZh: fileURLToPath(
          new URL('./algopdf/privacy/index.html', import.meta.url),
        ),
        privacyEn: fileURLToPath(
          new URL('./en/algopdf/privacy/index.html', import.meta.url),
        ),
      },
    },
  },
})
