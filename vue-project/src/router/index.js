import { createRouter, createWebHistory } from 'vue-router'
import ScreensView from '../views/ScreensView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'screens',
      component: ScreensView
    },
    
  ]
})

export default router
