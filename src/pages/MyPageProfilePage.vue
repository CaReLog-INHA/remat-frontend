<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { homeAssets } from "@/data/home";
import { myPageContacts, myPageNavItems } from "@/data/mypage";
</script>

<template>
  <DefaultLayout :nav-items="myPageNavItems">
      <MyPageHero :mascot-src="homeAssets.mascot" />

      <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <MyPageSummaryCards />

        <div class="mt-6">
          <MyPageTabs current-page="my-page-profile" />
        </div>

        <div class="mt-6 grid gap-4 xl:grid-cols-2">
          <article class="rounded-[14px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]">
            <h2 class="text-[28px] font-bold tracking-[-0.03em] text-[#101828]">연락처 정보</h2>
            <div class="mt-8 space-y-5">
              <div v-for="item in myPageContacts" :key="item.label" class="flex items-center gap-4">
                <div class="grid size-11 shrink-0 place-items-center rounded-[10px] bg-[#f3f4f6]">
                  <img :src="item.iconSrc" alt="" class="size-5 object-contain" />
                </div>
                <div>
                  <p class="text-sm text-[#6a7282]">{{ item.label }}</p>
                  <p class="mt-1 text-lg font-medium text-[#101828]">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </article>

          <article class="rounded-[14px] border border-[#b9f8cf] bg-[linear-gradient(146deg,#f0fdf4_0%,#eff6ff_100%)] p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-2">
                <img src="/figma-icons/esg-leaf.svg" alt="" class="size-5 object-contain" />
                <h2 class="text-[28px] font-bold tracking-[-0.03em] text-[#101828]">나의 ESG 기여</h2>
              </div>
              <button type="button" class="inline-flex h-10 items-center rounded-[8px] bg-[#2c687b] px-4 text-sm font-medium text-white transition hover:bg-[#25596a]">
                ESG 리포트 보기
              </button>
            </div>

            <div class="mt-5 rounded-[12px] bg-white p-5">
              <p class="text-sm text-[#4a5565]">총 탄소 절감량</p>
              <p class="mt-3 text-[48px] font-bold leading-none tracking-[-0.05em] text-[#00a63e]">220kg CO2</p>
              <p class="mt-2 text-sm text-[#6a7282]">나무 33그루를 심은 것과 같은 효과</p>
              <div class="mt-4 h-2 rounded-full bg-[#e5e7eb]">
                <div class="h-2 w-[38%] rounded-full bg-[#00c950]" />
              </div>
              <div class="mt-3 flex justify-end text-xs text-[#6a7282]">
                목표: 1톤(1,000kg)
              </div>
            </div>

            <div class="mt-4 rounded-[12px] bg-white p-5">
              <p class="text-sm text-[#4a5565]">자원 순환율</p>
              <p class="mt-3 text-[42px] font-bold leading-none tracking-[-0.04em] text-[#9333ea]">100%</p>
              <p class="mt-2 text-sm text-[#6a7282]">폐기물 없는 프로젝트 운영 중</p>
            </div>
          </article>
        </div>
      </section>
  </DefaultLayout>
</template>
