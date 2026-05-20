<script setup lang="ts">
import { computed, ref } from "vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import SiteFooter from "@/components/home/SiteFooter.vue";
import { footerLinks, homeAssets } from "@/data/home";

const props = defineProps({ product: { type: Object, default: () => null } });
const emit = defineEmits(["change-page"]);
const quantity = ref(1);
const startDate = ref("");
const endDate = ref("");

const material = computed(() =>
  props.product ?? {
    image: "https://via.placeholder.com/1200x700?text=Rental+Item",
    category: "가구",
    condition: "최상",
    title: "행사용 접이식 의자",
    description: "행사 현장에서 사용한 접이식 의자입니다. 가볍고 적재가 쉬워 단기 프로젝트에 적합합니다.",
    location: "서울 마포구",
    price: 25000,
    stock: 150,
    stockLabel: "150개 보유",
    registeredAt: "2026-04-04",
  }
);

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

const estimatedCarbon = computed(() => `${(45 * quantity.value * rentalDays.value).toFixed(1)}kg CO2`);
const goBack = () => emit("change-page", "marketplace");
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader :logo-icon-src="homeAssets.logoIcon" :nav-items="[]" account-variant="member" @change-page="$emit('change-page', $event)" />
    <main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
              <div><label class="block text-sm font-medium text-[#1a1a1a]">수량</label><div class="mt-2 flex items-center gap-2"><button class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="quantity = Math.max(1, quantity - 1)">-</button><span class="min-w-[48px] text-center text-lg font-semibold">{{ quantity }}</span><button class="h-10 w-10 rounded-xl bg-[#f3f4f6]" @click="quantity++">+</button></div></div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 시작일</label><input type="date" v-model="startDate" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
              <div><label class="block text-sm font-medium text-[#1a1a1a]">대여 종료일</label><input type="date" v-model="endDate" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none" /></div>
            </div>
            <div class="mt-6 rounded-[16px] bg-[#f9fafb] p-4"><p class="text-sm text-[#6b7280]">예상 대여 기간</p><p class="mt-2 text-2xl font-bold text-[#2c687b]">{{ rentalDays }}일</p><p class="mt-3 text-sm text-[#475569]">예상 결제금액: {{ estimatedPrice }}</p><p class="text-sm text-[#475569]">탄소절감 예상: {{ estimatedCarbon }}</p></div>
            <button class="mt-6 w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white">대여 요청</button>
          </article>
        </aside>
      </div>
    </main>
    <SiteFooter :logo-icon-src="homeAssets.logoIcon" :mascot-src="homeAssets.mascot" :service-links="footerLinks.service" :support-links="footerLinks.support" />
  </div>
</template>
