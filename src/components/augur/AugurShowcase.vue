<script setup lang="ts">
import type { AugurPageContent } from '@/types/content';

defineProps<{ content: AugurPageContent }>();
</script>

<template>
  <section class="section augur-showcase" id="preview">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.screenshots.kicker }}</p>
        <h2 class="section-title">{{ content.screenshots.title }}</h2>
        <p class="section-subtitle">{{ content.screenshots.subtitle }}</p>
      </div>
      <div class="augur-showcase-grid">
        <article
          v-for="screenshot in content.screenshots.items"
          :key="screenshot.title"
          class="augur-showcase-card reveal"
        >
          <div class="augur-screenshot-frame">
            <img
              v-if="screenshot.image"
              :src="screenshot.image"
              :alt="screenshot.imageAlt ?? screenshot.title"
            />
            <div v-else class="augur-screenshot-placeholder">
              <span class="augur-placeholder-icon" aria-hidden="true">＋</span>
              <span>{{ screenshot.placeholder }}</span>
            </div>
          </div>
          <h3>{{ screenshot.title }}</h3>
          <p>{{ screenshot.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
