<script setup lang="ts">
import type { GrepPageContent } from '@/types/content';

defineProps<{ content: GrepPageContent }>();
</script>

<template>
  <section class="section grep-privacy" id="privacy">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.privacy.kicker }}</p>
        <h2 class="section-title">{{ content.privacy.title }}</h2>
        <p class="section-subtitle">{{ content.privacy.subtitle }}</p>
      </div>
      <div class="grep-privacy-grid">
        <article
          v-for="item in content.privacy.items"
          :key="item.title"
          class="grep-privacy-card reveal"
        >
          <span class="grep-privacy-dot" aria-hidden="true"></span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
      <p class="grep-privacy-link reveal">
        <a :href="content.privacy.linkPath">{{ content.privacy.linkLabel }}</a>
      </p>
    </div>
  </section>
</template>
