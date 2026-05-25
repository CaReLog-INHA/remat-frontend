<script setup lang="ts">
import MascotImage from "./MascotImage.vue";
import RematLogo from "./RematLogo.vue";

defineProps<{
  logoIconSrc: string;
  mascotSrc: string;
  serviceLinks: string[];
  supportLinks: string[];
}>();
</script>

<template>
  <footer class="relative overflow-hidden bg-[#2c687b] py-12 text-white">
    <div class="pointer-events-none absolute bottom-6 right-16 opacity-10" aria-hidden="true">
      <MascotImage :src="mascotSrc" size="footer" />
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-[1fr_280px_280px]">
        <div>
          <div class="flex items-center">
            <RematLogo :icon-src="logoIconSrc" variant="footer" />
          </div>
          <p class="mt-5 text-base text-white/75">ESG 기반 자재 재사용 플랫폼</p>
          <p class="mt-3 max-w-md text-sm leading-6 text-white/55">
            버려질 자재를 다시 연결해 비용을 절감하고, 탄소 배출을 줄이는 순환형 자재 거래 경험을 제공합니다.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-bold">서비스</h3>
          <ul class="mt-4 space-y-2 text-sm text-white/75">
            <li v-for="link in serviceLinks" :key="link">
              <a href="#" class="hover:text-white">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold">고객지원</h3>
          <ul class="mt-4 space-y-2 text-sm text-white/75">
            <li v-for="link in supportLinks" :key="link">
              <a href="#" class="hover:text-white">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/45">© 2026 ReMat. All rights reserved.</p>
    </div>
  </footer>
</template>
