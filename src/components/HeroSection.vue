<script setup lang="ts">
import { ElButton } from 'element-plus'

import type { SiteContent } from '@/types/content'

defineProps<{ content: SiteContent }>()
</script>

<template>
  <section class="hero">
    <div class="bg-glow bg-glow-a" aria-hidden="true"></div>
    <div class="bg-glow bg-glow-b" aria-hidden="true"></div>
    <div class="bg-grid" aria-hidden="true"></div>

    <div class="container hero-inner">
      <h1 class="hero-title reveal">
        {{ content.hero.titleBefore }}<br />
        <span class="gradient-text">{{ content.hero.titleAfter }}</span>
      </h1>
      <p class="hero-subtitle reveal">{{ content.hero.subtitle }}</p>
      <div class="hero-cta reveal">
        <ElButton class="btn btn-primary" tag="a" href="#products">{{ content.hero.primaryCta }}</ElButton>
        <ElButton class="btn btn-ghost" tag="a" href="#brand">{{ content.hero.secondaryCta }}</ElButton>
      </div>

      <div class="terminal reveal" role="img" :aria-label="content.hero.terminalLabel">
        <div class="terminal-bar">
          <span class="tl red"></span><span class="tl yellow"></span><span class="tl green"></span>
          <span class="terminal-title">algosoft — zsh</span>
        </div>
        <pre class="terminal-body"><code><span class="t-prompt">$</span> algosoft --list --all
<span class="t-ok">●</span> AlgoCOM    <span class="t-dim">{{ content.locale === 'zh' ? 'serial communication' : 'serial communication' }}</span>
<span class="t-ok">●</span> AlgoTerm   <span class="t-dim">terminal emulator</span>
<span class="t-ok">●</span> AlgoGit    <span class="t-dim">git client</span>
<span class="t-ok">●</span> AlgoPDF    <span class="t-dim">pdf toolkit</span>
<span class="t-ok">●</span> AlgoCode   <span class="t-dim">code editor</span>
<span class="t-ok">●</span> AlgoClass  <span class="t-dim">coding classroom</span>
<span class="t-prompt">$</span> <span class="t-cursor"></span></code></pre>
      </div>
    </div>
  </section>
</template>
