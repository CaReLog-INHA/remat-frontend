<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { PageName } from "@/types/navigation";
import { useAuthStore } from "@/stores/auth";
import RematLogo from "./RematLogo.vue";

const props = defineProps<{
  logoIconSrc: string;
  navItems: ReadonlyArray<{ label: string; iconSrc: string; page?: PageName; active?: boolean }>;
  /**
   * 헤더 우측 계정 영역 표시 방식.
   * - 명시적으로 넘기면 그 값을 사용 (예: 로그인 페이지에서 강제 guest)
   * - 생략하면 auth 스토어의 로그인 상태를 보고 자동 결정
   */
  accountVariant?: "guest" | "member";
}>();

const router = useRouter();
const authStore = useAuthStore();

const effectiveVariant = computed<"guest" | "member">(() =>
  props.accountVariant ?? (authStore.isAuthenticated ? "member" : "guest"),
);

const go = (name: PageName) => router.push({ name });

const handleLogout = () => {
  authStore.logout();
  router.push({ name: "login" });
};
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-[#e5e7eb] bg-white/95 shadow-sm backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <button type="button" class="flex min-w-0 items-center" aria-label="ReMat 홈으로 이동" @click="go('home')">
        <RematLogo :icon-src="logoIconSrc" />
      </button>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
        <button
          v-for="item in navItems"
          :key="item.label"
          type="button"
          :class="[
            'flex h-9 items-center gap-2 rounded-[10px] px-4 text-sm transition',
            item.active ? 'bg-[#fff6f6] font-medium text-[#2c687b]' : 'text-[#364153] hover:bg-[#fff6f6] hover:text-[#2c687b]',
          ]"
          @click="item.page ? go(item.page) : undefined"
        >
          <img :src="item.iconSrc" alt="" class="size-4 object-contain" />
          {{ item.label }}
        </button>
      </nav>

      <div class="flex items-center gap-2">
        <template v-if="effectiveVariant === 'member'">
          <button
            type="button"
            class="hidden h-8 items-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#8cc7c4] sm:flex"
            @click="go('my-page-profile')"
          >
            <img src="/figma-icons/mypage.svg" alt="" class="size-4 object-contain" />
            마이페이지
          </button>
          <button
            type="button"
            class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#db1a1a]/40"
            @click="handleLogout"
          >
            로그아웃
          </button>
        </template>
        <template v-else>
          <button
            type="button"
            class="hidden h-8 items-center gap-2 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#8cc7c4] sm:flex"
            @click="go('signup')"
          >
            회원가입
          </button>
          <button
            type="button"
            class="h-8 rounded-[8px] border border-black/10 bg-[#fff6f6] px-3 text-sm font-medium text-[#1a1a1a] transition hover:border-[#db1a1a]/40"
            @click="go('login')"
          >
            로그인
          </button>
        </template>
      </div>
    </div>
  </header>
</template>
