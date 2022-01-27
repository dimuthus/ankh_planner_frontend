import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import abc from '../views/abc.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/',
    name: 'abc',
    component: abc
    
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todos',
    name: 'Todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Todos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
