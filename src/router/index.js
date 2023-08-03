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
    path: "/assigned-inspections",
    name: "assignedInspections",
    component: () => import("../pages/AssignedInspectionsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/completed-inspections",
    name: "completedInspections",
    component: () => import("../pages/CompletedInspectionsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/inspection/:id",
    component: () => import("../pages/InspectionDetailsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: '/inspection/edit/:id',
    name: 'EditInspection',
    component: () => import("../pages/EditInspectionPage.vue"),
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("../pages/NotificationsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/ContactPage.vue"),
    meta: { requiresAuth: true },
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

//checks if user is authenticated on page change
router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("Authenticated") == "true";
  //if not autheniticated redirect to loginpage
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
