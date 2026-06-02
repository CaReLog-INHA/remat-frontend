import { createRouter, createWebHistory } from "vue-router";


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
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/pages/SignupPage.vue"),
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
  },
  {
    path: "/ai-analysis/result",
    name: "ai-analysis-result",
    component: () => import("@/pages/AiAnalysisResultPage.vue"),
  },
  {
    path: "/register-material",
    name: "register-material",
    component: () => import("@/pages/RegisterMaterialPage.vue"),
  },
  {
    path: "/trade-status",
    name: "trade-status",
    component: () => import("@/pages/TradeStatusPage.vue"),
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
  },
  {
    path: "/my-page/profile",
    name: "my-page-profile",
    component: () => import("@/pages/MyPageProfilePage.vue"),
  },
  {
    path: "/my-page/badges",
    name: "my-page-badges",
    component: () => import("@/pages/MyPageBadgesPage.vue"),
  },
  {
    path: "/my-page/registered-materials",
    name: "my-page-registered-materials",
    component: () => import("@/pages/MyPageRegisteredMaterialsPage.vue"),
  },
  {
    path: "/my-page/activity",
    name: "my-page-activity",
    component: () => import("@/pages/MyPageActivityPage.vue"),
  },
  {
    path: "/my-page/esg-report",
    name: "my-page-esg-report",
    component: () => import("@/pages/MyPageEsgReportPage.vue"),
  },
  {    path: "/:pathMatch(.*)*",
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

export default router;
