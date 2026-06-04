<script setup lang="ts">
import { ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TradeHistoryPanel from "@/components/trade-status/TradeHistoryPanel.vue";
import TradeMaterialsPanel from "@/components/trade-status/TradeMaterialsPanel.vue";
import TradeRequestsPanel from "@/components/trade-status/TradeRequestsPanel.vue";

type TradeTab = "materials" | "requests" | "history";

const activeTab = ref<TradeTab>("materials");

const tabs: ReadonlyArray<{ key: TradeTab; label: string; icon: "box" | "trend" | "coin" }> = [
  { key: "materials", label: "내 자재", icon: "box" },
  { key: "requests", label: "거래 요청", icon: "trend" },
  { key: "history", label: "거래 내역", icon: "coin" },
];
</script>

<template>
  <DefaultLayout active-page="trade-status">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.9)_100%)] py-12 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold">거래현황</h1>
          <p class="mt-3 text-lg text-white/80">내 자재와 거래 현황을 한눈에 확인하세요</p>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid gap-6 lg:grid-cols-3">
          <article class="rounded-[14px] border-l-4 border-[#db1a1a] bg-white p-6 shadow-sm">
            <div class="grid size-12 place-items-center rounded-[10px] bg-[#db1a1a]/10">
              <img src="/figma-icons/registered-materials.svg" alt="" class="size-6 object-contain" />
            </div>
            <p class="mt-3 text-3xl font-bold">3</p>
            <p class="mt-1 text-sm text-[#4a5565]">등록한 자재</p>
          </article>
          <article class="rounded-[14px] border-l-4 border-[#00c950] bg-white p-6 shadow-sm">
            <div class="grid size-12 place-items-center rounded-[10px] bg-[#f0fdf4]">
              <img src="/figma-icons/stat-carbon.svg" alt="" class="size-6 object-contain" />
            </div>
            <p class="mt-3 text-3xl font-bold">220kg</p>
            <p class="mt-1 text-sm text-[#4a5565]">탄소 절감</p>
          </article>
          <article class="rounded-[14px] border-l-4 border-[#2b7fff] bg-white p-6 shadow-sm">
            <div class="grid size-12 place-items-center rounded-[10px] bg-[#eff6ff] text-[#155dfc]">
              <span class="text-lg font-bold">$</span>
            </div>
            <p class="mt-3 text-3xl font-bold">134만</p>
            <p class="mt-1 text-sm text-[#4a5565]">예상 수익</p>
          </article>
        </div>

        <section class="mt-8 rounded-[14px] bg-white p-6 shadow-sm">
          <div class="grid gap-3 lg:grid-cols-3">
            <button
              v-for="tab in tabs"
              :key="tab.label"
              type="button"
              :class="[
                'flex h-14 items-center justify-center gap-2 rounded-t-[16px] rounded-br-[16px] border-2 text-sm font-semibold shadow-sm transition',
                activeTab === tab.key
                  ? 'border-[#2c687b] bg-[linear-gradient(172deg,#8cc7c4_0%,#2c687b_100%)] text-white shadow-md'
                  : 'border-[#e5e7eb] bg-[linear-gradient(172deg,#f9fafb_0%,#f3f4f6_100%)] text-[#364153]',
              ]"
              @click="activeTab = tab.key"
            >
              <svg v-if="tab.icon === 'box'" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m21 8-9-5-9 5 9 5 9-5ZM3 8v8l9 5 9-5V8M12 13v8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="tab.icon === 'trend'" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 17h4l4-8 4 6 3-5h3M18 10h3v3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H15a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round" />
              </svg>
              {{ tab.label }}
            </button>
          </div>

          <TradeMaterialsPanel v-if="activeTab === 'materials'" />
          <TradeRequestsPanel v-else-if="activeTab === 'requests'" />
          <TradeHistoryPanel v-else />
        </section>

        <section class="mt-6 rounded-[14px] border border-[#b9f8cf] bg-[linear-gradient(90deg,#ecfdf3_0%,#e6fbff_100%)] p-6">
          <h2 class="flex items-center gap-2 text-base font-bold">
            <img src="/figma-icons/stat-carbon.svg" alt="" class="size-5 object-contain" />
            내 ESG 기여도
          </h2>
          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <div class="rounded-[8px] bg-white p-4">
              <p class="text-sm text-[#4a5565]">총 탄소 절감량</p>
              <p class="mt-1 text-3xl font-bold text-[#00a63e]">220kg</p>
              <p class="mt-1 text-xs text-[#6a7282]">나무 33그루 식재 효과</p>
            </div>
            <div class="rounded-[8px] bg-white p-4">
              <p class="text-sm text-[#4a5565]">자원 재사용률</p>
              <p class="mt-1 text-3xl font-bold text-[#2b7fff]">100%</p>
              <p class="mt-1 text-xs text-[#6a7282]">폐기물 제로 달성</p>
            </div>
          </div>
        </section>
      </section>
  </DefaultLayout>
</template>
