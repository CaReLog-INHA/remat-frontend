<script setup lang="ts">
import { ref } from "vue";
import ReviewModal from "@/components/trade-status/ReviewModal.vue";
import { boughtHistories, soldHistories } from "@/data/tradeStatus";

const historyMode = ref<"bought" | "sold">("bought");
const isReviewModalOpen = ref(false);
</script>

<template>
  <div class="mt-6">
    <div class="inline-flex rounded-[10px] bg-[#f3f4f6] p-1">
      <button
        type="button"
        :class="[
          'flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition',
          historyMode === 'bought' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]',
        ]"
        @click="historyMode = 'bought'"
      >
        내가 구매한 거래
        <span :class="['rounded-full px-2 py-0.5 text-xs', historyMode === 'bought' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">3</span>
      </button>
      <button
        type="button"
        :class="[
          'flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition',
          historyMode === 'sold' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]',
        ]"
        @click="historyMode = 'sold'"
      >
        내가 판 거래
        <span :class="['rounded-full px-2 py-0.5 text-xs', historyMode === 'sold' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">2</span>
      </button>
    </div>

    <div class="mt-6 grid gap-4">
      <article
        v-for="history in historyMode === 'bought' ? boughtHistories : soldHistories"
        :key="`${history.partner}-${history.material.id}`"
        class="rounded-[14px] border-2 border-[#8cc7c4] bg-white p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ history.initial }}</div>
            <div>
              <p class="font-bold">{{ history.partner }}</p>
              <p class="text-sm text-[#4a5565]">{{ history.company }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span :class="['rounded-full px-3 py-1 text-xs font-semibold', history.typeTone]">{{ history.type }}</span>
            <span class="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#008236]">완료됨</span>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
          <img :src="history.material.image" alt="" class="h-24 w-full rounded-[8px] object-cover sm:w-24" />
          <div class="min-w-0 flex-1">
            <h3 class="font-bold">{{ history.title }}</h3>
            <p class="mt-1 text-sm text-[#4a5565]">{{ history.summary }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-[#db1a1a]">{{ history.amount }}</p>
            <p class="text-xs text-[#6a7282]">{{ history.amountLabel }}</p>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-[#6a7282]">{{ history.date }}</p>
          <button
            v-if="historyMode === 'bought'"
            type="button"
            class="inline-flex h-9 items-center justify-center rounded-[8px] bg-[#2c687b] px-4 text-sm font-medium text-white"
            @click="isReviewModalOpen = true"
          >
            리뷰 남기기
          </button>
          <p v-else class="text-sm font-semibold text-[#2c687b]">판매 완료됨</p>
        </div>
      </article>
    </div>

    <ReviewModal v-if="isReviewModalOpen" @close="isReviewModalOpen = false" />
  </div>
</template>
