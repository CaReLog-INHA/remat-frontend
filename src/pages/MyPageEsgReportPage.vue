<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { myPageNavItems } from "@/data/mypage";

const reportSummary = [
  {
    label: "총 탄소 절감",
    value: "220kg",
    detail: "재사용 자재 거래로 절감된 배출량",
    bg: "bg-[#ebf8f4]",
    iconPath: "M12 2v14M5 13l7 7 7-7",
    iconStroke: "stroke-[#0f766e]",
  },
  {
    label: "거래 건수",
    value: "12건",
    detail: "리포트에 포함된 거래 수",
    bg: "bg-[#eff6ff]",
    iconPath: "M4 7h16M7 11h10M10 15h4",
    iconStroke: "stroke-[#2563eb]",
  },
  {
    label: "자원 순환율",
    value: "100%",
    detail: "등록 자재 대비 순환 비율",
    bg: "bg-[#f5f3ff]",
    iconPath: "M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4z",
    iconStroke: "stroke-[#7c3aed]",
  },
];

const monthlySavings = [
  { month: "1월", value: 16 },
  { month: "2월", value: 39 },
  { month: "3월", value: 73 },
  { month: "4월", value: 96 },
  { month: "5월", value: 118 },
];

const maxMonthlySavings = Math.max(...monthlySavings.map((bar) => bar.value));

const transactionHistory = [
  { date: "2026-04-05", material: "목재 팔레트", amount: "30개", carbon: "12kg CO2" },
  { date: "2026-04-02", material: "행사용 접이식 의자", amount: "80개", carbon: "64kg CO2" },
  { date: "2026-03-28", material: "전시 부속용 철제 프레임", amount: "5개", carbon: "85kg CO2" },
  { date: "2026-03-15", material: "파티션 패널", amount: "10개", carbon: "35kg CO2" },
  { date: "2026-02-20", material: "조명 기구", amount: "15개", carbon: "24kg CO2" },
];

const totalCarbonSavings = `${transactionHistory.reduce((sum, record) => sum + parseInt(record.carbon, 10), 0)}kg CO2`;
</script>

<template>
  <DefaultLayout :nav-items="myPageNavItems">
      <section class="bg-[linear-gradient(90deg,#2c687b_0%,#70b8bf_100%)] pb-16 pt-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden rounded-[32px] bg-white/90 shadow-[0_36px_80px_rgba(15,23,42,0.16)] backdrop-blur-md">
            <div class="bg-[linear-gradient(90deg,#2c687b_0%,#70b8bf_100%)] px-6 py-8 sm:px-8 sm:py-10">
              <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div class="max-w-2xl">
                  <p class="text-sm font-medium uppercase tracking-[0.18em] text-[#d8eef1]">마이페이지 · ESG 감축 리포트</p>
                  <h1 class="mt-4 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">ESG 탄소 감축 리포트</h1>
                  <p class="mt-4 max-w-3xl text-base leading-7 text-[#d8eef1]">기업의 탄소 절감 성과를 확인하고 리포트를 내려받으세요.</p>
                </div>
                <button type="button" class="inline-flex h-12 items-center gap-2 rounded-[18px] bg-[#144a5b] px-5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f3f4d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  다운로드
                </button>
              </div>
            </div>

            <div class="border-t border-white/20 bg-[#f8fcfd] px-6 py-7 sm:px-8">
              <div class="rounded-[26px] bg-white p-5 shadow-sm">
                <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  <div class="space-y-2">
                    <p class="text-sm text-[#637381]">서울전시(주)</p>
                    <p class="text-2xl font-semibold tracking-[-0.03em] text-[#101828]">2026.04.03 ~ 4월</p>
                  </div>
                  <div class="space-y-2 text-right">
                    <p class="text-sm text-[#637381]">리포트 갱신일</p>
                    <p class="text-2xl font-semibold tracking-[-0.03em] text-[#101828]">2026-04-13</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 grid gap-4 md:grid-cols-3">
                <article v-for="item in reportSummary" :key="item.label" :class="[item.bg, 'rounded-[24px] p-5 shadow-sm']">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <p class="text-sm font-medium text-slate-600">{{ item.label }}</p>
                      <p class="mt-4 text-3xl font-bold text-slate-950">{{ item.value }}</p>
                    </div>
                    <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" :class="item.iconStroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path :d="item.iconPath" />
                      </svg>
                    </div>
                  </div>
                  <p class="mt-4 text-sm leading-6 text-slate-600">{{ item.detail }}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
          <MyPageTabs current-page="my-page-esg-report" />
        </div>

        <div class="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
          <section class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-3 text-[#101828]">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#047857]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 17h16" />
                    <path d="M4 12l3-3 3 3 4-4 4 4" />
                  </svg>
                </div>
                <p class="text-[24px] font-bold">월간 탄소 절감 추이</p>
              </div>
              <span class="rounded-full bg-[#eff6ff] px-3 py-1 text-sm font-semibold text-[#155eef]">kg CO2</span>
            </div>

            <div class="mt-6 space-y-4">
              <div v-for="bar in monthlySavings" :key="bar.month" class="space-y-2">
                <div class="flex items-center justify-between text-sm text-[#475569]">
                  <span>{{ bar.month }}</span>
                  <span>{{ bar.value }}kg CO2</span>
                </div>
                <div class="h-3 rounded-full bg-[#eaeded]">
                  <div :style="{ width: `${Math.max(12, (bar.value / maxMonthlySavings) * 88)}%` }" class="h-3 rounded-full bg-gradient-to-r from-[#34d399] to-[#2c687b]"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div class="flex items-center gap-3 text-[#101828]">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#1d4ed8]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 17v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
                  <path d="M8 12h8" />
                  <path d="M9 8h1" />
                  <path d="M14 8h1" />
                </svg>
              </div>
              <p class="text-[24px] font-bold">거래별 탄소 절감 내역</p>
            </div>
            <div class="mt-6 overflow-x-auto">
              <table class="min-w-full text-left text-sm text-[#475569]">
                <thead>
                  <tr>
                    <th class="pb-3 font-semibold text-[#1f2937]">거래 일자</th>
                    <th class="pb-3 font-semibold text-[#1f2937]">자재명</th>
                    <th class="pb-3 font-semibold text-[#1f2937]">수량</th>
                    <th class="pb-3 font-semibold text-[#1f2937]">탄소 절감량</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#f3f4f6]">
                  <tr v-for="record in transactionHistory" :key="record.date + record.material">
                    <td class="py-4">{{ record.date }}</td>
                    <td class="py-4">{{ record.material }}</td>
                    <td class="py-4">{{ record.amount }}</td>
                    <td class="py-4 font-semibold text-[#008236]">{{ record.carbon }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="border-t border-[#e5e7eb]">
                    <td colspan="3" class="pt-4 pr-6 text-right text-sm font-semibold text-[#1f2937]">총 탄소 절감량</td>
                    <td class="pt-4 text-sm font-bold text-[#008236]">{{ totalCarbonSavings }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </div>

        <div class="mt-8 rounded-[28px] bg-[#ecfbf7] p-6 shadow-sm ring-1 ring-[#d6f0e8]/80 sm:p-8">
          <div class="flex items-center gap-4">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7f2e9] text-[#047857] shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21V12" />
                <path d="M12 12c-3-1.5-5-3.5-5-6 0-1 1-2 2-2 1.5 0 3 1 3 3" />
                <path d="M12 12c3-1.5 5-3.5 5-6 0-1-1-2-2-2-1.5 0-3 1-3 3" />
                <path d="M12 12c-2.5 1-4.5 2.5-5.5 4.5C5 20 8 22 12 22s7-2 8.5-5.5C17.5 14.5 14.5 13 12 12z" />
              </svg>
            </div>
            <p class="text-[24px] font-bold text-[#0f172a]">환경 기여 효과</p>
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div class="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-[#d9f9e8]">
              <p class="text-sm font-medium text-[#475569]">탄소 배출 감소 효과</p>
              <p class="mt-4 text-3xl font-bold text-[#047857]">220kg CO2</p>
              <p class="mt-2 text-sm leading-6 text-[#475569]">신규 자재 구매 시 발생하는 탄소 배출량 대비 220kg 감소</p>
            </div>
            <div class="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-[#ede9fe]">
              <p class="text-sm font-medium text-[#475569]">나무 식재 환산</p>
              <p class="mt-4 text-3xl font-bold text-[#065f46]">33그루</p>
              <p class="mt-2 text-sm leading-6 text-[#475569]">연간 CO2 흡수량 6.8kg을 소나무 기준으로 환산한 효과</p>
            </div>
          </div>

          <p class="mt-6 rounded-[20px] bg-[#f8fffa] p-5 text-sm leading-6 text-[#334155] shadow-sm">
            <span class="font-semibold text-[#047857]">서울전시(주)</span>는 ReMat 플랫폼을 통한 자재 재사용으로 <span class="font-semibold text-[#047857]">220kg</span>의 탄소 배출을 절감하였으며, 이는 <span class="font-semibold text-[#065f46]">나무 33그루</span>를 심는 것과 동일한 환경 보호 효과입니다. 순환 경제 실현을 통해 ESG 경영에 기여하고 있습니다.
          </p>
        </div>
      </section>
  </DefaultLayout>
</template>
