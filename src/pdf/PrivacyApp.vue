<script setup lang="ts">
import BrandLogo from '@components/BrandLogo.vue';
import { getPrivacyContent } from '@data/privacyContent';
import { getLocaleFromPath } from '@/i18n';

const content = getPrivacyContent(getLocaleFromPath(window.location.pathname));
</script>

<template>
  <header class="nav" id="nav">
    <div class="container nav-inner">
      <BrandLogo href="/" />
      <div class="nav-actions">
        <a
          class="lang-toggle"
          :href="content.alternatePath"
          :hreflang="content.alternateLabel === 'EN' ? 'en' : 'zh-CN'"
          >{{ content.alternateLabel }}</a
        >
        <a class="nav-cta" href="/">{{ content.nav.home }}</a>
      </div>
    </div>
  </header>
  <main id="top">
    <section class="section">
      <div class="container">
        <div class="section-head privacy-head">
          <p class="section-kicker">{{ content.hero.kicker }}</p>
          <h1 class="section-title">{{ content.hero.title }}</h1>
          <p class="section-subtitle">{{ content.hero.subtitle }}</p>
          <p class="privacy-updated">{{ content.hero.updated }}</p>
        </div>
        <div class="privacy-list">
          <article
            v-for="section in content.sections"
            :key="section.heading"
            class="privacy-item"
          >
            <h2>{{ section.heading }}</h2>
            <p
              v-for="(paragraph, index) in section.paragraphs"
              :key="index"
              :class="{ 'privacy-path': paragraph.includes('%LOCALAPPDATA%') }"
            >
              {{ paragraph }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container footer-inner">
      <BrandLogo href="/" />
      <nav class="footer-links">
        <a href="/">{{ content.footer.backHome }}</a>
        <a :href="content.footer.productPath">{{ content.footer.product }}</a>
        <a href="mailto:5266917@qq.com">5266917@qq.com</a>
      </nav>
      <p class="footer-copy">
        {{ content.footer.copyright }} ·
        <a class="domain" href="https://algosoft.cc">algosoft.cc</a>
      </p>
    </div>
  </footer>
</template>
