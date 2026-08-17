<script setup lang="ts">
import type { SiteContent, ValueItem } from '@/types/content'

defineProps<{ content: SiteContent }>()

function iconPath(value: ValueItem): string {
  if (value.icon === 'bolt') return 'M13 2 3 14h9l-1 8 10-12h-9l1-8Z'
  if (value.icon === 'shield') return 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z'
  return 'M12 6v6l4 2 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'
}
</script>

<template>
  <section class="section brand" id="brand">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.brand.kicker }}</p>
        <h2 class="section-title">{{ content.brand.title }}</h2>
        <p class="section-subtitle">{{ content.brand.subtitle }}</p>
      </div>
      <div class="value-grid">
        <div v-for="value in content.brand.values" :key="value.title" class="value-card reveal">
          <div class="value-icon" :class="`accent-${value.accent}`" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path :d="iconPath(value)" /></svg>
          </div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
