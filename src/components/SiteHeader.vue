<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import BrandLogo from '@components/BrandLogo.vue'
import type { SiteContent } from '@/types/content'

defineProps<{ content: SiteContent }>()

const isScrolled = ref(false)

function updateScrollState(): void {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <header class="nav" id="nav" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <BrandLogo />
      <nav class="nav-links" :aria-label="content.navigation.products">
        <a href="#products">{{ content.navigation.products }}</a>
        <a href="#faq">{{ content.navigation.faq }}</a>
        <a href="#brand">{{ content.navigation.about }}</a>
      </nav>
      <div class="nav-actions">
        <a class="lang-toggle" :href="content.alternateLocale === 'en' ? '/en/' : '/'" :hreflang="content.alternateLocale === 'en' ? 'en' : 'zh-CN'">{{ content.alternateLabel }}</a>
        <a class="nav-cta" href="#products">{{ content.navigation.cta }}</a>
      </div>
    </div>
  </header>
</template>
