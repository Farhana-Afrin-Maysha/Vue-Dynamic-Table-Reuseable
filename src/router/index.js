import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Player from '../views/Player.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
