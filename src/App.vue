<script setup>
import { ref } from 'vue';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import SignupPage from './pages/SignupPage.vue';

const currentPage = ref('home');

const goToPage = (pageName) => {
  currentPage.value = pageName;
};
</script>

<template>
  <HomePage v-if="currentPage === 'home'" @change-page="goToPage" />
  <LoginPage v-else-if="currentPage === 'login'" @change-page="goToPage" />
  <SignupPage v-else-if="currentPage === 'signup'" @change-page="goToPage" />
</template>
