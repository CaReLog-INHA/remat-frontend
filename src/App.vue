<script setup>
import { ref } from 'vue';

import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import MarketplacePage from './pages/MarketplacePage.vue';
import RegisterMaterialPage from './pages/RegisterMaterialPage.vue';
import SignupPage from './pages/SignupPage.vue';

const currentPage = ref('home');

const goToPage = (target) => {
  currentPage.value = target;
};
</script>

<template>
  <HomePage
    v-if="currentPage === 'home'"
    @change-page="goToPage"
  />

  <LoginPage
    v-else-if="currentPage === 'login'"
    @change-page="goToPage"
  />

  <MarketplacePage
    v-else-if="currentPage === 'marketplace'"
    @change-page="goToPage"
  />

  <RegisterMaterialPage
    v-else-if="currentPage === 'register-material'"
    @change-page="goToPage"
  />

  <SignupPage
    v-else-if="currentPage === 'signup'"
    @change-page="goToPage"
  />
</template>