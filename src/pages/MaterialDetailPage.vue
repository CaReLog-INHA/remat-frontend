<script setup lang="ts">
import { computed, ref } from "vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import SiteFooter from "@/components/home/SiteFooter.vue";
import { footerLinks, homeAssets } from "@/data/home";

const props = defineProps({
  product: {
    type: Object,
    default: () => null,
  },
});

const emit = defineEmits(["change-page"]);
const quantity = ref(1);

const material = computed(() =>
  props.product ?? {
    image: "https://via.placeholder.com/1200x700?text=Material+Image",
    category: "천재·금속",
    condition: "최상",
    title: "임시 부스용 천장 프레임",
    description: "전시회 부스에서 사용 후 보관 중인 알루미늄 프레임입니다. 재조립이 쉬워 바로 현장에 투입할 수 있습니다.",
    location: "서울 강남구",
    price: 450000,
    priceLabel: "450,000원",
    stock: 20,
    stockLabel: "20개 보유",
    carbon: "85kg CO2",
    seller: "서울전시(주)",
    rating: "4.8",
    registeredAt: "2026-04-03",
  }
);

const totalPrice = computed(() => {
  const price = typeof material.value.price === "number" ? material.value.price : 0;
  return `${(price * quantity.value).toLocaleString()}원`;
});

const goBack = () => emit("change-page", "marketplace");
const incrementQuantity = () => { quantity.value++; };
const decrementQuantity = () => { if (quantity.value > 1) quantity.value--; };
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader :logo-icon-src="homeAssets.logoIcon" :nav-items="[]" account-variant="member" @change-page="$emit('change-page', $event)" />
    <main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
            <button class="mt-4 w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white">구매 요청</button>
          </div>
        </aside>
      </div>
    </main>
    <SiteFooter :logo-icon-src="homeAssets.logoIcon" :mascot-src="homeAssets.mascot" :service-links="footerLinks.service" :support-links="footerLinks.support" />
  </div>
</template>