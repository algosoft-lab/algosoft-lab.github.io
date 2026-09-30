<script setup lang="ts">
import { ElButton } from 'element-plus';

import ProductPageShell from '@components/ProductPageShell.vue';
import { useReveal } from '@composables/useReveal';
import { getSiteRoutes, withBase } from '@composables/useSiteRoutes';
import { DECKLE_STORE_URL, getDeckleContent } from '@data/deckleContent';
import { getLocaleFromPath } from '@/i18n';

useReveal();

const content = getDeckleContent(getLocaleFromPath(window.location.pathname));
const routes = getSiteRoutes(content.locale);

const storeUrl = DECKLE_STORE_URL;
const privacyUrl = withBase('/deckle/privacy/');

const footerLinks = [
  { label: content.storeCta, href: storeUrl },
  { label: content.privacyCta, href: privacyUrl },
  { label: '5266917@qq.com', href: 'mailto:5266917@qq.com' },
] as const;

const shots = [
  {
    src: withBase('/assets/img/screenshots/deckle-vertical.png'),
    alt: 'Deckle Reader rendering vertical CJK text and a full-page emaki artwork',
  },
  {
    src: withBase('/assets/img/screenshots/deckle-mathml.png'),
    alt: 'Deckle Reader typesetting inline and display MathML formulas',
  },
] as const;
</script>

<template>
  <ProductPageShell
    :alternate-hreflang="content.locale === 'en' ? 'zh-CN' : 'en'"
    :alternate-label="content.locale === 'en' ? '中文' : 'EN'"
    :alternate-path="withBase(content.locale === 'en' ? '/deckle/privacy/' : '/en/deckle/privacy/')"
    :copyright="`© 2026 AlgoSoft`"
    :footer-links="footerLinks"
    :home-href="routes.home"
    :home-label="routes.homeLabel ?? 'AlgoSoft'"
  >
    <section class="hero">
      <div class="bg-glow">
        <div class="bg-glow-a"></div>
        <div class="bg-glow-b"></div>
      </div>
      <div class="container hero-inner">
        <p class="section-kicker reveal">Deckle Reader · EPUB 3.3</p>
        <h1 class="hero-title reveal">
          <span class="gradient-text">{{ content.headline }}</span>
        </h1>
        <p class="hero-subtitle reveal">{{ content.sub }}</p>
        <div class="hero-cta reveal">
          <ElButton class="btn btn-primary" tag="a" :href="storeUrl" target="_blank" rel="noopener">
            {{ content.storeCta }}
          </ElButton>
          <ElButton class="btn btn-ghost" tag="a" :href="privacyUrl">
            {{ content.privacyCta }}
          </ElButton>
        </div>
        <p class="reveal" style="opacity: 0.65; font-size: 0.85rem">{{ content.note }}</p>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="container">
        <div class="section-head reveal">
          <p class="section-kicker">{{ content.shotsHead.kicker }}</p>
          <h2 class="section-title">{{ content.shotsHead.title }}</h2>
        </div>
        <div class="deckle-shots">
          <figure v-for="shot in shots" :key="shot.src" class="deckle-shot reveal">
            <img :src="shot.src" :alt="shot.alt" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>

    <section class="section" id="features">
      <div class="container">
        <div class="section-head reveal">
          <p class="section-kicker">{{ content.featuresHead.kicker }}</p>
          <h2 class="section-title">{{ content.featuresHead.title }}</h2>
        </div>
        <div class="deckle-features">
          <article
            v-for="f in content.features"
            :key="f.title"
            class="deckle-feature reveal"
          >
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-inner reveal">
        <h2>{{ content.privacy.title }}</h2>
        <p>{{ content.privacy.text }}</p>
        <div class="hero-cta">
          <ElButton class="btn btn-ghost" tag="a" :href="privacyUrl">
            {{ content.privacy.cta }}
          </ElButton>
          <ElButton class="btn btn-primary" tag="a" :href="storeUrl" target="_blank" rel="noopener">
            {{ content.storeCta }}
          </ElButton>
        </div>
      </div>
    </section>
  </ProductPageShell>
</template>

<style scoped>
.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
.deckle-shots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
.deckle-shot {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
}
.deckle-shot img {
  display: block;
  width: 100%;
  height: auto;
}
.deckle-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}
.deckle-feature {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
}
.deckle-feature h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
}
.deckle-feature p {
  margin: 0;
  opacity: 0.75;
  line-height: 1.65;
}
</style>
