import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: "/", name: "Home", component: () => import('../views/Home.vue')},
  {path: "/weather", name: "Weather", component: () => import('../views/Weather.vue')},
  {path: "/about", name: "About", component: () => import('../views/About.vue')},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundPage.vue')}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
