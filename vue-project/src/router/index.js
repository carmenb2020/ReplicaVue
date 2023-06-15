import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DescriptionView.vue'
import ReviewView from '../views/ReviewView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import ScreensView from '../views/ScreensView.vue'
import LoginView from '../views/LoginView.vue'

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
      path: '/review',
      name: 'review',
      component: ReviewView
    },
	{
		path: '/features',
		name: 'features',
		component: FeaturesView
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView
	}
  ]
})

export default router
