<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { materials, type MaterialItem } from "@/data/materials";

const props = defineProps<{
  id: string;
}>();

const router = useRouter();
const quantity = ref(1);
const startDate = ref("");
const endDate = ref("");
const isRentalModalOpen = ref(false);
const requestMessage = ref("");

// TODO(API): 추후 id 기반 상세 API 호출로 대체. 현재는 mock 데이터 조회.
const FALLBACK_MATERIAL: MaterialItem = {
  id: "chair-rental",
  tradeType: "rental",
  image: "https://via.placeholder.com/1200x700?text=Rental+Item",
  category: "가구",
  condition: "최상",
  title: "행사용 접이식 의자",
  desc: "행사 현장에서 사용한 접이식 의자입니다. 가볍고 적재가 쉬워 단기 프로젝트에 적합합니다.",
  location: "서울 마포구",
  price: 25000,
  priceLabel: "25,000원",
  stock: 150,
  stockLabel: "150개 보유",
  carbon: "45kg CO2",
  seller: "이벤트플러스",
  rating: "4.9",
  badgeLabel: "대여",
  registeredAt: "2026-04-04",
};

const material = computed(() => {
  const found = materials.find((item) => item.id === props.id) ?? FALLBACK_MATERIAL;
  return { ...found, description: found.desc };
});

const maxStock = computed(() => (typeof material.value.stock === "number" ? material.value.stock : 150));

const rentalDays = computed(() => {
  if (!startDate.value || !endDate.value) return 1;
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
});

const estimatedPrice = computed(() => {
  const price = typeof material.value.price === "number" ? material.value.price : 0;
  return `${(price * quantity.value * rentalDays.value).toLocaleString()}원`;
});

const estimatedCarbon = computed(() => `${(45 * quantity.value * rentalDays.value).toFixed(1)}kg CO₂`);
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
  isRentalModalOpen.value = true;
};
const closeRentalModal = () => {
  isRentalModalOpen.value = false;
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
      <div class="grid gap-6 lg:grid-cols-[1fr_384px]">
        <section class="space-y-6">
          <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
            <img :src="material.image" alt="대여 상품 이미지" class="h-[440px] w-full object-cover" />
          </div>
          <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h1 class="text-[32px] font-bold tracking-[-0.03em]">{{ material.title }}</h1>
            <div class="mt-3 flex items-end gap-2">
              <span class="text-[34px] font-bold text-[#db1a1a]">{{ material.price }}원</span>
              <span class="pb-1 text-sm text-[#6a7282]">/ 1일</span>
            </div>
            <div class="mt-6 grid gap-4 rounded-[16px] bg-[#f9fafb] p-5 sm:grid-cols-3">
              <div><p class="text-xs text-[#6a7282]">보유 수량</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ material.stockLabel }}</p></div>
              <div><p class="text-xs text-[#6a7282]">위치</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ material.location }}</p></div>
              <div><p class="text-xs text-[#6a7282]">등록일</p><p class="mt-1 text-base font-semibold text-[#101828]">{{ material.registeredAt }}</p></div>
            </div>
            <div class="mt-6"><h2 class="text-lg font-semibold">상세 설명</h2><p class="mt-3 text-sm text-[#475569]">{{ material.description }}</p></div>
          </article>
        </section>
        <aside class="space-y-6">
          <article class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h2 class="text-lg font-bold">대여 정보</h2>
            <div class="mt-5 space-y-4">
              <div><label class="block text-sm font-medium text-[#1a1a1a]">수량</label><div class="mt-2 flex items-center gap-2"><button class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="decrementQuantity">-</button><span class="min-w-[48px] text-center text-lg font-semibold">{{ quantity }}</span><button class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="incrementQuantity">+</button></div></div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 시작일</label><input type="date" v-model="startDate" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 종료일</label><input type="date" v-model="endDate" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
            </div>
            <div class="mt-6 rounded-[16px] bg-[#f9fafb] p-4"><p class="text-sm text-[#6b7280]">예상 대여 기간</p><p class="mt-2 text-2xl font-bold text-[#2c687b]">{{ rentalDays }}일</p><p class="mt-3 text-sm text-[#475569]">예상 결제금액: {{ estimatedPrice }}</p><p class="text-sm text-[#475569]">탄소절감 예상: {{ estimatedCarbon }}</p></div>
            <button class="mt-6 w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white" @click="openRentalModal">대여 요청</button>
          </article>
        </aside>
      </div>
    </div>

    <div v-if="isRentalModalOpen" class="fixed inset-0 z-[70] flex items-center justify-center bg-[#101828]/45 px-4 py-8 backdrop-blur-[2px]" @click.self="closeRentalModal">
      <div class="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[20px] border border-[#ece3e3] bg-[#fff8f8] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold tracking-[-0.02em] text-[#111827]">대여 요청</h2>
            <p class="mt-1 text-sm font-medium text-[#64748b]">{{ material.title }}</p>
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
            <span class="text-sm font-bold text-[#111827]">{{ material.seller ?? "이벤트플러스" }}</span>
          </div>
          <div class="mt-3 flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">단가</span>
            <span class="text-base font-bold text-[#ef4444]">{{ material.price.toLocaleString() }}원 / 개 / 일</span>
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
            <span class="text-sm text-[#475569]">예상 금액</span>
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

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <button type="button" class="h-11 rounded-[12px] border border-[#e0d7d7] bg-white text-sm font-semibold text-[#111827] transition hover:border-[#c9bec0]" @click="closeRentalModal">
            취소
          </button>
          <button type="button" class="flex h-11 items-center justify-center gap-2 rounded-[12px] bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="closeRentalModal">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 2v4M16 2v4M3.5 9.5h17M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            대여 요청
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
