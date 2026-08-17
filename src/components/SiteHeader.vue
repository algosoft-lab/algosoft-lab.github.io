<script setup lang="ts">
import { computed } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';

import BrandLogo from '@components/BrandLogo.vue';
import { getSiteRoutes } from '@composables/useSiteRoutes';
import type { SiteContent } from '@/types/content';

const props = defineProps<{ content: SiteContent }>();
const routes = computed(() => getSiteRoutes(props.content.locale));

const isScrolled = ref(false);

function updateScrollState(): void {
  isScrolled.value = window.scrollY > 24;
}

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
});
</script>

<template>
  <header class="nav" id="nav" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <BrandLogo :href="routes.home" />
      <nav class="nav-links" :aria-label="props.content.navigation.products">
        <a :href="routes.products">{{ props.content.navigation.products }}</a>
        <a :href="routes.faq">{{ props.content.navigation.faq }}</a>
        <a :href="routes.about">{{ props.content.navigation.about }}</a>
        <a :href="routes.docs">{{ props.content.navigation.docs }}</a>
      </nav>
      <div class="nav-actions">
        <a
          class="lang-toggle"
          :href="routes.alternate"
          :hreflang="props.content.alternateLocale === 'en' ? 'en' : 'zh-CN'"
          >{{ props.content.alternateLabel }}</a
        >
        <a class="nav-cta" :href="routes.products">{{
          props.content.navigation.cta
        }}</a>
      </div>
    </div>
  </header>
</template>
