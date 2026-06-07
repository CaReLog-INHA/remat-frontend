<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { homeAssets } from "@/data/home";
import { useAiAnalysisStore } from "@/stores/aiAnalysis";
import iconCheckCircle from "@/assets/ai-benefit-check-circle.svg";
import iconSparkles from "@/assets/ai-benefit-sparkles.svg";
import iconFileText from "@/assets/ai-benefit-file-text.svg";

const router = useRouter();
const aiStore = useAiAnalysisStore();

const fileInput = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const isDragOver = ref(false);
const isAnalyzing = ref(false);
const errorMessage = ref("");

const MAX_SIZE = 50 * 1024 * 1024; // 50MB

const pickFile = (file: File): string | null => {
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return "PDF 파일만 업로드할 수 있습니다.";
  }
  if (file.size > MAX_SIZE) {
    return "파일 크기는 최대 50MB까지 업로드할 수 있습니다.";
  }
  return null;
};

const setFile = (file: File) => {
  const error = pickFile(file);
  if (error) {
    errorMessage.value = error;
    return;
  }
  errorMessage.value = "";
  selectedFile.value = file;
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) setFile(file);
};

const onDrop = (e: DragEvent) => {
  e.preventDefault();
  isDragOver.value = false;
  const file = e.dataTransfer?.files?.[0];
  if (file) setFile(file);
};

const openFileDialog = () => {
  fileInput.value?.click();
};

const analyze = async () => {
  if (!selectedFile.value || isAnalyzing.value) return;
  isAnalyzing.value = true;
  errorMessage.value = "";
  try {
    await aiStore.analyze(selectedFile.value);
    router.push({ name: "ai-analysis-result" });
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isAnalyzing.value = false;
  }
};

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
    iconSrc: iconCheckCircle,
    bg: "bg-[#dcfce7]",
    iconBg: "bg-[#16a34a]",
    titleColor: "text-[#166534]",
  },
  {
    title: "스마트 매칭",
    desc: "등록된 자재 풀 중 조건이 맞는 후보를 빠르게 찾아 자재를 자동으로 추천합니다.",
    iconSrc: iconSparkles,
    bg: "bg-[#dbeafe]",
    iconBg: "bg-[#2563eb]",
    titleColor: "text-[#1d4ed8]",
  },
  {
    title: "상세 분석 리포트",
    desc: "일치도와 자재 적합도 항목별 분석 내용을 제공해 상세한 분석 리포트를 제공합니다.",
    iconSrc: iconFileText,
    bg: "bg-[#f3e8ff]",
    iconBg: "bg-[#9333ea]",
    titleColor: "text-[#7e22ce]",
  },
  {
    title: "대체 자재 제안",
    desc: "원하는 자재가 없더라도 유사하거나 대체 가능한 자재를 추천하여 선택의 폭을 넓혀드립니다.",
    iconSrc: iconCheckCircle,
    bg: "bg-[#ffedd5]",
    iconBg: "bg-[#f97316]",
    titleColor: "text-[#c2410c]",
  },
];
</script>

<template>
  <DefaultLayout active-page="ai-analysis">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.9)_100%)] py-12 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold">AI 자재 분석</h1>
          <p class="mt-3 text-lg text-white/80">기획서를 업로드하면 AI가 필요한 자재를 자동으로 분석하고 추천해드립니다</p>
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
            <span class="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#64748b]">PDF · 최대 50MB</span>
          </div>

          <div
            :class="[
              'mt-5 rounded-[20px] border border-dashed px-6 py-12 text-center transition',
              isDragOver ? 'border-[#2c687b] bg-[#f0fafa]' : 'border-[#d8dee9] bg-[#fdfefe]',
            ]"
            @dragover.prevent="isDragOver = true"
            @dragleave.prevent="isDragOver = false"
            @drop="onDrop"
          >
            <input
              ref="fileInput"
              type="file"
              accept="application/pdf,.pdf"
              class="sr-only"
              @change="onFileChange"
            />
            <img :src="homeAssets.mascot" alt="" class="mx-auto size-[72px] object-contain" />
            <p v-if="!selectedFile" class="mt-5 text-base font-semibold text-[#374151]">PDF 파일을 드래그하거나 클릭하여 업로드</p>
            <p v-else class="mt-5 text-base font-semibold text-[#0f766e]">{{ selectedFile.name }}</p>
            <p class="mt-2 text-sm text-[#9ca3af]">
              {{ selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB` : "최대 50MB까지 업로드 가능합니다" }}
            </p>
            <div class="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                class="inline-flex h-10 items-center justify-center rounded-lg border border-[#d6dbe4] bg-white px-5 text-sm font-semibold text-[#475569] transition hover:border-[#8cc7c4] disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isAnalyzing"
                @click="openFileDialog"
              >
                {{ selectedFile ? "다른 파일 선택" : "파일 선택하기" }}
              </button>
              <button
                v-if="selectedFile"
                type="button"
                class="inline-flex h-10 items-center justify-center rounded-lg bg-[#ef4444] px-5 text-sm font-semibold text-white transition hover:bg-[#dc2626] disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isAnalyzing"
                @click="analyze"
              >
                {{ isAnalyzing ? "분석 중..." : "AI 분석 시작" }}
              </button>
            </div>
            <p v-if="errorMessage" class="mt-4 text-sm text-[#dc2626]" role="alert">{{ errorMessage }}</p>
          </div>
        </section>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="card in benefitCards"
            :key="card.title"
            :class="[card.bg, 'rounded-2xl border border-white/60 px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]']"
          >
            <div class="flex items-start gap-4">
              <div :class="[card.iconBg, 'grid size-10 shrink-0 place-items-center rounded-xl shadow-sm']">
                <img :src="card.iconSrc" alt="" class="size-6" />
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
