import { createRouter, createWebHistory } from 'vue-router'

const NotFoundView = () => import("@/views/NotFoundView.vue")
const Home = () => import("@/views/HomeView.vue")
const About = () => import("@/views/AboutView.vue")


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: NotFoundView,
    },
  ]
})

export default router