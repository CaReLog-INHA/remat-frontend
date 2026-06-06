<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { homeAssets } from "@/data/home";
import { myPageNavItems } from "@/data/mypage";
import { useMyPageOverview } from "@/composables/useMyPageOverview";
import { myPageApi, type Badge, type BadgeSection } from "@/api/mypage";

const { profile, reviewCount, summaryCards } = useMyPageOverview();

const badgeSection = ref<BadgeSection | null>(null);
const isLoading = ref(true);
const errorMessage = ref("");

onMounted(async () => {
  try {
    badgeSection.value = await myPageApi.badges();
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
});

// 뱃지 색 팔레트 (인덱스로 순환 적용)
const palette = [
  { accent: "#16a34a", bg: "from-[#ecfdf3] to-[#f0fdf4]" },
  { accent: "#155dfc", bg: "from-[#eff6ff] to-[#dbeafe]" },
  { accent: "#9333ea", bg: "from-[#faf5ff] to-[#f3e8ff]" },
  { accent: "#ea580c", bg: "from-[#fff7ed] to-[#ffedd5]" },
];

interface DisplayBadge extends Badge {
  accent: string;
  bg: string;
}

const earnedBadges = computed<DisplayBadge[]>(() => {
  const list = badgeSection.value?.earnedBadges ?? [];
  return list.map((b, i) => ({ ...b, ...palette[i % palette.length] }));
});

const inProgressBadges = computed<DisplayBadge[]>(() => {
  const list = badgeSection.value?.inProgressBadges ?? [];
  return list.map((b, i) => ({ ...b, ...palette[i % palette.length] }));
});

const allBadges = computed<DisplayBadge[]>(() => [
  ...earnedBadges.value,
  ...inProgressBadges.value,
]);

const earnedCount = computed(() => earnedBadges.value.length);
const totalCount = computed(() => allBadges.value.length);

const progressPercent = computed(() => {
  if (totalCount.value === 0) return 0;
  return Math.round((earnedCount.value / totalCount.value) * 100);
});

const subtitleFor = (badge: DisplayBadge): string => {
  if (badge.isEarned) return "획득 완료";
  const rate = badge.progressRate ?? 0;
  return `진행률 ${rate}%`;
};
</script>

<template>
  <DefaultLayout :nav-items="myPageNavItems">
    <MyPageHero
      :mascot-src="homeAssets.mascot"
      :profile="profile"
      :review-count="reviewCount"
    />

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <p
        v-if="isLoading"
        class="mb-4 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]"
      >
        뱃지 정보를 불러오는 중입니다…
      </p>
      <p
        v-else-if="errorMessage"
        class="mb-4 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
        role="alert"
      >
        {{ errorMessage }}
      </p>

      <MyPageSummaryCards :cards="summaryCards" />

      <div class="mt-6">
        <MyPageTabs current-page="my-page-badges" />
      </div>

      <section class="mt-6 rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-sm font-medium text-[#6a7282]">획득한 배지</p>
            <h2 class="mt-2 text-[30px] font-bold tracking-[-0.03em] text-[#101828]">
              {{ earnedCount }}/{{ totalCount }} 완료
            </h2>
            <p class="mt-2 text-sm text-[#4a5565]">자재 순환, 거래 기여, ESG 성과에 따라 새로운 배지가 열립니다.</p>
          </div>
          <div class="w-full max-w-[340px] rounded-[14px] bg-[linear-gradient(135deg,#f0fdf4_0%,#eff6ff_100%)] p-4">
            <div class="flex items-center justify-between text-sm text-[#4a5565]">
              <span>배지 진행률</span>
              <span>{{ progressPercent }}%</span>
            </div>
            <div class="mt-3 h-3 rounded-full bg-white/90">
              <div
                class="h-3 rounded-full bg-[linear-gradient(90deg,#16a34a_0%,#2c687b_100%)] transition-all"
                :style="{ width: `${progressPercent}%` }"
              />
            </div>
            <p
              v-if="inProgressBadges.length > 0"
              class="mt-3 text-xs text-[#6a7282]"
            >
              다음 목표: {{ inProgressBadges[0].badgeName }}
            </p>
          </div>
        </div>

        <p
          v-if="!isLoading && totalCount === 0"
          class="mt-6 rounded-[14px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]"
        >
          아직 표시할 뱃지가 없습니다. 거래와 ESG 활동을 시작해보세요.
        </p>

        <div v-else class="mt-6 grid gap-4 md:grid-cols-2">
          <article
            v-for="badge in allBadges"
            :key="badge.memberBadgeId ?? badge.badgeId"
            :class="[
              'rounded-[16px] border p-5 transition',
              badge.isEarned
                ? 'border-[#e5e7eb] bg-white shadow-[0_12px_24px_rgba(16,24,40,0.06)]'
                : 'border-dashed border-[#d1d5db] bg-[#fcfcfd] opacity-80',
            ]"
          >
            <div :class="['rounded-[14px] bg-gradient-to-br p-4', badge.bg]">
              <div class="flex items-start justify-between gap-4">
                <img
                  v-if="badge.iconUrl"
                  :src="badge.iconUrl"
                  alt=""
                  class="size-16 shrink-0 object-contain"
                />
                <div
                  v-else
                  class="grid size-16 shrink-0 place-items-center rounded-xl bg-white/70 text-2xl"
                  :style="{ color: badge.accent }"
                >
                  🏅
                </div>
                <span
                  :class="[
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    badge.isEarned ? 'bg-white/90 text-[#101828]' : 'bg-[#f3f4f6] text-[#6a7282]',
                  ]"
                >
                  {{ badge.isEarned ? "획득 완료" : "잠금" }}
                </span>
              </div>
            </div>

            <div class="mt-4">
              <h3 class="text-xl font-bold text-[#101828]">{{ badge.badgeName }}</h3>
              <p class="mt-1 text-sm font-medium" :style="{ color: badge.accent }">
                {{ subtitleFor(badge) }}
              </p>
              <p class="mt-3 text-sm leading-6 text-[#4a5565]">{{ badge.description }}</p>
              <div
                v-if="!badge.isEarned && badge.progressRate != null"
                class="mt-4 h-2 rounded-full bg-[#f3f4f6]"
              >
                <div
                  class="h-2 rounded-full transition-all"
                  :style="{
                    width: `${badge.progressRate}%`,
                    backgroundColor: badge.accent,
                  }"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  </DefaultLayout>
</template>
