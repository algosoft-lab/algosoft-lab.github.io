<script setup lang="ts">
import { ElTag } from 'element-plus'

import type { Product } from '@/types/content'

defineProps<{ product: Product }>()
</script>

<template>
  <article class="product-card reveal" :class="`accent-${product.accent}`">
    <img class="product-logo" :src="product.logo" :alt="product.name" width="52" height="52" loading="lazy" />
    <div class="product-head"><h3 class="product-name">{{ product.name }}</h3></div>
    <p class="product-tagline">{{ product.tagline }}</p>
    <ul class="product-features">
      <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
    </ul>
    <div class="product-tags">
      <ElTag class="chip" effect="plain">{{ product.category }}</ElTag>
      <a v-if="product.url" class="product-site" :href="product.url" target="_blank" rel="noopener">{{ product.siteLabel }}</a>
    </div>
  </article>
</template>
