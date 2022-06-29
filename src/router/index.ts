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
    path: '/secretaria',
    name: 'secretaria',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretaria/secretaria-list.vue')
  },
  {
    path: '/secretaria-detalhar',
    name: 'secretaria-detalhar',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretaria/secretaria-detalhar.vue')
  },
  {
    path: '/secretaria-cadastrar',
    name: 'secretaria-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretaria/secretaria-cadastrar.vue')
  },

  {
    path: '/paciente',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/paciente/paciente-list.vue')
  },
  {
    path: '/paciente-detalhar',
    name: 'paciente-detalhar',
    component: () => import(/* webpackChunkName: "about" */ '../views/paciente/paciente-detalhar.vue')
  },
  {
    path: '/paciente-cadastrar',
    name: 'paciente-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/paciente/paciente-cadastrar.vue')
  },

  {
    path: '/medico',
    name: 'medico',
    component: () => import(/* webpackChunkName: "about" */ '../views/medico/medico-list.vue')
  },
  {
    path: '/medico-detalhar',
    name: 'medico-detalhar',
    component: () => import(/* webpackChunkName: "about" */ '../views/medico/medico-detalhar.vue')
  },
  {
    path: '/medico-cadastrar',
    name: 'medico-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/medico/medico-cadastrar.vue')
  },

  {
    path: '/historicos',
    name: 'historicos',
    component: () => import(/* webpackChunkName: "about" */ '../views/historico/historico-list.vue')
  },

  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/especialidade-detalhar',
    name: 'especialidade-detalhar',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-detalhar.vue')
  },
  {
    path: '/especialidade-cadastrar',
    name: 'especialidade-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-cadastrar.vue')
  },

  {
    path: '/convenio',
    name: 'convenio',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-list.vue')
  },
  {
    path: '/convenio-detalhar',
    name: 'convenio-detalhar',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-detalhar.vue')
  },
  {
    path: '/convenio-cadastrar',
    name: 'convenio-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-cadastrar.vue')
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
