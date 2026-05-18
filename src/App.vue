<script setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import LoginPage from './login.vue';
import SignupPage from './sign_up.vue';

const currentPage = ref('home');

const goToPage = (pageName) => {
  currentPage.value = pageName;
};
</script>

<template>
  <Home v-if="currentPage === 'home'" @change-page="goToPage" />
  <LoginPage v-else-if="currentPage === 'login'" @change-page="goToPage" />
  <SignupPage v-else-if="currentPage === 'signup'" @change-page="goToPage" />
</template>
