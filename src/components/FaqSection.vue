<script setup lang="ts">
import type { SiteContent } from '@/types/content';

defineProps<{ content: SiteContent }>();
</script>

<template>
  <section class="section faq" id="faq">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.faq.kicker }}</p>
        <h2 class="section-title">{{ content.faq.title }}</h2>
        <p class="section-subtitle">{{ content.faq.subtitle }}</p>
      </div>
      <div class="faq-list">
        <details
          v-for="item in content.faq.items"
          :key="item.question"
          class="faq-item reveal"
        >
          <summary>{{ item.question }}</summary>
          <p>
            {{ item.answer }}
            <a v-if="item.answerLink" :href="item.answerLink.href">{{
              item.answerLink.label
            }}</a>
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
