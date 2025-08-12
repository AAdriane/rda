<template>
  <div>
    <div class="btn-group">
      <button
        type="button"
        class="btn primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">{{ $t('INÍCIO') }}</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">{{ $t('SOBRE NÓS') }}</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">{{ $t('PROJETOS') }}</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">{{ $t('SERVIÇOS') }}</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">{{ $t('ORÇAMENTOS') }}</a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item d-flex justify-content-center">
            <redes-sociais></redes-sociais>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import RedesSociais from './RedesSociais.vue';
export default {
  name: 'MenuCabecalho',
  components: {
    RedesSociais,
  },
};
</script>
<style scoped>
.btn {
  background-color: rgb(44, 44, 44);
  border: none;
}

.btn:hover {
  background-color: rgb(70, 70, 70);
  border: none;
}

.dropdown-menu.show {
  min-width: 200px;
}
</style>
