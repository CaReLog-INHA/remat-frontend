import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/LoginPage.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/pages/SignupPage.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/marketplace",
    name: "marketplace",
    component: () => import("@/pages/MarketplacePage.vue"),
  },
  {
    path: "/ai-analysis",
    name: "ai-analysis",
    component: () => import("@/pages/AiAnalysisPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/ai-analysis/result",
    name: "ai-analysis-result",
    component: () => import("@/pages/AiAnalysisResultPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register-material",
    name: "register-material",
    component: () => import("@/pages/RegisterMaterialPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/trade-status",
    name: "trade-status",
    component: () => import("@/pages/TradeStatusPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/material/:id",
    name: "material-detail",
    component: () => import("@/pages/MaterialDetailPage.vue"),
    props: true,
  },
  {
    path: "/material/:id/rental",
    name: "material-rental-detail",
    component: () => import("@/pages/MaterialRentalDetailPage.vue"),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/my-page/profile",
    name: "my-page-profile",
    component: () => import("@/pages/MyPageProfilePage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/my-page/badges",
    name: "my-page-badges",
    component: () => import("@/pages/MyPageBadgesPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/my-page/registered-materials",
    name: "my-page-registered-materials",
    component: () => import("@/pages/MyPageRegisteredMaterialsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/my-page/activity",
    name: "my-page-activity",
    component: () => import("@/pages/MyPageActivityPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/my-page/esg-report",
    name: "my-page-esg-report",
    component: () => import("@/pages/MyPageEsgReportPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// 전역 라우트 가드
// - requiresAuth: 로그인 안 한 경우 /login 으로 보내고, 원래 가려던 경로를 query.redirect 에 보관
// - guestOnly: 이미 로그인된 경우 /login, /signup 진입을 막고 홈으로 보냄
router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: "login", query: { redirect: to.fullPath } };
  }

  if (to.meta.guestOnly && auth.isAuthenticated) {
    return { name: "home" };
  }
});

export default router;
