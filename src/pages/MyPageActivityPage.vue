<script setup lang="ts">
import { computed } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { homeAssets } from "@/data/home";
import { myPageNavItems } from "@/data/mypage";
import { useMyPageOverview } from "@/composables/useMyPageOverview";

const { overview, isLoading, errorMessage, profile, reviewCount, summaryCards } =
  useMyPageOverview();

type ActivityKind = "purchase" | "sale" | "reviewReceived" | "reviewWritten" | "badge";

interface ActivityItem {
  id: string;
  kind: ActivityKind;
  title: string;
  description: string;
  createdAt: string;
}

const KIND_META: Record<ActivityKind, { label: string; bg: string; emoji: string }> = {
  purchase: { label: "구매 완료", bg: "bg-[#dbeafe]", emoji: "🛒" },
  sale: { label: "판매 완료", bg: "bg-[#dcfce7]", emoji: "💰" },
  reviewReceived: { label: "후기 받음", bg: "bg-[#fef9c3]", emoji: "⭐" },
  reviewWritten: { label: "후기 작성", bg: "bg-[#fde68a]", emoji: "✍️" },
  badge: { label: "뱃지 획득", bg: "bg-[#f3e8ff]", emoji: "🏅" },
};

const formatDate = (iso: string | null | undefined): string => {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatPrice = (n: number | null | undefined): string => {
  if (n == null) return "—";
  return n.toLocaleString("ko-KR");
};

const activities = computed<ActivityItem[]>(() => {
  const r = overview.value?.recentActivities;
  if (!r) return [];
  const out: ActivityItem[] = [];

  r.completedPurchases?.forEach((t) =>
    out.push({
      id: `purchase-${t.tradeId}`,
      kind: "purchase",
      title: t.materialName,
      description: `${t.partnerName}에게서 ${t.quantity}개 구매 (${formatPrice(t.finalPrice)}원)`,
      createdAt: t.createdAt,
    }),
  );
  r.completedSales?.forEach((t) =>
    out.push({
      id: `sale-${t.tradeId}`,
      kind: "sale",
      title: t.materialName,
      description: `${t.partnerName}에게 ${t.quantity}개 판매 (${formatPrice(t.finalPrice)}원)`,
      createdAt: t.createdAt,
    }),
  );
  r.receivedReviews?.forEach((rv) =>
    out.push({
      id: `recv-${rv.reviewId}`,
      kind: "reviewReceived",
      title: `${rv.partnerName} 님의 후기`,
      description: `별점 ${rv.starRating}점 — ${rv.description}`,
      createdAt: rv.createdAt,
    }),
  );
  r.writtenReviews?.forEach((rv) =>
    out.push({
      id: `sent-${rv.reviewId}`,
      kind: "reviewWritten",
      title: `${rv.partnerName} 님에게 작성한 후기`,
      description: `별점 ${rv.starRating}점 — ${rv.description}`,
      createdAt: rv.createdAt,
    }),
  );
  r.earnedBadgeHistories?.forEach((b) =>
    out.push({
      id: `badge-${b.memberBadgeId}`,
      kind: "badge",
      title: b.badgeName,
      description: "뱃지를 획득했습니다.",
      createdAt: b.earnedAt,
    }),
  );

  return out.sort((a, b) => {
    const ta = new Date(a.createdAt).getTime();
    const tb = new Date(b.createdAt).getTime();
    return tb - ta;
  });
});

const totalCount = computed(() => activities.value.length);

const lastWeekCount = computed(() => {
  const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return activities.value.filter((a) => {
    const t = new Date(a.createdAt).getTime();
    return !Number.isNaN(t) && t >= oneWeekAgo;
  }).length;
});
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
        활동 내역을 불러오는 중입니다…
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
        <MyPageTabs current-page="my-page-activity" />
      </div>

      <div class="mt-6 space-y-6">
        <section class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-sm font-medium text-[#6b7280]">최근 활동</p>
              <h1 class="mt-2 text-[30px] font-bold tracking-[-0.03em] text-[#101828]">활동 내역</h1>
              <p class="mt-2 max-w-2xl text-sm leading-6 text-[#4a5565]">
                거래, 후기, 뱃지 획득 등 최근 활동을 시간순으로 정리했습니다.
              </p>
            </div>
          </div>

          <p
            v-if="!isLoading && totalCount === 0"
            class="mt-6 rounded-[14px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]"
          >
            아직 표시할 활동이 없습니다. 거래나 ESG 활동을 시작해보세요.
          </p>

          <div v-else class="mt-6 space-y-4">
            <article
              v-for="activity in activities"
              :key="activity.id"
              class="rounded-[18px] border border-[#e5e7eb] bg-[#fafafb] p-5"
            >
              <div class="flex items-start gap-4">
                <div
                  :class="[
                    'grid h-14 w-14 place-items-center rounded-[18px] text-2xl',
                    KIND_META[activity.kind].bg,
                  ]"
                >
                  {{ KIND_META[activity.kind].emoji }}
                </div>
                <div class="flex-1">
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                      <span class="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-[#475569]">
                        {{ KIND_META[activity.kind].label }}
                      </span>
                      <h2 class="text-lg font-semibold text-[#101828]">{{ activity.title }}</h2>
                    </div>
                    <span class="text-sm text-[#6b7280]">{{ formatDate(activity.createdAt) }}</span>
                  </div>
                  <p class="mt-2 text-sm leading-6 text-[#4a5565]">{{ activity.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
          <p class="text-sm font-medium text-[#6b7280]">활동 요약</p>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-[16px] bg-[#f8fafc] p-4">
              <p class="text-sm text-[#475569]">총 활동</p>
              <p class="mt-2 text-2xl font-semibold text-[#101828]">{{ totalCount }}</p>
            </div>
            <div class="rounded-[16px] bg-[#f8fafc] p-4">
              <p class="text-sm text-[#475569]">최근 일주일</p>
              <p class="mt-2 text-2xl font-semibold text-[#101828]">{{ lastWeekCount }}건</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </DefaultLayout>
</template>
