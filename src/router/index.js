import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue"
import AuthenticationPage from "../pages/AuthenticationPage.vue"

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/assignedInspections",
    name: "assignedInspections",
    component: () => import("../pages/AssignedInspectionsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/completedInspections",
    name: "completedInspections",
    component: () => import("../pages/CompletedInspectionsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/inspection/:id",
    component: () => import("../pages/InspectionDetailsPage.vue"),
  },
  {
    path: "/documents",
    name: "documents",
    component: () => import("../pages/DocumentsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../pages/SettingsPage.vue"),
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("../pages/NotificationsPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/ContactPage.vue"),
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/authentication",
    name: "authentication",
    component: AuthenticationPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("Authenticated") === "true";
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
