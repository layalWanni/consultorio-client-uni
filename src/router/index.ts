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
    path: '/paciente',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/paciente/paciente-list.vue')
  },


  {
    path: '/medico',
    name: 'medico',
    component: () => import(/* webpackChunkName: "about" */ '../views/medico/medico-list.vue')
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
    path: '/especialidade/formulario',
    name: 'especialidade-cadastrar',
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/especialidade/formulario/:model/:id',
    name: 'especialidade-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  },


  {
    path: '/convenio',
    name: 'convenio',
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
