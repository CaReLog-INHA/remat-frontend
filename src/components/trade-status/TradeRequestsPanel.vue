<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TradeApprovalModal from "@/components/trade-status/TradeApprovalModal.vue";
import { tradesApi, type ReceivedRequest, type SentRequest } from "@/api/trades";
import {
  formatPrice,
  formatDate,
  transactionLabel,
  transactionTone,
  requestStatusLabel,
  initialOf,
} from "@/data/tradeStatus";

const requestMode = ref<"received" | "sent">("received");

const received = ref<ReceivedRequest[]>([]);
const sent = ref<SentRequest[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");

const selectedRequest = ref<ReceivedRequest | null>(null);
const isApproving = ref(false);
const approveError = ref("");

const loadRequests = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    [received.value, sent.value] = await Promise.all([
      tradesApi.receivedRequests(),
      tradesApi.sentRequests(),
    ]);
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadRequests);

const receivedCount = computed(() => received.value.length);
const sentCount = computed(() => sent.value.length);

const summaryOf = (r: ReceivedRequest | SentRequest): string => {
  const base = `요청 수량: ${r.requestedQuantity}개`;
  if (r.transactionType === "RENTAL" && r.rentalStart) {
    return `${base} · ${formatDate(r.rentalStart)} ~ ${formatDate(r.rentalEnd)}`;
  }
  return base;
};

const handleApprove = async (finalPrice: number) => {
  if (!selectedRequest.value) return;
  isApproving.value = true;
  approveError.value = "";
  try {
    await tradesApi.approve(selectedRequest.value.tradeRequestId, { finalPrice });
    selectedRequest.value = null;
    await loadRequests();
  } catch (e) {
    approveError.value = (e as Error).message;
    alert((e as Error).message);
  } finally {
    isApproving.value = false;
  }
};
</script>

<template>
  <div class="mt-6">
    <div class="inline-flex rounded-[10px] bg-[#f3f4f6] p-1">
      <button
        type="button"
        :class="['flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition', requestMode === 'received' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]']"
        @click="requestMode = 'received'"
      >
        받은 요청
        <span :class="['rounded-full px-2 py-0.5 text-xs', requestMode === 'received' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">{{ receivedCount }}</span>
      </button>
      <button
        type="button"
        :class="['flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition', requestMode === 'sent' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]']"
        @click="requestMode = 'sent'"
      >
        보낸 요청
        <span :class="['rounded-full px-2 py-0.5 text-xs', requestMode === 'sent' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">{{ sentCount }}</span>
      </button>
    </div>

    <p v-if="isLoading" class="mt-6 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]">
      거래 요청을 불러오는 중입니다…
    </p>
    <p v-else-if="errorMessage" class="mt-6 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
      {{ errorMessage }}
    </p>

    <template v-else>
      <div class="mt-6">
        <template v-if="requestMode === 'received'">
          <h2 class="text-xl font-bold">받은 거래 요청 ({{ receivedCount }})</h2>
          <p class="mt-1 text-sm text-[#4a5565]">구매 및 대여 요청을 확인하고 응답하세요</p>
        </template>
        <template v-else>
          <h2 class="text-xl font-bold">보낸 거래 요청 ({{ sentCount }})</h2>
          <p class="mt-1 text-sm text-[#4a5565]">내가 요청한 거래 현황을 확인하세요</p>
        </template>
      </div>

      <!-- 받은 요청 -->
      <div v-if="requestMode === 'received'" class="mt-6 grid gap-4">
        <p v-if="receivedCount === 0" class="rounded-[10px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]">
          받은 거래 요청이 없습니다.
        </p>
        <article v-for="request in received" :key="request.tradeRequestId" class="rounded-[14px] border-2 border-[#8cc7c4] bg-white p-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex items-center gap-3">
              <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ initialOf(request.requesterName) }}</div>
              <div>
                <p class="font-bold">{{ request.requesterName }} <span class="text-sm font-medium text-[#f59e0b]">★ {{ request.requesterStarRating ?? "—" }}</span></p>
                <p class="text-sm text-[#4a5565]">{{ request.requesterCompanyName }}</p>
              </div>
            </div>
            <span :class="['w-fit rounded-full px-3 py-1 text-xs font-semibold', transactionTone(request.transactionType)]">{{ transactionLabel(request.transactionType) }} 요청</span>
          </div>

          <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
            <div class="h-24 w-full overflow-hidden rounded-[8px] bg-[#f3f4f6] sm:w-24">
              <img v-if="request.imageUrl" :src="request.imageUrl" alt="" class="h-full w-full object-cover" />
              <div v-else class="grid h-full w-full place-items-center text-2xl text-[#cbd5e1]">📦</div>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-bold">{{ request.materialName }}</h3>
              <p class="mt-1 text-sm text-[#4a5565]">{{ summaryOf(request) }}</p>
            </div>
            <div class="text-right">
              <p class="text-xl font-bold text-[#db1a1a]">{{ formatPrice(request.materialPrice) }}</p>
              <p class="text-xs text-[#6a7282]">단가</p>
            </div>
          </div>

          <div v-if="request.requestMessage" class="mt-4 rounded-[8px] bg-[#eff6ff] p-4">
            <p class="text-xs text-[#6a7282]">요청 메시지</p>
            <p class="mt-1 text-sm text-[#364153]">{{ request.requestMessage }}</p>
          </div>

          <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-[#6a7282]">{{ formatDate(request.createdAt) }}</p>
            <div class="flex gap-2">
              <button type="button" class="inline-flex h-9 items-center justify-center rounded-[8px] bg-[#2c687b] px-4 text-sm font-medium text-white transition hover:bg-[#25596a]" @click="selectedRequest = request">승인하기</button>
            </div>
          </div>
        </article>
      </div>

      <!-- 보낸 요청 -->
      <div v-else class="mt-6 grid gap-4">
        <p v-if="sentCount === 0" class="rounded-[10px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]">
          보낸 거래 요청이 없습니다.
        </p>
        <article v-for="request in sent" :key="request.tradeRequestId" class="rounded-[14px] border-2 border-[#ffd6a8] bg-white p-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex items-center gap-3">
              <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ initialOf(request.sellerName) }}</div>
              <div>
                <p class="font-bold">{{ request.sellerName }}</p>
                <p class="text-sm text-[#4a5565]">{{ request.sellerCompanyName }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span :class="['rounded-full px-3 py-1 text-xs font-semibold', transactionTone(request.transactionType)]">{{ transactionLabel(request.transactionType) }} 요청</span>
              <span class="rounded-full bg-[#ffedd5] px-3 py-1 text-xs font-semibold text-[#ea580c]">{{ requestStatusLabel(request.requestStatus) }}</span>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
            <div class="h-24 w-full overflow-hidden rounded-[8px] bg-[#f3f4f6] sm:w-24">
              <img v-if="request.imageUrl" :src="request.imageUrl" alt="" class="h-full w-full object-cover" />
              <div v-else class="grid h-full w-full place-items-center text-2xl text-[#cbd5e1]">📦</div>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-bold">{{ request.materialName }}</h3>
              <p class="mt-1 text-sm text-[#4a5565]">{{ summaryOf(request) }}</p>
            </div>
            <div class="text-right">
              <p class="text-xl font-bold text-[#db1a1a]">{{ formatPrice(request.materialPrice) }}</p>
              <p class="text-xs text-[#6a7282]">단가</p>
            </div>
          </div>

          <div v-if="request.requestMessage" class="mt-4 rounded-[8px] bg-[#eff6ff] p-4">
            <p class="text-xs text-[#6a7282]">내 요청 메시지</p>
            <p class="mt-1 text-sm text-[#364153]">{{ request.requestMessage }}</p>
          </div>

          <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-[#6a7282]">{{ formatDate(request.createdAt) }}</p>
            <p class="text-sm font-semibold text-[#ea580c]">{{ requestStatusLabel(request.requestStatus) }}</p>
          </div>
        </article>
      </div>
    </template>

    <TradeApprovalModal
      v-if="selectedRequest"
      :request="selectedRequest"
      :submitting="isApproving"
      @close="selectedRequest = null"
      @approve="handleApprove"
    />
  </div>
</template>
