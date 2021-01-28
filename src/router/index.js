import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App.vue'
import Form from '../components/Form.vue'
import Appointments from '../components/Appointments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/appointment/form',
    name: 'AppointmentForm',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
