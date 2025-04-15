import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Settings from '../pages/settings.vue'
import Search from '../pages/search.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/search', name: 'Search', component: Search },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
