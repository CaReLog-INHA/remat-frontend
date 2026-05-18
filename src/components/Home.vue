<script setup lang="ts">
import CtaSection from "./home/CtaSection.vue";
import HeroSection from "./home/HeroSection.vue";
import MaterialsSection from "./home/MaterialsSection.vue";
import SiteFooter from "./home/SiteFooter.vue";
import SiteHeader from "./home/SiteHeader.vue";
import ValuesSection from "./home/ValuesSection.vue";
import { footerLinks, heroStats, homeAssets, materialCards, navItems, valueCards } from "@/data/home";

defineEmits<{
  (event: "change-page", pageName: "home" | "login" | "signup"): void;
}>();
</script>

<template>
  <div class="min-h-screen bg-[#fff6f6] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="navItems"
      @change-page="$emit('change-page', $event)"
    />

    <main class="pt-16">
      <HeroSection
        :mascot-src="homeAssets.mascot"
        :stats="heroStats"
        @change-page="$emit('change-page', $event)"
      />
      <ValuesSection :values="valueCards" />
      <MaterialsSection :materials="materialCards" />
      <CtaSection @change-page="$emit('change-page', $event)" />
    </main>

    <SiteFooter
      :logo-icon-src="homeAssets.logoIcon"
      :mascot-src="homeAssets.mascot"
      :service-links="footerLinks.service"
      :support-links="footerLinks.support"
    />
  </div>
</template>
