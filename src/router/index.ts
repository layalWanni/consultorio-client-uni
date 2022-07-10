import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/cadastroespecialidade',
    name: 'cadastroespecialidade',
    component: () => import('../views/especialidade/cadastrar-especialidade.vue')

  },
  {
    path: '/especialidade-list',
    name: 'especialidade-list',
    component: () => import('../views/especialidade/especialidade-list.vue')

  },
  {
    path: '/especialidade-cadastrar/:model/:id',
    name: 'especialidade-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/especialidade/cadastrar-especialidade.vue')
  },
  {
    path: '/especialidade-cadastrar/:model/:id',
    name: 'especialidade-editar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/especialidade/cadastrar-especialidade.vue')
  },
  {
    path: '/cadastroconvenio',
    name: 'cadastroconvenio',
    component: () => import('../views/convenio/cadastrar-convenio.vue')

  },
  {
    path: '/convenio-list',
    name: 'convenio-list',
    component: () => import('../views/convenio/convenio-list.vue')

  },
  {
    path: '/convenio-cadastrar/:model/:id',
    name: 'convenio-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/convenio/cadastrar-convenio.vue')
  },
  {
    path: '/convenio-cadastrar/:model/:id',
    name: 'convenio-editar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/convenio/cadastrar-convenio.vue')
  },
  {
    path: '/cadastromedico',
    name: 'cadastromedico',
    component: () => import('../views/medico/cadastrar-medico.vue')

  },
  {
    path: '/medico-list',
    name: 'medico-list',
    component: () => import('../views/medico/medico-list.vue')

  },
  {
    path: '/medico-cadastrar/:model/:id',
    name: 'medico-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/medico/cadastrar-medico.vue')
  },
  {
    path: '/medico-cadastrar/:model/:id',
    name: 'medico-editar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/medico/cadastrar-medico.vue')
  },
  {
    path: '/cadastropaciente',
    name: 'cadastropaciente',
    component: () => import('../views/paciente/cadastrar-paciente.vue')

  },
  {
    path: '/paciente-list',
    name: 'paciente-list',
    component: () => import('../views/paciente/paciente-list.vue')

  },
  {
    path: '/paciente-cadastrar/:model/:id',
    name: 'paciente-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/paciente/cadastrar-paciente.vue')
  },
  {
    path: '/medico-cadastrar/:model/:id',
    name: 'medico-editar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/paciente/cadastrar-paciente.vue')
  },
  {
    path: '/cadastrosecretaria',
    name: 'cadastrosecretaria',
    component: () => import('../views/secretaria/cadastrar-secretaria.vue')

  },
  {
    path: '/secretaria-list',
    name: 'secretaria-list',
    component: () => import('../views/secretaria/secretaria-list.vue')

  },
  {
    path: '/secretaria-cadastrar/:model/:id',
    name: 'secretaria-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/secretaria/cadastrar-secretaria.vue')
  },
  {
    path: '/secretaria-cadastrar/:model/:id',
    name: 'secretaria-editar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/secretaria/cadastrar-secretaria.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
