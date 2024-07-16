import { createRouter, createWebHistory } from 'vue-router'
import BeginningView from '../views/pages/BeginningView.vue'
import LogsView from '../views/pages/LogsView.vue'
import AchievementsView from '../views/pages/AchievementsView.vue'
import CreationsView from '../views/pages/CreationsView.vue'
import ContactView from '../views/pages/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beginning',
      component: BeginningView
    },
    {
      path: '/logs',
      name: 'logs',
      component: LogsView
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsView
    },
    {
      path: '/creations',
      name: 'creations',
      component: CreationsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
