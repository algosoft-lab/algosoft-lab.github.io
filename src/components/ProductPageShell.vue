<script setup lang="ts">
import BrandLogo from '@components/BrandLogo.vue';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

defineProps<{
  alternateHreflang: string;
  alternateLabel: string;
  alternatePath: string;
  copyright: string;
  footerLinks: readonly FooterLink[];
  homeHref: string;
  homeLabel: string;
}>();
</script>

<template>
  <header class="nav" id="nav">
    <div class="container nav-inner">
      <BrandLogo :href="homeHref" />
      <div class="nav-actions">
        <a
          class="lang-toggle"
          :href="alternatePath"
          :hreflang="alternateHreflang"
          >{{ alternateLabel }}</a
        >
        <a class="nav-cta" :href="homeHref">{{ homeLabel }}</a>
      </div>
    </div>
  </header>
  <main id="top">
    <slot />
  </main>
  <footer class="footer">
    <div class="container footer-inner">
      <BrandLogo :href="homeHref" />
      <nav class="footer-links">
        <a
          v-for="link in footerLinks"
          :key="link.href"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
          >{{ link.label }}</a
        >
      </nav>
      <p class="footer-copy">
        {{ copyright }} ·
        <a class="domain" href="https://algosoft.cc">algosoft.cc</a>
      </p>
    </div>
  </footer>
</template>
