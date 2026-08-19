<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), { href: '#top' });
</script>

<template>
  <a class="nav-logo" :href="href" aria-label="AlgoSoft home">
    <svg
      class="logo-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
    <span>Algo<span class="accent">Soft</span></span>
  </a>
</template>
