<script setup lang="ts">
import { useRouter } from "vue-router";
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import { footerLinks, homeAssets, navItems } from "@/data/home";
import { materials } from "@/data/materials";

const router = useRouter();

const filters = [
  { label: "카테고리", value: "전체" },
  { label: "상태", value: "전체 상태" },
  { label: "지역", value: "전체 지역" },
  { label: "거래 유형", value: "전체" },
];

const handleMaterialClick = (material: (typeof materials)[number]) => {
  router.push({
    name: material.tradeType === "sale" ? "material-detail" : "material-rental-detail",
    params: { id: material.id },
  });
};
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="navItems.map((item) => ({ ...item, active: item.page === 'marketplace' }))"
    />

    <main class="pt-16">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.92)_100%)] py-12 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold">자재 마켓</h1>
          <p class="mt-3 text-lg text-white/80">검증된 재사용 자재를 검색하고 판매 또는 대여 형태로 거래할 수 있습니다.</p>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <label class="relative block">
            <svg class="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15Z" stroke-linecap="round" />
            </svg>
            <input type="search" placeholder="자재명 또는 키워드로 검색해보세요" class="h-12 w-full rounded-xl bg-[#f9fafb] pl-10 pr-3 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
          </label>

          <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="filter in filters" :key="filter.label" class="space-y-2">
              <label class="block text-sm font-medium text-[#364153]">{{ filter.label }}</label>
              <button type="button" class="flex h-11 w-full items-center justify-between rounded-xl bg-[#f9fafb] px-3 text-sm font-medium text-[#1a1a1a] transition hover:ring-1 hover:ring-[#d1d5db]">
                {{ filter.value }}
                <svg class="size-4 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#fff6f6] px-4 text-sm font-medium text-[#1a1a1a]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 5h18M7 12h10M10 19h4" stroke-linecap="round" />
            </svg>
            필터 초기화
          </button>
        </div>

        <div class="mt-8 flex items-center justify-between gap-4">
          <p class="text-base text-[#4a5565]">
            총 <strong class="text-[#db1a1a]">{{ materials.length }}</strong>개의 자재
          </p>
          <button type="button" class="inline-flex h-10 items-center gap-2 rounded-xl bg-[#db1a1a] px-4 text-sm font-medium text-white transition hover:bg-[#c01616]" @click="router.push({ name: 'register-material' })">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" stroke-linecap="round" />
            </svg>
            자재 등록하기
          </button>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <button
            v-for="material in materials"
            :key="material.id"
            type="button"
            class="overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            @click="handleMaterialClick(material)"
          >
            <img :src="material.image" alt="" class="h-[258px] w-full object-cover" />
            <div class="p-5">
              <div class="flex flex-wrap gap-2">
                <span class="rounded-[8px] bg-[#8cc7c4]/20 px-2.5 py-1 text-xs font-medium text-[#2c687b]">{{ material.category }}</span>
                <span class="rounded-[8px] bg-[#f0fdf4] px-2.5 py-1 text-xs font-medium text-[#008236]">{{ material.condition }}</span>
                <span :class="['rounded-[8px] px-2.5 py-1 text-xs font-medium', material.tradeType === 'sale' ? 'bg-[#dbeafe] text-[#1447e6]' : 'bg-[#f3e8ff] text-[#8200db]']">
                  {{ material.badgeLabel }}
                </span>
              </div>
              <h2 class="mt-4 text-lg font-bold text-[#101828]">{{ material.title }}</h2>
              <p class="mt-2 line-clamp-2 text-sm leading-6 text-[#4a5565]">{{ material.desc }}</p>
              <p class="mt-3 text-sm text-[#6a7282]">{{ material.location }}</p>
              <div class="mt-4 border-t border-[#f3f4f6] pt-4">
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-2xl font-bold text-[#db1a1a]">{{ material.priceLabel }}</p>
                    <p class="mt-1 text-xs text-[#6a7282]">{{ material.stockLabel }}</p>
                  </div>
                  <div class="text-right text-xs text-[#6a7282]">
                    <p>탄소 절감</p>
                    <p class="font-bold text-[#008236]">{{ material.carbon }}</p>
                  </div>
                </div>
              </div>
            </div>
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
