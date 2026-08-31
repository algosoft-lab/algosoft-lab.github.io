<script setup lang="ts">
import { ElButton } from 'element-plus';

import AugurFeatures from '@components/augur/AugurFeatures.vue';
import AugurHero from '@components/augur/AugurHero.vue';
import AugurShowcase from '@components/augur/AugurShowcase.vue';
import ProductPageShell from '@components/ProductPageShell.vue';
import { useReveal } from '@composables/useReveal';
import { getSiteRoutes } from '@composables/useSiteRoutes';
import { getAugurContent } from '@data/augurContent';
import { getLocaleFromPath } from '@/i18n';

useReveal();

const content = getAugurContent(getLocaleFromPath(window.location.pathname));
const routes = getSiteRoutes(content.locale);

const footerLinks = [
  { label: content.footer.backHome, href: routes.home },
  { label: content.footer.docsLabel, href: content.footer.docsPath },
  {
    label: content.footer.githubLabel,
    href: content.footer.githubUrl,
    external: true,
  },
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
    <AugurHero :content="content" />

    <section class="section augur-intro" id="about">
      <div class="container">
        <div class="augur-intro-grid">
          <div class="section-head augur-intro-head reveal">
            <p class="section-kicker">{{ content.intro.kicker }}</p>
            <h2 class="section-title">{{ content.intro.title }}</h2>
          </div>
          <div class="augur-intro-copy reveal">
            <p class="section-subtitle">{{ content.intro.subtitle }}</p>
            <p v-for="paragraph in content.intro.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <AugurFeatures :content="content" />

    <section class="section augur-workflow" id="workflow">
      <div class="container">
        <div class="section-head reveal">
          <p class="section-kicker">{{ content.workflow.kicker }}</p>
          <h2 class="section-title">{{ content.workflow.title }}</h2>
          <p class="section-subtitle">{{ content.workflow.subtitle }}</p>
        </div>
        <div class="augur-workflow-grid">
          <article
            v-for="step in content.workflow.steps"
            :key="step.number"
            class="augur-workflow-step reveal"
          >
            <span class="augur-step-number">{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <AugurShowcase :content="content" />

    <section class="section cta-band augur-cta">
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
