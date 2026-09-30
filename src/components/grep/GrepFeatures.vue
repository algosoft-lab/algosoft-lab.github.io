<script setup lang="ts">
import type { GrepPageContent } from '@/types/content';

defineProps<{ content: GrepPageContent }>();
</script>

<template>
  <section class="section grep-features" id="features">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.features.kicker }}</p>
        <h2 class="section-title">{{ content.features.title }}</h2>
        <p class="section-subtitle">{{ content.features.subtitle }}</p>
      </div>
      <div class="product-grid grep-feature-grid">
        <article
          v-for="feature in content.features.items"
          :key="feature.title"
          class="product-card grep-feature-card reveal"
          :class="'accent-' + feature.accent"
        >
          <span class="grep-feature-mark" aria-hidden="true"></span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
