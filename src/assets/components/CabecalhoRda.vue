<template>
  <div class="cabecalho-rda row">
    <div class="col">
      <img alt="RDA logo" class="img-fluid" src="../images/logo-125.png" />
    </div>
    <div class="col menu d-none">
      <menu-cabecalho />
    </div>
    <div class="col link">
      <p class="text-primary title mb-0">{{ $t('INÍCIO') }}</p>
    </div>
    <div class="col link">
      <p class="text-primary title mb-0">{{ $t('SOBRE NÓS') }}</p>
    </div>
    <div class="col link">
      <p class="text-primary title mb-0">{{ $t('PROJETOS') }}</p>
    </div>
    <div class="col link">
      <p class="text-primary title mb-0">{{ $t('SERVIÇOS') }}</p>
    </div>
    <div class="col link">
      <p class="text-primary title mb-0">{{ $t('ORÇAMENTOS') }}</p>
    </div>
    <div class="col col-sm-3 link">
      <redes-sociais />
    </div>
  </div>
</template>
<script>
import RedesSociais from './RedesSociais.vue';
import MenuCabecalho from './MenuCabecalho.vue';
export default {
  name: 'CabecalhoRda',
  components: {
    RedesSociais,
    MenuCabecalho,
  },
};
</script>
<style scoped>
.cabecalho-rda {
  background-color: #0a0a0a;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
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

@media (max-width: 850px) {
  .link {
    display: none;
  }
}
@media (max-width: 849px) {
  .menu {
    display: block !important;
  }
}
</style>
