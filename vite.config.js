import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // 이 줄이 반드시 있어야 합니다

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 이 줄을 추가하여 Tailwind v4를 활성화합니다
  ],
})