<script setup>
import mascotSrc from '../assets/figma-mascot-original.svg';
import logoIconSrc from '../assets/figma-logo-icon-original.svg';

defineEmits(['change-page']);

const navItems = [
  { label: '자재 마켓', page: 'marketplace', icon: 'M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7' },
  { label: 'AI 분석', icon: 'M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0' },
  { label: '자재 등록', page: 'register-material', active: true, icon: 'M12 5v14M5 12h14' },
  { label: '거래현황', icon: 'M4 19V5M8 17v-6M12 17V7M16 17v-3M20 19H4' },
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
            <svg class="size-4 text-[#2c687b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10" stroke-linecap="round" />
            </svg>
            마이페이지
          </button>
          <button type="button" class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a]" @click="$emit('change-page', 'login')">
            로그아웃
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,#8cc7c4_50%,#2c687b_100%)] py-12 text-white">
        <div class="mx-auto max-w-[1323px] px-5 sm:px-8 lg:px-14">
          <h1 class="text-4xl font-bold tracking-normal">자재 등록하기</h1>
          <p class="mt-3 text-lg text-white/80">사용하지 않는 자재를 등록하고 비용을 절감하세요</p>
        </div>
      </section>

      <form class="mx-auto flex max-w-[896px] flex-col gap-6 px-5 py-8 sm:px-8" @submit.prevent="$emit('change-page', 'marketplace')">
        <section class="rounded-[14px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            자재 사진
          </h2>
          <div class="mt-4 space-y-4">
            <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">대표 이미지 *</label>
            <label class="flex min-h-[441px] cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-[#d1d5dc] px-6 py-20 text-center transition hover:border-[#8cc7c4] hover:bg-[#fff6f6]/50">
              <input type="file" accept="image/png,image/jpeg" class="sr-only" />
              <img :src="mascotSrc" alt="" class="size-[100px] object-contain" />
              <p class="mt-8 text-sm font-medium">
                <span class="text-[#db1a1a]">클릭하여 업로드</span>
                <span class="text-[#6a7282]"> 또는 드래그 앤 드롭</span>
              </p>
              <p class="mt-2 text-xs font-medium text-[#99a1af]">PNG, JPG, JPEG (최대 10MB)</p>
            </label>
          </div>
        </section>

        <section class="rounded-[14px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke-linecap="round" />
            </svg>
            기본 정보
          </h2>
          <div class="mt-4 grid gap-4">
            <div class="space-y-2">
              <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">자재명 *</label>
              <input type="text" placeholder="예: 전시 부스용 철재 프레임" class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]" />
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">카테고리 *</label>
                <select class="h-9 w-full rounded-[8px] bg-white px-3 text-sm text-[#6b7280] outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]">
                  <option>카테고리 선택</option>
                  <option>목재</option>
                  <option>철재/금속</option>
                  <option>가구</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">상태 *</label>
                <select class="h-9 w-full rounded-[8px] bg-white px-3 text-sm text-[#6b7280] outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]">
                  <option>상태 선택</option>
                  <option>최상</option>
                  <option>양호</option>
                  <option>보통</option>
                </select>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">거래 유형 *</label>
              <select class="h-9 w-full rounded-[8px] bg-white px-3 text-sm text-[#6b7280] outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]">
                <option>거래 유형 선택</option>
                <option>판매</option>
                <option>나눔</option>
                <option>대여</option>
              </select>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              <div class="space-y-2">
                <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">가격 (원) *</label>
                <input type="number" placeholder="450000" class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]" />
              </div>
              <div class="space-y-2">
                <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">수량 *</label>
                <input type="number" placeholder="20" class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]" />
              </div>
              <div class="space-y-2">
                <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">단위</label>
                <select class="h-9 w-full rounded-[8px] bg-white px-3 text-sm text-[#1a1a1a] outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]">
                  <option>개</option>
                  <option>세트</option>
                  <option>kg</option>
                  <option>m</option>
                </select>
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">
                <span class="text-[#4a5565]">⌖</span>
                위치 *
              </label>
              <input type="text" placeholder="예: 서울 강남구" class="h-9 w-full rounded-[8px] bg-white px-3 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]" />
            </div>
          </div>
        </section>

        <section class="rounded-[14px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            상세 설명
          </h2>
          <div class="mt-4 space-y-2">
            <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">자재 설명 *</label>
            <textarea
              placeholder="자재의 상태, 사용 이력, 특징 등을 상세히 작성해주세요. 구매자가 알아야 할 중요한 정보를 포함해주세요."
              class="min-h-[116px] w-full resize-none rounded-[8px] bg-white px-3 py-3 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#6b7280] focus:ring-[#8cc7c4]"
            ></textarea>
            <p class="text-xs text-[#99a1af]">최소 50자 이상 작성해주세요</p>
          </div>
        </section>

        <section class="rounded-[14px] border border-[#bbf7d0] bg-[linear-gradient(135deg,#dcfce7_0%,#e6fbff_100%)] p-6">
          <h2 class="flex items-center gap-2 text-base font-bold text-[#101828]">
            <svg class="size-5 text-[#008236]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 16c-6 2-12-1-16-8c6-2 12 1 16 8ZM4 8c0 7 5 11 12 11" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            예상 ESG 효과
          </h2>
          <p class="mt-4 text-sm text-[#1a1a1a]">이 자재를 재사용하면 다음과 같은 환경 효과를 얻을 수 있습니다:</p>
          <div class="mt-4 rounded-[8px] bg-white p-4">
            <p class="text-sm text-[#4a5565]">예상 탄소 절감</p>
            <p class="mt-1 text-2xl font-bold text-[#008236]">~0kg CO₂</p>
          </div>
        </section>

        <div class="grid gap-3 sm:grid-cols-2">
          <button type="button" class="h-9 rounded-[8px] border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a]" @click="$emit('change-page', 'marketplace')">
            취소
          </button>
          <button type="submit" class="inline-flex h-9 items-center justify-center gap-2 rounded-[8px] bg-[#db1a1a] text-sm font-medium text-white transition hover:bg-[#c01616]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" stroke-linecap="round" />
            </svg>
            자재 등록하기
          </button>
        </div>
        <p class="text-center text-xs leading-5 text-[#6b7280]">
          * 표시된 항목은 필수 입력 항목입니다.<br />
          등록된 자재는 관리자가 검토 후 24시간 이내에 승인됩니다.
        </p>
      </form>
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
