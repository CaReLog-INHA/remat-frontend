<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useAiAnalysisStore } from "@/stores/aiAnalysis";
import { transactionLabel } from "@/data/materialOptions";
import type { MatchedMaterial } from "@/api/ai";

const router = useRouter();
const aiStore = useAiAnalysisStore();
const go = (name: string) => router.push({ name });

// 분석 결과 없이 직접 들어오면 업로드 화면으로 되돌림
onMounted(() => {
  if (!aiStore.result) {
    router.replace({ name: "ai-analysis" });
  }
});

const result = computed(() => aiStore.result);
const matchedMaterials = computed(() => aiStore.result?.matchedMaterials ?? []);
const requiredMaterials = computed(() => aiStore.result?.requiredMaterials ?? []);

const formatPrice = (n: number): string => `${n.toLocaleString("ko-KR")}원`;
const formatCarbon = (n: number): string => `${n.toLocaleString("ko-KR")}kg`;

const openMaterial = (material: MatchedMaterial) => {
  router.push({
    name: material.transactionType === "RENTAL" ? "material-rental-detail" : "material-detail",
    params: { id: String(material.materialId) },
  });
};
</script>

<template>
  <DefaultLayout active-page="ai-analysis">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.9)_100%)] py-12 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold">AI 분석 결과</h1>
          <p class="mt-3 text-lg text-white/80">기획서 분석이 완료되었습니다. 필요한 자재와 추천 목록을 확인하세요.</p>
          <p v-if="aiStore.fileName" class="mt-2 text-sm text-white/70">분석 파일: {{ aiStore.fileName }}</p>
        </div>
      </section>

      <section v-if="result" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div class="rounded-[20px] border border-[#d8eceb] bg-[linear-gradient(135deg,#f0fffb_0%,#eef8ff_100%)] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#111827]">
            <svg class="size-5 text-[#16a34a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12c3-6 13-9 16-8c-1 4-4 13-12 16c-2-4-3-6-4-8Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            예상 ESG 효과
          </h2>

          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <article class="rounded-2xl bg-white px-5 py-5">
              <div class="flex items-center gap-3">
                <div class="grid size-10 place-items-center rounded-full bg-[#f8fafc]">
                  <svg class="size-5 text-[#8b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-[#64748b]">매칭된 자재</p>
                  <p class="mt-1 text-3xl font-bold text-[#7c3aed]">{{ result.matchedCount }}개</p>
                </div>
              </div>
              <p class="mt-3 text-xs text-[#94a3b8]">ReMat의 자재 목록과 조건이 맞는 자재</p>
            </article>

            <article class="rounded-2xl bg-white px-5 py-5">
              <div class="flex items-center gap-3">
                <div class="grid size-10 place-items-center rounded-full bg-[#f8fafc]">
                  <svg class="size-5 text-[#22c55e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 4c-4 1-7 3.5-9 7.5c-1.2 2.3-1.8 4.8-2 8.5c3.6-.5 6-1.5 8-3.2C20.4 14.1 21.5 9.8 20 4ZM4 13c2.5.2 4.3 1 5.6 2.3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-[#64748b]">탄소 절감</p>
                  <p class="mt-1 text-3xl font-bold text-[#16a34a]">{{ formatCarbon(result.totalCarbonReductionKg) }}</p>
                </div>
              </div>
              <p class="mt-3 text-xs text-[#94a3b8]">예상되는 총 탄소 절감량</p>
            </article>
          </div>
        </div>

        <section class="mt-10">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 class="flex items-center gap-2 text-xl font-bold text-[#111827]">
                <svg class="size-5 text-[#2c687b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5v14" stroke-linecap="round" />
                </svg>
                매칭된 자재 ({{ matchedMaterials.length }})
              </h2>
              <p class="mt-1 text-sm text-[#64748b]">ReMat의 등록된 자재 중 조건에 맞는 자재입니다</p>
            </div>
          </div>

          <div v-if="matchedMaterials.length === 0" class="mt-6 rounded-2xl border border-[#e6edf4] bg-white px-5 py-10 text-center text-sm text-[#64748b]">
            매칭된 자재가 없습니다.
          </div>

          <div v-else class="mt-6 grid gap-8 xl:grid-cols-3">
            <article
              v-for="material in matchedMaterials"
              :key="material.materialId"
              class="overflow-hidden rounded-[20px] border border-[#d7e4ea] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
            >
              <div class="relative">
                <img :src="material.imageUrl" :alt="material.materialName" class="h-[258px] w-full object-cover" />
                <span class="absolute right-3 top-3 rounded-full bg-[#2c687b]/90 px-3 py-1 text-[11px] font-semibold text-white">
                  {{ transactionLabel(material.transactionType) }}
                </span>
              </div>
              <div class="p-4">
                <span class="inline-flex rounded-md bg-[#edf7fb] px-2.5 py-1 text-xs font-semibold text-[#2c687b]">{{ material.categoryName }}</span>
                <h3 class="mt-3 text-lg font-bold text-[#111827]">{{ material.materialName }}</h3>
                <p class="mt-2 line-clamp-3 text-sm leading-6 text-[#64748b]">{{ material.description }}</p>
                <div class="mt-4 flex items-end justify-between border-t border-[#edf2f7] pt-4">
                  <div>
                    <p class="text-2xl font-bold text-[#ef4444]">{{ formatPrice(material.price) }}</p>
                    <p class="mt-1 text-xs text-[#94a3b8]">{{ material.quantity }}개 남음</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-[#94a3b8]">탄소 절감</p>
                    <p class="text-sm font-bold text-[#16a34a]">{{ formatCarbon(material.carbonReductionKg) }}</p>
                  </div>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-2">
                  <button type="button" class="h-10 rounded-lg border border-[#d8e0eb] bg-white text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4]" @click="openMaterial(material)">
                    상세보기
                  </button>
                  <button type="button" class="h-10 rounded-lg bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="openMaterial(material)">
                    {{ material.transactionType === "SALE" ? "구매요청" : "대여요청" }}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section v-if="requiredMaterials.length > 0" class="mt-10">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#111827]">
            <svg class="size-5 text-[#ef4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            추가 필요 자재 ({{ requiredMaterials.length }})
          </h2>
          <p class="mt-1 text-sm text-[#64748b]">현재 시스템에 등록되지 않은 자재들입니다.</p>

          <div class="mt-6 space-y-4">
            <article v-for="(item, idx) in requiredMaterials" :key="`${item.name}-${idx}`" class="rounded-2xl border border-[#e6edf4] bg-white px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
              <div class="flex items-start gap-3">
                <div class="mt-0.5 grid size-7 place-items-center rounded-full bg-[#fff1f2] text-[#ef4444]">
                  <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-[#111827]">{{ item.name }}</h3>
                  <p class="mt-1 text-sm text-[#64748b]">{{ item.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div class="mt-10 grid gap-3 md:grid-cols-2">
          <button type="button" class="h-11 rounded-lg border border-[#d7e0ea] bg-white text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4]" @click="go('marketplace')">
            마켓에서 더 찾아보기
          </button>
          <button type="button" class="h-11 rounded-lg bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="() => { aiStore.clear(); go('ai-analysis'); }">
            새로운 분석 시작
          </button>
        </div>
      </section>
  </DefaultLayout>
</template>
