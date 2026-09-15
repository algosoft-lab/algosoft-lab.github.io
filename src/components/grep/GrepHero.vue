<script setup lang="ts">
import { ElButton } from 'element-plus';

import { GREP_LOGO, GREP_SCREENSHOT_SEARCH } from '@data/grepContent';
import type { GrepPageContent } from '@/types/content';

defineProps<{ content: GrepPageContent }>();
</script>

<template>
  <section class="hero grep-hero">
    <div class="bg-glow">
      <div class="bg-glow-a"></div>
      <div class="bg-glow-b"></div>
    </div>
    <div class="bg-grid"></div>
    <div class="container grep-hero-inner">
      <div class="grep-hero-copy">
        <p class="section-kicker reveal">{{ content.hero.kicker }}</p>
        <img
          class="grep-hero-logo reveal"
          :src="GREP_LOGO"
          alt="AlgoGrep"
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
            >{{ content.hero.primaryCta }}</ElButton
          >
          <ElButton
            class="btn btn-ghost"
            tag="a"
            :href="content.hero.secondaryUrl"
            >{{ content.hero.secondaryCta }}</ElButton
          >
        </div>
        <p class="grep-note reveal">{{ content.hero.note }}</p>
      </div>

      <div class="grep-hero-visual reveal">
        <figure class="grep-hero-shot">
          <img
            :src="GREP_SCREENSHOT_SEARCH"
            :alt="content.hero.visualAlt"
            width="1366"
            height="768"
          />
        </figure>
        <p class="grep-visual-caption">{{ content.hero.visualLabel }}</p>
      </div>
    </div>
  </section>
</template>
