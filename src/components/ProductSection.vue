<script setup lang="ts">
import ProductCard from '@components/ProductCard.vue'
import type { SiteContent } from '@/types/content'

defineProps<{ content: SiteContent }>()
</script>

<template>
  <section class="section products" id="products">
    <div class="container">
      <div class="section-head reveal">
        <p class="section-kicker">{{ content.products.kicker }}</p>
        <h2 class="section-title">{{ content.products.title }}</h2>
        <p class="section-subtitle">{{ content.products.subtitle }}</p>
      </div>
      <div class="product-grid">
        <ProductCard v-for="product in content.products.items" :key="product.name" :product="product" />
      </div>
    </div>
  </section>
</template>
