import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../pages/HomePage.vue';
import CompletedInspections from '../pages/CompletedInspectionsPage.vue';
import Documents from '../pages/DocumentsPage.vue';
import Settings from '../pages/SettingsPage.vue';
import AssignedInspections from '../pages/AssignedInspectionsPage.vue';
import Login from '../pages/LoginPage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: "/assignedInspections",
    name: "assignedInspections",
    component: AssignedInspections,
  },
  {
    path: "/completedInspections",
    name: "completedInspections",
    component: CompletedInspections,
  },
  {
    path: "/completedInspections/:id",
    component: () => import('../pages/InspectionDetailsPage.vue')
  },
  {
    path: "/documents",
    name: "documents",
    component: Documents,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
