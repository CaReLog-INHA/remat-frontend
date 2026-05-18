<template>
  <div class="min-h-screen bg-[var(--page-bg)] text-slate-900">
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-[65px] w-full max-w-[1320px] items-center justify-between px-4 md:px-8">
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_56%,#db1a1a_100%)] p-[2px] shadow-sm">
            <div class="flex h-full w-full items-center justify-center rounded-[12px] bg-white">
              <img alt="" src="/figma-icons/logo-mark.svg" class="h-6 w-6" />
            </div>
          </div>
          <div>
            <div class="bg-[linear-gradient(90deg,#2c687b_0%,#8cc7c4_100%)] bg-clip-text text-xl font-extrabold tracking-[-0.03em] text-transparent">
              ReMat
            </div>
            <div class="text-[10px] tracking-[0.2em] text-slate-500">Re + Material</div>
          </div>
        </div>

        <nav class="hidden items-center gap-2 lg:flex">
          <a
            v-for="item in navItems"
            :key="item.label"
            href="#"
            class="flex items-center gap-2 rounded-[10px] px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            <img alt="" :src="item.iconSrc" class="h-4 w-4 shrink-0" />
            <span>{{ item.label }}</span>
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <button class="hidden h-8 items-center gap-2 rounded-lg border border-black/10 bg-[var(--page-bg)] px-3 text-sm font-medium text-slate-900 sm:flex">
            <img alt="" src="/figma-icons/mypage.svg" class="h-4 w-4 shrink-0" />
            마이페이지
          </button>
          <button class="flex h-8 items-center gap-2 rounded-lg border border-black/10 bg-[var(--page-bg)] px-4 text-sm font-medium text-slate-900">
            <LogoutIcon class="h-4 w-4" />
            로그아웃
          </button>
        </div>
      </div>
    </header>

    <main class="pb-14">
      <section class="overflow-hidden bg-[linear-gradient(90deg,#2f6f83_0%,#366f82_52%,#9ad2cf_100%)]">
        <div class="relative mx-auto flex min-h-[276px] w-full max-w-[1320px] flex-col justify-between gap-8 px-4 py-10 md:px-8 lg:flex-row lg:items-center">
          <div class="flex items-start gap-5">
            <div class="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/25 bg-white/8 backdrop-blur-sm">
              <Mascot :paths="mascotPaths" container-class="relative size-12" />
            </div>
            <div class="space-y-3 text-white">
              <div class="space-y-1">
                <h1 class="text-4xl font-extrabold tracking-[-0.04em]">김철수</h1>
                <div class="flex flex-wrap items-center gap-2 text-sm text-white/90">
                  <div class="flex items-center gap-1 text-[#ffd74a]">
                    <StarIcon v-for="index in 4" :key="index" class="h-4 w-4 fill-current" />
                  </div>
                  <span class="font-semibold">4.8</span>
                  <span class="text-white/70">(12개 리뷰)</span>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/88">
                <span
                  v-for="item in profileMeta"
                  :key="item.label"
                  class="flex items-center gap-1.5"
                >
                  <component :is="item.icon" class="h-4 w-4 opacity-90" />
                  {{ item.label }}
                </span>
              </div>
            </div>
          </div>

          <div class="relative self-start lg:self-auto">
            <button class="relative z-10 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/16">
              <EditIcon class="h-4 w-4" />
              프로필 수정
            </button>
          </div>
        </div>
      </section>

      <section class="mx-auto w-full max-w-[1320px] px-4 pt-6 md:px-8 md:pt-8">
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="card in statCards"
            :key="card.label"
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
          >
            <div
              class="mb-4 flex h-8 w-8 items-center justify-center rounded-xl"
              :class="card.badgeClass"
            >
              <img alt="" :src="card.iconSrc" class="h-4 w-4 shrink-0" />
            </div>
            <div class="text-[2.15rem] font-extrabold tracking-[-0.05em] text-slate-800">
              {{ card.value }}
            </div>
            <div class="mt-1 text-sm text-slate-600">{{ card.label }}</div>
          </article>
        </div>

        <div class="mt-6 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="rounded-full px-3 py-1.5 text-sm font-semibold transition"
            :class="tab === '프로필' ? 'bg-[#8cc7c4] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'"
          >
            {{ tab }}
          </button>
        </div>

        <div class="mt-6 grid gap-4 xl:grid-cols-2">
          <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
            <h2 class="text-[1.75rem] font-extrabold tracking-[-0.04em] text-slate-900">연락처 정보</h2>
            <div class="mt-6 space-y-4">
              <div
                v-for="item in contactItems"
                :key="item.label"
                class="flex items-center gap-3"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-[10px]"
                  :class="item.boxClass"
                >
                  <img alt="" :src="item.iconSrc" class="h-[18px] w-[18px] shrink-0" />
                </div>
                <div>
                  <div class="text-sm text-slate-500">{{ item.label }}</div>
                  <div class="text-lg font-semibold tracking-[-0.02em] text-slate-900">{{ item.value }}</div>
                </div>
              </div>
            </div>
          </article>

          <article class="rounded-3xl border border-[#b9f8cf] bg-[linear-gradient(147deg,#f0fdf4_0%,#eff6ff_100%)] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-2">
                <img alt="" src="/figma-icons/esg-leaf.svg" class="h-5 w-5 shrink-0" />
                <h2 class="text-[1.75rem] font-extrabold tracking-[-0.04em] text-slate-900">나의 ESG 기여</h2>
              </div>
              <button class="flex h-9 items-center gap-2 rounded-[10px] bg-[#2c687b] px-4 text-sm font-medium text-white">
                <ReportIcon class="h-4 w-4" />
                ESG 리포트 보기
              </button>
            </div>

            <div class="mt-4 space-y-4">
              <div class="rounded-2xl bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                <div class="text-sm text-slate-600">총 탄소 절감량</div>
                <div class="mt-2 text-[2.1rem] font-extrabold tracking-[-0.05em] text-[#00a63e]">220kg CO₂</div>
                <div class="text-xs text-slate-500">= 나무 33그루 식재 효과</div>
                <div class="mt-3 h-2 rounded-full bg-slate-200">
                  <div class="h-full w-[22%] rounded-full bg-[#00c950]"></div>
                </div>
                <div class="mt-2 text-right text-xs text-slate-500">목표: 1톤 (1,000kg)</div>
              </div>

              <div class="rounded-2xl bg-white p-4">
                <div class="text-sm text-slate-600">자원 순환율</div>
                <div class="mt-2 text-[2rem] font-extrabold tracking-[-0.05em] text-[#7c3aed]">100%</div>
                <div class="flex items-center gap-1 text-xs text-slate-500">
                  <span>폐기물 제로 달성</span>
                  <CelebrationIcon class="h-3.5 w-3.5 text-[#f59e0b]" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="bg-[#356f83] text-white">
      <div class="mx-auto w-full max-w-[1320px] px-4 py-10 md:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr]">
          <div class="relative">
            <div class="flex items-center gap-3">
              <Mascot :paths="mascotPaths" container-class="relative size-10" />
              <div>
                <div class="text-3xl font-extrabold tracking-[-0.04em]">ReMat</div>
                <div class="text-[10px] tracking-[0.2em] text-white/60">Re + Material</div>
              </div>
            </div>
            <p class="mt-6 text-xl font-medium text-white/80">ESG 기반 자재 재사용 플랫폼</p>
            <p class="mt-4 max-w-xl text-base leading-7 text-white/50">
              비출장 자재를 순환하고, 탄소를 절감하며, 비용을 절약하세요.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold tracking-[-0.03em]">서비스</h3>
            <ul class="mt-4 space-y-3 text-white/75">
              <li v-for="item in serviceLinks" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="relative">
            <div class="pointer-events-none absolute bottom-[-32px] right-0 hidden opacity-10 xl:block">
              <Mascot :paths="mascotPaths" container-class="relative h-32 w-32" />
            </div>
            <h3 class="text-2xl font-bold tracking-[-0.03em]">고객지원</h3>
            <ul class="mt-4 space-y-3 text-white/75">
              <li v-for="item in supportLinks" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="pt-8 text-center text-sm text-white/45">© 2026 ReMat. All rights reserved.</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Mascot from './components/Mascot.vue'
import mascotPaths from './svg-w8og5igzee'

const LogoutIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  `,
}

const StarIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3.8 2.57 5.2 5.73.84-4.15 4.05.98 5.72L12 16.88 6.87 19.6l.98-5.72L3.7 9.84l5.73-.84L12 3.8Z" />
    </svg>
  `,
}

const CompanyIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 21h16" />
      <path d="M7 21V8l5-3 5 3v13" />
      <path d="M9.5 11h.01M14.5 11h.01M9.5 15h.01M14.5 15h.01" />
    </svg>
  `,
}

const LocationIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  `,
}

const CalendarIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  `,
}

const EditIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
    </svg>
  `,
}

const ReportIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6M9 9h2" />
    </svg>
  `,
}

const CelebrationIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="m5 15 5.5-5.5" />
      <path d="m10.5 9.5 4 9" />
      <path d="m14 18.5 4-1.5" />
      <path d="M16 5v3" />
      <path d="M20 9h-3" />
      <path d="m18.8 6.2-2.1 2.1" />
      <path d="m6 6 1 2" />
      <path d="m3 9 2-.2" />
      <circle cx="11" cy="9" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  `,
}

const navItems = [
  { label: '자재 마켓', iconSrc: '/figma-icons/nav-market.svg' },
  { label: 'AI 분석', iconSrc: '/figma-icons/nav-ai.svg' },
  { label: '자재 등록', iconSrc: '/figma-icons/nav-upload.svg' },
  { label: '거래현황', iconSrc: '/figma-icons/nav-trade.svg' },
]

const profileMeta = [
  { label: '서울전시(주)', icon: CompanyIcon },
  { label: '서울 강남구', icon: LocationIcon },
  { label: '가입일: 2026-11-15', icon: CalendarIcon },
]

const statCards = [
  { label: '총 거래', value: '12', iconSrc: '/figma-icons/stat-total.svg', badgeClass: 'bg-[#dbeafe]' },
  { label: '탄소 절감', value: '220kg', iconSrc: '/figma-icons/stat-carbon.svg', badgeClass: 'bg-[#dcfce7]' },
  { label: '판매 자재', value: '3', iconSrc: '/figma-icons/stat-sell.svg', badgeClass: 'bg-[#f3e8ff]' },
  { label: '구매 자재', value: '9', iconSrc: '/figma-icons/stat-buy.svg', badgeClass: 'bg-[#fee2e2]' },
]

const tabs = ['프로필', '뱃지', '내 자재', '활동 내역']

const contactItems = [
  { label: '이메일', value: 'kim@example.com', iconSrc: '/figma-icons/contact-mail.svg', boxClass: 'bg-[#f3f4f6]' },
  { label: '전화번호', value: '010-1234-5678', iconSrc: '/figma-icons/contact-phone.svg', boxClass: 'bg-[#f3f4f6]' },
  { label: '회사/직책', value: '서울전시(주) / 구매 담당', iconSrc: '/figma-icons/contact-company.svg', boxClass: 'bg-[#f3f4f6]' },
  { label: '위치', value: '서울 강남구', iconSrc: '/figma-icons/contact-location.svg', boxClass: 'bg-[#f3f4f6]' },
]

const serviceLinks = ['자재 마켓', 'AI 분석', '자재 등록', '대시보드']
const supportLinks = ['공지사항', 'FAQ', '문의하기']
</script>
