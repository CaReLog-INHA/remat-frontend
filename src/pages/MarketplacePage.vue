<script setup>
import logoIconSrc from '../assets/figma-logo-icon-original.svg';
import mascotSrc from '../assets/figma-mascot-original.svg';
import materialChair from '../assets/material-chair.png';
import materialFrame from '../assets/material-frame.png';
import materialPallets from '../assets/material-pallets.png';

const emit = defineEmits(['change-page']);

const handleMaterialClick = (material) => {
  const page = material.tradeType === 'sale' ? 'material-detail' : 'material-rental-detail';
  emit('change-page', page, material);
};

const navItems = [
  { label: '자재 마켓', page: 'marketplace', active: true, icon: 'M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7' },
  { label: 'AI 분석', icon: 'M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0' },
  { label: '자재 등록', page: 'register-material', icon: 'M12 5v14M5 12h14' },
  { label: '거래현황', icon: 'M4 19V5M8 17v-6M12 17V7M16 17v-3M20 19H4' },
];

const filters = [
  { label: '카테고리', value: '전체' },
  { label: '상태', value: '전체 상태' },
  { label: '지역', value: '전체 지역' },
  { label: '거래 유형', value: '전체' },
];

const materials = [
  {
    tradeType: 'sale',
    image: materialFrame,
    category: '철재/금속',
    condition: '최상',
    title: '전시 부스용 철재 프레임',
    desc: '전시회에서 한 번 사용한 철재 프레임입니다. 높이 2.4m, 폭 1.2m 규격으로 조립이 간편합니다.',
    location: '서울 강남구',
    price: '450,000원',
    stock: '20개 보유',
    carbon: '85kg',
  },
  {
    tradeType: 'sale',
    image: materialPallets,
    category: '목재',
    condition: '양호',
    title: '목재 팔레트 대량 판매',
    desc: '물류창고에서 사용하던 목재 팔레트입니다. 표준 규격으로 적재 용도에 적합합니다.',
    location: '경기 안산시',
    price: '15,000원',
    stock: '100개 보유',
    carbon: '12kg',
  },
  {
    tradeType: 'rental',
    image: materialChair,
    category: '가구',
    condition: '최상',
    title: '행사용 접이식 의자',
    desc: '컨퍼런스에서 2회 사용한 접이식 의자입니다. 가벼운 플라스틱 소재로 이동과 보관이 편리합니다.',
    location: '서울 마포구',
    price: '25,000원',
    stock: '150개 보유',
    carbon: '45kg',
  },
  {
    tradeType: 'rental',
    image: materialFrame,
    category: '파티션/칸막이',
    condition: '양호',
    title: '전시 부스 파티션',
    desc: '브랜드 전시 부스 제작에 사용된 파티션입니다. 높이 2.5m, 폭 1m의 독립형 구조물입니다.',
    location: '인천 남동구',
    price: '180,000원',
    stock: '30개 보유',
    carbon: '95kg',
  },
  {
    tradeType: 'rental',
    image: materialPallets,
    category: '창고/물류',
    condition: '양호',
    title: '창고 보관용 선반 렉',
    desc: '중고 이관으로 활용되던 중량 선반 렉입니다. 5단 구조로 분해와 조립이 가능합니다.',
    location: '경기 화성시',
    price: '320,000원',
    stock: '15세트 보유',
    carbon: '120kg',
  },
  {
    tradeType: 'rental',
    image: materialChair,
    category: '철재/금속',
    condition: '보통',
    title: '건축 자재 철근 바',
    desc: '건축 현장에서 여유분으로 남은 철근 자재입니다. 일부 표면 녹이 있으나 구조적 강도는 양호합니다.',
    location: '충남 천안시',
    price: '650,000원',
    stock: '50개 보유',
    carbon: '180kg',
  },
];

const serviceLinks = ['자재 마켓', 'AI 분석', '자재 등록', '대시보드'];
const supportLinks = ['공지사항', 'FAQ', '문의하기'];
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <header class="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white shadow-sm">
      <div class="mx-auto flex h-16 max-w-[1323px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <button type="button" class="flex items-center gap-3" @click="$emit('change-page', 'home')">
          <span class="relative grid size-11 place-items-center rounded-[14px] bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_50%,#db1a1a_100%)]">
            <span class="grid size-10 place-items-center rounded-[10px] bg-white">
              <img :src="logoIconSrc" alt="" class="size-6" />
            </span>
            <span class="absolute -right-1 -top-1 size-2 rounded-full bg-[#db1a1a]"></span>
          </span>
          <span class="text-left leading-none">
            <strong class="block bg-[linear-gradient(90deg,#2c687b,#8cc7c4)] bg-clip-text text-xl font-bold text-transparent">ReMat</strong>
            <span class="mt-1 block text-[10px] tracking-[0.16em] text-[#6a7282]">Re + Material</span>
          </span>
        </button>

        <nav class="hidden items-center gap-2 lg:flex" aria-label="주요 메뉴">
          <button
            v-for="item in navItems"
            :key="item.label"
            type="button"
            :class="[
              'inline-flex h-9 items-center gap-2 rounded-[10px] px-4 text-sm transition',
              item.active ? 'bg-[#8cc7c4] text-[#2c687b]' : 'text-[#364153] hover:bg-[#fff6f6]',
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
          <button type="button" class="hidden h-8 items-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] sm:inline-flex">
            마이페이지
          </button>
          <button type="button" class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a]" @click="$emit('change-page', 'login')">
            로그아웃
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.9)_100%)] py-12 text-white">
        <div class="mx-auto max-w-[1323px] px-5 sm:px-8 lg:px-14">
          <h1 class="text-4xl font-bold tracking-normal">자재 마켓</h1>
          <p class="mt-3 text-lg text-white/80">재사용 가능한 자재를 찾고 거래하세요</p>
        </div>
      </section>

      <section class="mx-auto max-w-[1323px] px-5 py-8 sm:px-8 lg:px-14">
        <div class="rounded-[14px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <label class="relative block">
            <svg class="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15Z" stroke-linecap="round" />
            </svg>
            <input type="search" placeholder="자재명, 키워드로 검색하세요..." class="h-12 w-full rounded-[8px] bg-white pl-10 pr-3 text-sm outline-none focus:ring-1 focus:ring-[#8cc7c4]" />
          </label>

          <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="filter in filters" :key="filter.label" class="space-y-2">
              <label class="block text-sm font-medium text-[#364153]">{{ filter.label }}</label>
              <button type="button" class="flex h-9 w-full items-center justify-between rounded-[8px] bg-white px-3 text-sm font-medium text-[#1a1a1a] hover:ring-1 hover:ring-[#e5e7eb]">
                {{ filter.value }}
                <svg class="size-4 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] sm:w-[280px]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 5h18M7 12h10M10 19h4" stroke-linecap="round" />
            </svg>
            필터 초기화
          </button>
        </div>

        <div class="mt-8 flex items-center justify-between gap-4">
          <p class="text-base text-[#4a5565]">총 <strong class="text-[#db1a1a]">{{ materials.length }}</strong>개의 자재</p>
          <button type="button" class="inline-flex h-9 items-center gap-2 rounded-[8px] bg-[#db1a1a] px-4 text-sm font-medium text-white transition hover:bg-[#c01616]" @click="$emit('change-page', 'register-material')">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" stroke-linecap="round" />
            </svg>
            자재 등록하기
          </button>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <button
            v-for="material in materials"
            :key="material.title"
            type="button"
            class="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            @click="handleMaterialClick(material)"
          >
            <img :src="material.image" alt="" class="h-[258px] w-full object-cover" />
            <div class="p-5">
              <div class="flex flex-wrap gap-2">
                <span class="rounded-[4px] bg-[#8cc7c4]/20 px-2 py-1 text-xs font-medium text-[#2c687b]">{{ material.category }}</span>
                <span class="rounded-[4px] bg-[#f0fdf4] px-2 py-1 text-xs font-medium text-[#008236]">{{ material.condition }}</span>
                <span
                  :class="[
                    'rounded-[4px] px-2 py-1 text-xs font-medium',
                    material.tradeType === 'sale' ? 'bg-[#dbeafe] text-[#1447e6]' : 'bg-[#f3e8ff] text-[#8200db]',
                  ]"
                >
                  {{ material.tradeType === 'sale' ? '판매' : '대여' }}
                </span>
              </div>
              <h2 class="mt-4 text-lg font-bold text-[#101828]">{{ material.title }}</h2>
              <p class="mt-2 line-clamp-2 text-sm leading-5 text-[#4a5565]">{{ material.desc }}</p>
              <p class="mt-3 text-sm text-[#6a7282]">⌖ {{ material.location }}</p>
              <div class="mt-4 border-t border-[#f3f4f6] pt-4">
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-2xl font-bold text-[#db1a1a]">{{ material.price }}</p>
                    <p class="mt-1 text-xs text-[#6a7282]">{{ material.stock }}</p>
                  </div>
                  <div class="text-right text-xs text-[#6a7282]">
                    <p>탄소 절감</p>
                    <p class="font-bold text-[#008236]">{{ material.carbon }}</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>

    <footer class="relative mt-12 overflow-hidden bg-[#2c687b] py-12 text-white">
      <img :src="mascotSrc" alt="" class="pointer-events-none absolute bottom-8 right-16 size-[200px] opacity-5" />
      <div class="mx-auto max-w-[1323px] px-5 sm:px-8 lg:px-14">
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
              <li>자재 마켓</li>
              <li>AI 분석</li>
              <li>자재 등록</li>
              <li>대시보드</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold">고객지원</h3>
            <ul class="mt-4 space-y-2 text-sm text-white/75">
              <li>공지사항</li>
              <li>FAQ</li>
              <li>문의하기</li>
            </ul>
          </div>
        </div>
        <p class="mt-10 border-t border-white/10 pt-8 text-center text-sm text-[#99a1af]">© 2026 ReMat. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
