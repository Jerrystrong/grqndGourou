import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/client/indexView.vue'
import blogsView from '../views/client/blogsView.vue'
import singleBlog from '../views/client/singleBlog.vue'
import porfolioView from '../views/client/porfolioView.vue'
import serviceView from '../views/client/serviceView.vue'
import notFound from '../views/notFound.vue'

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
      path: '/:allPath(.*)*',
      name: 'notFound',
      component: notFound,
    },
  ],
})

export default router
