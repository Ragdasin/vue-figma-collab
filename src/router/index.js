import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/homePage.vue'
import edit from '@/views/edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page1
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    }
  ]
})

export default router
