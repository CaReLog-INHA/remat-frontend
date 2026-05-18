<script setup>
import Mascot from '../components/Mascot.vue';
import svgPaths from '../svg-w8og5igzee';

const emit = defineEmits(['change-page']);

const handleSubmit = () => {
  emit('change-page', 'home');
};
</script>

<template>
  <div class="min-h-screen w-full bg-[linear-gradient(145deg,#ffffff_0%,#fff6f6_50%,rgba(140,199,196,0.1)_100%)] text-[#1a1a1a]">
    <header class="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-100 bg-white/85 px-5 shadow-sm backdrop-blur-md sm:px-8">
      <button type="button" class="flex items-center gap-3" @click="$emit('change-page', 'home')">
        <div class="grid size-10 place-items-center rounded-xl bg-[linear-gradient(135deg,#8cc7c4,#2c687b,#db1a1a)] p-[2px]">
          <div class="grid size-full place-items-center rounded-[10px] bg-white text-sm font-black text-[#2c687b]">R</div>
        </div>
        <div class="flex flex-col text-left">
          <span class="text-xl font-bold leading-tight text-[#2c687b]">ReMat</span>
          <span class="text-[10px] font-medium uppercase tracking-[0.16em] text-gray-400">Re + Material</span>
        </div>
      </button>

      <div class="flex items-center gap-2">
        <button type="button" class="rounded-[8px] px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100" @click="$emit('change-page', 'home')">
          Home
        </button>
        <button type="button" class="rounded-[8px] bg-[#db1a1a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b91616]" @click="$emit('change-page', 'login')">
          Login
        </button>
      </div>
    </header>

    <main class="flex min-h-[calc(100vh-64px)] items-center justify-center px-5 py-12">
      <section class="w-full max-w-[480px]">
        <div class="mb-10 flex flex-col items-center text-center">
          <Mascot :paths="svgPaths" container-class="relative shrink-0 size-[120px]" />
          <h1 class="mt-6 text-4xl font-black tracking-normal text-[#2c687b]">Join ReMat</h1>
          <p class="mt-2 text-sm font-medium text-gray-500">Connect unused materials and start reducing carbon.</p>
        </div>

        <div class="rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-lg sm:p-10">
          <div class="mb-8 flex rounded-2xl bg-gray-100/70 p-1">
            <button type="button" class="flex-1 rounded-xl py-3 text-sm font-bold text-gray-400 transition hover:text-gray-600" @click="$emit('change-page', 'login')">
              Login
            </button>
            <button type="button" class="flex-1 rounded-xl bg-white py-3 text-sm font-bold text-[#1a1a1a] shadow-sm">Sign up</button>
          </div>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Contact name" autocomplete="name" class="h-11 w-full rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#db1a1a]/20" />
              <input type="tel" placeholder="Phone number" autocomplete="tel" class="h-11 w-full rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#db1a1a]/20" />
            </div>
            <input type="text" placeholder="Company" autocomplete="organization" class="h-11 w-full rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#db1a1a]/20" />
            <input type="email" placeholder="Email address" autocomplete="email" class="h-11 w-full rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#db1a1a]/20" />
            <input type="password" placeholder="Password" autocomplete="new-password" class="h-11 w-full rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#db1a1a]/20" />
            <button type="submit" class="mt-4 h-14 w-full rounded-2xl bg-[#db1a1a] text-lg font-bold text-white shadow-lg transition hover:bg-[#b91616]">
              Create account
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>
