<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  request: {
    requester: string;
    company: string;
    type: string;
    material: { title: string };
    amount: string;
    summary: string;
  };
  approvalType: "sale" | "rental";
}>();

const emit = defineEmits<{
  (event: "close"): void;
  (event: "approve"): void;
}>();

const requestedQuantity = computed(() => {
  const match = props.request.summary.match(/\d+/);
  return match ? Number(match[0]) : 1;
});

const numericAmount = computed(() => Number(props.request.amount.replace(/[^0-9]/g, "")));

const quantity = ref(requestedQuantity.value);
const finalAmount = ref(numericAmount.value);
const rentalStartDate = ref("");
const rentalEndDate = ref("");

const isRental = computed(() => props.approvalType === "rental");
const approvalLabel = computed(() => (isRental.value ? "대여 승인" : "판매 승인"));
const badgeClass = computed(() => (isRental.value ? "bg-[#f3e8ff] text-[#8200db]" : "bg-[#dbeafe] text-[#1447e6]"));
const tradeTypeLabel = computed(() => (isRental.value ? "대여" : "판매"));
const finalAmountLabel = computed(() => `${finalAmount.value.toLocaleString()}원`);

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1);
};

const approveTrade = () => {
  emit("approve");
  emit("close");
};
</script>

<template>
  <div class="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/30 px-4 py-8">
    <section class="relative w-full max-w-[510px] rounded-[10px] border border-black/10 bg-[#fff6f6] p-6 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        class="absolute right-4 top-4 grid size-6 place-items-center rounded-[4px] text-[#4a5565] opacity-70 transition hover:bg-black/5 hover:opacity-100"
        aria-label="승인 모달 닫기"
        @click="$emit('close')"
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
              <p class="font-medium text-[#1a1a1a]">{{ request.requester }}</p>
              <p class="text-xs text-[#6a7282]">{{ request.company }}</p>
            </div>
          </div>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-sm text-[#4a5565]">자재</span>
            <p class="font-medium text-[#1a1a1a]">{{ request.material.title }}</p>
          </div>
        </section>

        <div class="flex justify-center">
          <span :class="['inline-flex h-9 items-center gap-2 rounded-[10px] px-4 text-sm font-medium', badgeClass]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path v-if="isRental" d="M8 7V3M16 7V3M4 11h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" stroke-linecap="round" stroke-linejoin="round" />
              <path v-else d="M6 6h15l-2 8H8L6 6ZM6 6 5 3H2M8 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM18 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ approvalLabel }}
          </span>
        </div>

        <section>
          <p class="text-sm font-medium text-[#1a1a1a]">수량 확인</p>
          <div class="mt-2 flex items-center gap-3">
            <button type="button" class="grid size-8 place-items-center rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium" @click="decreaseQuantity">-</button>
            <input v-model.number="quantity" type="number" min="1" class="h-[42px] min-w-0 flex-1 rounded-[10px] border border-[#d1d5dc] bg-transparent px-3 text-base font-medium outline-none focus:border-[#8cc7c4]" />
            <button type="button" class="grid size-8 place-items-center rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium" @click="increaseQuantity">+</button>
          </div>
          <p class="mt-2 text-xs text-[#6a7282]">요청 수량: {{ requestedQuantity }}개</p>
        </section>

        <section v-if="isRental">
          <p class="text-sm font-medium text-[#1a1a1a]">대여 기간 설정 <span class="text-[#db1a1a]">*</span></p>
          <div class="mt-2 grid gap-3 sm:grid-cols-2">
            <label class="block">
              <span class="text-xs font-medium text-[#4a5565]">시작일</span>
              <input v-model="rentalStartDate" type="text" class="mt-1 h-9 w-full rounded-[8px] border border-transparent bg-white px-3 text-sm outline-none focus:border-[#8cc7c4]" />
            </label>
            <label class="block">
              <span class="text-xs font-medium text-[#4a5565]">종료일</span>
              <input v-model="rentalEndDate" type="text" class="mt-1 h-9 w-full rounded-[8px] border border-transparent bg-white px-3 text-sm outline-none focus:border-[#8cc7c4]" />
            </label>
          </div>
          <p class="mt-2 text-xs text-[#6a7282]">대여 일수: 5일</p>
          <p class="mt-1 text-xs text-[#6a7282]">요청 기간: 2026-04-20 ~ 2026-04-25</p>
        </section>

        <section>
          <p class="text-sm font-medium text-[#1a1a1a]">최종 금액 <span class="text-[#db1a1a]">*</span></p>
          <div class="mt-2 flex h-9 items-center rounded-[8px] bg-white px-3">
            <input v-model.number="finalAmount" type="number" class="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#1a1a1a] outline-none" />
            <span class="text-base text-[#6a7282]">원</span>
          </div>
          <p class="mt-2 text-xs text-[#6a7282]">
            <template v-if="isRental">예상 금액: {{ request.amount }} × 5일 = 6,250,000원</template>
            <template v-else>예상 금액: {{ request.amount }}</template>
          </p>
        </section>

        <section class="rounded-[10px] border border-[#8cc7c4]/30 bg-[#8cc7c4]/10 p-4">
          <p class="text-sm font-medium text-[#2c687b]">승인 요약</p>
          <div class="mt-3 space-y-1 text-sm text-[#364153]">
            <div class="flex justify-between"><span>거래 유형:</span><strong>{{ tradeTypeLabel }}</strong></div>
            <div class="flex justify-between"><span>수량:</span><strong>{{ quantity }}개</strong></div>
            <div v-if="isRental" class="flex justify-between"><span>대여 기간:</span><strong>2026-04-20 ~ 2026-04-25</strong></div>
            <div class="mt-2 flex justify-between border-t border-[#8cc7c4]/30 pt-2">
              <strong>최종 금액:</strong>
              <strong class="text-[#db1a1a]">{{ finalAmountLabel }}</strong>
            </div>
          </div>
        </section>

        <footer class="grid gap-3 pt-2 sm:grid-cols-2">
          <button type="button" class="h-9 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] transition hover:bg-white" @click="$emit('close')">
            취소
          </button>
          <button type="button" class="h-9 rounded-[8px] bg-[linear-gradient(90deg,#8cc7c4_0%,#2c687b_100%)] text-sm font-medium text-white transition hover:brightness-95" @click="approveTrade">
            승인하기
          </button>
        </footer>
      </div>
    </section>
  </div>
</template>
