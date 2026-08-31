import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes para as rotas
import Index from '../assets/pages/IndexRda.vue'
import ProjetoDetalhe from '../assets/pages/ProjetoDetalheRda.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/projetos/:slug',
    name: 'projeto-detalhe',
    component: ProjetoDetalhe,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }
    return { top: 0 };
  },
})

export default router
