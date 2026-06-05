<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { homeAssets } from "@/data/home";
import { regionOptions } from "@/data/regions";
import { useAuthStore } from "@/stores/auth";
import type { Region } from "@/api/types";

const router = useRouter();
const authStore = useAuthStore();
const go = (name: string) => router.push({ name });

const name = ref("");
const phoneNumber = ref("");
const companyName = ref("");
const region = ref<Region | "">("");
const email = ref("");
const password = ref("");
const passwordCheck = ref("");

const errorMessage = ref("");
const successMessage = ref("");
const isSubmitting = ref(false);

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  errorMessage.value = "";
  successMessage.value = "";

  if (!region.value) {
    errorMessage.value = "지역을 선택해주세요.";
    return;
  }
  if (password.value.length < 8) {
    errorMessage.value = "비밀번호는 8자 이상이어야 합니다.";
    return;
  }
  if (password.value !== passwordCheck.value) {
    errorMessage.value = "비밀번호가 일치하지 않습니다.";
    return;
  }

  isSubmitting.value = true;
  try {
    await authStore.signup({
      name: name.value,
      phoneNumber: phoneNumber.value,
      companyName: companyName.value,
      email: email.value,
      region: region.value,
      password: password.value,
      passwordCheck: passwordCheck.value,
    });
    successMessage.value = "회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.";
    setTimeout(() => router.push({ name: "login" }), 1200);
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

const inputClass =
  "h-11 w-full rounded-lg border border-[#e5e7eb] bg-white pl-10 pr-3 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8cc7c4] focus:ring-2 focus:ring-[#8cc7c4]/30";
const iconClass =
  "pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#9ca3af]";
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

      <!-- 회원가입 카드 -->
      <div class="rounded-[16px] border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <!-- 로그인 / 회원가입 토글 -->
        <div class="grid grid-cols-2 gap-1 rounded-[14px] bg-[#f5f5f5] p-1">
          <button
            type="button"
            class="rounded-[11px] py-2 text-sm font-medium text-[#6b7280] transition hover:text-[#1a1a1a]"
            @click="go('login')"
          >
            로그인
          </button>
          <button type="button" class="rounded-[11px] bg-white py-2 text-sm font-medium text-[#1a1a1a] shadow-sm">
            회원가입
          </button>
        </div>

        <form class="mt-8 space-y-4" @submit.prevent="handleSubmit">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label for="signup-name" class="block text-sm font-medium text-[#1a1a1a]">담당자명</label>
              <div class="relative">
                <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20a8 8 0 0 1 16 0" />
                </svg>
                <input id="signup-name" v-model="name" type="text" placeholder="홍길동" autocomplete="name" required :class="inputClass" />
              </div>
            </div>

            <div class="space-y-1.5">
              <label for="signup-phone" class="block text-sm font-medium text-[#1a1a1a]">연락처</label>
              <div class="relative">
                <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                <input id="signup-phone" v-model="phoneNumber" type="tel" placeholder="010-0000-0000" autocomplete="tel" required :class="inputClass" />
              </div>
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="signup-company" class="block text-sm font-medium text-[#1a1a1a]">회사명</label>
            <div class="relative">
              <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="3" width="14" height="18" rx="1.5" />
                <path d="M9 21v-4h6v4M9 7h.01M15 7h.01M9 11h.01M15 11h.01" />
              </svg>
              <input id="signup-company" v-model="companyName" type="text" placeholder="(주)회사명" autocomplete="organization" required :class="inputClass" />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="signup-region" class="block text-sm font-medium text-[#1a1a1a]">지역</label>
            <div class="relative">
              <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <select
                id="signup-region"
                v-model="region"
                required
                :class="[inputClass, 'appearance-none pr-8']"
              >
                <option value="" disabled>지역을 선택하세요</option>
                <option v-for="opt in regionOptions" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="signup-email" class="block text-sm font-medium text-[#1a1a1a]">이메일</label>
            <div class="relative">
              <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <input id="signup-email" v-model="email" type="email" placeholder="example@company.com" autocomplete="email" required :class="inputClass" />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="signup-password" class="block text-sm font-medium text-[#1a1a1a]">비밀번호</label>
            <div class="relative">
              <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <input id="signup-password" v-model="password" type="password" placeholder="8자 이상" autocomplete="new-password" required minlength="8" :class="inputClass" />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="signup-password-confirm" class="block text-sm font-medium text-[#1a1a1a]">비밀번호 확인</label>
            <div class="relative">
              <svg :class="iconClass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <input id="signup-password-confirm" v-model="passwordCheck" type="password" placeholder="비밀번호 재입력" autocomplete="new-password" required :class="inputClass" />
            </div>
          </div>

          <p
            v-if="errorMessage"
            class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
            role="alert"
          >
            {{ errorMessage }}
          </p>
          <p
            v-if="successMessage"
            class="rounded-md bg-[#f0fdf4] px-3 py-2 text-sm text-[#16a34a]"
            role="status"
          >
            {{ successMessage }}
          </p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="mt-2 h-11 w-full rounded-lg bg-[#db1a1a] text-sm font-semibold text-white transition hover:bg-[#c01616] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ isSubmitting ? "가입 중..." : "회원가입" }}
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
