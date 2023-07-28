import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
import AdminVue from "@/views/AdminVue.vue";
import UserInfoView from "@/views/UserInfoView.vue";
import DashboardView from "@/views/DashboardView.vue";
import ItemInfoView from "@/views/ItemInfoView.vue";
import DistInfoView from "@/views/DistInfoView.vue";
import OrderInfoView from "@/views/OrderInfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminVue,
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/admin/user',
          name: 'user',
          component: UserInfoView,
        },
        {
          path: '/admin/item',
          name: 'item',
          component: ItemInfoView,
        },
        {
          path: '/admin/dist',
          name: 'dist',
          component: DistInfoView,
        },
        {
          path: '/admin/order',
          name: 'order',
          component: OrderInfoView,
        }
      ],
    }
  ]
})

export default router
