import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vite-vue-sub',
      name: 'vite-vue-sub',
      component: () => import('../views/ViteVueSubView.vue')
    }
  ]
})

export default router
