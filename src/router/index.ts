import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import User from '../pages/user.vue'
import rmf from '../pages/rmf.vue'
import Password from '../pages/password.vue'
import Search from '../pages/search.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/user', name: 'Settings', component: User },
  { path: '/search', name: 'Search', component: Search },
  { path: '/password', name: 'Password', component: Password },
  { path: '/rmf', name: 'Rmf', component: rmf },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
