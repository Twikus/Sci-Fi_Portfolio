import { createRouter, createWebHistory } from 'vue-router'
import AcceptView from '../views/AcceptView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accept',
      component: AcceptView
    },
  ]
})

export default router
