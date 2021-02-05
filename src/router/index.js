import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Form from '../views/Form.vue'
import Appointments from '../components/Appointments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Form,
    meta: {
      layout: App
    }
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
