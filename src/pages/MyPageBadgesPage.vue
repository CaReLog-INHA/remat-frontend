<script setup lang="ts">
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { footerLinks, homeAssets } from "@/data/home";
import { myPageBadges, myPageNavItems } from "@/data/mypage";

defineEmits<{
  (event: "change-page", pageName: "home" | "login" | "signup" | "marketplace" | "register-material" | "my-page-profile" | "my-page-badges"): void;
}>();

const earnedCount = myPageBadges.filter((badge) => badge.earned).length;
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="myPageNavItems"
      account-variant="member"
      @change-page="$emit('change-page', $event)"
    />

    <main class="pt-16 min-h-[calc(100vh-64px)]">
      <MyPageHero :mascot-src="homeAssets.mascot" />

      <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <MyPageSummaryCards />

        <div class="mt-6">
          <MyPageTabs current-page="my-page-badges" @change-page="$emit('change-page', $event)" />
        </div>

        <section class="mt-6 rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]">
          <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="text-sm font-medium text-[#6a7282]">획득한 배지</p>
              <h2 class="mt-2 text-[30px] font-bold tracking-[-0.03em] text-[#101828]">{{ earnedCount }}/{{ myPageBadges.length }} 완료</h2>
              <p class="mt-2 text-sm text-[#4a5565]">자재 순환, 거래 기여, ESG 성과에 따라 새로운 배지가 열립니다.</p>
            </div>
            <div class="w-full max-w-[340px] rounded-[14px] bg-[linear-gradient(135deg,#f0fdf4_0%,#eff6ff_100%)] p-4">
              <div class="flex items-center justify-between text-sm text-[#4a5565]">
                <span>배지 진행률</span>
                <span>{{ Math.round((earnedCount / myPageBadges.length) * 100) }}%</span>
              </div>
              <div class="mt-3 h-3 rounded-full bg-white/90">
                <div class="h-3 rounded-full bg-[linear-gradient(90deg,#16a34a_0%,#2c687b_100%)]" :style="{ width: `${(earnedCount / myPageBadges.length) * 100}%` }" />
              </div>
              <p class="mt-3 text-xs text-[#6a7282]">다음 목표: 제로 웨이스트 배지 획득</p>
            </div>
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <article
              v-for="badge in myPageBadges"
              :key="badge.title"
              :class="[
                'rounded-[16px] border p-5 transition',
                badge.earned
                  ? 'border-[#e5e7eb] bg-white shadow-[0_12px_24px_rgba(16,24,40,0.06)]'
                  : 'border-dashed border-[#d1d5db] bg-[#fcfcfd] opacity-80',
              ]"
            >
              <div :class="['rounded-[14px] bg-gradient-to-br p-4', badge.bg]">
                <div class="flex items-start justify-between gap-4">
                  <img :src="badge.iconSrc" alt="" class="size-16 shrink-0 object-contain" />
                  <span
                    :class="[
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      badge.earned ? 'bg-white/90 text-[#101828]' : 'bg-[#f3f4f6] text-[#6a7282]',
                    ]"
                  >
                    {{ badge.earned ? "획득 완료" : "잠금" }}
                  </span>
                </div>
              </div>

              <div class="mt-4">
                <h3 class="text-xl font-bold text-[#101828]">{{ badge.title }}</h3>
                <p class="mt-1 text-sm font-medium" :style="{ color: badge.accent }">{{ badge.subtitle }}</p>
                <p class="mt-3 text-sm leading-6 text-[#4a5565]">{{ badge.description }}</p>
              </div>
            </article>
          </div>
        </section>
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
