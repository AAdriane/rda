import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes para as rotas
import Index from '../assets/pages/IndexRda.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }
    return { top: 0 };
  },
});

export default router;
