import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
