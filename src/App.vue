<script setup>
import { ref } from 'vue';

import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import MarketplacePage from './pages/MarketplacePage.vue';
import RegisterMaterialPage from './pages/RegisterMaterialPage.vue';
import SignupPage from './pages/SignupPage.vue';
import MaterialDetailPage from './pages/MaterialDetailPage.vue';
import MaterialRentalDetailPage from './pages/MaterialRentalDetailPage.vue';

const currentPage = ref('home');
const selectedProduct = ref(null);

const goToPage = (target, product = null) => {
  if (typeof target === 'object') {
    // target이 객체인 경우 (이전 호환성)
    selectedProduct.value = target.product || null;
    currentPage.value = target.page;
  } else {
    // target이 문자열인 경우
    selectedProduct.value = product;
    currentPage.value = target;
  }
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

  <MaterialDetailPage
    v-else-if="currentPage === 'material-detail'"
    :product="selectedProduct"
    @change-page="goToPage"
  />

  <MaterialRentalDetailPage
    v-else-if="currentPage === 'material-rental-detail'"
    :product="selectedProduct"
    @change-page="goToPage"
  />
</template>