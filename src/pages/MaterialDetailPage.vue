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
const goBack = () => {
  emit('change-page', 'marketplace');
};

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const navItems = [
  { label: '자재 마켓', page: 'marketplace', icon: 'M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7' },
  { label: 'AI 분석', icon: 'M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0' },
  { label: '자재 등록', page: 'register-material', icon: 'M12 5v14M5 12h14' },
  { label: '거래현황', icon: 'M4 19V5M8 17v-6M12 17V7M16 17v-3M20 19H4' },
];

// Asset URLs from Figma
const assets = {
  backIcon: "http://localhost:3845/assets/9a8770fdd4ae98648115cd4a5c0c533f14872709.svg",
  saleIcon: "http://localhost:3845/assets/4dc31021011ebe2981d72e3a7270807c4420e800.svg",
  stockIcon: "http://localhost:3845/assets/8593532100f3b1f01a8efb2d756cbe28c2a850bd.svg",
  locationIcon: "http://localhost:3845/assets/1cd92021868e60835bf116e16ae3c1aa1e7a704f.svg",
  dateIcon: "http://localhost:3845/assets/18400ebc5057768320e125189286cfe457d6d02b.svg",
  carbonIcon: "http://localhost:3845/assets/87e6362742563bb1e015b3092dee26fca2ee9dc2.svg",
  sellerIcon: "http://localhost:3845/assets/49c09e3aae36bed2ecf90c7e0457270a991a4e86.svg",
  ratingIcon: "http://localhost:3845/assets/590f9da7c9dfa6277a675a178355dd8236066277.svg",
  requestIcon: "http://localhost:3845/assets/582e6d3125a42ba204b04bd110c99abcd68b0334.svg",
};
</script>

<template>
  <div class="bg-[#fff6f6] flex flex-col min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white shadow-sm">
      <div class="mx-auto flex h-16 max-w-[1443px] items-center justify-between px-5 sm:px-8 lg:px-20">
        <button
          type="button"
          class="flex items-center gap-2 rounded-[10px] px-3 py-2 text-[#4a5565] transition hover:bg-[#fff6f6]"
          @click="goBack"
        >
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="text-[16px] font-medium">뒤로 가기</span>
        </button>

        <nav class="hidden items-center gap-2 lg:flex" aria-label="주요 메뉴">
          <button
            v-for="item in navItems"
            :key="item.label"
            type="button"
            :class="[
              'inline-flex h-9 items-center gap-2 rounded-[10px] px-4 text-sm transition',
              'text-[#364153] hover:bg-[#fff6f6]',
            ]"
            @click="item.page ? $emit('change-page', item.page) : undefined"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path :d="item.icon" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ item.label }}
          </button>
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="hidden h-8 items-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] sm:inline-flex"
          >
            <svg class="size-4 text-[#2c687b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10" stroke-linecap="round" />
            </svg>
            마이페이지
          </button>
          <button
            type="button"
            class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a]"
            @click="$emit('change-page', 'login')"
          >
            로그아웃
          </button>
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
    <!-- Main Content -->
    <div class="flex-1 max-w-[1443px] mx-auto w-full px-5 py-8 sm:px-8 lg:px-20">
      <div class="grid gap-6 lg:grid-cols-[1fr_384px]">
        <!-- Left Column - Product Info -->
        <div class="space-y-6">
          <!-- Product Image -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden mb-[24px]">
            <div class="bg-[#f3f4f6] w-full h-[500px]">
              <img
                :src="product.image"
                alt="상품 이미지"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Product Details -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] p-[24px]">
            <!-- Tags -->
            <div class="flex gap-[8px] mb-[24px]">
              <div class="bg-[rgba(140,199,196,0.2)] text-[#2c687b] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] whitespace-nowrap">
                {{ product.category }}
              </div>
              <div class="bg-[#f0fdf4] text-[#008236] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] whitespace-nowrap">
                {{ product.condition }}
              </div>
              <div class="bg-[#dbeafe] text-[#1447e6] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] flex items-center gap-[8px]">
                <img :src="assets.saleIcon" alt="판매" class="w-[16px] h-[16px]" />
                판매
              </div>
            </div>

            <!-- Title -->
            <h1 class="text-[30px] font-bold text-[#101828] mb-[16px] tracking-[0.3955px]">
              {{ product.title }}
            </h1>

            <!-- Price -->
            <div class="flex items-baseline gap-[8px] mb-[24px]">
              <span class="text-[36px] font-bold text-[#db1a1a] tracking-[0.3691px]">{{ product.price }}</span>
              <span class="text-[18px] text-[#4a5565] tracking-[-0.4395px]">/ 개</span>
            </div>

            <!-- Info Box -->
            <div class="bg-[#f9fafb] rounded-[10px] p-[16px] mb-[24px]">
              <div class="grid grid-cols-2 gap-[16px]">
                <!-- Stock -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.stockIcon" alt="재고" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">재고</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">{{ product.stock }}</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.locationIcon" alt="위치" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">위치</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">{{ product.location }}</p>
                  </div>
                </div>

                <!-- Date -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.dateIcon" alt="등록일" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">등록일</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">2026-04-03</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-[#e5e7eb] my-[24px]"></div>

            <!-- Description -->
            <div>
              <h2 class="text-[20px] font-bold text-[#101828] mb-[12px] tracking-[-0.4492px]">상세 설명</h2>
              <p class="text-[16px] text-[#364153] leading-[26px] tracking-[-0.3125px]">
                {{ product.desc }}
              </p>
            </div>

            <!-- Divider -->
            <div class="border-t border-[#e5e7eb] my-[24px]"></div>

            <!-- ESG Effect -->
            <div>
              <h2 class="text-[20px] font-bold text-[#101828] mb-[16px] tracking-[-0.4492px]">ESG 효과</h2>
              <div class="bg-[#f0fdf4] border border-[#b9f8cf] rounded-[10px] p-[17px]">
                <div class="flex items-start gap-[12px] mb-[16px]">
                  <div class="bg-[#dcfce7] rounded-[10px] p-[10px] flex-shrink-0">
                    <img :src="assets.carbonIcon" alt="탄소" class="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <p class="text-[14px] text-[#4a5565] tracking-[-0.1504px]">탄소 절감량</p>
                    <p class="text-[24px] font-bold text-[#008236] tracking-[0.0703px]">{{ product.carbon }} CO₂</p>
                  </div>
                </div>
                <p class="text-[12px] text-[#4a5565]">신규 자재 대비 탄소 배출 감소</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Seller & Transaction -->
        <div class="space-y-6">
          <!-- Seller Info -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] p-[24px] mb-[24px]">
            <h3 class="text-[18px] font-bold text-[#101828] mb-[16px] tracking-[-0.4395px]">판매자 정보</h3>
            <div class="flex items-center gap-[12px]">
              <!-- Avatar -->
              <div class="w-[48px] h-[48px] rounded-full bg-[rgba(140,199,196,0.2)] flex items-center justify-center flex-shrink-0">
                <span class="text-[16px] font-bold text-[#2c687b]">서</span>
              </div>
              <!-- Seller Details -->
              <div>
                <p class="text-[16px] font-bold text-[#101828] tracking-[-0.3125px]">서울전시(주)</p>
                <div class="flex items-center gap-[4px]">
                  <img :src="assets.ratingIcon" alt="평점" class="w-[16px] h-[16px]" />
                  <span class="text-[14px] font-medium text-[#4a5565] tracking-[-0.1504px]">4.8</span>
                </div>
              </div>
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
