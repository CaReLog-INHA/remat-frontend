<script setup>
import { ref, computed } from 'vue';

const quantity = ref(1);
const startDate = ref('');
const endDate = ref('');
const message = ref('');

const pricePerDay = ref(25000);
const maxQuantity = 150;

const handleQuantityChange = (change) => {
  const newQuantity = quantity.value + change;
  if (newQuantity >= 1 && newQuantity <= maxQuantity) {
    quantity.value = newQuantity;
  }
};

const rentalDays = computed(() => {
  if (!startDate.value || !endDate.value) return 0;
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
});

const estimatedCost = computed(() => {
  return pricePerDay.value * rentalDays.value * quantity.value;
});

const carbonReduction = computed(() => {
  return (45 * quantity.value * rentalDays.value / 30).toFixed(1);
});

const handleSubmit = () => {
  if (!startDate.value || !endDate.value || !message.value) {
    alert('필수 입력 항목을 작성해주세요');
    return;
  }
  
  const rentalData = {
    quantity: quantity.value,
    startDate: startDate.value,
    endDate: endDate.value,
    message: message.value,
    estimatedCost: estimatedCost.value,
  };
  
  console.log('Rental request data:', rentalData);
  alert('대여 요청이 접수되었습니다!');
};
</script>

<template>
  <section class="rounded-[14px] bg-white p-6 shadow-sm">
    <div class="mb-6 flex items-center gap-2">
      <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <h2 class="text-xl font-bold text-[#101828]">거래 요청</h2>
    </div>

    <div class="space-y-6">
      <!-- Quantity Selection -->
      <div class="space-y-2">
        <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#364153]">수량 선택</label>
        <div class="flex gap-3 items-center">
          <button
            type="button"
            :class="[
              'h-8 w-8 rounded-[8px] border border-black/10 text-sm font-medium transition',
              quantity <= 1 ? 'bg-[#fff6f6] text-[#1a1a1a] opacity-50 cursor-not-allowed' : 'bg-[#fff6f6] text-[#1a1a1a] hover:bg-[#f5f5f5]',
            ]"
            @click="handleQuantityChange(-1)"
            :disabled="quantity <= 1"
          >
            −
          </button>
          <input
            v-model.number="quantity"
            type="number"
            :min="1"
            :max="maxQuantity"
            class="w-20 h-10 rounded-[10px] border border-[#d1d5dc] bg-white px-3 text-center text-sm outline-none focus:ring-1 focus:ring-[#8cc7c4]"
          />
          <button
            type="button"
            class="h-8 w-8 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] transition hover:bg-[#f5f5f5]"
            @click="handleQuantityChange(1)"
          >
            +
          </button>
          <span class="text-xs text-[#6a7282]">최대 {{ maxQuantity }}개 대여 가능</span>
        </div>
      </div>

      <!-- Rental Period -->
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm font-medium text-[#364153]">
          <span>대여 기간 *</span>
          <span class="text-[#db1a1a]">*</span>
        </label>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-1">
            <label class="text-xs font-medium text-[#4a5565]">시작일</label>
            <input
              v-model="startDate"
              type="date"
              class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]"
            />
          </div>
          <div class="space-y-1">
            <label class="text-xs font-medium text-[#4a5565]">종료일</label>
            <input
              v-model="endDate"
              type="date"
              class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]"
            />
          </div>
        </div>
      </div>

      <!-- Price Summary -->
      <div v-if="rentalDays > 0" class="rounded-[10px] bg-[#f9fafb] p-4 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#4a5565]">예상 금액</span>
          <span class="text-2xl font-bold text-[#db1a1a]">{{ estimatedCost.toLocaleString() }}원</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#4a5565]">예상 탄소 절감</span>
          <span class="text-sm font-medium text-[#00a63e]">{{ carbonReduction }}kg CO₂</span>
        </div>
      </div>

      <!-- Request Message -->
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm font-medium text-[#364153]">
          <span>요청 메시지 *</span>
          <span class="text-[#db1a1a]">*</span>
        </label>
        <textarea
          v-model="message"
          placeholder="판매자에게 전달할 메시지를 입력해주세요&#10;(예: 대여 조건, 배송 가능 여부, 추가 문의 사항 등)"
          class="min-h-[112px] w-full resize-none rounded-[8px] bg-white px-3 py-2 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]"
        />
        <p class="text-xs text-[#6a7282]">구체적인 요청 사항을 작성하면 빠른 답변을 받을 수 있습니다</p>
      </div>

      <!-- Submit Button -->
      <button
        type="button"
        class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#db1a1a] to-[rgba(219,26,26,0.8)] text-sm font-medium text-white transition hover:shadow-lg"
        @click="handleSubmit"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        대여 요청하기
      </button>

      <!-- Safety Info -->
      <div class="rounded-[14px] border border-[rgba(140,199,196,0.3)] bg-[rgba(140,199,196,0.1)] p-4 space-y-2">
        <h3 class="text-sm font-bold text-[#2c687b]">안전 거래 안내</h3>
        <ul class="space-y-2 text-xs text-[#4a5565]">
          <li class="flex gap-2">
            <span class="text-[#8cc7c4]">✓</span>
            <span>안전하고 투명한 거래 보장</span>
          </li>
          <li class="flex gap-2">
            <span class="text-[#8cc7c4]">✓</span>
            <span>에스크로 결제 시스템 제공</span>
          </li>
          <li class="flex gap-2">
            <span class="text-[#8cc7c4]">✓</span>
            <span>자재 상태 보증 및 분쟁 해결</span>
          </li>
        </ul>
        <p class="mt-2 text-xs text-[#6a7282]">판매자 확인 후 상세 거래를 진행하실 수 있습니다</p>
      </div>
    </div>
  </section>
</template>
