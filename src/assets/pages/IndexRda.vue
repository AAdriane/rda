<template>
  <div>
    <cabecalho-rda />
    <carrossel-slides />
    <sobre-nos />
    <projetos-rda />
    <servicos-rda />
    <orcamento-rda />
    <rodape-rda />
  </div>
</template>

<script>
import CabecalhoRda from '../components/CabecalhoRda.vue';
import CarrosselSlides from '../components/CarrosselSlides.vue';
import SobreNos from '../components/SobreNos.vue';
import ProjetosRda from '../components/ProjetosRda.vue';
import ServicosRda from '../components/ServicosRda.vue';
import OrcamentoRda from '../components/OrcamentoRda.vue';
import RodapeRda from '../components/RodapeRda.vue';

export default {
  name: 'IndexRda',
  components: {
    CabecalhoRda,
    CarrosselSlides,
    SobreNos,
    ProjetosRda,
    ServicosRda,
    OrcamentoRda,
    RodapeRda,
  },
};
</script>
