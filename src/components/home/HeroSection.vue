<script setup lang="ts">
import IconPath from "./IconPath.vue";
import MascotImage from "./MascotImage.vue";
import type { PageName } from "@/types/navigation";

defineProps<{
  mascotSrc: string;
  stats: ReadonlyArray<{ value: string; label: string }>;
}>();

defineEmits<{
  (event: "change-page", pageName: PageName): void;
}>();
</script>

<template>
  <section class="relative overflow-hidden bg-[linear-gradient(150deg,#8cc7c4_0%,#2c687b_55%,#2c687b_100%)] text-white">
    <div class="pointer-events-none absolute -right-24 top-16 size-80 rounded-full bg-white/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -left-24 bottom-8 size-72 rounded-full bg-[#8cc7c4]/20 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.05))]"></div>

    <div class="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <div class="max-w-3xl">
        <p class="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm text-white ring-1 ring-white/15">
          ESG 기반 B2B 자재 재사용 플랫폼
        </p>
        <h1 class="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl">
          자재를 다시 잇고<br />
          <span class="text-[#fff6f6]">지속가능한 미래를 만듭니다</span>
        </h1>
        <p class="mt-6 text-2xl text-white/90">ReMat: Re + Material</p>
        <p class="mt-4 max-w-2xl text-lg leading-8 text-white/80">
          남는 자재를 필요한 곳에 연결해 조달 비용을 낮추고 탄소 배출을 줄이는 순환형 자재 거래 플랫폼입니다.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#materials" class="inline-flex h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-semibold text-[#2c687b] shadow-sm transition hover:bg-[#fff6f6]">
            <IconPath path="M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7" />
            자재 둘러보기
          </a>
          <button
            type="button"
            class="inline-flex h-10 items-center gap-2 rounded-[8px] border-2 border-white px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            @click="$emit('change-page', 'register-material')"
          >
            자재 등록하기
            <IconPath path="M5 12h14M13 5l7 7l-7 7" />
          </button>
        </div>

        <dl class="mt-12 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-10">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="text-sm text-white/75">{{ stat.label }}</dt>
            <dd class="mt-1 text-3xl font-extrabold">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>

      <div class="relative hidden h-[360px] lg:block" aria-hidden="true">
        <MascotImage :src="mascotSrc" />
        <svg class="absolute bottom-14 right-6 size-24 text-[#8cc7c4]/25" viewBox="0 0 96 96" fill="currentColor">
          <path d="M80 16C42 18 20 38 18 72c27-3 51-23 62-56Z" />
          <path d="M22 72c14-22 30-35 54-48" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </section>
</template>
