import { createRouter, createWebHistory } from 'vue-router'
import Mega from '../views/Mega.vue'
import MegaMoskva from '../views/MegaMoskva.vue'

const routes = [
  {
    path: '/shops/1',
    name: 'mega',
    component: Mega
  },
  {
    path: '/shops/2',
    name: 'megamoskva',
    component: MegaMoskva
  },
  {
    path: '/shops/1',
    name: '/shops/1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mega.vue')
  },
  {
    path: '/shops/2',
    name: '/shops/2',
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
