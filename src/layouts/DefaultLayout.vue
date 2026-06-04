<script setup lang="ts">
import { computed } from "vue";
import SiteFooter from "@/components/home/SiteFooter.vue";
import SiteHeader from "@/components/home/SiteHeader.vue";
import { footerLinks, homeAssets, navItems as defaultNavItems } from "@/data/home";
import type { PageName } from "@/types/navigation";

type NavItem = { label: string; iconSrc: string; page?: PageName; active?: boolean };

const props = withDefaults(
  defineProps<{
    /** 현재 페이지에 해당하는 nav 항목을 활성화 표시한다. */
    activePage?: PageName;
    accountVariant?: "guest" | "member";
    /**
     * 헤더에 표시할 메뉴 목록을 직접 지정한다.
     * - 생략하면 기본 홈 메뉴(자재 마켓/AI 분석/자재 등록/거래 현황)를 쓴다.
     * - 마이페이지 그룹은 myPageNavItems를 넘긴다.
     * - 상세 페이지처럼 메뉴를 숨기려면 빈 배열([])을 넘긴다.
     */
    navItems?: ReadonlyArray<NavItem>;
  }>(),
  {
    accountVariant: "member",
    navItems: () => defaultNavItems,
  },
);

const headerNavItems = computed(() =>
  props.navItems.map((item) => ({ ...item, active: item.page === props.activePage })),
);
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fff7f7_0%,#effbfb_100%)] text-[#101828]">
    <SiteHeader
      :logo-icon-src="homeAssets.logoIcon"
      :nav-items="headerNavItems"
      :account-variant="accountVariant"
    />

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <SiteFooter
      :mascot-src="homeAssets.mascot"
      :service-links="footerLinks.service"
      :support-links="footerLinks.support"
    />
  </div>
</template>
