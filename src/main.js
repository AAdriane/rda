import { createApp } from 'vue';
import App from './assets/pages/IndexRda.vue';
import router from './js/routes.js';
// tradução
import { createI18n } from 'vue-i18n';
// ícones
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

// Importa Bootstrap CSS e JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/theme.scss';

// importar ícones
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';

// Adiciona os ícones à biblioteca
library.add(faFacebook, faInstagram, faWhatsapp, faBars);

// criar instância do Vue
const app = createApp(App);

// Registra o componente global
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

const i18n = createI18n({
  locale: 'pt', // idioma inicial
  fallbackLocale: 'pt', // se não encontrar a chave no idioma atual
  messages: {
    en,
    pt,
    es,
  },
});

app.use(i18n).mount('#app');
