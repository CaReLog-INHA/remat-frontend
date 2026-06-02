<script setup lang="ts">
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { footerLinks, homeAssets } from "@/data/home";
import { myPageNavItems, myPageActivities } from "@/data/mypage";
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="myPageNavItems"
      account-variant="member"
    />

    <main class="pt-16 min-h-[calc(100vh-64px)]">
      <MyPageHero :mascot-src="homeAssets.mascot" />

      <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <MyPageSummaryCards />

        <div class="mt-6">
          <MyPageTabs current-page="my-page-activity" />
        </div>

        <div class="mt-6 space-y-6">
          <section class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-sm font-medium text-[#6b7280]">최근 활동</p>
                <h1 class="mt-2 text-[30px] font-bold tracking-[-0.03em] text-[#101828]">활동 내역</h1>
                <p class="mt-2 max-w-2xl text-sm leading-6 text-[#4a5565]">거래, 프로필 수정, 배지 획득 등 최근 활동을 시간순으로 정리했습니다.</p>
              </div>
              <button type="button" class="inline-flex h-11 items-center justify-center rounded-xl bg-[#2c687b] px-5 text-sm font-semibold text-white transition hover:bg-[#25596a]">
                전체 활동 내역 보기
              </button>
            </div>

            <div class="mt-6 space-y-4">
              <article
                v-for="activity in myPageActivities"
                :key="activity.time + activity.title"
                class="rounded-[18px] border border-[#e5e7eb] bg-[#fafafb] p-5"
              >
                <div class="flex items-start gap-4">
                  <div class="grid h-14 w-14 place-items-center rounded-[18px] bg-[#eff6ff]">
                    <img :src="activity.iconSrc" alt="" class="h-7 w-7 object-contain" />
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                      <h2 class="text-lg font-semibold text-[#101828]">{{ activity.title }}</h2>
                      <span class="text-sm text-[#6b7280]">{{ activity.time }}</span>
                    </div>
                    <p class="mt-2 text-sm leading-6 text-[#4a5565]">{{ activity.description }}</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
            <p class="text-sm font-medium text-[#6b7280]">활동 요약</p>
            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <div class="rounded-[16px] bg-[#f8fafc] p-4">
                <p class="text-sm text-[#475569]">총 활동</p>
                <p class="mt-2 text-2xl font-semibold text-[#101828]">{{ myPageActivities.length }}</p>
              </div>
              <div class="rounded-[16px] bg-[#f8fafc] p-4">
                <p class="text-sm text-[#475569]">최근 일주일</p>
                <p class="mt-2 text-2xl font-semibold text-[#101828]">3건</p>
              </div>
            </div>
          </section>
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
