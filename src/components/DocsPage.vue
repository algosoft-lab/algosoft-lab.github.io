<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

import SiteFooter from '@components/SiteFooter.vue';
import SiteHeader from '@components/SiteHeader.vue';
import { getSiteDocument, getSiteDocumentLinks } from '@data/documents';
import { useSiteContent } from '@composables/useSiteContent';
import {
  getDocumentSlugFromPath,
  getSiteRoutes,
} from '@composables/useSiteRoutes';
import { getLocaleFromPath } from '@/i18n';

const { content } = useSiteContent();
const locale = getLocaleFromPath(window.location.pathname);
const slug = getDocumentSlugFromPath(window.location.pathname) ?? 'algocode';
const siteDocument = getSiteDocument(locale, slug);
const documentLinks = getSiteDocumentLinks(locale);
const routes = getSiteRoutes(locale);
const documentContent = ref<HTMLElement | null>(null);

function enhanceCodeBlocks(): void {
  const blocks = documentContent.value?.querySelectorAll('pre');

  blocks?.forEach((pre) => {
    if (pre.parentElement?.classList.contains('docs-code-block')) return;

    const code = pre.querySelector('code');
    const wrapper = document.createElement('div');
    const copyButton = document.createElement('button');

    wrapper.className = 'docs-code-block';
    copyButton.className = 'code-copy';
    copyButton.type = 'button';
    copyButton.textContent = locale === 'en' ? 'Copy' : '复制';

    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code?.textContent ?? '');
        copyButton.textContent = locale === 'en' ? 'Copied' : '已复制';
      } catch {
        copyButton.textContent = locale === 'en' ? 'Unavailable' : '不可用';
      }

      window.setTimeout(() => {
        copyButton.textContent = locale === 'en' ? 'Copy' : '复制';
      }, 1600);
    });

    pre.replaceWith(wrapper);
    wrapper.append(pre, copyButton);
  });
}

async function renderMermaidDiagrams(): Promise<void> {
  const nodes = Array.from(
    documentContent.value?.querySelectorAll<HTMLElement>('[data-mermaid]') ??
      [],
  );

  if (!nodes.length) return;

  const { default: mermaid } = await import('mermaid');

  mermaid.initialize({
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    securityLevel: 'strict',
    startOnLoad: false,
    theme: 'dark',
  });

  try {
    await mermaid.run({ nodes });
  } catch {
    nodes.forEach((node) => node.classList.add('docs-mermaid-error'));
  }
}

onMounted(async () => {
  document.title = `${siteDocument.frontmatter.title} — AlgoSoft`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', siteDocument.frontmatter.description);
  await nextTick();
  enhanceCodeBlocks();
  await renderMermaidDiagrams();
});
</script>

<template>
  <SiteHeader :content="content" />
  <main class="docs-page">
    <div class="container">
      <div class="docs-breadcrumbs">
        <a :href="routes.home">AlgoSoft</a>
        <span aria-hidden="true">/</span>
        <a :href="routes.docs">{{ content.navigation.docs }}</a>
        <span aria-hidden="true">/</span>
        <span>{{ siteDocument.frontmatter.product }}</span>
      </div>

      <div class="docs-layout">
        <aside class="docs-sidebar">
          <section class="docs-sidebar-section">
            <p class="docs-sidebar-label">{{ content.navigation.docs }}</p>
            <nav :aria-label="content.navigation.docs">
              <a
                v-for="document in documentLinks"
                :key="document.slug"
                class="docs-document-link"
                :class="{ active: document.slug === slug }"
                :href="`${routes.home}docs/${document.slug}/`"
              >
                {{ document.title }}
              </a>
            </nav>
          </section>

          <section class="docs-sidebar-section">
            <p class="docs-sidebar-label">
              {{ siteDocument.frontmatter.product }}
            </p>
            <nav :aria-label="siteDocument.frontmatter.product">
              <a
                v-for="item in siteDocument.toc"
                :key="item.id"
                class="docs-toc-link"
                :class="`docs-toc-level-${item.level}`"
                :href="`#${item.id}`"
              >
                {{ item.title }}
              </a>
            </nav>
          </section>
        </aside>

        <article
          ref="documentContent"
          class="markdown-body"
          v-html="siteDocument.html"
        />
      </div>
    </div>
  </main>
  <SiteFooter :content="content" />
</template>
