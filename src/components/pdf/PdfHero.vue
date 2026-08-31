<script setup lang="ts">
import { ElButton } from 'element-plus';

import { PDF_LOGO } from '@data/pdfContent';
import type { PdfPageContent } from '@/types/content';

defineProps<{ content: PdfPageContent }>();
</script>

<template>
  <section class="hero pdf-hero">
    <div class="bg-glow">
      <div class="bg-glow-a"></div>
      <div class="bg-glow-b"></div>
    </div>
    <div class="bg-grid"></div>
    <div class="container hero-inner pdf-hero-inner">
      <p class="section-kicker reveal">{{ content.hero.kicker }}</p>
      <img
        class="pdf-hero-logo reveal"
        :src="PDF_LOGO"
        alt="AlgoPDF"
        width="96"
        height="96"
      />
      <h1 class="hero-title reveal">
        <span class="gradient-text">{{ content.hero.title }}</span>
      </h1>
      <p class="hero-subtitle reveal">{{ content.hero.subtitle }}</p>
      <div class="hero-cta reveal">
        <ElButton
          class="btn btn-primary"
          tag="a"
          :href="content.hero.primaryUrl"
          target="_blank"
          rel="noopener"
          >{{ content.hero.primaryCta }}</ElButton
        >
        <ElButton
          v-if="content.hero.directUrl"
          class="btn btn-ghost"
          tag="a"
          :href="content.hero.directUrl"
          download
          >{{ content.hero.directCta }}</ElButton
        >
        <ElButton class="btn btn-ghost" tag="a" href="/">{{
          content.hero.secondaryCta
        }}</ElButton>
      </div>
      <p class="pdf-note reveal">{{ content.hero.note }}</p>
    </div>
  </section>
</template>
