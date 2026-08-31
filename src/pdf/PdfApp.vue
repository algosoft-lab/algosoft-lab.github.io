<script setup lang="ts">
import { ElButton } from 'element-plus';

import PdfFeatures from '@components/pdf/PdfFeatures.vue';
import PdfHero from '@components/pdf/PdfHero.vue';
import ProductPageShell from '@components/ProductPageShell.vue';
import { useReveal } from '@composables/useReveal';
import { getSiteRoutes } from '@composables/useSiteRoutes';
import { getPdfContent } from '@data/pdfContent';
import { getLocaleFromPath } from '@/i18n';

useReveal();

const content = getPdfContent(getLocaleFromPath(window.location.pathname));
const routes = getSiteRoutes(content.locale);

const footerLinks = [
  { label: content.footer.backHome, href: routes.home },
  { label: content.footer.privacyLabel, href: content.footer.privacyPath },
  { label: 'AlgoCode', href: 'https://algocode.cc', external: true },
  { label: '5266917@qq.com', href: 'mailto:5266917@qq.com' },
] as const;
</script>

<template>
  <ProductPageShell
    :alternate-hreflang="content.locale === 'en' ? 'zh-CN' : 'en'"
    :alternate-label="content.alternateLabel"
    :alternate-path="content.alternatePath"
    :copyright="content.footer.copyright"
    :footer-links="footerLinks"
    :home-href="routes.home"
    :home-label="content.nav.home"
  >
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
  </ProductPageShell>
</template>
