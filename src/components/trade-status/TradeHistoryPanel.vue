<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ReviewModal from "@/components/trade-status/ReviewModal.vue";
import { tradesApi, type PurchasedTrade, type SoldTrade } from "@/api/trades";
import {
  formatPrice,
  formatDate,
  transactionLabel,
  transactionTone,
  initialOf,
} from "@/data/tradeStatus";

const historyMode = ref<"bought" | "sold">("bought");

const bought = ref<PurchasedTrade[]>([]);
const sold = ref<SoldTrade[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");

const loadHistory = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    [bought.value, sold.value] = await Promise.all([
      tradesApi.purchaseHistory(),
      tradesApi.saleHistory(),
    ]);
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadHistory);

const boughtCount = computed(() => bought.value.length);
const soldCount = computed(() => sold.value.length);

const summaryOf = (t: PurchasedTrade | SoldTrade): string => {
  const base = `수량: ${t.requestedQuantity}개`;
  if (t.transactionType === "RENTAL" && t.rentalStart) {
    return `${base} · ${formatDate(t.rentalStart)} ~ ${formatDate(t.rentalEnd)}`;
  }
  return base;
};

// 리뷰 모달
const reviewTradeId = ref<number | null>(null);
const isSubmittingReview = ref(false);

const openReview = (tradeId: number) => {
  reviewTradeId.value = tradeId;
};

const submitReview = async (payload: { starRating: number; description: string }) => {
  if (reviewTradeId.value == null) return;
  isSubmittingReview.value = true;
  try {
    await tradesApi.createReview(reviewTradeId.value, payload);
    reviewTradeId.value = null;
    alert("후기가 등록되었습니다.");
  } catch (e) {
    alert((e as Error).message);
  } finally {
    isSubmittingReview.value = false;
  }
};
</script>

<template>
  <div class="mt-6">
    <div class="inline-flex rounded-[10px] bg-[#f3f4f6] p-1">
      <button
        type="button"
        :class="['flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition', historyMode === 'bought' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]']"
        @click="historyMode = 'bought'"
      >
        내가 구매한 거래
        <span :class="['rounded-full px-2 py-0.5 text-xs', historyMode === 'bought' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">{{ boughtCount }}</span>
      </button>
      <button
        type="button"
        :class="['flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition', historyMode === 'sold' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]']"
        @click="historyMode = 'sold'"
      >
        내가 판 거래
        <span :class="['rounded-full px-2 py-0.5 text-xs', historyMode === 'sold' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">{{ soldCount }}</span>
      </button>
    </div>

    <p v-if="isLoading" class="mt-6 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]">
      거래 내역을 불러오는 중입니다…
    </p>
    <p v-else-if="errorMessage" class="mt-6 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
      {{ errorMessage }}
    </p>

    <!-- 구매 내역 -->
    <div v-else-if="historyMode === 'bought'" class="mt-6 grid gap-4">
      <p v-if="boughtCount === 0" class="rounded-[10px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]">
        구매한 거래 내역이 없습니다.
      </p>
      <article v-for="trade in bought" :key="trade.tradeId" class="rounded-[14px] border-2 border-[#8cc7c4] bg-white p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ initialOf(trade.sellerName) }}</div>
            <div>
              <p class="font-bold">{{ trade.sellerName }}</p>
              <p class="text-sm text-[#4a5565]">{{ trade.sellerCompanyName }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span :class="['rounded-full px-3 py-1 text-xs font-semibold', transactionTone(trade.transactionType)]">{{ transactionLabel(trade.transactionType) }} 완료</span>
            <span class="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#008236]">완료됨</span>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
          <div class="h-24 w-full overflow-hidden rounded-[8px] bg-[#f3f4f6] sm:w-24">
            <img v-if="trade.imageUrl" :src="trade.imageUrl" alt="" class="h-full w-full object-cover" />
            <div v-else class="grid h-full w-full place-items-center text-2xl text-[#cbd5e1]">📦</div>
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="font-bold">{{ trade.materialName }}</h3>
            <p class="mt-1 text-sm text-[#4a5565]">{{ summaryOf(trade) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-[#db1a1a]">{{ formatPrice(trade.finalPrice) }}</p>
            <p class="text-xs text-[#6a7282]">총 금액</p>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-[#6a7282]">{{ formatDate(trade.createdAt) }}</p>
          <button
            type="button"
            class="inline-flex h-9 items-center justify-center rounded-[8px] bg-[#2c687b] px-4 text-sm font-medium text-white transition hover:bg-[#25596a]"
            @click="openReview(trade.tradeId)"
          >
            리뷰 남기기
          </button>
        </div>
      </article>
    </div>

    <!-- 판매 내역 -->
    <div v-else class="mt-6 grid gap-4">
      <p v-if="soldCount === 0" class="rounded-[10px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]">
        판매한 거래 내역이 없습니다.
      </p>
      <article v-for="trade in sold" :key="trade.tradeId" class="rounded-[14px] border-2 border-[#8cc7c4] bg-white p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ initialOf(trade.buyerName) }}</div>
            <div>
              <p class="font-bold">{{ trade.buyerName }}</p>
              <p class="text-sm text-[#4a5565]">{{ trade.buyerCompanyName }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span :class="['rounded-full px-3 py-1 text-xs font-semibold', transactionTone(trade.transactionType)]">{{ transactionLabel(trade.transactionType) }} 완료</span>
            <span class="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#008236]">완료됨</span>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
          <div class="h-24 w-full overflow-hidden rounded-[8px] bg-[#f3f4f6] sm:w-24">
            <img v-if="trade.imageUrl" :src="trade.imageUrl" alt="" class="h-full w-full object-cover" />
            <div v-else class="grid h-full w-full place-items-center text-2xl text-[#cbd5e1]">📦</div>
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="font-bold">{{ trade.materialName }}</h3>
            <p class="mt-1 text-sm text-[#4a5565]">{{ summaryOf(trade) }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-[#db1a1a]">{{ formatPrice(trade.finalPrice) }}</p>
            <p class="text-xs text-[#6a7282]">총 수익</p>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-[#6a7282]">{{ formatDate(trade.createdAt) }}</p>
          <p class="text-sm font-semibold text-[#2c687b]">판매 완료됨</p>
        </div>
      </article>
    </div>

    <ReviewModal
      v-if="reviewTradeId != null"
      :submitting="isSubmittingReview"
      @close="reviewTradeId = null"
      @submit="submitReview"
    />
  </div>
</template>
