<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { regionOptions } from "@/data/regions";
import { conditionLabel as conditionLabelOf } from "@/data/materialOptions";
import { materialsApi, type MaterialDetail } from "@/api/materials";
import { tradesApi } from "@/api/trades";

const props = defineProps<{
  id: string;
}>();

const router = useRouter();

const material = ref<MaterialDetail | null>(null);
const isLoading = ref(true);
const errorMessage = ref("");

const quantity = ref(1);
const startDate = ref("");
const endDate = ref("");
const isRentalModalOpen = ref(false);
const requestMessage = ref("");
const isSubmitting = ref(false);
const submitError = ref("");

onMounted(async () => {
  try {
    material.value = await materialsApi.detail(Number(props.id));
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
});

const regionLabel = computed(() =>
  material.value
    ? regionOptions.find((r) => r.value === material.value!.region)?.label ?? material.value.region
    : "—",
);
const conditionLabel = computed(() =>
  material.value ? conditionLabelOf(material.value.materialCondition) : "—",
);
const priceLabel = computed(() =>
  material.value?.price != null ? `${material.value.price.toLocaleString("ko-KR")}원` : "—",
);

const formatDate = (iso: string | null | undefined): string => {
  if (!iso) return "—";
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString("ko-KR");
};

const maxStock = computed(() => material.value?.quantity ?? 1);

const rentalDays = computed(() => {
  if (!startDate.value || !endDate.value) return 1;
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
});

const estimatedPrice = computed(() => {
  const price = material.value?.price ?? 0;
  return `${(price * quantity.value * rentalDays.value).toLocaleString("ko-KR")}원`;
});

// 탄소 절감은 재사용 효과라 기간이 아니라 수량 기준
const estimatedCarbon = computed(() => {
  const perUnit = material.value?.esgEffect ?? 0;
  return `${(perUnit * quantity.value).toLocaleString("ko-KR")}kg CO₂`;
});

const goBack = () => {
  if (window.history.state?.back) router.back();
  else router.push({ name: "marketplace" });
};
const incrementQuantity = () => {
  quantity.value = Math.min(maxStock.value, quantity.value + 1);
};
const decrementQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1);
};
const openRentalModal = () => {
  requestMessage.value = "";
  submitError.value = "";
  isRentalModalOpen.value = true;
};
const closeRentalModal = () => {
  if (isSubmitting.value) return;
  isRentalModalOpen.value = false;
};

const submitRentalRequest = async () => {
  if (isSubmitting.value || !material.value) return;
  if (!startDate.value || !endDate.value) {
    submitError.value = "대여 시작일과 종료일을 선택해주세요.";
    return;
  }
  if (new Date(endDate.value) < new Date(startDate.value)) {
    submitError.value = "종료일은 시작일 이후여야 합니다.";
    return;
  }
  if (!requestMessage.value.trim()) {
    submitError.value = "요청 메시지를 입력해주세요.";
    return;
  }
  submitError.value = "";
  isSubmitting.value = true;
  try {
    await tradesApi.request({
      materialId: material.value.id,
      quantity: quantity.value,
      requestMessage: requestMessage.value.trim(),
      rentalStart: startDate.value,
      rentalEnd: endDate.value,
    });
    isRentalModalOpen.value = false;
    router.push({ name: "trade-status" });
  } catch (e) {
    submitError.value = (e as Error).message;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <DefaultLayout :nav-items="[]">
    <div class="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <button
        type="button"
        class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#475569] transition hover:text-[#2c687b]"
        @click="goBack"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        뒤로 가기
      </button>

      <p v-if="isLoading" class="rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]">
        자재 정보를 불러오는 중입니다…
      </p>
      <p v-else-if="errorMessage" class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
        {{ errorMessage }}
      </p>

      <div v-else-if="material" class="grid gap-6 lg:grid-cols-[1fr_384px]">
        <section class="space-y-6">
          <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
            <img v-if="material.imageUrl" :src="material.imageUrl" alt="대여 상품 이미지" class="h-[440px] w-full object-cover" />
            <div v-else class="grid h-[440px] w-full place-items-center bg-[#f3f4f6] text-6xl text-[#cbd5e1]">📦</div>
          </div>
          <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div class="flex flex-wrap gap-2">
              <span class="rounded-[8px] bg-[#8cc7c4]/20 px-2.5 py-1 text-xs font-medium text-[#2c687b]">{{ material.categoryName }}</span>
              <span class="rounded-[8px] bg-[#f0fdf4] px-2.5 py-1 text-xs font-medium text-[#008236]">{{ conditionLabel }}</span>
              <span class="rounded-[8px] bg-[#f3e8ff] px-2.5 py-1 text-xs font-medium text-[#8200db]">대여</span>
            </div>
            <h1 class="mt-3 text-[32px] font-bold tracking-[-0.03em]">{{ material.materialName }}</h1>
            <div class="mt-3 flex items-end gap-2">
              <span class="text-[34px] font-bold text-[#db1a1a]">{{ priceLabel }}</span>
              <span class="pb-1 text-sm text-[#6a7282]">/ 1일</span>
            </div>
            <div class="mt-6 grid gap-4 rounded-[16px] bg-[#f9fafb] p-5 sm:grid-cols-3">
              <div><p class="text-xs text-[#6a7282]">보유 수량</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ material.quantity }}개</p></div>
              <div><p class="text-xs text-[#6a7282]">위치</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ regionLabel }}</p></div>
              <div><p class="text-xs text-[#6a7282]">등록일</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ formatDate(material.createdAt) }}</p></div>
            </div>
            <div class="mt-6"><h2 class="text-lg font-semibold">상세 설명</h2><p class="mt-3 whitespace-pre-line text-sm text-[#475569]">{{ material.description }}</p></div>
          </article>
        </section>

        <aside class="space-y-6">
          <article class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div class="mb-4 flex items-center gap-3 border-b border-[#f3f4f6] pb-4">
              <div class="grid size-10 place-items-center rounded-full bg-[#2c687b]/10 text-sm font-bold text-[#2c687b]">
                {{ material.sellerName?.[0] ?? "?" }}
              </div>
              <div>
                <p class="text-sm font-semibold text-[#101828]">{{ material.sellerName }}</p>
                <p class="text-xs text-[#6a7282]">{{ material.companyName }} · ★ {{ material.starRating ?? "—" }}</p>
              </div>
            </div>
            <h2 class="text-lg font-bold">대여 정보</h2>
            <div class="mt-5 space-y-4">
              <div>
                <label class="block text-sm font-medium text-[#1a1a1a]">수량</label>
                <div class="mt-2 flex items-center gap-2">
                  <button type="button" class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="decrementQuantity">-</button>
                  <span class="min-w-[48px] text-center text-lg font-semibold">{{ quantity }}</span>
                  <button type="button" class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="incrementQuantity">+</button>
                </div>
              </div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 시작일</label><input v-model="startDate" type="date" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 종료일</label><input v-model="endDate" type="date" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
            </div>
            <div class="mt-6 rounded-[16px] bg-[#f9fafb] p-4">
              <p class="text-sm text-[#6b7280]">예상 대여 기간</p>
              <p class="mt-2 text-2xl font-bold text-[#2c687b]">{{ rentalDays }}일</p>
              <p class="mt-3 text-sm text-[#475569]">예상 결제금액: {{ estimatedPrice }}</p>
              <p class="text-sm text-[#475569]">탄소절감 예상: {{ estimatedCarbon }}</p>
            </div>
            <button type="button" class="mt-6 w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white transition hover:bg-[#25596a]" @click="openRentalModal">대여 요청</button>
          </article>
        </aside>
      </div>
    </div>

    <!-- 대여 요청 모달 -->
    <div v-if="isRentalModalOpen && material" class="fixed inset-0 z-[70] flex items-center justify-center bg-[#101828]/45 px-4 py-8 backdrop-blur-[2px]" @click.self="closeRentalModal">
      <div class="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[20px] border border-[#ece3e3] bg-[#fff8f8] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold tracking-[-0.02em] text-[#111827]">대여 요청</h2>
            <p class="mt-1 text-sm font-medium text-[#64748b]">{{ material.materialName }}</p>
          </div>
          <button type="button" class="grid size-8 place-items-center rounded-full text-[#6b7280] transition hover:bg-white" @click="closeRentalModal">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <section class="mt-5 rounded-[14px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div class="flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">판매자</span>
            <span class="text-sm font-bold text-[#111827]">{{ material.sellerName }}</span>
          </div>
          <div class="mt-3 flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">단가</span>
            <span class="text-base font-bold text-[#ef4444]">{{ priceLabel }} / 개 / 일</span>
          </div>
        </section>

        <section class="mt-5">
          <h3 class="text-base font-bold text-[#111827]">수량 선택</h3>
          <div class="mt-3 flex items-center gap-3">
            <button type="button" class="grid size-10 shrink-0 place-items-center rounded-xl border border-[#e7dede] bg-white text-lg text-[#6b7280]" @click="decrementQuantity">-</button>
            <div class="flex h-11 flex-1 items-center justify-center rounded-xl border border-[#dfd7d7] bg-white px-4 text-lg font-semibold text-[#111827]">
              {{ quantity }}
            </div>
            <button type="button" class="grid size-10 shrink-0 place-items-center rounded-xl border border-[#e7dede] bg-white text-lg text-[#111827]" @click="incrementQuantity">+</button>
          </div>
          <p class="mt-2 text-xs text-[#94a3b8]">최대 {{ maxStock }}개 대여 가능</p>
        </section>

        <section class="mt-5">
          <p class="text-base font-bold text-[#111827]">
            대여 기간 <span class="text-[#ef4444]">*</span>
          </p>
          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <label class="block">
              <span class="mb-1.5 block text-sm font-medium text-[#475569]">시작일</span>
              <input v-model="startDate" type="date" class="h-11 w-full rounded-[12px] border border-[#e6dddd] bg-white px-3 text-sm text-[#111827] outline-none transition focus:border-[#8cc7c4]" />
            </label>
            <label class="block">
              <span class="mb-1.5 block text-sm font-medium text-[#475569]">종료일</span>
              <input v-model="endDate" type="date" class="h-11 w-full rounded-[12px] border border-[#e6dddd] bg-white px-3 text-sm text-[#111827] outline-none transition focus:border-[#8cc7c4]" />
            </label>
          </div>
        </section>

        <section class="mt-5 rounded-[14px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div class="flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">예상 금액 ({{ rentalDays }}일)</span>
            <span class="text-2xl font-bold tracking-[-0.02em] text-[#ef4444]">{{ estimatedPrice }}</span>
          </div>
          <div class="mt-3 flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">예상 탄소 절감</span>
            <span class="text-base font-semibold text-[#16a34a]">{{ estimatedCarbon }}</span>
          </div>
        </section>

        <section class="mt-5">
          <label class="text-sm font-bold text-[#111827]">
            요청 메시지 <span class="text-[#ef4444]">*</span>
          </label>
          <textarea
            v-model="requestMessage"
            placeholder="판매자에게 전달할 메시지를 입력해주세요&#10;(예: 대여 조건, 배송 가능 여부, 추가 문의 사항 등)"
            class="mt-2 min-h-[96px] w-full resize-none rounded-[12px] border border-[#e6dddd] bg-white px-4 py-3 text-sm leading-6 text-[#111827] outline-none transition placeholder:text-[#94a3b8] focus:border-[#8cc7c4]"
          />
          <p class="mt-2 text-xs text-[#94a3b8]">구체적인 요청 사항을 작성하면 빠른 답변을 받을 수 있습니다</p>
        </section>

        <p v-if="submitError" class="mt-3 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
          {{ submitError }}
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <button type="button" :disabled="isSubmitting" class="h-11 rounded-[12px] border border-[#e0d7d7] bg-white text-sm font-semibold text-[#111827] transition hover:border-[#c9bec0] disabled:opacity-60" @click="closeRentalModal">
            취소
          </button>
          <button type="button" :disabled="isSubmitting" class="flex h-11 items-center justify-center gap-2 rounded-[12px] bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626] disabled:cursor-not-allowed disabled:opacity-60" @click="submitRentalRequest">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 2v4M16 2v4M3.5 9.5h17M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ isSubmitting ? "요청 중..." : "대여 요청" }}
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
