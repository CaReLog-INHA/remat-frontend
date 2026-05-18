<script setup>
import Home from '../components/Home.vue';

defineEmits(['change-page']);
</script>

<template>
  <Home @change-page="$emit('change-page', $event)" />
</template>
