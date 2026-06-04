<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section class="bg-[#2c687b] py-16 text-white">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <h2 class="text-3xl font-extrabold tracking-normal">지금 바로 시작하세요</h2>
        <p class="mt-4 max-w-xl text-sm leading-6 text-white/75">
          자재를 등록하고 불필요한 비용과 탄소 배출을 줄여보세요. 회원가입 후 바로 자재 등록과 거래를 시작할 수 있습니다.
        </p>
      </div>
      <div class="flex gap-3">
        <button
          type="button"
          class="inline-flex h-10 items-center rounded-[8px] bg-[#db1a1a] px-4 text-sm font-semibold text-white transition hover:bg-[#c01616]"
          @click="router.push({ name: 'register-material' })"
        >
          자재 등록하기
        </button>
        <a href="#materials" class="inline-flex h-10 items-center rounded-[8px] border border-white px-4 text-sm font-semibold text-white transition hover:bg-white/10">
          둘러보기
        </a>
      </div>
    </div>
  </section>
</template>
