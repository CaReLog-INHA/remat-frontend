<script setup lang="ts">
defineProps<{
  src: string;
  size?: "hero" | "footer";
}>();
</script>

<template>
  <img
    :src="src"
    alt=""
    :class="[
      'object-contain',
      size === 'footer'
        ? 'h-28 w-28'
        : 'absolute left-0 top-6 h-60 w-60 drop-shadow-[0_24px_48px_rgba(16,40,52,0.24)]',
    ]"
  />
</template>
