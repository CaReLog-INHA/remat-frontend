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
const isPurchaseModalOpen = ref(false);
const requestMessage = ref("");

// TODO(API): 추후 id 기반으로 상세 API를 호출해 대체한다.
const FALLBACK_MATERIAL: MaterialItem = {
  id: "frame-sale",
  tradeType: "sale",
  image: "https://via.placeholder.com/1200x700?text=Material+Image",
  category: "천재·금속",
  condition: "최상",
  title: "임시 부스용 천장 프레임",
  desc: "전시회 부스에서 사용 후 보관 중인 알루미늄 프레임입니다. 재조립이 쉬워 바로 현장에 투입할 수 있습니다.",
  location: "서울 강남구",
  price: 450000,
  priceLabel: "450,000원",
  stock: 20,
  stockLabel: "20개 보유",
  carbon: "85kg CO2",
  seller: "서울전시(주)",
  rating: "4.8",
  badgeLabel: "판매",
  registeredAt: "2026-04-03",
};

const material = computed(() => {
  const found = materials.find((item) => item.id === props.id) ?? FALLBACK_MATERIAL;
  return { ...found, description: found.desc };
});

const maxStock = computed(() => (typeof material.value.stock === "number" ? material.value.stock : 20));

const totalPrice = computed(() => {
  const price = typeof material.value.price === "number" ? material.value.price : 0;
  return `${(price * quantity.value).toLocaleString()}원`;
});

const totalCarbon = computed(() => {
  const raw = typeof material.value.carbon === "string" ? material.value.carbon : "0";
  const numeric = Number(raw.replace(/[^0-9.]/g, "")) || 0;
  return `${(numeric * quantity.value).toFixed(1)}kg CO₂`;
});

const goBack = () => {
  if (window.history.state?.back) router.back();
  else router.push({ name: "marketplace" });
};
const incrementQuantity = () => { quantity.value = Math.min(maxStock.value, quantity.value + 1); };
const decrementQuantity = () => { if (quantity.value > 1) quantity.value--; };
const openPurchaseModal = () => {
  requestMessage.value = "";
  isPurchaseModalOpen.value = true;
};
const closePurchaseModal = () => {
  isPurchaseModalOpen.value = false;
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
      <div class="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section class="space-y-6">
          <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
            <img :src="material.image" alt="상품 이미지" class="h-[440px] w-full object-cover" />
          </div>
          <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h1 class="text-[32px] font-bold tracking-[-0.03em]">{{ material.title }}</h1>
            <div class="mt-3 flex items-end gap-2">
              <span class="text-[34px] font-bold text-[#db1a1a]">{{ material.priceLabel }}</span>
              <span class="pb-1 text-sm text-[#6a7282]">/ 개당</span>
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
          <div class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div class="flex items-center justify-between">
              <div><p class="text-sm text-[#6b7280]">구매 수량</p><p class="mt-2 text-2xl font-bold">{{ quantity }}</p></div>
              <div class="flex flex-col items-end"><p class="text-sm text-[#6b7280]">총 금액</p><p class="mt-2 text-2xl font-bold text-[#db1a1a]">{{ totalPrice }}</p></div>
            </div>
            <div class="mt-4 flex items-center gap-2"><button class="h-9 w-9 rounded-md bg-[#f3f4f6]" @click="decrementQuantity">-</button><button class="h-9 w-9 rounded-md bg-[#f3f4f6]" @click="incrementQuantity">+</button></div>
            <button class="mt-4 w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white" @click="openPurchaseModal">구매 요청</button>
          </div>
        </aside>
      </div>
    </div>

    <div v-if="isPurchaseModalOpen" class="fixed inset-0 z-[70] flex items-center justify-center bg-[#101828]/45 px-4 py-8 backdrop-blur-[2px]" @click.self="closePurchaseModal">
      <div class="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[20px] border border-[#ece3e3] bg-[#fff8f8] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold tracking-[-0.02em] text-[#111827]">구매 요청</h2>
            <p class="mt-1 text-sm font-medium text-[#64748b]">{{ material.title }}</p>
          </div>
          <button type="button" class="grid size-8 place-items-center rounded-full text-[#6b7280] transition hover:bg-white" @click="closePurchaseModal">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <section class="mt-5 rounded-[14px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div class="flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">판매자</span>
            <span class="text-sm font-bold text-[#111827]">{{ material.seller }}</span>
          </div>
          <div class="mt-3 flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">단가</span>
            <span class="text-base font-bold text-[#ef4444]">{{ material.priceLabel }} / 개</span>
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
          <p class="mt-2 text-xs text-[#94a3b8]">최대 {{ maxStock }}개 구매 가능</p>
        </section>

        <section class="mt-5 rounded-[14px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div class="flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">예상 금액</span>
            <span class="text-2xl font-bold tracking-[-0.02em] text-[#ef4444]">{{ totalPrice }}</span>
          </div>
          <div class="mt-3 flex items-center justify-between gap-4">
            <span class="text-sm text-[#475569]">예상 탄소 절감</span>
            <span class="text-base font-semibold text-[#16a34a]">{{ totalCarbon }}</span>
          </div>
        </section>

        <section class="mt-5">
          <label class="text-sm font-bold text-[#111827]">
            요청 메시지 <span class="text-[#ef4444]">*</span>
          </label>
          <textarea
            v-model="requestMessage"
            placeholder="판매자에게 전달할 메시지를 입력해주세요&#10;(예: 배송 가능 여부, 추가 문의 사항 등)"
            class="mt-2 min-h-[96px] w-full resize-none rounded-[12px] border border-[#e6dddd] bg-white px-4 py-3 text-sm leading-6 text-[#111827] outline-none transition placeholder:text-[#94a3b8] focus:border-[#8cc7c4]"
          />
          <p class="mt-2 text-xs text-[#94a3b8]">구체적인 요청 사항을 작성하면 빠른 답변을 받을 수 있습니다</p>
        </section>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <button type="button" class="h-11 rounded-[12px] border border-[#e0d7d7] bg-white text-sm font-semibold text-[#111827] transition hover:border-[#c9bec0]" @click="closePurchaseModal">
            취소
          </button>
          <button type="button" class="flex h-11 items-center justify-center gap-2 rounded-[12px] bg-[#ef4444] text-sm font-semibold text-white transition hover:bg-[#dc2626]" @click="closePurchaseModal">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6h15l-1.5 8.5H8L6 4H3m5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            구매 요청
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
