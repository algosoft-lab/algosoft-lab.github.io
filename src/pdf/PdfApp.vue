<script setup lang="ts">
import { ElButton } from 'element-plus';

import PdfFeatures from '@components/pdf/PdfFeatures.vue';
import PdfHero from '@components/pdf/PdfHero.vue';
import BrandLogo from '@components/BrandLogo.vue';
import { useReveal } from '@composables/useReveal';
import { getPdfContent } from '@data/pdfContent';
import { getLocaleFromPath } from '@/i18n';

useReveal();

const content = getPdfContent(getLocaleFromPath(window.location.pathname));
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
    <PdfHero :content="content" />
    <PdfFeatures :content="content" />
    <section class="section cta-band">
      <div class="container cta-inner reveal">
        <h2>{{ content.cta.title }}</h2>
        <p>{{ content.cta.subtitle }}</p>
        <div class="hero-cta">
          <ElButton
            class="btn btn-primary"
            tag="a"
            :href="content.cta.actionUrl"
            target="_blank"
            rel="noopener"
            >{{ content.cta.action }}</ElButton
          >
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container footer-inner">
      <BrandLogo href="/" />
      <nav class="footer-links">
        <a href="/">{{ content.footer.backHome }}</a>
        <a :href="content.footer.privacyPath">{{ content.footer.privacyLabel }}</a>
        <a href="https://algocode.cc" target="_blank" rel="noopener"
          >AlgoCode</a
        >
        <a href="mailto:5266917@qq.com">5266917@qq.com</a>
      </nav>
      <p class="footer-copy">
        {{ content.footer.copyright }} ·
        <a class="domain" href="https://algosoft.cc">algosoft.cc</a>
      </p>
    </div>
  </footer>
</template>
