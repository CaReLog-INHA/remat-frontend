<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageHero from "@/components/mypage/MyPageHero.vue";
import MyPageSummaryCards from "@/components/mypage/MyPageSummaryCards.vue";
import MyPageTabs from "@/components/mypage/MyPageTabs.vue";
import { homeAssets } from "@/data/home";
import { myPageNavItems } from "@/data/mypage";
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

const materialCount = computed(() => myMaterials.value?.length ?? 0);
const isEmpty = computed(() => !isLoadingList.value && materialCount.value === 0);

const formatPrice = (n: number | null | undefined): string =>
  n == null ? "—" : `${n.toLocaleString("ko-KR")}원`;

const goToDetail = (material: MyMaterialItem) => {
  router.push({
    name: material.transactionType === "RENTAL" ? "material-rental-detail" : "material-detail",
    params: { id: String(material.id) },
  });
};

const goToRegister = () => router.push({ name: "register-material" });
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

      <!-- 로딩/에러 -->
      <p
        v-if="isLoadingList"
        class="mt-6 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]"
      >
        자재 목록을 불러오는 중입니다…
      </p>
      <p
        v-else-if="listErrorMessage"
        class="mt-6 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
        role="alert"
      >
        {{ listErrorMessage }}
      </p>

      <!-- 빈 상태 -->
      <section
        v-else-if="isEmpty"
        class="mt-6 rounded-[16px] border border-dashed border-[#e5e7eb] bg-white px-6 py-16 text-center shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]"
      >
        <p class="text-base font-medium text-[#475569]">아직 등록한 자재가 없습니다.</p>
        <p class="mt-2 text-sm text-[#6a7282]">새 자재를 등록하고 거래를 시작해보세요.</p>
        <button
          type="button"
          class="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[#2c687b] px-4 text-sm font-semibold text-white transition hover:bg-[#25596a]"
          @click="goToRegister"
        >
          자재 등록하러 가기
        </button>
      </section>

      <!-- 판매 중인 자재 카드 -->
      <section
        v-else
        class="mt-6 rounded-[16px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]"
      >
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-bold tracking-[-0.02em] text-[#101828]">판매 중인 자재 ({{ materialCount }})</h2>
          <button
            type="button"
            class="inline-flex h-9 items-center gap-1.5 rounded-[8px] bg-[#2c687b] px-3 text-sm font-medium text-white transition hover:bg-[#25596a]"
            @click="goToRegister"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round" /></svg>
            새 자재 등록
          </button>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <article
            v-for="material in myMaterials"
            :key="material.id"
            class="overflow-hidden rounded-[10px] border border-[#e5e7eb]"
          >
            <div class="h-[320px] w-full bg-[#f3f4f6]">
              <img
                v-if="material.imageUrl"
                :src="material.imageUrl"
                alt=""
                class="h-full w-full object-cover"
              />
              <div v-else class="grid h-full w-full place-items-center text-6xl text-[#cbd5e1]">📦</div>
            </div>
            <div class="p-4">
              <h3 class="text-base font-bold text-[#101828]">{{ material.materialName }}</h3>
              <p class="mt-2 line-clamp-2 text-sm leading-5 text-[#4a5565]">{{ material.description }}</p>
              <div class="mt-4 flex items-center justify-between">
                <p class="text-xl font-bold text-[#db1a1a]">{{ formatPrice(material.price) }}</p>
                <button
                  type="button"
                  class="inline-flex h-8 items-center gap-1.5 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#8cc7c4]"
                  @click="goToDetail(material)"
                >
                  <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4h-7v16h16v-7M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1l1-4Z" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  수정
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  </DefaultLayout>
</template>
