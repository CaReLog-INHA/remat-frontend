<script setup lang="ts">
import { ref } from 'vue';
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import RentalForm from '@/components/RentalForm.vue';
import { footerLinks, homeAssets } from "@/data/home";

defineEmits(['change-page']);

const transactionType = ref('');

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
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="navItems.map((item) => ({ ...item, active: item.page === 'register-material' }))"
      account-variant="member"
      @change-page="$emit('change-page', $event)"
    />

    <main class="pt-16">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,#8cc7c4_50%,#2c687b_100%)] py-12 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold">자재 등록하기</h1>
          <p class="mt-3 text-lg text-white/80">사용이 끝난 자재를 등록하고 새로운 수요자와 연결해보세요.</p>
        </div>
      </section>

      <form class="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8" @submit.prevent="$emit('change-page', 'marketplace')">
        <section class="rounded-[18px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            자재 사진
          </h2>
          <div class="mt-4">
            <label class="flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-[#d1d5dc] px-6 py-20 text-center transition hover:border-[#8cc7c4] hover:bg-[#fff6f6]/50">
              <input type="file" accept="image/png,image/jpeg" class="sr-only" />
              <img :src="homeAssets.mascot" alt="" class="size-[100px] object-contain" />
              <p class="mt-8 text-sm font-medium">
                <span class="text-[#db1a1a]">클릭해서 업로드</span>
                <span class="text-[#6a7282]"> 또는 드래그해서 올려두세요</span>
              </p>
              <p class="mt-2 text-xs font-medium text-[#99a1af]">PNG, JPG, JPEG / 최대 10MB</p>
            </label>
          </div>
        </section>

        <section class="rounded-[18px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke-linecap="round" />
            </svg>
            기본 정보
          </h2>
          <div class="mt-4 grid gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">자재명 *</label>
              <input type="text" placeholder="예: 임시 부스용 천장 프레임" class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">카테고리 *</label>
                <select class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm text-[#364153] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]">
                  <option>카테고리 선택</option>
                  <option>목재</option>
                  <option>천재·금속</option>
                  <option>가구</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">상태 *</label>
                <select class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm text-[#364153] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]">
                  <option>상태 선택</option>
                  <option>최상</option>
                  <option>양호</option>
                  <option>보통</option>
                </select>
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">거래 유형 *</label>
                <select class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm text-[#364153] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]">
                  <option>거래 유형 선택</option>
                  <option>판매</option>
                  <option>대여</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">위치 *</label>
                <input type="text" placeholder="예: 서울 강남구" class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="flex min-h-4 items-center gap-2 text-sm font-medium text-[#1a1a1a]">거래 유형 *</label>
              <select
                v-model="transactionType"
                class="h-9 w-full rounded-[8px] bg-white px-3 text-sm text-[#6b7280] outline-none ring-1 ring-transparent transition focus:ring-[#8cc7c4]"
              >
                <option value="">거래 유형 선택</option>
                <option value="판매">판매</option>
                <option value="나눔">나눔</option>
                <option value="대여">대여</option>
              </select>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">가격 *</label>
                <input type="number" placeholder="450000" class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">수량 *</label>
                <input type="number" placeholder="20" class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[#1a1a1a]">단위</label>
                <select class="h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm text-[#364153] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]">
                  <option>개</option>
                  <option>세트</option>
                  <option>kg</option>
                  <option>m</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-[18px] bg-white p-6 shadow-sm">
          <RentalForm v-if="transactionType === '대여'" />
        </section>

        <section class="rounded-[14px] bg-white p-6 shadow-sm">
          <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
            <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            상세 설명
          </h2>
          <div class="mt-4 space-y-2">
            <label class="text-sm font-medium text-[#1a1a1a]">자재 설명 *</label>
            <textarea
              placeholder="자재 상태, 사용 이력, 보관 방식, 전달 가능한 일정 등을 자세히 작성해주세요."
              class="min-h-[140px] w-full resize-none rounded-xl bg-[#f9fafb] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]"
            ></textarea>
            <p class="text-xs text-[#99a1af]">최소 50자 이상 작성해주세요.</p>
          </div>
        </section>

        <section class="rounded-[18px] border border-[#b9f8cf] bg-[linear-gradient(135deg,#dcfce7_0%,#e6fbff_100%)] p-6">
          <h2 class="flex items-center gap-2 text-base font-bold text-[#101828]">
            <svg class="size-5 text-[#008236]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 16c-6 2-12-1-16-8c6-2 12 1 16 8ZM4 8c0 7 5 11 12 11" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            예상 ESG 효과
          </h2>
          <p class="mt-4 text-sm text-[#1a1a1a]">등록한 자재가 재사용되면 다음과 같은 환경 효과를 기대할 수 있습니다.</p>
          <div class="mt-4 rounded-[12px] bg-white p-4">
            <p class="text-sm text-[#4a5565]">예상 탄소 절감</p>
            <p class="mt-1 text-2xl font-bold text-[#008236]">~85kg CO2</p>
          </div>
        </section>

        <div class="grid gap-3 sm:grid-cols-2">
          <button type="button" class="h-11 rounded-xl border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a]" @click="$emit('change-page', 'marketplace')">
            취소
          </button>
          <button type="submit" class="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#db1a1a] text-sm font-medium text-white transition hover:bg-[#c01616]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" stroke-linecap="round" />
            </svg>
            자재 등록하기
          </button>
        </div>
        <p class="text-center text-xs leading-5 text-[#6b7280]">
          * 표시된 항목은 필수 입력 정보입니다.<br />
          등록된 자재는 관리자 검수 후 24시간 이내에 반영됩니다.
        </p>
      </form>
    </main>

    <SiteFooter
      :logo-icon-src="homeAssets.logoIcon"
      :mascot-src="homeAssets.mascot"
      :service-links="footerLinks.service"
      :support-links="footerLinks.support"
    />
  </div>
</template>
