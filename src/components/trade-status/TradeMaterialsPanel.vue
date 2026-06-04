<script setup lang="ts">
import { useRouter } from "vue-router";
import { registeredMaterials } from "@/data/tradeStatus";

const router = useRouter();
</script>

<template>
  <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-xl font-bold">등록한 자재 (3)</h2>
    <button
      type="button"
      class="inline-flex h-9 items-center justify-center gap-2 rounded-[8px] bg-[#db1a1a] px-3 text-sm font-medium text-white transition hover:bg-[#c01616]"
      @click="router.push({ name: 'register-material' })"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" stroke-linecap="round" />
      </svg>
      새 자재 등록
    </button>
  </div>

  <div class="mt-4 grid gap-4">
    <article
      v-for="material in registeredMaterials"
      :key="material.id"
      class="flex flex-col gap-4 rounded-[10px] border border-[#e5e7eb] p-4 sm:flex-row sm:items-start"
    >
      <img :src="material.image" alt="" class="h-32 w-full rounded-[10px] object-cover sm:w-32" />
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap gap-2">
          <span class="rounded-[4px] bg-[#8cc7c4]/20 px-2 py-1 text-xs font-medium text-[#2c687b]">{{ material.category }}</span>
          <span class="rounded-[4px] bg-[#f0fdf4] px-2 py-1 text-xs font-medium text-[#008236]">판매 중</span>
        </div>
        <h3 class="mt-2 text-lg font-bold">{{ material.title }}</h3>
        <p class="mt-1 line-clamp-2 text-sm leading-5 text-[#4a5565]">{{ material.desc }}</p>
        <div class="mt-3 flex flex-wrap gap-4 text-sm text-[#4a5565]">
          <span>{{ material.registeredAt }}</span>
          <span>{{ material.stockLabel }}</span>
        </div>
      </div>
      <div class="flex shrink-0 flex-row items-center justify-between gap-3 sm:w-28 sm:flex-col sm:items-end">
        <div class="text-right">
          <p class="text-lg font-bold text-[#db1a1a]">{{ material.priceLabel }}</p>
          <p class="text-xs text-[#6a7282]">/ 개</p>
        </div>
        <div class="flex gap-2">
          <button type="button" class="grid size-8 place-items-center rounded-[8px] border border-[#e5e7eb] text-[#364153]" aria-label="수정">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button type="button" class="grid size-8 place-items-center rounded-[8px] border border-[#fee2e2] text-[#db1a1a]" aria-label="삭제">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>
