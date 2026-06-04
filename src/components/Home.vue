<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CtaSection from "./home/CtaSection.vue";
import HeroSection from "./home/HeroSection.vue";
import MaterialsSection from "./home/MaterialsSection.vue";
import ValuesSection from "./home/ValuesSection.vue";
import { heroStats, homeAssets, materialCards, valueCards } from "@/data/home";
</script>

<template>
  <DefaultLayout>
    <HeroSection
      :mascot-src="homeAssets.mascot"
      :stats="heroStats"
    />
    <ValuesSection :values="valueCards" />
    <MaterialsSection :materials="materialCards" />
    <CtaSection />
  </DefaultLayout>
</template>
