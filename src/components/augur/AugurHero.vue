<script setup lang="ts">
import { ElButton } from 'element-plus';

import { AUGUR_GIT_LOGO } from '@data/augurContent';
import type { AugurPageContent } from '@/types/content';

defineProps<{ content: AugurPageContent }>();
</script>

<template>
  <section class="hero augur-hero">
    <div class="bg-glow">
      <div class="bg-glow-a"></div>
      <div class="bg-glow-b"></div>
    </div>
    <div class="bg-grid"></div>
    <div class="container augur-hero-inner">
      <div class="augur-hero-copy">
        <p class="section-kicker reveal">{{ content.hero.kicker }}</p>
        <img
          class="augur-hero-logo reveal"
          :src="AUGUR_GIT_LOGO"
          alt="Augur Git"
          width="96"
          height="96"
        />
        <h1 class="hero-title reveal">
          <span class="gradient-text">{{ content.hero.title }}</span>
        </h1>
        <p class="hero-subtitle reveal">{{ content.hero.subtitle }}</p>
        <div class="hero-cta reveal">
          <ElButton
            class="btn btn-primary"
            tag="a"
            :href="content.hero.primaryUrl"
            target="_blank"
            rel="noopener"
            >{{ content.hero.primaryCta }}</ElButton
          >
          >
          <ElButton
            class="btn btn-ghost"
            tag="a"
            :href="content.hero.secondaryUrl"
            >{{ content.hero.secondaryCta }}</ElButton
          >
        </div>
        <p class="augur-note reveal">{{ content.hero.note }}</p>
      </div>

      <div
        class="augur-hero-visual reveal"
        role="img"
        :aria-label="content.hero.visualLabel"
      >
        <div class="augur-review-window">
          <div class="augur-window-bar">
            <span class="tl red"></span><span class="tl yellow"></span
            ><span class="tl green"></span>
            <span class="augur-window-title">augur-git · review</span>
          </div>
          <div class="augur-window-body">
            <aside class="augur-window-sidebar">
              <span class="augur-window-label">WORKING TREE</span>
              <span class="augur-file active"><b>M</b> src/workspace.rs</span>
              <span class="augur-file"><b>A</b> docs/workflow.md</span>
              <span class="augur-file"><b>~</b> src/git/diff.rs</span>
              <span class="augur-window-label">STAGED</span>
              <span class="augur-file muted"><b>✓</b> README.md</span>
            </aside>
            <div class="augur-window-diff">
              <div class="augur-diff-heading">
                <span>src/workspace.rs</span>
                <span class="augur-diff-count">+18 −7</span>
              </div>
              <div class="augur-code">
                <span class="code-muted">@@ review changes @@</span>
                <span class="code-add"
                  >+ let review = working_tree.diff();</span
                >
                <span class="code-add">+ human.inspect(review);</span>
                <span class="code-remove">− auto_commit(all_changes);</span>
                <span class="code-muted"> repository.next_history();</span>
              </div>
              <div class="augur-review-badge">
                <span class="augur-badge-dot"></span>
                Human review before history
              </div>
            </div>
          </div>
        </div>
        <p class="augur-visual-caption">{{ content.hero.visualLabel }}</p>
      </div>
    </div>
  </section>
</template>
