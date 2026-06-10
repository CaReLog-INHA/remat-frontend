<script setup lang="ts">
import ValueCard from "./ValueCard.vue";

defineProps<{
  values: ReadonlyArray<{ title: string; desc: string; tone: string; icon: string }>;
}>();
</script>

<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-4xl font-extrabold tracking-normal text-[#101828]">ReMat의 핵심 가치</h2>
        <p class="mt-4 text-lg text-[#4a5565]">자재 재사용으로 만드는 세 가지 변화</p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <ValueCard
          v-for="value in values"
          :key="value.title"
          :title="value.title"
          :desc="value.desc"
          :tone="value.tone"
          :icon="value.icon"
        />
      </div>
    </div>
  </section>
</template>
