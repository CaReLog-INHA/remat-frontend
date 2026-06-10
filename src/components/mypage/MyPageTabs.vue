<script setup lang="ts">
import { useRouter } from "vue-router";
import type { MyPageRoute } from "@/data/mypage";
import { myPageTabs } from "@/data/mypage";

defineProps<{
  currentPage: MyPageRoute;
}>();

const router = useRouter();
const go = (name: MyPageRoute) => router.push({ name });
</script>

<template>
  <div class="inline-flex flex-wrap gap-2 rounded-[12px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.08)]">
    <button
      v-for="tab in myPageTabs"
      :key="tab.label"
      type="button"
      :class="[
        'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
        currentPage === tab.page ? 'bg-[#2c687b] text-white shadow-sm' : 'text-[#475569] hover:bg-[#f8fafc]',
      ]"
      @click="tab.page ? go(tab.page) : undefined"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
