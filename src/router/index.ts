import { createRouter, createWebHistory } from 'vue-router'
import TemplatesView from '@/views/TemplatesView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: TemplatesView,
		}
	],
})

export default router
