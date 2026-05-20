<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => null,
  },
});

const emit = defineEmits(["change-page"]);
const quantity = ref(1);

const material = computed(() => props.product ?? {
  image: "",
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
  registeredAt: "2026-04-03",
});

const totalPrice = computed(() => {
  const price = typeof material.value.price === "number" ? material.value.price : 450000;
  return `${(price * quantity.value).toLocaleString()}원`;
});
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6]">
    <header class="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" class="inline-flex items-center gap-2 text-sm font-medium text-[#4a5565]" @click="$emit('change-page', 'marketplace')">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          목록으로 돌아가기
        </button>
        <div class="flex gap-2">
          <span class="rounded-[10px] bg-[#8cc7c4]/20 px-3 py-1 text-xs font-semibold text-[#2c687b]">{{ material.category }}</span>
          <span class="rounded-[10px] bg-[#f0fdf4] px-3 py-1 text-xs font-semibold text-[#008236]">{{ material.condition }}</span>
          <span class="rounded-[10px] bg-[#dbeafe] px-3 py-1 text-xs font-semibold text-[#1447e6]">판매</span>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
      <section class="space-y-6">
        <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
          <img :src="material.image" alt="" class="h-[440px] w-full object-cover" />
        </div>

        <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h1 class="text-[32px] font-bold tracking-[-0.03em] text-[#101828]">{{ material.title }}</h1>
          <div class="mt-3 flex items-end gap-2">
            <span class="text-[34px] font-bold text-[#db1a1a]">{{ material.priceLabel }}</span>
            <span class="pb-1 text-sm text-[#6a7282]">/ 개당</span>
          </div>

          <div class="mt-6 grid gap-4 rounded-[16px] bg-[#f9fafb] p-5 sm:grid-cols-3">
            <div>
              <p class="text-xs text-[#6a7282]">보유 수량</p>
              <p class="mt-1 text-base font-semibold text-[#101828]">{{ material.stockLabel }}</p>
            </div>
            <div>
              <p class="text-xs text-[#6a7282]">위치</p>
              <p class="mt-1 text-base font-semibold text-[#101828]">{{ material.location }}</p>
            </div>
            <div>
              <p class="text-xs text-[#6a7282]">등록일</p>
              <p class="mt-1 text-base font-semibold text-[#101828]">{{ material.registeredAt }}</p>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-xl font-bold text-[#101828]">상세 설명</h2>
            <p class="mt-3 text-base leading-7 text-[#364153]">{{ material.desc }}</p>
          </div>

          <div class="mt-8 rounded-[16px] border border-[#b9f8cf] bg-[linear-gradient(135deg,#f0fdf4_0%,#effdf6_100%)] p-5">
            <p class="text-sm font-medium text-[#4a5565]">예상 ESG 효과</p>
            <p class="mt-2 text-[28px] font-bold text-[#008236]">{{ material.carbon }}</p>
            <p class="mt-1 text-sm text-[#4a5565]">신규 자재 생산을 대체하며 발생하는 예상 탄소 절감량입니다.</p>
          </div>
        </article>
      </section>

      <aside class="space-y-6">
        <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-[#101828]">판매자 정보</h2>
          <div class="mt-4 flex items-center gap-3">
            <div class="grid size-12 place-items-center rounded-full bg-[#8cc7c4]/20 text-base font-bold text-[#2c687b]">
              {{ material.seller?.slice?.(0, 1) || "R" }}
            </div>
            <div>
              <p class="font-semibold text-[#101828]">{{ material.seller }}</p>
              <p class="text-sm text-[#6a7282]">평점 {{ material.rating }}</p>
            </div>
          </div>
        </article>

        <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-[#101828]">구매 요청</h2>
          <div class="mt-5">
            <label class="text-sm font-medium text-[#364153]">수량 선택</label>
            <div class="mt-2 flex items-center gap-3">
              <button type="button" class="grid size-10 place-items-center rounded-xl border border-black/10 bg-[#fff6f6]" :disabled="quantity <= 1" @click="quantity = Math.max(1, quantity - 1)">-</button>
              <input v-model.number="quantity" type="number" min="1" class="h-11 flex-1 rounded-xl border border-[#d1d5dc] bg-white px-4 text-center text-sm font-semibold outline-none focus:border-[#8cc7c4]" />
              <button type="button" class="grid size-10 place-items-center rounded-xl border border-black/10 bg-[#fff6f6]" @click="quantity += 1">+</button>
            </div>
          </div>

          <div class="mt-5 rounded-[16px] bg-[#f9fafb] p-4">
            <p class="text-sm text-[#4a5565]">예상 결제 금액</p>
            <p class="mt-2 text-2xl font-bold text-[#db1a1a]">{{ totalPrice }}</p>
          </div>

          <div class="mt-5 space-y-3">
            <button type="button" class="flex h-12 w-full items-center justify-center rounded-xl bg-[#1447e6] text-sm font-semibold text-white">구매 요청</button>
            <button type="button" class="flex h-12 w-full items-center justify-center rounded-xl border border-[#d1d5dc] text-sm font-semibold text-[#1a1a1a]">채팅하기</button>
            <button type="button" class="flex h-12 w-full items-center justify-center rounded-xl border border-[#d1d5dc] text-sm font-semibold text-[#1a1a1a]">찜하기</button>
          </div>
        </article>
      </aside>
    </main>
  </div>
</template>
