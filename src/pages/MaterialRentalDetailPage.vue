<script setup lang="ts">
import { computed, ref } from 'vue';
import SiteHeader from "@/components/home/SiteHeader.vue";
import SiteFooter from "@/components/home/SiteFooter.vue";
import { footerLinks, homeAssets } from '@/data/home';

const props = defineProps({
  product: {
    type: Object,
    default: () => null,
  },
});

const emit = defineEmits(['change-page']);

const quantity = ref(1);
const startDate = ref('');
const endDate = ref('');

const material = computed(() => props.product ?? {
  image: 'https://via.placeholder.com/800x600?text=No+Image',
  title: '행사용 접이식 의자',
  price: 25000,
  priceLabel: '25,000원',
  stock: 150,
  stockLabel: '150개 보유',
  location: '서울 마포구',
  registeredAt: '2026-04-04',
  description: '행사용 접이식 의자입니다. 상태 양호.',
});

const rentalDays = computed(() => {
  if (!startDate.value || !endDate.value) return 1;
  const s = new Date(startDate.value);
  const e = new Date(endDate.value);
  const diff = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
});

const estimatedPrice = computed(() => `${(material.value.price * quantity.value * rentalDays.value).toLocaleString()}원`);

const goBack = () => emit('change-page', 'marketplace');
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader :logo-icon-src="homeAssets.logoIcon" :nav-items="[]" account-variant="member" @change-page="$emit('change-page', $event)" />

    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header class="mb-6">
        <button class="inline-flex items-center gap-2 text-sm text-[#4a5565]" @click="goBack">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          목록으로 돌아가기
        </button>
      </header>

      <div class="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section class="space-y-6">
          <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
            <img :src="material.image" alt="" class="h-[440px] w-full object-cover" />
          </div>

          <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h1 class="text-[32px] font-bold">{{ material.title }}</h1>
            <p class="mt-4 text-sm text-[#4a5565]">{{ material.description }}</p>
            <div class="mt-6 flex items-end gap-2">
              <span class="text-[28px] font-bold text-[#db1a1a]">{{ material.priceLabel }}</span>
              <span class="pb-1 text-sm text-[#6a7282]">/ 1일</span>
            </div>
          </article>
        </section>

        <aside class="space-y-6">
          <div class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <p class="text-sm text-[#4a5565]">대여 수량</p>
            <div class="mt-3 flex items-center gap-3">
              <button class="h-9 w-9 rounded-md bg-[#f3f4f6]" @click="quantity > 1 ? quantity-- : null">-</button>
              <span class="text-lg font-medium">{{ quantity }}</span>
              <button class="h-9 w-9 rounded-md bg-[#f3f4f6]" @click="quantity++">+</button>
            </div>

            <div class="mt-4">
              <p class="text-sm text-[#4a5565]">대여 기간</p>
              <div class="mt-2 flex gap-2">
                <input type="date" v-model="startDate" class="h-9 rounded-md border px-2" />
                <input type="date" v-model="endDate" class="h-9 rounded-md border px-2" />
              </div>
            </div>

            <div class="mt-6">
              <p class="text-sm text-[#4a5565]">예상 요금</p>
              <p class="mt-2 text-lg font-semibold">{{ estimatedPrice }}</p>
            </div>

            <div class="mt-6">
              <button class="w-full rounded-xl bg-[#2c687b] px-4 py-3 text-white">대여 요청하기</button>
            </div>
          </div>

          <div class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <p class="text-sm text-[#4a5565]">판매자</p>
            <p class="mt-2 text-lg font-semibold">이벤트플러스</p>
          </div>
        </aside>
      </div>
    </main>

    <SiteFooter :logo-icon-src="homeAssets.logoIcon" :mascot-src="homeAssets.mascot" :service-links="footerLinks.service" :support-links="footerLinks.support" />
  </div>
</template>
