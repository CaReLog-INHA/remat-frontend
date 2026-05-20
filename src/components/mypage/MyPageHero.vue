<script setup lang="ts">
import { myPageProfile } from "@/data/mypage";

defineProps<{
  mascotSrc: string;
}>();
</script>

<template>
  <section class="bg-[linear-gradient(90deg,#2c687b_0%,#70b8bf_100%)]">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden px-4 py-9 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div class="flex items-center gap-5">
        <div class="grid size-[68px] shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
          <img :src="mascotSrc" alt="" class="size-[46px] object-contain" />
        </div>
        <div class="text-white">
          <div class="flex flex-wrap items-center gap-3">
            <h1 class="text-[36px] font-bold leading-none">{{ myPageProfile.name }}</h1>
            <div class="flex items-center gap-2 text-sm text-white/80">
              <div class="flex text-[#ffd84d]">
                <span v-for="star in 4" :key="star">★</span>
              </div>
              <span>{{ myPageProfile.rating }}</span>
              <span>({{ myPageProfile.reviewCount }})</span>
            </div>
          </div>
          <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            <span>회사 {{ myPageProfile.company }}</span>
            <span>지역 {{ myPageProfile.location }}</span>
            <span>가입일 {{ myPageProfile.joinedAt }}</span>
          </div>
        </div>
      </div>

      <div class="relative flex w-full max-w-[300px] justify-end self-end lg:self-auto">
        <img :src="mascotSrc" alt="" class="pointer-events-none absolute right-4 top-1/2 size-[126px] -translate-y-1/2 opacity-10" />
        <button
          type="button"
          class="relative inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
        >
          <img src="/figma-icons/mypage.svg" alt="" class="size-4 object-contain invert" />
          프로필 수정
        </button>
      </div>
    </div>
  </section>
</template>
