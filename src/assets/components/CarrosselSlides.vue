<template>
  <div :style="{ marginTop: marginTop + 'px' }">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.file"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="slide.src" class="d-block w-100" :alt="slide.alt" />
          <div v-if="slide.title" class="carousel-caption d-none d-md-block">
            <h3>{{ $t(slide.title) }}</h3>
            <h4>{{ $t(slide.subtitle) }}</h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
// As imagens da pasta public/images/carossel não podem ser listadas em
// tempo de execução (não há backend), então os arquivos precisam ser
// declarados aqui. Basta adicionar o nome do arquivo para exibi-lo no carrossel.
const CAROUSEL_IMAGES = [
  'guarda-roupa-carrossel.jpg',
  'cristaleira-carrossel.jpg',
];

const CAPTIONS = [
  {
    title: 'Seu espaço, sua Obra-Prima',
    subtitle:
      'Projetos personalizados para criar ambientes dignos de admiração!',
  },
  {
    title: 'Praticidade e estilo',
    subtitle: 'Feito sob medida para o encaixe perfeito!',
  },
  {
    title: 'Aconchego e sofisticação',
    subtitle:
      'Seu estilo, seu espaço, seus móveis... e o nosso toque especial!',
  },
];

export default {
  name: 'CarrosselSlides',
  data() {
    return {
      marginTop: 70,
      slides: CAROUSEL_IMAGES.map((file, index) => ({
        file,
        src: `/images/carossel/${file}`,
        alt: `slide ${index + 1}`,
        title: CAPTIONS[index]?.title,
        subtitle: CAPTIONS[index]?.subtitle,
      })),
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.marginTop = window.scrollY === 0 ? 85 : 0;
    },
  },
};
</script>
<style scoped>
h3 {
  font-weight: bold;
}
.carousel-caption {
  margin-bottom: 200px;
}
.carousel-item img {
  max-height: 700px;
  width: 100%;
  object-fit: cover;
}
</style>
