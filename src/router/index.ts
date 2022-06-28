import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/secretarias',
    name: 'secretarias',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretaria/secretaria-list.vue')
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/paciente/paciente-list.vue')
  },
  {
    path: '/medicos',
    name: 'medicos',
    component: () => import(/* webpackChunkName: "about" */ '../views/medico/medico-list.vue')
  },
  {
    path: '/historicos',
    name: 'historicos',
    component: () => import(/* webpackChunkName: "about" */ '../views/historico/historico-list.vue')
  },
  {
    path: '/especialidades',
    name: 'especialidades',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/convenios',
    name: 'convenios',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-list.vue')
  },
  {
    path: '/agendamentos',
    name: 'agendamentos',
    component: () => import(/* webpackChunkName: "about" */ '../views/agendamento/agendamento-list.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
