import { createRouter, createWebHistory } from 'vue-router'
import Mega from '../views/Mega.vue'
import MegaMoskva from '../views/MegaMoskva.vue'

const routes = [
  {
    path: '/Mega',
    name: 'mega',
    component: Mega
  },
  {
    path: '/MegaMoskva',
    name: 'megamoskva',
    component: MegaMoskva
  },
  {
    path: '/Mega',
    name: 'Mega',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mega.vue')
  },
  {
    path: '/MegaMoskva',
    name: 'MegaMoskva',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MegaMoskva.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
