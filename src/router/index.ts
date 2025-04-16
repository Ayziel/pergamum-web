import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import User from '../pages/user.vue'
import rmf from '../pages/rmf.vue'
import Password from '../pages/password.vue'
import Search from '../pages/search.vue'
import Policies from '../pages/policies.vue'
import boardApprovers from '../pages/boardApprovers.vue'
import documentOwners from '../pages/documentOwners.vue'
import processOwner from '../pages/processOwners.vue'
import clients from '../pages/clients.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/user', name: 'Settings', component: User },
  { path: '/search', name: 'Search', component: Search },
  { path: '/password', name: 'Password', component: Password },
  { path: '/rmf', name: 'Rmf', component: rmf },
  { path: '/policies', name: 'Policies', component: Policies },
  { path: '/boardApprovers', name: 'BoardApprovers', component: boardApprovers },
  { path: '/documentOwners', name: 'DocumentOwners', component: documentOwners },
  { path: '/processOwners', name: 'ProcessOwners', component: processOwner },
  { path: '/clients', name: 'Clients', component: clients },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
