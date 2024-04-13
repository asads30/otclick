import store from '@/store/index'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddsiteView from '../views/AddsiteView.vue'
import AddWidgetView from '../views/AddWidgetView.vue'
import ConfirmsiteView from '../views/ConfirmsiteView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SiteItemView from '../views/SiteItemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/addsite',
    name: 'addsite',
    component: AddsiteView
  },
  {
    path: '/addwidget',
    name: 'addwidget',
    component: AddWidgetView
  },
  {
    path: '/confirmsite',
    name: 'confirmsite',
    component: ConfirmsiteView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: `/site/:id`,
    name: 'siteItemView',
    component: SiteItemView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const token = localStorage.getItem('token');

  if (!token && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' }
  }
})

export default router
