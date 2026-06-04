<script setup lang="ts">
import type { TradeType } from "@/data/materials";


defineProps<{
  id: string;
  tradeType: TradeType;
  image: string;
  category: string;
  status: string;
  title: string;
  desc: string;
  price: string;
  stock: string;
  carbon: string;
}>();
</script>

<template>
  <article class="overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div class="aspect-[16/11] overflow-hidden bg-[#e7eeee]">
      <img :src="image" :alt="title" class="size-full object-cover transition duration-500 hover:scale-105" />
    </div>
    <div class="p-5">
      <div class="flex gap-2">
        <span class="rounded bg-[#8cc7c4]/20 px-2 py-1 text-xs font-bold text-[#2c687b]">{{ category }}</span>
        <span class="rounded bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{{ status }}</span>
      </div>
      <h3 class="mt-3 text-lg font-bold text-[#101828]">{{ title }}</h3>
      <p class="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-[#4a5565]">{{ desc }}</p>
      <div class="mt-5 flex items-end justify-between border-t border-dashed border-[#e5e7eb] pt-4">
        <div>
          <p class="text-xl font-extrabold text-[#db1a1a]">{{ price }}</p>
          <p class="mt-1 text-xs text-[#6a7282]">{{ stock }}</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-[#6a7282]">탄소 절감</p>
          <p class="text-sm font-bold text-emerald-700">{{ carbon }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
