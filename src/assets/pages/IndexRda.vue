<template>
  <div>
    <cabecalho-rda />
    <carrossel-slides />
  </div>
</template>

<script>
import CabecalhoRda from '../components/CabecalhoRda.vue';
import CarrosselSlides from '../components/CarrosselSlides.vue';

export default {
  name: 'IndexRda',
  components: {
    CabecalhoRda,
    CarrosselSlides,
  },
};
</script>
