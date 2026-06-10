<script setup lang="ts">
import { computed, ref } from "vue";
import type { ReceivedRequest } from "@/api/trades";
import { formatPrice, formatDate } from "@/data/tradeStatus";

const props = defineProps<{
  request: ReceivedRequest;
  submitting?: boolean;
}>();

const emit = defineEmits<{
  (event: "close"): void;
  (event: "approve", finalPrice: number): void;
}>();

const isRental = computed(() => props.request.transactionType === "RENTAL");
const approvalLabel = computed(() => (isRental.value ? "대여 승인" : "판매 승인"));
const badgeClass = computed(() =>
  isRental.value ? "bg-[#f3e8ff] text-[#8200db]" : "bg-[#dbeafe] text-[#1447e6]",
);
const tradeTypeLabel = computed(() => (isRental.value ? "대여" : "판매"));

// 기본 최종금액 = 단가 × 요청수량 (판매자가 조정 가능)
const finalPrice = ref(
  (props.request.materialPrice ?? 0) * (props.request.requestedQuantity ?? 1),
);

const submitError = ref("");

const approve = () => {
  if (props.submitting) return;
  if (finalPrice.value == null || finalPrice.value < 0) {
    submitError.value = "최종 금액을 올바르게 입력해주세요.";
    return;
  }
  submitError.value = "";
  emit("approve", finalPrice.value);
};
</script>

<template>
  <div class="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/30 px-4 py-8">
    <section class="relative w-full max-w-[510px] rounded-[10px] border border-black/10 bg-[#fff6f6] p-6 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        class="absolute right-4 top-4 grid size-6 place-items-center rounded-[4px] text-[#4a5565] opacity-70 transition hover:bg-black/5 hover:opacity-100"
        aria-label="승인 모달 닫기"
        @click="emit('close')"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>

      <header>
        <h2 class="text-xl font-semibold tracking-[-0.03em] text-[#1a1a1a]">거래 요청 승인</h2>
        <p class="mt-2 text-sm leading-5 text-[#6b7280]">최종 거래 조건을 확인하고 승인해주세요</p>
      </header>

      <div class="mt-8 space-y-4">
        <section class="rounded-[10px] bg-[#f9fafb] p-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#4a5565]">요청자</span>
            <div class="text-right">
              <p class="font-medium text-[#1a1a1a]">{{ request.requesterName }}</p>
              <p class="text-xs text-[#6a7282]">{{ request.requesterCompanyName }}</p>
            </div>
          </div>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-sm text-[#4a5565]">자재</span>
            <p class="font-medium text-[#1a1a1a]">{{ request.materialName }}</p>
          </div>
        </section>

        <div class="flex justify-center">
          <span :class="['inline-flex h-9 items-center gap-2 rounded-[10px] px-4 text-sm font-medium', badgeClass]">
            {{ approvalLabel }}
          </span>
        </div>

        <section>
          <p class="text-sm font-medium text-[#1a1a1a]">요청 수량</p>
          <div class="mt-2 flex h-[42px] items-center rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-base font-medium text-[#1a1a1a]">
            {{ request.requestedQuantity }}개
          </div>
        </section>

        <section v-if="isRental">
          <p class="text-sm font-medium text-[#1a1a1a]">요청 대여 기간</p>
          <div class="mt-2 flex h-9 items-center rounded-[8px] bg-white px-3 text-sm text-[#364153]">
            {{ formatDate(request.rentalStart) }} ~ {{ formatDate(request.rentalEnd) }}
          </div>
        </section>

        <section>
          <p class="text-sm font-medium text-[#1a1a1a]">최종 금액 <span class="text-[#db1a1a]">*</span></p>
          <div class="mt-2 flex h-9 items-center rounded-[8px] bg-white px-3">
            <input v-model.number="finalPrice" type="number" min="0" class="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#1a1a1a] outline-none" />
            <span class="text-base text-[#6a7282]">원</span>
          </div>
          <p class="mt-2 text-xs text-[#6a7282]">
            기본값: 단가 {{ formatPrice(request.materialPrice) }} × {{ request.requestedQuantity }}개
          </p>
        </section>

        <section class="rounded-[10px] border border-[#8cc7c4]/30 bg-[#8cc7c4]/10 p-4">
          <p class="text-sm font-medium text-[#2c687b]">승인 요약</p>
          <div class="mt-3 space-y-1 text-sm text-[#364153]">
            <div class="flex justify-between"><span>거래 유형:</span><strong>{{ tradeTypeLabel }}</strong></div>
            <div class="flex justify-between"><span>수량:</span><strong>{{ request.requestedQuantity }}개</strong></div>
            <div v-if="isRental" class="flex justify-between"><span>대여 기간:</span><strong>{{ formatDate(request.rentalStart) }} ~ {{ formatDate(request.rentalEnd) }}</strong></div>
            <div class="mt-2 flex justify-between border-t border-[#8cc7c4]/30 pt-2">
              <strong>최종 금액:</strong>
              <strong class="text-[#db1a1a]">{{ formatPrice(finalPrice) }}</strong>
            </div>
          </div>
        </section>

        <p v-if="submitError" class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
          {{ submitError }}
        </p>

        <footer class="grid gap-3 pt-2 sm:grid-cols-2">
          <button type="button" :disabled="submitting" class="h-9 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] transition hover:bg-white disabled:opacity-60" @click="emit('close')">
            취소
          </button>
          <button type="button" :disabled="submitting" class="h-9 rounded-[8px] bg-[linear-gradient(90deg,#8cc7c4_0%,#2c687b_100%)] text-sm font-medium text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60" @click="approve">
            {{ submitting ? "승인 중..." : "승인하기" }}
          </button>
        </footer>
      </div>
    </section>
  </div>
</template>
