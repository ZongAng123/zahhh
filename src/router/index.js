import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  LoginV  from '../views/Login.vue'
import LodinBar from '../components/loadinBar.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginV
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MianPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
