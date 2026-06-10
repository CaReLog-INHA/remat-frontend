<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { homeAssets } from "@/data/home";
import { regionOptions } from "@/data/regions";
import {
  conditionOptions,
  transactionOptions,
  conditionLabel,
  transactionLabel,
} from "@/data/materialOptions";
import { materialsApi, type MaterialListItem } from "@/api/materials";
import { useCategories } from "@/composables/useCategories";
import type { MaterialCondition, Region, TransactionType } from "@/api/types";

const router = useRouter();

const { categories } = useCategories();

const materials = ref<MaterialListItem[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");

// 필터 상태 (빈 문자열 = 전체)
const keyword = ref("");
const selectedCategory = ref("");
const selectedCondition = ref<MaterialCondition | "">("");
const selectedTransaction = ref<TransactionType | "">("");
const selectedRegion = ref<Region | "">("");

const fetchMaterials = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    materials.value = await materialsApi.list({
      categoryName: selectedCategory.value || undefined,
      materialCondition: selectedCondition.value || undefined,
      transactionType: selectedTransaction.value || undefined,
      region: selectedRegion.value || undefined,
    });
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchMaterials);

// 드롭다운 필터가 바뀔 때마다 서버에 재조회 (검색어는 클라이언트 필터라 제외)
watch(
  [selectedCategory, selectedCondition, selectedTransaction, selectedRegion],
  fetchMaterials,
);

// 검색어 기준 클라이언트 필터 (백엔드에 키워드 검색 파라미터가 없어 프론트에서 처리)
const filteredMaterials = computed(() => {
  const kw = keyword.value.trim().toLowerCase();
  if (!kw) return materials.value;
  return materials.value.filter((m) => m.materialName.toLowerCase().includes(kw));
});

const hasActiveFilter = computed(
  () =>
    !!keyword.value ||
    !!selectedCategory.value ||
    !!selectedCondition.value ||
    !!selectedTransaction.value ||
    !!selectedRegion.value,
);

const isEmpty = computed(
  () => !isLoading.value && !errorMessage.value && filteredMaterials.value.length === 0,
);

const regionLabel = (code: string): string =>
  regionOptions.find((r) => r.value === code)?.label ?? code;

const formatPrice = (n: number | null | undefined): string =>
  n == null ? "—" : `${n.toLocaleString("ko-KR")}원`;

const goToDetail = (material: MaterialListItem) => {
  router.push({
    name: material.transactionType === "RENTAL" ? "material-rental-detail" : "material-detail",
    params: { id: String(material.id) },
  });
};

const resetFilters = () => {
  keyword.value = "";
  selectedCategory.value = "";
  selectedCondition.value = "";
  selectedTransaction.value = "";
  selectedRegion.value = "";
};

const selectClass =
  "h-11 w-full rounded-xl bg-[#f9fafb] px-3 text-sm font-medium text-[#1a1a1a] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]";
</script>

<template>
  <DefaultLayout active-page="marketplace">
    <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.92)_100%)] py-12 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold">자재 마켓</h1>
        <p class="mt-3 text-lg text-white/80">검증된 재사용 자재를 검색하고 판매 또는 대여 형태로 거래할 수 있습니다.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
        <label class="relative block">
          <svg class="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15Z" stroke-linecap="round" />
          </svg>
          <input
            v-model="keyword"
            type="search"
            placeholder="자재명 또는 키워드로 검색해보세요"
            class="h-12 w-full rounded-xl bg-[#f9fafb] pl-10 pr-3 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]"
          />
        </label>

        <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-[#364153]">카테고리</label>
            <select v-model="selectedCategory" :class="selectClass">
              <option value="">전체</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.displayName">{{ cat.displayName }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-[#364153]">상태</label>
            <select v-model="selectedCondition" :class="selectClass">
              <option value="">전체 상태</option>
              <option v-for="opt in conditionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-[#364153]">지역</label>
            <select v-model="selectedRegion" :class="selectClass">
              <option value="">전체 지역</option>
              <option v-for="opt in regionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-[#364153]">거래 유형</label>
            <select v-model="selectedTransaction" :class="selectClass">
              <option value="">전체</option>
              <option v-for="opt in transactionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>
        </div>

        <button
          v-if="hasActiveFilter"
          type="button"
          class="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#fff6f6] px-4 text-sm font-medium text-[#1a1a1a]"
          @click="resetFilters"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 5h18M7 12h10M10 19h4" stroke-linecap="round" />
          </svg>
          필터 초기화
        </button>
      </div>

      <div class="mt-8 flex items-center justify-between gap-4">
        <p class="text-base text-[#4a5565]">
          총 <strong class="text-[#db1a1a]">{{ filteredMaterials.length }}</strong>개의 자재
        </p>
        <button type="button" class="inline-flex h-10 items-center gap-2 rounded-xl bg-[#db1a1a] px-4 text-sm font-medium text-white transition hover:bg-[#c01616]" @click="router.push({ name: 'register-material' })">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14" stroke-linecap="round" />
          </svg>
          자재 등록하기
        </button>
      </div>

      <!-- 로딩 -->
      <p
        v-if="isLoading"
        class="mt-6 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]"
      >
        자재 목록을 불러오는 중입니다…
      </p>
      <!-- 에러 -->
      <p
        v-else-if="errorMessage"
        class="mt-6 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]"
        role="alert"
      >
        {{ errorMessage }}
      </p>

      <!-- 목록 -->
      <div v-else-if="filteredMaterials.length" class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <button
          v-for="material in filteredMaterials"
          :key="material.id"
          type="button"
          class="overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          @click="goToDetail(material)"
        >
          <img
            v-if="material.imageUrl"
            :src="material.imageUrl"
            alt=""
            class="h-[258px] w-full object-cover"
          />
          <div v-else class="grid h-[258px] w-full place-items-center bg-[#f3f4f6] text-5xl text-[#cbd5e1]">
            📦
          </div>
          <div class="p-5">
            <div class="flex flex-wrap gap-2">
              <span class="rounded-[8px] bg-[#8cc7c4]/20 px-2.5 py-1 text-xs font-medium text-[#2c687b]">{{ material.categoryName }}</span>
              <span class="rounded-[8px] bg-[#f0fdf4] px-2.5 py-1 text-xs font-medium text-[#008236]">{{ conditionLabel(material.materialCondition) }}</span>
              <span :class="['rounded-[8px] px-2.5 py-1 text-xs font-medium', material.transactionType === 'SALE' ? 'bg-[#dbeafe] text-[#1447e6]' : 'bg-[#f3e8ff] text-[#8200db]']">
                {{ transactionLabel(material.transactionType) }}
              </span>
            </div>
            <h2 class="mt-4 text-lg font-bold text-[#101828]">{{ material.materialName }}</h2>
            <p class="mt-3 text-sm text-[#6a7282]">{{ regionLabel(material.region) }}</p>
            <div class="mt-4 border-t border-[#f3f4f6] pt-4">
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-2xl font-bold text-[#db1a1a]">{{ formatPrice(material.price) }}</p>
                  <p class="mt-1 text-xs text-[#6a7282]">{{ material.quantity }}개 보유</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      <!-- 빈 상태 -->
      <div v-else-if="isEmpty" class="mt-6 rounded-[18px] border border-[#e5e7eb] bg-white px-6 py-16 shadow-sm">
        <div class="flex flex-col items-center text-center">
          <img :src="homeAssets.mascot" alt="" class="size-[155px] object-contain" />
          <h2 class="mt-6 text-xl font-bold text-[#101828]">검색 결과가 없습니다</h2>
          <p class="mt-2 text-base text-[#4a5565]">다른 검색어나 필터를 시도해보세요.</p>
          <button
            v-if="hasActiveFilter"
            type="button"
            class="mt-8 inline-flex h-9 items-center justify-center rounded-[8px] border border-[#e5e7eb] bg-[#fff6f6] px-4 text-sm font-medium text-[#1a1a1a] transition hover:ring-1 hover:ring-[#d1d5db]"
            @click="resetFilters"
          >
            필터 초기화
          </button>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
