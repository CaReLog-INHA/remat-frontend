<template>
  <LoginPage v-if="currentPage === 'login'" @change-page="goToPage" />
  <SignupPage v-else-if="currentPage === 'signup'" @change-page="goToPage" />
</template>

<script setup>
import { ref } from 'vue'
import LoginPage from './login.vue'
import SignupPage from './sign_up.vue'

// 현재 화면 상태 관리
const currentPage = ref('login')

// 화면 전환 함수
const goToPage = (pageName) => {
  currentPage.value = pageName
}
</script>