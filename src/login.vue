<template>
  <div class="min-h-screen w-full flex flex-col font-sans text-[#1a1a1a]" 
       style="background: linear-gradient(145deg, #ffffff 0%, #fff6f6 50%, rgba(140, 199, 196, 0.1) 100%)">
    
    <header class="h-[65px] bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div class="flex items-center gap-3 cursor-pointer" @click="$emit('change-page', 'login')">
        <div class="size-10 bg-gradient-to-br from-[#8CC7C4] to-[#DB1A1A] p-[2px] rounded-xl shadow-sm">
          <div class="bg-white size-full rounded-[10px] flex items-center justify-center text-xl">🌱</div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-xl text-[#2c687b] leading-tight tracking-tight">ReMat</span>
          <span class="text-[9px] text-gray-400 font-medium uppercase tracking-widest">Re + Material</span>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center gap-8">
        <a v-for="link in ['자재 마켓', 'AI 분석', '자재 등록', '거래현황']" :key="link"
           class="text-sm font-medium text-gray-600 hover:text-[#db1a1a] transition-colors cursor-pointer">
          {{ link }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button class="text-sm font-semibold text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-lg transition-all">마이페이지</button>
        <button class="text-sm font-semibold bg-[#db1a1a] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#b91616] transition-all">로그아웃</button>
      </div>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center p-6">
      <div class="w-full max-w-[448px] animate-fade-in">
        <div class="flex flex-col items-center mb-10">
          <div class="mb-6 drop-shadow-2xl">
            <Mascot :paths="svgPaths" class="size-[120px]" />
          </div>
          <h2 class="text-4xl font-black text-[#2c687b] mb-2 tracking-tighter">ReMat</h2>
          <p class="text-gray-500 font-medium">ESG 기반 자재 재사용 플랫폼</p>
        </div>

        <div class="bg-white/90 backdrop-blur-lg p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/20">
          <div class="flex p-1 bg-gray-100/50 rounded-2xl mb-10">
            <button class="flex-1 py-3 bg-white shadow-sm rounded-xl text-sm font-bold text-[#1a1a1a]">로그인</button>
            <button @click="$emit('change-page', 'signup')" class="flex-1 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">회원가입</button>
          </div>

          <form class="space-y-6">
            <div class="space-y-2">
              <label class="text-[13px] font-bold text-gray-700 ml-1">이메일</label>
              <input type="email" placeholder="example@company.com" 
                     class="w-full h-12 bg-gray-50 border-transparent border focus:border-[#db1a1a] focus:bg-white rounded-xl px-4 outline-none transition-all text-sm" />
            </div>
            <div class="space-y-2">
              <label class="text-[13px] font-bold text-gray-700 ml-1">비밀번호</label>
              <input type="password" placeholder="••••••••" 
                     class="w-full h-12 bg-gray-50 border-transparent border focus:border-[#db1a1a] focus:bg-white rounded-xl px-4 outline-none transition-all text-sm" />
            </div>
            <button type="submit" class="w-full h-14 bg-[#db1a1a] text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all mt-4">로그인하기</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Mascot from './components/Mascot.vue'
import svgPaths from './svg-tp7jourdla'
</script>