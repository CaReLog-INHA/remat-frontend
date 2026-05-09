<script setup>
import { ref } from 'vue'
import Login from './login.vue'
import SignUp from './sign_up.vue'

// 현재 화면 상태 ('login' 또는 'signup')
const currentPage = ref('login')

// 화면 전환 함수
const goToSignUp = () => { currentPage.value = 'signup' }
const goToLogin = () => { currentPage.value = 'login' }
</script>

<template>
  <div class="app-container">
    <!-- 상태에 따라 다른 컴포넌트를 표시 -->
    <Login v-if="currentPage === 'login'" @change-page="goToSignUp" />
    <SignUp v-else-if="currentPage === 'signup'" @change-page="goToLogin" />
  </div>
</template>

<style>
/* 전역 스타일 혹은 레이아웃 설정 */
.app-container {
  width: 100%;
  min-height: 100vh;
}
</style>