<script setup lang="ts">
export interface SummaryCard {
  label: string;
  value: string;
  iconSrc: string;
  tint: string;
}

defineProps<{
  cards: ReadonlyArray<SummaryCard>;
}>();
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    <article
      v-for="card in cards"
      :key="card.label"
      class="rounded-[14px] border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]"
    >
      <div :class="['grid size-11 place-items-center rounded-xl', card.tint]">
        <img :src="card.iconSrc" alt="" class="size-5 object-contain" />
      </div>
      <p class="mt-5 text-[42px] font-bold leading-none tracking-[-0.04em] text-[#1f2937]">{{ card.value }}</p>
      <p class="mt-2 text-sm text-[#6a7282]">{{ card.label }}</p>
    </article>
  </div>
</template>
