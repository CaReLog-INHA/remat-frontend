<script setup lang="ts">
import IconPath from "./IconPath.vue";

defineProps<{
  title: string;
  desc: string;
  tone: "red" | "mint" | "teal" | string;
  icon: string;
}>();
</script>

<template>
  <article
    class="rounded-2xl border bg-[#fff6f6] p-8"
    :class="{
      'border-[#db1a1a]/10': tone === 'red',
      'border-[#8cc7c4]/30': tone === 'mint',
      'border-[#2c687b]/20': tone === 'teal',
    }"
  >
    <div
      class="grid size-14 place-items-center rounded-[14px]"
      :class="{
        'bg-[#db1a1a]/10 text-[#db1a1a]': tone === 'red',
        'bg-[#8cc7c4]/20 text-[#2c687b]': tone === 'mint',
        'bg-[#2c687b]/10 text-[#2c687b]': tone === 'teal',
      }"
    >
      <IconPath :path="icon" class-name="size-7" />
    </div>
    <h3 class="mt-5 text-xl font-bold">{{ title }}</h3>
    <p class="mt-3 text-base leading-[1.65] text-[#4a5565]">{{ desc }}</p>
  </article>
</template>
