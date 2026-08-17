<script setup lang="ts">
import { ElButton } from 'element-plus'

import BrandSection from '@components/BrandSection.vue'
import FaqSection from '@components/FaqSection.vue'
import HeroSection from '@components/HeroSection.vue'
import SiteFooter from '@components/SiteFooter.vue'
import SiteHeader from '@components/SiteHeader.vue'
import ProductSection from '@components/ProductSection.vue'
import { useReveal } from '@composables/useReveal'
import type { SiteContent } from '@/types/content'

defineProps<{ content: SiteContent }>()

useReveal()
</script>

<template>
  <SiteHeader :content="content" />
  <main id="top">
    <HeroSection :content="content" />
    <ProductSection :content="content" />
    <FaqSection :content="content" />
    <BrandSection :content="content" />
    <section class="section cta-band">
      <div class="container cta-inner reveal">
        <h2>{{ content.cta.title }}</h2>
        <p>{{ content.cta.subtitle }}</p>
        <div class="hero-cta">
          <ElButton class="btn btn-primary" tag="a" href="mailto:5266917@qq.com">{{ content.cta.action }}</ElButton>
        </div>
      </div>
    </section>
  </main>
  <SiteFooter :content="content" />
</template>
