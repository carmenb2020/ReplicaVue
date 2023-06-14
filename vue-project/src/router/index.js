import { createRouter, createWebHistory } from 'vue-router'
import Screens2View from '../views/Screens2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'screens2',
      component: Screens2View
    },
    
  ]
})

export default router
