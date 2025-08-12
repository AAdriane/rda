import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes para as rotas
import Index from '../assets/pages/IndexRda.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
