<script setup lang="ts">
import type { PdfPageContent } from '@/types/content';

defineProps<{ content: PdfPageContent }>();
</script>

<template>
  <section class="section" id="features">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.features.kicker }}</p>
        <h2 class="section-title">{{ content.features.title }}</h2>
        <p class="section-subtitle">{{ content.features.subtitle }}</p>
      </div>
      <div class="product-grid pdf-feature-grid">
        <article
          v-for="feature in content.features.items"
          :key="feature.title"
          class="product-card pdf-feature-card reveal"
          :class="`accent-${feature.accent}`"
        >
          <h3 class="pdf-feature-title">{{ feature.title }}</h3>
          <p class="pdf-feature-text">{{ feature.description }}</p>
        </article>
      </div>
      <div class="pdf-scenes reveal">
        <span class="pdf-scenes-label">{{ content.scenes.label }}</span>
        <ul class="pdf-scenes-list">
          <li v-for="scene in content.scenes.items" :key="scene">
            {{ scene }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
