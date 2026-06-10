import { computed, onMounted, ref } from "vue";
import { myPageApi, type MyPageOverview } from "@/api/mypage";
import type { SummaryCard } from "@/components/mypage/MyPageSummaryCards.vue";

/**
 * 마이페이지 통합 조회(/mypage)를 onMounted 시점에 가져오고,
 * 모든 마이페이지 화면에서 공통으로 쓰는 reactive 파생값을 묶어 노출한다.
 * - Hero에 그대로 넘길 profile / reviewCount
 * - SummaryCards에 그대로 넘길 summaryCards 배열
 */
export const useMyPageOverview = () => {
  const overview = ref<MyPageOverview | null>(null);
  const isLoading = ref(true);
  const errorMessage = ref("");

  onMounted(async () => {
    try {
      overview.value = await myPageApi.overview();
    } catch (e) {
      errorMessage.value = (e as Error).message;
    } finally {
      isLoading.value = false;
    }
  });

  const profile = computed(() => overview.value?.profile ?? null);

  const reviewCount = computed(
    () => overview.value?.recentActivities?.receivedReviews?.length,
  );

  const summaryCards = computed<SummaryCard[]>(() => {
    const esg = overview.value?.esgContribution;
    const sellingCount = overview.value?.sellingMaterials?.length ?? 0;
    const purchasedCount =
      overview.value?.recentActivities?.completedPurchases?.length ?? 0;
    return [
      {
        label: "총 거래",
        value: esg?.totalTradeCount != null ? `${esg.totalTradeCount}` : "—",
        iconSrc: "/figma-icons/stat-total.svg",
        tint: "bg-[#dbeafe]",
      },
      {
        label: "탄소 절감",
        value: esg?.totalCarbonKg != null ? `${esg.totalCarbonKg}kg` : "—",
        iconSrc: "/figma-icons/stat-carbon.svg",
        tint: "bg-[#dcfce7]",
      },
      {
        label: "판매 자재",
        value: `${sellingCount}`,
        iconSrc: "/figma-icons/stat-sell.svg",
        tint: "bg-[#f3e8ff]",
      },
      {
        label: "구매 자재",
        value: `${purchasedCount}`,
        iconSrc: "/figma-icons/stat-buy.svg",
        tint: "bg-[#fee2e2]",
      },
    ];
  });

  return {
    overview,
    isLoading,
    errorMessage,
    profile,
    reviewCount,
    summaryCards,
  };
};
