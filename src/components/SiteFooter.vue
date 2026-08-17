<script setup lang="ts">
import BrandLogo from '@components/BrandLogo.vue'
import type { SiteContent } from '@/types/content'

defineProps<{ content: SiteContent }>()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <BrandLogo />
      <p class="footer-tagline">{{ content.footer.tagline }}</p>
      <nav class="footer-links" :aria-label="content.footer.navigationLabel">
        <a href="#products">{{ content.navigation.products }}</a>
        <a href="#faq">{{ content.navigation.faq }}</a>
        <a href="#brand">{{ content.navigation.about }}</a>
        <a href="https://algocode.cc" target="_blank" rel="noopener">AlgoCode</a>
        <a href="mailto:5266917@qq.com">5266917@qq.com</a>
      </nav>
      <p class="footer-copy">{{ content.footer.copyright }} · <a class="domain" href="https://algosoft.cc">algosoft.cc</a></p>
    </div>
  </footer>
</template>
