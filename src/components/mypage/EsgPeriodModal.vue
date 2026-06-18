<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  initialStart?: string | null;
  initialEnd?: string | null;
  submitting?: boolean;
}>();

const emit = defineEmits<{
  (event: "close"): void;
  (event: "submit", payload: { periodStart: string; periodEnd: string }): void;
}>();

const toDateInput = (iso: string | null | undefined): string => {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 10);
};

const start = ref(toDateInput(props.initialStart));
const end = ref(toDateInput(props.initialEnd));
const error = ref("");

const submit = () => {
  if (!start.value || !end.value) {
    error.value = "시작일과 종료일을 모두 선택해주세요.";
    return;
  }
  if (start.value > end.value) {
    error.value = "종료일은 시작일보다 빠를 수 없습니다.";
    return;
  }
  error.value = "";
  emit("submit", { periodStart: start.value, periodEnd: end.value });
};
</script>

<template>
  <div class="fixed inset-0 z-[100] grid place-items-center bg-black/30 px-4">
    <section class="relative w-full max-w-[460px] rounded-[12px] border border-black/10 bg-white p-6 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        class="absolute right-4 top-4 grid size-6 place-items-center rounded-[4px] text-[#4a5565] opacity-70 transition hover:bg-black/5 hover:opacity-100"
        aria-label="기간 설정 모달 닫기"
        @click="emit('close')"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>

      <header>
        <h2 class="text-xl font-bold tracking-[-0.03em] text-[#1a1a1a]">리포트 기간 설정</h2>
        <p class="mt-2 text-sm leading-5 text-[#6b7280]">
          선택한 기간의 거래를 반영해 ESG 리포트를 다시 생성합니다.
        </p>
      </header>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <label class="block">
          <span class="text-sm font-medium text-[#364153]">시작일</span>
          <input
            v-model="start"
            type="date"
            :max="end || undefined"
            class="mt-2 h-10 w-full rounded-[8px] border border-[#e5e7eb] bg-white px-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#8cc7c4]"
          />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-[#364153]">종료일</span>
          <input
            v-model="end"
            type="date"
            :min="start || undefined"
            class="mt-2 h-10 w-full rounded-[8px] border border-[#e5e7eb] bg-white px-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#8cc7c4]"
          />
        </label>
      </div>

      <p v-if="error" class="mt-4 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
        {{ error }}
      </p>

      <footer class="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          :disabled="submitting"
          class="h-10 rounded-[8px] border border-black/10 bg-white text-sm font-medium text-[#1a1a1a] transition hover:bg-[#f8fafc] disabled:opacity-60"
          @click="emit('close')"
        >
          취소
        </button>
        <button
          type="button"
          :disabled="submitting"
          class="h-10 rounded-[8px] bg-[linear-gradient(90deg,#8cc7c4_0%,#2c687b_100%)] text-sm font-medium text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          @click="submit"
        >
          {{ submitting ? "갱신 중…" : "리포트 갱신" }}
        </button>
      </footer>
    </section>
  </div>
</template>
