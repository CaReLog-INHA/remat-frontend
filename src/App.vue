<script setup>
import { ref } from 'vue';

import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import MarketplacePage from './pages/MarketplacePage.vue';
import MaterialDetailPage from './pages/MaterialDetailPage.vue';
import MyPageBadgesPage from './pages/MyPageBadgesPage.vue';
import MyPageRegisteredMaterialsPage from './pages/MyPageRegisteredMaterialsPage.vue';
import MyPageActivityPage from './pages/MyPageActivityPage.vue';
import MyPageEsgReportPage from './pages/MyPageEsgReportPage.vue';
import MaterialRentalDetailPage from './pages/MaterialRentalDetailPage.vue';
import MyPageProfilePage from './pages/MyPageProfilePage.vue';
import RegisterMaterialPage from './pages/RegisterMaterialPage.vue';
import SignupPage from './pages/SignupPage.vue';

const currentPage = ref('home');
const selectedProduct = ref(null);

const goToPage = (target, product = null) => {
  if (typeof target === 'object') {
    selectedProduct.value = target.product || null;
    currentPage.value = target.page;
    return;
  }

  selectedProduct.value = product;
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

  <MyPageProfilePage
    v-else-if="currentPage === 'my-page-profile'"
    @change-page="goToPage"
  />

  <MyPageBadgesPage
    v-else-if="currentPage === 'my-page-badges'"
    @change-page="goToPage"
  />

  <MyPageRegisteredMaterialsPage
    v-else-if="currentPage === 'my-page-registered-materials'"
    @change-page="goToPage"
  />

  <MyPageActivityPage
    v-else-if="currentPage === 'my-page-activity'"
    @change-page="goToPage"
  />

  <MyPageEsgReportPage
    v-else-if="currentPage === 'my-page-esg-report'"
    @change-page="goToPage"
  />
</template>
