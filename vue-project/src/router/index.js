import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DescriptionView.vue'
import ReviewView from '../views/ReviewView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import ScreensView from '../views/ScreensView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
    {
      path: '/screens',
      name: 'screens',
      component: ScreensView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/review',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView
    }
  ]
})

export default router
