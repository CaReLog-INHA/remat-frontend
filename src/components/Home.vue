<script setup lang="ts">
import { onMounted, ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CtaSection from "./home/CtaSection.vue";
import HeroSection from "./home/HeroSection.vue";
import MaterialsSection from "./home/MaterialsSection.vue";
import ValuesSection from "./home/ValuesSection.vue";
import { heroStats, homeAssets, valueCards } from "@/data/home";
import { materialsApi, type MaterialListItem } from "@/api/materials";

// 홈 "최근 등록된 자재" 섹션 — 자재 목록 API에서 최신 3건
const recentMaterials = ref<MaterialListItem[]>([]);

onMounted(async () => {
  try {
    const list = await materialsApi.list();
    recentMaterials.value = [...list]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  } catch {
    recentMaterials.value = [];
  }
});
</script>

<template>
  <DefaultLayout>
    <HeroSection
      :mascot-src="homeAssets.mascot"
      :stats="heroStats"
    />
    <ValuesSection :values="valueCards" />
    <MaterialsSection :materials="recentMaterials" />
    <CtaSection />
  </DefaultLayout>
</template>
