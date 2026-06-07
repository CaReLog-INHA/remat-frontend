<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  submitting?: boolean;
}>();

const emit = defineEmits<{
  (event: "close"): void;
  (event: "submit", payload: { starRating: number; description: string }): void;
}>();

const rating = ref(5);
const content = ref("");
const error = ref("");

const submitReview = () => {
  if (!content.value.trim()) {
    error.value = "후기 내용을 입력해주세요.";
    return;
  }
  error.value = "";
  emit("submit", { starRating: rating.value, description: content.value.trim() });
};
</script>

<template>
  <div class="fixed inset-0 z-[100] grid place-items-center bg-black/30 px-4">
    <section class="relative w-full max-w-[500px] rounded-[10px] border border-black/10 bg-[#fff6f6] p-6 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        class="absolute right-4 top-4 grid size-6 place-items-center rounded-[4px] text-[#4a5565] opacity-70 transition hover:bg-black/5 hover:opacity-100"
        aria-label="리뷰 모달 닫기"
        @click="emit('close')"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>

      <header>
        <h2 class="text-xl font-bold tracking-[-0.03em] text-[#1a1a1a]">거래 후기 남기기</h2>
        <p class="mt-2 text-sm leading-5 text-[#6b7280]">거래에 대한 후기를 남겨주세요. 다른 사용자에게 도움이 될 수 있습니다.</p>
      </header>

      <div class="mt-8 space-y-4">
        <div>
          <p class="text-sm font-medium text-[#364153]">평점 선택</p>
          <div class="mt-2 flex items-center gap-2">
            <button
              v-for="score in 5"
              :key="score"
              type="button"
              class="grid size-8 place-items-center text-[#f4b400] transition hover:scale-105"
              :aria-label="`${score}점 선택`"
              @click="rating = score"
            >
              <svg class="size-8" viewBox="0 0 24 24" :fill="score <= rating ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" stroke-linejoin="round" />
              </svg>
            </button>
            <span class="ml-2 text-sm font-medium text-[#4a5565]">{{ rating }}점</span>
          </div>
        </div>

        <label class="block">
          <span class="text-sm font-medium text-[#364153]">후기 내용</span>
          <textarea
            v-model="content"
            class="mt-2 h-32 w-full resize-none rounded-[8px] border border-transparent bg-white px-3 py-2 text-sm leading-5 text-[#1a1a1a] outline-none transition placeholder:text-[#6b7280] focus:border-[#8cc7c4]"
            placeholder="거래 경험을 자세히 공유해주세요&#10;(예: 자재 상태, 배송, 판매자 응대 등)"
          />
        </label>

        <p v-if="error" class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
          {{ error }}
        </p>
      </div>

      <footer class="mt-10 grid gap-3 sm:grid-cols-2">
        <button type="button" :disabled="submitting" class="h-9 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] transition hover:bg-white disabled:opacity-60" @click="emit('close')">
          취소
        </button>
        <button
          type="button"
          :disabled="submitting"
          class="h-9 rounded-[8px] bg-[linear-gradient(90deg,#8cc7c4_0%,#2c687b_100%)] text-sm font-medium text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          @click="submitReview"
        >
          {{ submitting ? "등록 중..." : "리뷰 등록" }}
        </button>
      </footer>
    </section>
  </div>
</template>
