<script setup lang="ts">
import { useRouter } from "vue-router";
import IconPath from "./IconPath.vue";
import MaterialCard from "./MaterialCard.vue";
import type { MaterialListItem } from "@/api/materials";

defineProps<{
  materials: ReadonlyArray<MaterialListItem>;
}>();

const router = useRouter();

const goToDetail = (material: MaterialListItem) => {
  router.push({
    name: material.transactionType === "RENTAL" ? "material-rental-detail" : "material-detail",
    params: { id: String(material.id) },
  });
};

const goToMarketplace = () => router.push({ name: "marketplace" });
</script>

<template>
  <section id="materials" class="bg-[linear-gradient(180deg,#fff,#fff6f6)] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-3xl font-extrabold tracking-normal text-[#101828]">최근 등록된 자재</h2>
          <p class="mt-2 text-sm text-[#4a5565]">지금 바로 거래 가능한 자재를 확인하세요</p>
        </div>
        <button
          type="button"
          class="inline-flex h-9 shrink-0 items-center gap-2 rounded-[8px] border border-[#db1a1a]/35 px-3 text-sm font-semibold text-[#db1a1a] transition hover:bg-[#db1a1a]/5"
          @click="goToMarketplace"
        >
          전체보기
          <IconPath path="M5 12h14M13 5l7 7l-7 7" />
        </button>
      </div>

      <div v-if="materials.length" class="mt-10 grid gap-8 md:grid-cols-3">
        <MaterialCard
          v-for="material in materials"
          :key="material.id"
          :material="material"
          class="cursor-pointer"
          @click="goToDetail(material)"
        />
      </div>
      <p
        v-else
        class="mt-10 rounded-[14px] border border-dashed border-[#e5e7eb] bg-white/60 p-10 text-center text-sm text-[#6a7282]"
      >
        아직 등록된 자재가 없습니다.
      </p>
    </div>
  </section>
</template>
