<script setup>
import { computed } from 'vue';
import RentalForm from '../components/RentalForm.vue';
import mascotSrc from '../assets/figma-mascot-original.svg';
import logoIconSrc from '../assets/figma-logo-icon-original.svg';

const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['change-page']);

// 상품 정보 (props에서 받거나 기본값 사용)
const material = computed(() => {
  const defaultMaterial = {
    id: 1,
    name: '행사용 접이식 의자',
    price: 25000,
    unit: '개/일',
    category: '가구',
    condition: '최상',
    image: 'https://via.placeholder.com/600x500?text=Event+Chair',
    stock: 150,
    location: '서울 마포구',
    registeredDate: '2026-04-04',
    description: '컨퍼런스에서 2회 사용한 접이식 의자입니다. 가벼운 플라스틱 소재로 이동과 보관이 편리합니다. 청소 완료 상태로 즉시 사용 가능합니다.',
    carbonReduction: 45,
    seller: {
      name: '이벤트플러스',
      rating: 4.9,
      reviews: 128,
    },
  };

  if (!props.product) {
    return defaultMaterial;
  }
  
  return {
    id: props.product.id || 1,
    name: props.product.title || '상품명',
    price: typeof props.product.price === 'string' 
      ? parseInt(props.product.price.replace(/[^0-9]/g, '')) 
      : props.product.price || 0,
    unit: props.product.unit || '개/일',
    category: props.product.category || '기타',
    condition: props.product.condition || '중고',
    image: props.product.image || 'https://via.placeholder.com/600x500?text=No+Image',
    stock: typeof props.product.stock === 'string'
      ? parseInt(props.product.stock.replace(/[^0-9]/g, ''))
      : props.product.stock || 1,
    location: props.product.location || '지역 미지정',
    registeredDate: props.product.registeredDate || new Date().toISOString().split('T')[0],
    description: props.product.desc || props.product.description || '상품 설명이 없습니다.',
    carbonReduction: typeof props.product.carbon === 'string'
      ? parseInt(props.product.carbon.replace(/[^0-9]/g, ''))
      : props.product.carbon || 0,
    seller: props.product.seller || {
      name: '판매자',
      rating: 4.5,
      reviews: 0,
    },
  };
});

const navItems = [
  { label: '자재 마켓', page: 'marketplace', icon: 'M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7' },
  { label: 'AI 분석', icon: 'M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0' },
  { label: '자재 등록', page: 'register-material', icon: 'M12 5v14M5 12h14' },
  { label: '거래현황', icon: 'M4 19V5M8 17v-6M12 17V7M16 17v-3M20 19H4' },
];

const serviceLinks = ['자재 마켓', 'AI 분석', '자재 등록', '대시보드'];
const supportLinks = ['공지사항', 'FAQ', '문의하기'];

const goBack = () => {
  emit('change-page', 'marketplace');
};
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
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

    <!-- Main Content -->
    <main class="mx-auto max-w-[1443px] px-5 py-8 sm:px-8 lg:px-20">
      <div class="grid gap-6 lg:grid-cols-[1fr_384px]">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Product Image -->
          <div class="overflow-hidden rounded-[14px] bg-white shadow-sm">
            <div class="relative h-[500px] w-full bg-[#f3f4f6]">
              <img
                :src="material.image"
                :alt="material.name"
                class="h-full w-full object-cover"
              />
            </div>
          </div>

          <!-- Product Info -->
          <div class="rounded-[14px] bg-white p-6 shadow-sm">
            <!-- Badges -->
            <div class="mb-6 flex flex-wrap gap-2">
              <div class="rounded-[10px] bg-[rgba(140,199,196,0.2)] px-3 py-2">
                <p class="text-[14px] font-medium text-[#2c687b]">{{ material.category }}</p>
              </div>
              <div class="rounded-[10px] bg-[#f0fdf4] px-3 py-2">
                <p class="text-[14px] font-medium text-[#008236]">{{ material.condition }}</p>
              </div>
              <div class="flex items-center gap-2 rounded-[10px] bg-[#f3e8ff] px-3 py-2">
                <svg class="size-4 text-[#8200db]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M2 12h20" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="text-[14px] font-medium text-[#8200db]">대여</p>
              </div>
            </div>

            <!-- Product Name -->
            <h1 class="mb-4 text-[30px] font-bold text-[#101828]">{{ material.name }}</h1>

            <!-- Price -->
            <div class="mb-8 flex items-baseline gap-2">
              <p class="text-[36px] font-bold text-[#db1a1a]">{{ material.price.toLocaleString() }}원</p>
              <p class="text-[18px] text-[#4a5565]">/ {{ material.unit }}</p>
            </div>

            <!-- Info Grid -->
            <div class="mb-8 rounded-[10px] bg-[#f9fafb] p-4">
              <div class="grid gap-4 md:grid-cols-3">
                <div class="flex items-start gap-3">
                  <svg class="mt-1 size-5 text-[#4a5565]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div>
                    <p class="text-xs text-[#6a7282]">재고</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a]">{{ material.stock }}개</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="mt-1 size-5 text-[#4a5565]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div>
                    <p class="text-xs text-[#6a7282]">위치</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a]">{{ material.location }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="mt-1 size-5 text-[#4a5565]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div>
                    <p class="text-xs text-[#6a7282]">등록일</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a]">{{ material.registeredDate }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8 border-t border-[#e5e7eb] pt-6">
              <h2 class="mb-4 text-[20px] font-bold text-[#101828]">상세 설명</h2>
              <p class="text-[16px] leading-[26px] text-[#364153]">{{ material.description }}</p>
            </div>

            <!-- ESG Effect -->
            <div class="border-t border-[#e5e7eb] pt-6">
              <h2 class="mb-4 text-[20px] font-bold text-[#101828]">ESG 효과</h2>
              <div class="rounded-[10px] border border-[#b9f8cf] bg-[#f0fdf4] p-4">
                <div class="flex items-start gap-3 pb-4">
                  <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#dcfce7]">
                    <svg class="size-5 text-[#008236]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 16c-6 2-12-1-16-8c6-2 12 1 16 8ZM4 8c0 7 5 11 12 11" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-[14px] text-[#4a5565]">탄소 절감량</p>
                    <p class="mt-1 text-[24px] font-bold text-[#008236]">{{ material.carbonReduction }}kg CO₂</p>
                  </div>
                </div>
                <p class="text-xs text-[#4a5565]">신규 자재 대비 탄소 배출 감소</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Seller Info -->
          <div class="rounded-[14px] bg-white p-6 shadow-sm">
            <h3 class="mb-4 text-[18px] font-bold text-[#101828]">판매자 정보</h3>
            <div class="flex items-start gap-3">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(140,199,196,0.2)]">
                <p class="text-[16px] font-bold text-[#2c687b]">이</p>
              </div>
              <div>
                <h4 class="text-[16px] font-bold text-[#101828]">{{ material.seller.name }}</h4>
                <div class="mt-1 flex items-center gap-1">
                  <svg class="size-4 text-[#fbbf24]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span class="text-[14px] font-medium text-[#4a5565]">{{ material.seller.rating }}</span>
                  <span class="text-[14px] text-[#99a1af]">({{ material.seller.reviews }})</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Rental Form -->
          <RentalForm />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative mt-12 overflow-hidden bg-[#2c687b] py-12 text-white">
      <img :src="mascotSrc" alt="" class="pointer-events-none absolute bottom-8 right-16 size-[200px] opacity-5" />
      <div class="mx-auto max-w-[1443px] px-5 sm:px-8 lg:px-20">
        <div class="grid gap-10 md:grid-cols-[1fr_280px_280px]">
          <div>
            <div class="flex items-center gap-3">
              <img :src="mascotSrc" alt="" class="size-10 object-contain" />
              <div>
                <strong class="block text-xl font-bold">ReMat</strong>
                <span class="text-[10px] tracking-[0.16em] text-[#99a1af]">Re + Material</span>
              </div>
            </div>
            <p class="mt-5 text-base text-white/75">ESG 기반 자재 재사용 플랫폼</p>
            <p class="mt-3 max-w-md text-sm leading-6 text-white/55">비출장 자재를 순환하고, 탄소를 절감하며, 비용을 절약하세요.</p>
          </div>
          <div>
            <h3 class="text-lg font-bold">서비스</h3>
            <ul class="mt-4 space-y-2 text-sm text-white/75">
              <li v-for="link in serviceLinks" :key="link">{{ link }}</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold">고객지원</h3>
            <ul class="mt-4 space-y-2 text-sm text-white/75">
              <li v-for="link in supportLinks" :key="link">{{ link }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-10 border-t border-white/10 pt-8 text-center text-sm text-[#99a1af]">© 2026 ReMat. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Tailwind CSS already handles styling */
</style>

