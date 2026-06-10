<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { homeAssets } from "@/data/home";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const go = (name: string) => router.push({ name });

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isSubmitting = ref(false);

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  errorMessage.value = "";
  isSubmitting.value = true;
  try {
    await authStore.login({ email: email.value, password: password.value });
    const redirect = typeof route.query.redirect === "string" ? route.query.redirect : null;
    router.push(redirect ?? { name: "home" });
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isSubmitting.value = false;
  }
};

const featureCards = [
  { emoji: "🌱", label: "탄소 절감" },
  { emoji: "💰", label: "비용 절감" },
  { emoji: "📊", label: "ESG 리포트" },
];
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto flex w-full max-w-[448px] flex-col gap-8 px-4 py-12">
      <!-- 마스코트 + 타이틀 -->
      <div class="flex flex-col items-center text-center">
        <img :src="homeAssets.mascot" alt="ReMat 마스코트" class="size-[100px] object-contain" />
        <h1 class="mt-4 text-[30px] font-bold leading-9 tracking-[-0.01em] text-[#2c687b]">ReMat</h1>
        <p class="mt-2 text-base text-[#4a5565]">ESG 기반 자재 재사용 플랫폼</p>
      </div>

      <!-- 로그인 카드 -->
      <div class="rounded-[16px] border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <!-- 로그인 / 회원가입 토글 -->
        <div class="grid grid-cols-2 gap-1 rounded-[14px] bg-[#f5f5f5] p-1">
          <button type="button" class="rounded-[11px] bg-white py-2 text-sm font-medium text-[#1a1a1a] shadow-sm">
            로그인
          </button>
          <button
            type="button"
            class="rounded-[11px] py-2 text-sm font-medium text-[#6b7280] transition hover:text-[#1a1a1a]"
            @click="go('signup')"
          >
            회원가입
          </button>
        </div>

        <form class="mt-8 space-y-4" @submit.prevent="handleSubmit">
          <div class="space-y-1.5">
            <label for="login-email" class="block text-sm font-medium text-[#1a1a1a]">이메일</label>
            <div class="relative">
              <svg class="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#9ca3af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <input
                id="login-email"
                v-model="email"
                type="email"
                placeholder="example@company.com"
                autocomplete="email"
                required
                class="h-11 w-full rounded-lg border border-[#e5e7eb] bg-white pl-10 pr-3 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8cc7c4] focus:ring-2 focus:ring-[#8cc7c4]/30"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="login-password" class="block text-sm font-medium text-[#1a1a1a]">비밀번호</label>
            <div class="relative">
              <svg class="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#9ca3af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <input
                id="login-password"
                v-model="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                autocomplete="current-password"
                required
                class="h-11 w-full rounded-lg border border-[#e5e7eb] bg-white pl-10 pr-3 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8cc7c4] focus:ring-2 focus:ring-[#8cc7c4]/30"
              />
            </div>
          </div>

          <p
            v-if="errorMessage"
            class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
            role="alert"
          >
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="mt-2 h-11 w-full rounded-lg bg-[#db1a1a] text-sm font-semibold text-white transition hover:bg-[#c01616] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ isSubmitting ? "로그인 중..." : "로그인" }}
          </button>
        </form>
      </div>

      <!-- 하단 특징 카드 -->
      <div class="grid grid-cols-3 gap-3">
        <div
          v-for="card in featureCards"
          :key="card.label"
          class="rounded-[10px] border border-[#e5e7eb] bg-white px-4 py-4 text-center"
        >
          <p class="text-2xl leading-8">{{ card.emoji }}</p>
          <p class="mt-1 text-xs text-[#4a5565]">{{ card.label }}</p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
