<script setup lang="ts">
import type { MaterialListItem } from "@/api/materials";
import { conditionLabel, transactionLabel } from "@/data/materialOptions";
import { regionOptions } from "@/data/regions";

defineProps<{
  material: MaterialListItem;
}>();

const regionLabel = (code: string): string =>
  regionOptions.find((r) => r.value === code)?.label ?? code;

const formatPrice = (n: number): string => `${n.toLocaleString("ko-KR")}원`;
</script>

<template>
  <article class="overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div class="aspect-[16/11] overflow-hidden bg-[#e7eeee]">
      <img
        v-if="material.imageUrl"
        :src="material.imageUrl"
        :alt="material.materialName"
        class="size-full object-cover transition duration-500 hover:scale-105"
      />
      <div v-else class="grid size-full place-items-center text-5xl text-[#cbd5e1]">📦</div>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap gap-2">
        <span class="rounded bg-[#8cc7c4]/20 px-2 py-1 text-xs font-bold text-[#2c687b]">{{ material.categoryName }}</span>
        <span class="rounded bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{{ conditionLabel(material.materialCondition) }}</span>
        <span
          :class="[
            'rounded px-2 py-1 text-xs font-bold',
            material.transactionType === 'SALE' ? 'bg-[#dbeafe] text-[#1447e6]' : 'bg-[#f3e8ff] text-[#8200db]',
          ]"
        >
          {{ transactionLabel(material.transactionType) }}
        </span>
      </div>
      <h3 class="mt-3 text-lg font-bold text-[#101828]">{{ material.materialName }}</h3>
      <p class="mt-2 text-sm text-[#6a7282]">{{ regionLabel(material.region) }}</p>
      <div class="mt-5 flex items-end justify-between border-t border-dashed border-[#e5e7eb] pt-4">
        <div>
          <p class="text-xl font-extrabold text-[#db1a1a]">{{ formatPrice(material.price) }}</p>
          <p class="mt-1 text-xs text-[#6a7282]">{{ material.quantity }}개 보유</p>
        </div>
      </div>
    </div>
  </article>
</template>
