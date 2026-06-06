<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { homeAssets } from "@/data/home";
import { myPageNavItems } from "@/data/mypage";
import { regionOptions } from "@/data/regions";
import { useMyPageOverview } from "@/composables/useMyPageOverview";
import { materialsApi, type MyMaterialItem } from "@/api/materials";

const router = useRouter();

const { profile, reviewCount, summaryCards } = useMyPageOverview();

const myMaterials = ref<MyMaterialItem[] | null>(null);
const isLoadingList = ref(true);
const listErrorMessage = ref("");

onMounted(async () => {
  try {
    myMaterials.value = await materialsApi.myList();
  } catch (e) {
    listErrorMessage.value = (e as Error).message;
  } finally {
    isLoadingList.value = false;
  }
});

// 거래 유형 -> "판매 중"/"대여 중" 같은 라벨
const transactionLabel = (type: string): string => {
  if (type === "SALE") return "판매 중";
  if (type === "RENTAL") return "대여 중";
  return type;
};

const regionLabel = (code: string): string => {
  const opt = regionOptions.find((r) => r.value === code);
  return opt?.label ?? code;
};

const conditionLabel = (cond: string): string => {
  switch (cond) {
    case "BEST": return "최상";
    case "GOOD": return "양호";
    case "NORMAL": return "보통";
    default: return cond;
  }
};

const formatDate = (iso: string | null | undefined): string => {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("ko-KR");
};

const formatPrice = (n: number | null | undefined): string => {
  if (n == null) return "—";
  return n.toLocaleString("ko-KR");
};

const goToDetail = (id: number) => {
  router.push({ name: "material-detail", params: { id: String(id) } });
};

const goToRegister = () => router.push({ name: "register-material" });

const isEmpty = computed(() => !isLoadingList.value && (myMaterials.value?.length ?? 0) === 0);
</script>

<template>
  <DefaultLayout :nav-items="myPageNavItems">
    <MyPageHero
      :mascot-src="homeAssets.mascot"
      :profile="profile"
      :review-count="reviewCount"
    />

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <MyPageSummaryCards :cards="summaryCards" />

      <div class="mt-6">
        <MyPageTabs current-page="my-page-registered-materials" />
      </div>

      <div class="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div class="space-y-6">
          <section class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-sm font-medium text-[#6b7280]">내 자재</p>
                <h1 class="mt-2 text-[30px] font-bold tracking-[-0.03em] text-[#101828]">내가 올린 자재</h1>
                <p class="mt-2 max-w-2xl text-sm leading-6 text-[#4a5565]">
                  등록된 자재 목록과 판매 현황을 한눈에 확인하고 관리할 수 있습니다.
                </p>
              </div>
              <button
                type="button"
                class="inline-flex h-11 items-center justify-center rounded-xl bg-[#2c687b] px-5 text-sm font-semibold text-white transition hover:bg-[#25596a]"
                @click="goToRegister"
              >
                새 자재 등록
              </button>
            </div>
          </section>

          <p
            v-if="isLoadingList"
            class="rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]"
          >
            자재 목록을 불러오는 중입니다…
          </p>
          <p
            v-else-if="listErrorMessage"
            class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
            role="alert"
          >
            {{ listErrorMessage }}
          </p>

          <section v-if="isEmpty" class="rounded-[18px] border border-dashed border-[#e5e7eb] bg-white p-10 text-center">
            <p class="text-base font-medium text-[#475569]">아직 등록한 자재가 없습니다.</p>
            <p class="mt-2 text-sm text-[#6a7282]">새 자재를 등록하고 거래를 시작해보세요.</p>
            <button
              type="button"
              class="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[#2c687b] px-4 text-sm font-semibold text-white hover:bg-[#25596a]"
              @click="goToRegister"
            >
              자재 등록하러 가기
            </button>
          </section>

          <section v-else class="grid gap-4">
            <article
              v-for="material in myMaterials"
              :key="material.id"
              class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_8px_24px_rgba(16,24,40,0.04)]"
            >
              <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div class="flex items-center gap-4">
                  <img
                    v-if="material.imageUrl"
                    :src="material.imageUrl"
                    alt=""
                    class="h-14 w-14 shrink-0 rounded-[18px] object-cover"
                  />
                  <div
                    v-else
                    class="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] bg-[#f3f4f6] text-[#9ca3af]"
                  >
                    📦
                  </div>
                  <div>
                    <h2 class="text-xl font-semibold text-[#101828]">{{ material.materialName }}</h2>
                    <p class="mt-1 text-sm text-[#6a7282]">
                      {{ material.categoryName }} · {{ regionLabel(material.region) }} · 상태 {{ conditionLabel(material.materialCondition) }}
                    </p>
                  </div>
                </div>

                <div class="flex flex-col gap-3 sm:items-end">
                  <span class="rounded-full bg-[#eff6ff] px-3 py-1.5 text-sm font-semibold text-[#155eef]">
                    {{ transactionLabel(material.transactionType) }}
                  </span>
                  <p class="text-sm text-[#6a7282]">{{ formatDate(material.createdAt) }}</p>
                </div>
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-[#4a5565]">
                  가격 <span class="font-semibold text-[#101828]">{{ formatPrice(material.price) }}원</span>
                  · 수량 {{ material.quantity }}{{ material.unit ? `(단위 ${material.unit})` : "" }}
                </p>
                <button
                  type="button"
                  class="inline-flex h-11 items-center justify-center rounded-xl border border-[#e5e7eb] bg-[#f8fafc] px-4 text-sm font-semibold text-[#344054] transition hover:border-[#cbd5e1]"
                  @click="goToDetail(material.id)"
                >
                  상세 보기
                </button>
              </div>
            </article>
          </section>
        </div>

        <aside class="space-y-6 max-w-[420px] xl:max-w-none">
          <section class="rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
            <p class="text-sm font-medium text-[#6b7280]">관리 팁</p>
            <h2 class="mt-2 text-xl font-semibold text-[#101828]">자재 등록을 빠르게 관리하기</h2>
            <ul class="mt-4 space-y-3 text-sm text-[#475569]">
              <li class="flex gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2c687b]" />
                <span>사진과 상세 설명을 추가하면 거래 문의가 더 빨라집니다.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2c687b]" />
                <span>판매 상태를 빠르게 업데이트하고 구매자를 응대하세요.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2c687b]" />
                <span>거래 후 피드백을 남기면 신뢰도가 올라갑니다.</span>
              </li>
            </ul>
          </section>

          <section class="rounded-[16px] border border-[#e5e7eb] bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]">
            <div class="flex items-center gap-4">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-[#fee2e2] text-[#b91c1c]">
                <span class="text-xl font-bold">!</span>
              </div>
              <div>
                <h3 class="text-base font-semibold text-[#101828]">등록 알림</h3>
                <p class="mt-1 text-sm text-[#475569]">
                  게시물이 오래된 자재는 노출이 낮아질 수 있습니다. 업데이트를 권장합니다.
                </p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </section>
  </DefaultLayout>
</template>
