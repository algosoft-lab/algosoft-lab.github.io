<script setup lang="ts">
import { onMounted } from 'vue';

import SiteFooter from '@components/SiteFooter.vue';
import SiteHeader from '@components/SiteHeader.vue';
import { getSiteDocumentLinks } from '@data/documents';
import { getSiteRoutes } from '@composables/useSiteRoutes';
import { useSiteContent } from '@composables/useSiteContent';
import { getLocaleFromPath } from '@/i18n';

const { content } = useSiteContent();
const locale = getLocaleFromPath(window.location.pathname);
const documentLinks = getSiteDocumentLinks(locale);
const routes = getSiteRoutes(locale);

onMounted(() => {
  const title = locale === 'en' ? 'Documentation' : '产品文档';
  const description =
    locale === 'en'
      ? 'Documentation for AlgoSoft products.'
      : 'AlgoSoft 产品文档，选择产品查看详细说明。';

  document.title = `${title} — AlgoSoft`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description);
});
</script>

<template>
  <SiteHeader :content="content" />
  <main class="docs-home-page">
    <div class="container">
      <div class="docs-home-head">
        <p class="section-kicker">
          {{ locale === 'en' ? 'Product Documentation' : '产品文档' }}
        </p>
        <h1 class="docs-home-title">
          {{ locale === 'en' ? 'Choose a product' : '选择一个产品' }}
        </h1>
        <p class="docs-home-subtitle">
          {{
            locale === 'en'
              ? 'Read product guides, usage notes and development references.'
              : '查看产品介绍、使用说明和开发参考。'
          }}
        </p>
      </div>

      <div class="docs-home-grid">
        <a
          v-for="document in documentLinks"
          :key="document.slug"
          class="docs-home-card"
          :href="`${routes.home}docs/${document.slug}/`"
        >
          <span class="docs-home-card-product">{{ document.product }}</span>
          <h2>{{ document.title }}</h2>
          <p>{{ document.description }}</p>
          <span class="docs-home-card-action">
            {{ locale === 'en' ? 'Read documentation →' : '阅读文档 →' }}
          </span>
        </a>
      </div>
    </div>
  </main>
  <SiteFooter :content="content" />
</template>
