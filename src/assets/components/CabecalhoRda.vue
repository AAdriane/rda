<template>
  <div>
    <nav class="cabecalho-rda navbar navbar-expand-lg bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="img-fluid" src="../images/logo-125.png" alt="RDA logo" />
        </a>

        <button
          class="navbar-toggler primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#carouselExampleCaptions"
                @click="collapseNav"
                >{{ $t('INÍCIO') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#sobre"
                @click="collapseNav"
                >{{ $t('SOBRE NÓS') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#projetos"
                @click="collapseNav"
                >{{ $t('PROJETOS') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#servicos"
                @click="collapseNav"
                >{{ $t('SERVIÇOS') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#orcamentos"
                @click="collapseNav"
                >{{ $t('ORÇAMENTOS') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-primary title mb-0"
                aria-current="page"
                href="#rodape"
                @click="collapseNav"
                >{{ $t('CONTATO') }}</a
              >
            </li>
            <li>
              <a class="nav-link active mb-0" aria-current="page">
                <redes-sociais></redes-sociais>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import RedesSociais from './RedesSociais.vue';
export default {
  name: 'CabecalhoRda',
  components: {
    RedesSociais,
  },
  methods: {
    collapseNav() {
      const el = document.getElementById('navbarSupportedContent');
      if (!el) return;
      // Usa API do Bootstrap se disponível
      if (window.bootstrap && window.bootstrap.Collapse) {
        const instance =
          window.bootstrap.Collapse.getInstance(el) ||
          new window.bootstrap.Collapse(el, { toggle: false });
        instance.hide();
      } else {
        // fallback simples
        el.classList.remove('show');
      }
    },
  },
};
</script>
<style scoped>
.cabecalho-rda {
  background-color: #0a0a0a;
  padding: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  right: 0;
}

.title:hover {
  color: #a8862d !important;
  cursor: pointer;
}

.navbar img {
  height: 80px;
  width: auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
}

.nav-item .nav-link {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}
</style>
