<template>
  <div>
    <cabecalho-rda />
    <section class="py-5 projeto-detalhe" style="margin-top: 70px">
      <div class="container">
        <template v-if="projeto">
          <router-link
            to="/#projetos"
            class="voltar-link mb-4 d-inline-block mt-3"
          >
            &larr; {{ $t('Voltar para projetos') }}
          </router-link>

          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div
                id="carouselProjeto"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div
                    v-for="(image, index) in projeto.images"
                    :key="image"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                  >
                    <img
                      :src="`/images/projetos/${projeto.folder}/${image}`"
                      class="d-block w-100"
                      :alt="`${projeto.title} - foto ${index + 1}`"
                    />
                  </div>
                </div>
                <template v-if="projeto.images.length > 1">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselProjeto"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselProjeto"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </template>
              </div>
            </div>

            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="title mb-3">{{ projeto.title }}</h1>
              <div
                class="divider mx-auto mx-lg-0 mb-4"
                aria-hidden="true"
              ></div>
              <p class="lead">{{ projeto.description }}</p>
              <p class="text-secondary">{{ projeto.secondaryDescription }}</p>
            </div>
          </div>
        </template>

        <div v-else class="text-center py-5">
          <h2>{{ $t('Projeto não encontrado') }}</h2>
          <router-link to="/#projetos">{{
            $t('Voltar para projetos')
          }}</router-link>
        </div>
      </div>
    </section>
    <rodape-rda />
  </div>
</template>

<script>
import CabecalhoRda from '../components/CabecalhoRda.vue';
import RodapeRda from '../components/RodapeRda.vue';
import { getProjetoBySlug } from '../data/projetos';

export default {
  name: 'ProjetoDetalheRda',
  components: {
    CabecalhoRda,
    RodapeRda,
  },
  computed: {
    projeto() {
      return getProjetoBySlug(this.$route.params.slug);
    },
  },
};
</script>
<style scoped>
.divider {
  width: 80px;
  height: 4px;
  background-color: #a8862d;
  border-radius: 2px;
}
.title {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #2d2d2d;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-size: clamp(1.6rem, 2.4vw, 2.25rem);
}
.voltar-link {
  color: #a8862d;
  font-weight: 600;
}
.carousel-item img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
