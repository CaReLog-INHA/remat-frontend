<script setup lang="ts">
import { ref } from "vue";
import TradeApprovalModal from "@/components/trade-status/TradeApprovalModal.vue";
import { sentTradeRequests, tradeRequests } from "@/data/tradeStatus";

const requestMode = ref<"received" | "sent">("received");
const selectedRequest = ref<(typeof tradeRequests)[number] | null>(null);

const approvalType = (request: (typeof tradeRequests)[number]) => (request.type.includes("대여") ? "rental" : "sale");
</script>

<template>
  <div class="mt-6">
    <div class="inline-flex rounded-[10px] bg-[#f3f4f6] p-1">
      <button
        type="button"
        :class="[
          'flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition',
          requestMode === 'received' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]',
        ]"
        @click="requestMode = 'received'"
      >
        받은 요청
        <span :class="['rounded-full px-2 py-0.5 text-xs', requestMode === 'received' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">2</span>
      </button>
      <button
        type="button"
        :class="[
          'flex h-10 items-center gap-2 rounded-[8px] px-4 text-base font-medium transition',
          requestMode === 'sent' ? 'bg-white text-[#2c687b] shadow-sm' : 'text-[#4a5565]',
        ]"
        @click="requestMode = 'sent'"
      >
        보낸 요청
        <span :class="['rounded-full px-2 py-0.5 text-xs', requestMode === 'sent' ? 'bg-[#8cc7c4] text-white' : 'bg-[#e5e7eb] text-[#4a5565]']">1</span>
      </button>
    </div>

    <div class="mt-6">
      <template v-if="requestMode === 'received'">
        <h2 class="text-xl font-bold">받은 거래 요청 (2)</h2>
        <p class="mt-1 text-sm text-[#4a5565]">구매 및 대여 요청을 확인하고 응답하세요</p>
      </template>
      <template v-else>
        <h2 class="text-xl font-bold">보낸 거래 요청 (1)</h2>
        <p class="mt-1 text-sm text-[#4a5565]">내가 요청한 거래 현황을 확인하세요</p>
      </template>
    </div>

    <div v-if="requestMode === 'received'" class="mt-6 grid gap-4">
      <article v-for="request in tradeRequests" :key="`${request.requester}-${request.material.id}`" class="rounded-[14px] border-2 border-[#8cc7c4] bg-white p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ request.initial }}</div>
            <div>
              <p class="font-bold">{{ request.requester }} <span class="text-sm font-medium text-[#f59e0b]">★ {{ request.rating }}</span></p>
              <p class="text-sm text-[#4a5565]">{{ request.company }}</p>
            </div>
          </div>
          <span :class="['w-fit rounded-full px-3 py-1 text-xs font-semibold', request.typeTone]">{{ request.type }}</span>
        </div>

        <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
          <img :src="request.material.image" alt="" class="h-24 w-full rounded-[8px] object-cover sm:w-24" />
          <div class="min-w-0 flex-1">
            <h3 class="font-bold">{{ request.material.title }}</h3>
            <p class="mt-1 text-sm text-[#4a5565]">{{ request.summary }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-[#db1a1a]">{{ request.amount }}</p>
            <p class="text-xs text-[#6a7282]">{{ request.amountLabel }}</p>
          </div>
        </div>

        <div class="mt-4 rounded-[8px] bg-[#eff6ff] p-4">
          <p class="text-xs text-[#6a7282]">요청 메시지</p>
          <p class="mt-1 text-sm text-[#364153]">{{ request.message }}</p>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-[#6a7282]">{{ request.date }}</p>
          <div class="flex gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-[8px] border border-[#e5e7eb] bg-[#fff6f6] px-4 text-sm font-medium text-[#364153]">거절</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-[8px] bg-[#2c687b] px-4 text-sm font-medium text-white" @click="selectedRequest = request">승인하기</button>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="mt-6 grid gap-4">
      <article v-for="request in sentTradeRequests" :key="`${request.seller}-${request.material.id}`" class="rounded-[14px] border-2 border-[#ffd6a8] bg-white p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_100%)] text-lg font-bold text-white">{{ request.initial }}</div>
            <div>
              <p class="font-bold">{{ request.seller }}</p>
              <p class="text-sm text-[#4a5565]">{{ request.company }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-semibold text-[#155dfc]">{{ request.type }}</span>
            <span class="rounded-full bg-[#ffedd5] px-3 py-1 text-xs font-semibold text-[#ea580c]">{{ request.status }}</span>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#f9fafb] p-4 sm:flex-row sm:items-center">
          <img :src="request.material.image" alt="" class="h-24 w-full rounded-[8px] object-cover sm:w-24" />
          <div class="min-w-0 flex-1">
            <h3 class="font-bold">{{ request.material.title }}</h3>
            <p class="mt-1 text-sm text-[#4a5565]">{{ request.summary }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-[#db1a1a]">{{ request.amount }}</p>
            <p class="text-xs text-[#6a7282]">{{ request.amountLabel }}</p>
          </div>
        </div>

        <div class="mt-4 rounded-[8px] bg-[#eff6ff] p-4">
          <p class="text-xs text-[#6a7282]">내 요청 메시지</p>
          <p class="mt-1 text-sm text-[#364153]">{{ request.message }}</p>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-[#6a7282]">{{ request.date }}</p>
          <p class="text-sm font-semibold text-[#ea580c]">판매자 응답 대기 중</p>
        </div>
      </article>
    </div>

    <TradeApprovalModal
      v-if="selectedRequest"
      :request="selectedRequest"
      :approval-type="approvalType(selectedRequest)"
      @close="selectedRequest = null"
    />
  </div>
</template>
