<template>
  <div :style="{ marginTop: marginTop + 'px' }">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../../public/images/slide1.jpg"
            class="d-block w-100"
            alt="slide 1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ $t('Seu espaço, sua Obra-Prima') }}</h3>
            <h4>
              {{
                $t(
                  'Projetos personalizados para criar ambientes dignos de admiração!'
                )
              }}
            </h4>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../public/images/slide2.jpg"
            class="d-block w-100"
            alt="slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ $t('Praticidade e estilo') }}</h3>
            <h4>{{ $t('Feito sob medida para o encaixe perfeito!') }}</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../public/images/slide3.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ $t('Aconchego e sofisticação') }}</h3>
            <h4>
              {{
                $t(
                  'Seu estilo, seu espaço, seus móveis... e o nosso toque especial!'
                )
              }}
            </h4>
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
export default {
  name: 'CarrosselSlides',
  data() {
    return {
      marginTop: 70,
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
  margin-bottom: 100px;
}
</style>
