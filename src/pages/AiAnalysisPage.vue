<script setup lang="ts">
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { homeAssets } from "@/data/home";

const router = useRouter();
const go = (name: string) => router.push({ name });

const steps = [
  {
    number: "1",
    title: "기획서 업로드",
    desc: "행사, 전시, 프로젝트 기획서 PDF를 업로드하세요",
    iconBg: "bg-[#fff0f0]",
    iconColor: "text-[#ef4444]",
    iconPath: "M12 16V8m0 0-3 3m3-3 3 3M5 18h14",
  },
  {
    number: "2",
    title: "AI 분석",
    desc: "AI가 문서를 분석하여 필요한 자재 목록을 추출합니다",
    iconBg: "bg-[#ecfeff]",
    iconColor: "text-[#0f766e]",
    iconPath: "M12 4v3m0 10v3M4 12h3m10 0h3M6.2 6.2l2.1 2.1m7.4 7.4 2.1 2.1m0-11.6-2.1 2.1m-7.4 7.4-2.1 2.1",
  },
  {
    number: "3",
    title: "자재 추천",
    desc: "등록된 자재 목록에서 매칭 자재를 추천받습니다",
    iconBg: "bg-[#ecfdf5]",
    iconColor: "text-[#22c55e]",
    iconPath: "M12 21c4.35-2.6 7-6.45 7-10.5V5.8L12 3 5 5.8v4.7c0 4.05 2.65 7.9 7 10.5Zm0-11.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z",
  },
];

const benefitCards = [
  {
    title: "정확한 자재 식별",
    desc: "AI가 기획서 내용을 분석하여 필요한 자재의 종류, 수량, 규격을 정확하게 파악합니다.",
    icon: "✓",
    bg: "bg-[#dcfce7]",
    iconBg: "bg-[#16a34a]",
    titleColor: "text-[#166534]",
  },
  {
    title: "스마트 매칭",
    desc: "등록된 자재 풀 중 조건이 맞는 후보를 빠르게 찾아 자재를 자동으로 추천합니다.",
    icon: "↗",
    bg: "bg-[#dbeafe]",
    iconBg: "bg-[#2563eb]",
    titleColor: "text-[#1d4ed8]",
  },
  {
    title: "상세 분석 리포트",
    desc: "일치도와 자재 적합도 항목별 분석 내용을 제공해 상세한 분석 리포트를 제공합니다.",
    icon: "▣",
    bg: "bg-[#f3e8ff]",
    iconBg: "bg-[#9333ea]",
    titleColor: "text-[#7e22ce]",
  },
  {
    title: "대체 자재 제안",
    desc: "원하는 자재가 없더라도 유사하거나 대체 가능한 자재를 추천하여 선택의 폭을 넓혀드립니다.",
    icon: "◎",
    bg: "bg-[#ffedd5]",
    iconBg: "bg-[#f97316]",
    titleColor: "text-[#c2410c]",
  },
];
</script>

<template>
  <DefaultLayout active-page="ai-analysis">
      <section class="relative overflow-hidden bg-[linear-gradient(90deg,#2f6f82_0%,#7bb7bd_100%)] text-white">
        <div class="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_70%)]" aria-hidden="true" />
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-10 sm:px-6 lg:px-8">
          <div>
            <div class="flex items-center gap-3">
              <div class="grid size-10 place-items-center rounded-xl bg-white/14 ring-1 ring-white/18 backdrop-blur-sm">
                <span class="text-sm font-bold">AI</span>
              </div>
              <h1 class="text-[32px] font-bold tracking-[-0.03em]">AI 자재 분석</h1>
            </div>
            <p class="mt-3 text-sm text-white/85 sm:text-base">기획서를 업로드하면 AI가 필요한 자재를 자동으로 분석하고 추천해드립니다</p>
          </div>
          <img :src="homeAssets.mascot" alt="" class="hidden w-20 opacity-70 md:block" />
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-[30px] font-bold tracking-[-0.03em] text-[#111827]">어떻게 작동하나요?</h2>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="step in steps" :key="step.number" class="rounded-2xl border border-[#e9eef5] bg-white px-6 py-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <div :class="['mx-auto grid size-12 place-items-center rounded-full', step.iconBg]">
              <svg :class="['size-5', step.iconColor]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="step.iconPath" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-bold text-[#111827]">{{ step.number }}. {{ step.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-[#6b7280]">{{ step.desc }}</p>
          </article>
        </div>

        <section class="mt-12 rounded-[22px] border border-white/70 bg-white px-5 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.10)] sm:px-8 sm:py-8">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-lg font-bold text-[#111827]">기획서 업로드</h3>
            <span class="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#64748b]">샘플 흐름</span>
          </div>

          <div class="mt-5 rounded-[20px] border border-dashed border-[#d8dee9] bg-[#fdfefe] px-6 py-12 text-center">
            <img :src="homeAssets.mascot" alt="" class="mx-auto max-w-[72px]" />
            <p class="mt-5 text-base font-semibold text-[#374151]">PDF 파일을 드래그하거나 클릭하여 업로드</p>
            <p class="mt-2 text-sm text-[#9ca3af]">최대 50MB까지 업로드 가능합니다</p>
            <div class="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" class="inline-flex h-10 items-center justify-center rounded-lg border border-[#d6dbe4] bg-white px-5 text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4]" @click="go('ai-analysis-result')">
                샘플 결과 보기
              </button>
              <button type="button" class="inline-flex h-10 items-center justify-center rounded-lg bg-[#ef4444] px-5 text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="go('ai-analysis-result')">
                파일 선택하기
              </button>
            </div>
          </div>
        </section>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="card in benefitCards"
            :key="card.title"
            :class="[card.bg, 'rounded-2xl border border-white/60 px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]']"
          >
            <div class="flex items-start gap-4">
              <div :class="[card.iconBg, 'grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-white shadow-sm']">
                {{ card.icon }}
              </div>
              <div>
                <h3 :class="[card.titleColor, 'text-base font-bold']">{{ card.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-[#4b5563]">{{ card.desc }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
  </DefaultLayout>
</template>
