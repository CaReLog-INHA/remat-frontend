<script setup lang="ts">
import IconPath from "./IconPath.vue";
import RematLogo from "./RematLogo.vue";

defineProps<{
  logoIconSrc: string;
  navItems: Array<{ label: string; icon: string }>;
}>();
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-[#e5e7eb] bg-white/95 shadow-sm backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#" class="flex min-w-0 items-center" aria-label="ReMat 홈">
        <RematLogo :icon-src="logoIconSrc" />
      </a>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
        <a
          v-for="item in navItems"
          :key="item.label"
          href="#"
          class="flex h-9 items-center gap-2 rounded-[8px] px-4 text-sm text-[#364153] transition hover:bg-[#fff6f6] hover:text-[#2c687b]"
        >
          <IconPath :path="item.icon" />
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <button class="hidden h-8 items-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#8cc7c4] sm:flex">
          <IconPath class-name="size-4 text-[#2c687b]" path="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10" />
          마이페이지
        </button>
        <button class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#db1a1a]/40">
          로그아웃
        </button>
      </div>
    </div>
  </header>
</template>
