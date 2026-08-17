import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

function getBasePath(): string {
  const configuredBasePath = process.env.VITE_BASE_PATH?.trim()

  if (!configuredBasePath || configuredBasePath === '/') return '/'

  return `/${configuredBasePath.replace(/^\/+|\/+$/g, '')}/`
}

export default defineConfig({
  base: getBasePath(),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@docs': fileURLToPath(new URL('./src/docs', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        zh: fileURLToPath(new URL('./index.html', import.meta.url)),
        en: fileURLToPath(new URL('./en/index.html', import.meta.url)),
        docsAlgocode: fileURLToPath(
          new URL('./docs/algocode/index.html', import.meta.url),
        ),
        enDocsAlgocode: fileURLToPath(
          new URL('./en/docs/algocode/index.html', import.meta.url),
        ),
      },
    },
  },
})
