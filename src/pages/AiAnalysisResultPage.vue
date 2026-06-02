<script setup lang="ts">
import { useRouter } from "vue-router";
import materialChair from "@/assets/material-chair.png";
import materialFrame from "@/assets/material-frame.png";
import materialPallets from "@/assets/material-pallets.png";
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import { footerLinks, homeAssets, navItems } from "@/data/home";

const router = useRouter();
const go = (name: string) => router.push({ name });

const stats = [
  { label: "매칭된 자재", value: "3개", note: "ReMat의 자재 목록과 조건이 맞는 자재", color: "text-[#7c3aed]", iconColor: "text-[#8b5cf6]", iconPath: "M8 12h8M12 8v8" },
  { label: "탄소 절감", value: "450kg", note: "예상되는 총 탄소 절감 비용", color: "text-[#16a34a]", iconColor: "text-[#22c55e]", iconPath: "M20 4c-4 1-7 3.5-9 7.5c-1.2 2.3-1.8 4.8-2 8.5c3.6-.5 6-1.5 8-3.2C20.4 14.1 21.5 9.8 20 4ZM4 13c2.5.2 4.3 1 5.6 2.3" },
];

const matchedMaterials = [
  {
    id: "pallet-sale",
    image: materialPallets,
    badge: "매칭 점수 92",
    category: "행사리깅",
    title: "전시 부스용 원목 팔레트",
    desc: "전시 기획서에 언급된 원목 구조물과 유사합니다. 높이 2.4m, 폭 1.2m 규격으로 공간 디스플레이, 진열대 구성에 자연스럽게 어울립니다.",
    priceLabel: "450,000원",
    stockLabel: "16개 남음",
    carbon: "85kg",
    tradeType: "sale",
    location: "서울 서초구",
  },
  {
    id: "chair-rental",
    image: materialChair,
    badge: "매칭 점수 89",
    category: "가구",
    title: "행사용 접이식 의자",
    desc: "컨퍼런스홀 내 좌석 배치와 매우 유사합니다. 가벼운 플라스틱 소재로 이동과 보관이 편리하고, 행사 운영 동선에도 좋습니다.",
    priceLabel: "25,000원",
    stockLabel: "45개 남음",
    carbon: "45kg",
    tradeType: "rental",
    location: "서울 마포구",
  },
  {
    id: "frame-rental",
    image: materialFrame,
    badge: "매칭 점수 91",
    category: "파티션",
    title: "전시 부스 파티션",
    desc: "전시 동선 구성에 적합한 파티션입니다. 높이 2.5m, 폭 1m의 모듈형 구조로 배너 월, 안내 벽면, 구획 분리에 안정적입니다.",
    priceLabel: "180,000원",
    stockLabel: "8개 남음",
    carbon: "95kg",
    tradeType: "rental",
    location: "인천 연수구",
  },
];

const extraMaterials = [
  { title: "LED 홍보 패널", desc: "전시 부스 조명용" },
  { title: "안내 데스크", desc: "방문객 안내 및 부스용" },
  { title: "카펫/바닥재", desc: "전시장 바닥 연출용" },
  { title: "현수막/배너", desc: "홍보 문구 및 안내" },
];

const openMaterial = (material: (typeof matchedMaterials)[number]) => {
  router.push({
    name: material.tradeType === "sale" ? "material-detail" : "material-rental-detail",
    params: { id: material.id },
  });
};
</script>

<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,#fff7f7_0%,#effbfb_100%)] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="navItems.map((item) => ({ ...item, active: item.page === 'ai-analysis' }))"
      account-variant="member"
    />

    <main class="pt-16">
      <section class="bg-[linear-gradient(90deg,#2f6f82_0%,#7cb6be_100%)] text-white">
        <div class="mx-auto flex max-w-7xl items-start justify-between gap-8 px-4 py-10 sm:px-6 lg:px-8">
          <div>
            <div class="flex items-center gap-3">
              <div class="grid size-10 place-items-center rounded-xl bg-white/14 ring-1 ring-white/18">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5v14" stroke-linecap="round" />
                </svg>
              </div>
              <h1 class="text-[32px] font-bold tracking-[-0.03em]">AI 분석 결과</h1>
            </div>
            <p class="mt-3 text-sm text-white/85 sm:text-base">기획서 분석이 완료되었습니다. 필요한 자재와 추천 목록을 확인하세요.</p>
          </div>
          <img :src="homeAssets.mascot" alt="" class="hidden w-20 opacity-70 md:block" />
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div class="rounded-[20px] border border-[#d8eceb] bg-[linear-gradient(135deg,#f0fffb_0%,#eef8ff_100%)] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#111827]">
            <svg class="size-5 text-[#16a34a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12c3-6 13-9 16-8c-1 4-4 13-12 16c-2-4-3-6-4-8Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            예상 ESG 효과
          </h2>

          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <article v-for="stat in stats" :key="stat.label" class="rounded-2xl bg-white px-5 py-5">
              <div class="flex items-center gap-3">
                <div class="grid size-10 place-items-center rounded-full bg-[#f8fafc]">
                  <svg :class="['size-5', stat.iconColor]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path :d="stat.iconPath" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-[#64748b]">{{ stat.label }}</p>
                  <p :class="['mt-1 text-3xl font-bold', stat.color]">{{ stat.value }}</p>
                </div>
              </div>
              <p class="mt-3 text-xs text-[#94a3b8]">{{ stat.note }}</p>
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
                매칭된 자재 (3)
              </h2>
              <p class="mt-1 text-sm text-[#64748b]">ReMat의 등록된 자재 중 조건에 맞는 자재입니다</p>
            </div>
          </div>

          <div class="mt-6 grid gap-8 xl:grid-cols-3">
            <article
              v-for="material in matchedMaterials"
              :key="material.id"
              class="overflow-hidden rounded-[20px] border border-[#d7e4ea] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
            >
              <div class="relative">
                <img :src="material.image" :alt="material.title" class="h-[258px] w-full object-cover" />
                <span class="absolute right-3 top-3 rounded-full bg-[#2c687b]/90 px-3 py-1 text-[11px] font-semibold text-white">{{ material.badge }}</span>
              </div>
              <div class="p-4">
                <span class="inline-flex rounded-md bg-[#edf7fb] px-2.5 py-1 text-xs font-semibold text-[#2c687b]">{{ material.category }}</span>
                <h3 class="mt-3 text-lg font-bold text-[#111827]">{{ material.title }}</h3>
                <p class="mt-2 line-clamp-3 text-sm leading-6 text-[#64748b]">{{ material.desc }}</p>
                <div class="mt-4 flex items-end justify-between border-t border-[#edf2f7] pt-4">
                  <div>
                    <p class="text-2xl font-bold text-[#ef4444]">{{ material.priceLabel }}</p>
                    <p class="mt-1 text-xs text-[#94a3b8]">{{ material.stockLabel }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-[#94a3b8]">탄소 절감</p>
                    <p class="text-sm font-bold text-[#16a34a]">{{ material.carbon }}</p>
                  </div>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-2">
                  <button type="button" class="h-10 rounded-lg border border-[#d8e0eb] bg-white text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4]" @click="openMaterial(material)">
                    상세보기
                  </button>
                  <button type="button" class="h-10 rounded-lg bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="openMaterial(material)">
                    {{ material.tradeType === "sale" ? "구매요청" : "대여요청" }}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="mt-10">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#111827]">
            <svg class="size-5 text-[#ef4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            추가 필요 자재 (4)
          </h2>
          <p class="mt-1 text-sm text-[#64748b]">현재 시스템에 등록되지 않은 자재들입니다.</p>

          <div class="mt-6 space-y-4">
            <article v-for="item in extraMaterials" :key="item.title" class="rounded-2xl border border-[#e6edf4] bg-white px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
              <div class="flex items-start gap-3">
                <div class="mt-0.5 grid size-7 place-items-center rounded-full bg-[#fff1f2] text-[#ef4444]">
                  <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-[#111827]">{{ item.title }}</h3>
                  <p class="mt-1 text-sm text-[#64748b]">{{ item.desc }}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div class="mt-10 grid gap-3 md:grid-cols-2">
          <button type="button" class="h-11 rounded-lg border border-[#d7e0ea] bg-white text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4]" @click="go('ai-analysis')">
            데이터에 더 찾아보기
          </button>
          <button type="button" class="h-11 rounded-lg bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="go('marketplace')">
            새로운 분석 시작
          </button>
        </div>
      </section>
    </main>

    <SiteFooter
      :logo-icon-src="homeAssets.logoIcon"
      :mascot-src="homeAssets.mascot"
      :service-links="footerLinks.service"
      :support-links="footerLinks.support"
    />
  </div>
</template>
