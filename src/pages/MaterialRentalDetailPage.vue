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
const startDate = ref("");
const endDate = ref("");
const message = ref("");

const material = computed(() => props.product ?? {
  image: "",
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
  registeredAt: "2026-04-04",
});

const rentalDays = computed(() => {
  if (!startDate.value || !endDate.value) return 1;
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
});

const estimatedPrice = computed(() => `${((material.value.price ?? 25000) * quantity.value * rentalDays.value).toLocaleString()}원`);
const estimatedCarbon = computed(() => `${(45 * quantity.value * rentalDays.value / 10).toFixed(1)}kg CO2`);
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
          <span class="rounded-[10px] bg-[#f3e8ff] px-3 py-1 text-xs font-semibold text-[#8200db]">대여</span>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:px-8">
      <section class="space-y-6">
        <div class="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm">
          <img :src="material.image" alt="" class="h-[440px] w-full object-cover" />
        </div>

        <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h1 class="text-[32px] font-bold tracking-[-0.03em] text-[#101828]">{{ material.title }}</h1>
          <div class="mt-3 flex items-end gap-2">
            <span class="text-[34px] font-bold text-[#db1a1a]">{{ material.priceLabel }}</span>
            <span class="pb-1 text-sm text-[#6a7282]">/ 1일 기준</span>
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
        </article>
      </section>

      <aside class="space-y-6">
        <article class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-[#101828]">대여 요청</h2>

          <div class="mt-5">
            <label class="text-sm font-medium text-[#364153]">수량 선택</label>
            <div class="mt-2 flex items-center gap-3">
              <button type="button" class="grid size-10 place-items-center rounded-xl border border-black/10 bg-[#fff6f6]" :disabled="quantity <= 1" @click="quantity = Math.max(1, quantity - 1)">-</button>
              <input v-model.number="quantity" type="number" min="1" class="h-11 flex-1 rounded-xl border border-[#d1d5dc] bg-white px-4 text-center text-sm font-semibold outline-none focus:border-[#8cc7c4]" />
              <button type="button" class="grid size-10 place-items-center rounded-xl border border-black/10 bg-[#fff6f6]" @click="quantity += 1">+</button>
            </div>
          </div>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label class="text-sm font-medium text-[#364153]">시작일</label>
              <input v-model="startDate" type="date" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none focus:border-[#8cc7c4]" />
            </div>
            <div>
              <label class="text-sm font-medium text-[#364153]">종료일</label>
              <input v-model="endDate" type="date" class="mt-2 h-11 w-full rounded-xl border border-[#d1d5dc] bg-white px-4 text-sm outline-none focus:border-[#8cc7c4]" />
            </div>
          </div>

          <div class="mt-5 rounded-[16px] bg-[#f9fafb] p-4">
            <div class="flex items-center justify-between text-sm text-[#4a5565]">
              <span>예상 기간</span>
              <span>{{ rentalDays }}일</span>
            </div>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-sm text-[#4a5565]">예상 금액</span>
              <span class="text-2xl font-bold text-[#db1a1a]">{{ estimatedPrice }}</span>
            </div>
            <div class="mt-2 flex items-center justify-between text-sm">
              <span class="text-[#4a5565]">예상 탄소 절감</span>
              <span class="font-semibold text-[#00a63e]">{{ estimatedCarbon }}</span>
            </div>
          </div>

          <div class="mt-5">
            <label class="text-sm font-medium text-[#364153]">요청 메시지</label>
            <textarea
              v-model="message"
              placeholder="납품 일정, 설치 지원 여부, 추가 요청사항을 남겨주세요."
              class="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-[#d1d5dc] bg-white px-4 py-3 text-sm outline-none focus:border-[#8cc7c4]"
            ></textarea>
          </div>

          <div class="mt-5 space-y-3">
            <button type="button" class="flex h-12 w-full items-center justify-center rounded-xl bg-[#db1a1a] text-sm font-semibold text-white">대여 요청하기</button>
            <p class="text-center text-xs text-[#6a7282]">판매자 확인 후 상세 거래 조건을 조율할 수 있습니다.</p>
          </div>
        </article>

        <article class="rounded-[20px] border border-[#b9f8cf] bg-[linear-gradient(135deg,#f0fdf4_0%,#effdf6_100%)] p-5 shadow-sm">
          <h3 class="text-sm font-bold text-[#2c687b]">안전 거래 안내</h3>
          <ul class="mt-3 space-y-2 text-sm text-[#4a5565]">
            <li>검수된 판매자와 거래할 수 있습니다.</li>
            <li>대여 기간과 상태 조건을 사전 협의할 수 있습니다.</li>
            <li>반납 일정과 운송 방식은 메시지로 조율 가능합니다.</li>
          </ul>
        </article>
      </aside>
    </main>
  </div>
</template>
