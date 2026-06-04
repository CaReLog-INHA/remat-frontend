<script setup lang="ts">
defineProps<{
  iconSrc: string;
  variant?: "header" | "footer";
}>();
</script>

<template>
  <span
    aria-label="ReMat"
    :class="[
      'flex h-11 shrink-0 items-center gap-3',
      variant === 'footer' ? 'text-white' : '',
    ]"
  >
    <span class="relative grid size-11 shrink-0 place-items-center rounded-[14px] bg-[linear-gradient(135deg,#8cc7c4_0%,#2c687b_50%,#db1a1a_100%)]">
      <span
        :class="[
          'grid size-10 place-items-center rounded-[10px]',
          variant === 'footer' ? 'bg-[#2c687b]' : 'bg-white',
        ]"
      >
        <img :src="iconSrc" alt="" class="size-6 object-contain" />
      </span>
      <span class="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#db1a1a]"></span>
    </span>
    <span class="flex flex-col">
      <strong
        :class="[
          'text-[20px] font-bold leading-[28px] tracking-[-0.45px]',
          variant === 'footer'
            ? 'text-white'
            : 'bg-[linear-gradient(90deg,#2c687b,#8cc7c4)] bg-clip-text text-transparent',
        ]"
      >
        ReMat
      </strong>
      <span :class="['whitespace-nowrap text-[10px] font-normal leading-[15px] tracking-[0.37px]', variant === 'footer' ? 'text-white/45' : 'text-[#6a7282]']">
        Re + Material
      </span>
    </span>
  </span>
</template>
