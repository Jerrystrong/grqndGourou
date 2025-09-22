import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router'
import HomeView from '../views/client/indexView.vue'
import blogsView from '../views/client/blogsView.vue'
import singleBlog from '../views/client/singleBlog.vue'
import porfolioView from '../views/client/porfolioView.vue'
import serviceView from '../views/client/serviceView.vue'
import notFound from '../views/notFound.vue'
import TarifView from '@/views/client/tarifView.vue'
import LoginView from '@/views/loginView.vue'
import PayementProcess from '@/views/client/payementProcess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogsView,
      props: (route: RouteLocationNormalizedLoaded) => ({
        searchTerm: route.query?.search || '',
      }),
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: singleBlog,
    },
    {
      path: '/service',
      name: 'service',
      component: serviceView,
    },
    {
      path: '/about',
      name: 'about',
      component: porfolioView,
    },
    {
      path: '/tarif',
      name: 'tarif',
      component: TarifView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/paiement/id',
      name: 'paiement',
      component: PayementProcess,
    },
    {
      path: '/:allPath(.*)*',
      name: 'notFound',
      component: notFound,
    },
  ],
})

export default router
