<script setup lang="ts">
defineProps<{
  path: string;
  className?: string;
}>();
</script>

<template>
  <svg :class="className ?? 'size-4'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path :d="path" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
