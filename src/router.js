import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mapa',
    name: 'Map',
    component: () => import('./pages/Map.vue'),
  },
  {
    path: '/misto/R1',
    redirect: '/misto/13',
  },
  {
    path: '/misto/R2',
    redirect: '/misto/14',
  },
  {
    path: '/misto/R3',
    redirect: '/misto/15',
  },
  {
    path: '/misto/O1',
    redirect: '/misto/16',
  },
  {
    path: '/misto/R4',
    redirect: '/misto/17',
  },
  {
    path: '/misto/R5',
    redirect: '/misto/18',
  },
  {
    path: '/misto/R6',
    redirect: '/misto/19',
  },
  {
    path: '/misto/O2',
    redirect: '/misto/20',
  },
  {
    path: '/misto/:index',
    name: 'Place',
    component: () => import('./pages/Place.vue'),
  },
  {
    path: '/o-projektu',
    name: 'About',
    component: () => import('./pages/About.vue'),
  },
  {
    path: '/instalace',
    name: 'Installation',
    component: () => import('./pages/Installation.vue'),
  },
  {
    path: '/prameny',
    name: 'Sources',
    component: () => import('./pages/Sources.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('./pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
          })
        }, 400)
      })
    else return { left: 0, top: 0 }
  },
})

export default router
