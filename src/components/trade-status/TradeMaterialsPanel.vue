<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { materialsApi, type MyMaterialItem } from "@/api/materials";
import { formatPrice, formatDate, transactionLabel } from "@/data/tradeStatus";

const router = useRouter();

const materials = ref<MyMaterialItem[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");

onMounted(async () => {
  try {
    materials.value = await materialsApi.myList();
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isLoading.value = false;
  }
});

const count = computed(() => materials.value.length);

const goToDetail = (m: MyMaterialItem) =>
  router.push({
    name: m.transactionType === "RENTAL" ? "material-rental-detail" : "material-detail",
    params: { id: String(m.id) },
  });
</script>

<template>
  <div class="mt-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-xl font-bold">등록한 자재 ({{ count }})</h2>
      <button
        type="button"
        class="inline-flex h-9 items-center justify-center gap-2 rounded-[8px] bg-[#db1a1a] px-3 text-sm font-medium text-white transition hover:bg-[#c01616]"
        @click="router.push({ name: 'register-material' })"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" stroke-linecap="round" />
        </svg>
        새 자재 등록
      </button>
    </div>

    <p v-if="isLoading" class="mt-4 rounded-md bg-[#eff6ff] px-3 py-2 text-sm text-[#1e40af]">
      자재 목록을 불러오는 중입니다…
    </p>
    <p v-else-if="errorMessage" class="mt-4 rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
      {{ errorMessage }}
    </p>
    <p v-else-if="count === 0" class="mt-4 rounded-[10px] border border-dashed border-[#e5e7eb] bg-[#fafafb] p-8 text-center text-sm text-[#6a7282]">
      아직 등록한 자재가 없습니다.
    </p>

    <div v-else class="mt-4 grid gap-4">
      <article
        v-for="material in materials"
        :key="material.id"
        class="flex flex-col gap-4 rounded-[10px] border border-[#e5e7eb] p-4 sm:flex-row sm:items-start"
      >
        <div class="h-32 w-full overflow-hidden rounded-[10px] bg-[#f3f4f6] sm:w-32">
          <img v-if="material.imageUrl" :src="material.imageUrl" alt="" class="h-full w-full object-cover" />
          <div v-else class="grid h-full w-full place-items-center text-3xl text-[#cbd5e1]">📦</div>
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap gap-2">
            <span class="rounded-[4px] bg-[#8cc7c4]/20 px-2 py-1 text-xs font-medium text-[#2c687b]">{{ material.categoryName }}</span>
            <span class="rounded-[4px] bg-[#f0fdf4] px-2 py-1 text-xs font-medium text-[#008236]">{{ transactionLabel(material.transactionType) }}</span>
          </div>
          <h3 class="mt-2 text-lg font-bold">{{ material.materialName }}</h3>
          <p class="mt-1 line-clamp-2 text-sm leading-5 text-[#4a5565]">{{ material.description }}</p>
          <div class="mt-3 flex flex-wrap gap-4 text-sm text-[#4a5565]">
            <span>{{ formatDate(material.createdAt) }}</span>
            <span>{{ material.quantity }}개 보유</span>
          </div>
        </div>
        <div class="flex shrink-0 flex-row items-center justify-between gap-3 sm:w-28 sm:flex-col sm:items-end">
          <div class="text-right">
            <p class="text-lg font-bold text-[#db1a1a]">{{ formatPrice(material.price) }}</p>
          </div>
          <button
            type="button"
            class="inline-flex h-8 items-center gap-1.5 rounded-[8px] border border-[#e5e7eb] px-3 text-sm font-medium text-[#364153] transition hover:border-[#8cc7c4]"
            @click="goToDetail(material)"
          >
            상세 보기
          </button>
        </div>
      </article>
    </div>
  </div>
</template>
