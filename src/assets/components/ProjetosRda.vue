<template>
  <div>
    <section id="projetos" class="py-5" ref="projetosSection">
      <div class="container">
        <div class="col-12 text-center mb-5" data-aos="fade-up">
          <h1 class="title mb-3">{{ $t('NOSSOS PROJETOS') }}</h1>
          <div class="divider mx-auto" aria-hidden="true"></div>
        </div>

        <template v-if="selectedProject">
          <button
            type="button"
            class="voltar-link mb-4 btn btn-link p-0"
            @click="fecharProjeto"
          >
            &larr; {{ $t('Voltar para todos os projetos') }}
          </button>

          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div
                :id="`carousel-${selectedProject.slug}`"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div
                    v-for="(image, index) in selectedProject.images"
                    :key="image"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                  >
                    <img
                      :src="`${imagesBaseUrl}projetos/${selectedProject.folder}/${image}`"
                      class="d-block w-100"
                      :alt="`${selectedProject.title} - foto ${index + 1}`"
                    />
                  </div>
                </div>
                <template v-if="selectedProject.images.length > 1">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="`#carousel-${selectedProject.slug}`"
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
                    :data-bs-target="`#carousel-${selectedProject.slug}`"
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
              <h1 class="title mb-3">{{ selectedProject.title }}</h1>
              <div
                class="divider mx-auto mx-lg-0 mb-4"
                aria-hidden="true"
              ></div>
              <p class="lead">{{ selectedProject.description }}</p>
              <p class="text-secondary">
                {{ selectedProject.secondaryDescription }}
              </p>
            </div>
          </div>
        </template>

        <div v-else class="row text-center justify-content-center">
          <div
            v-for="(project, index) in projects"
            :key="project.slug"
            class="col-md-4 mb-4"
            data-aos="fade-up"
            :data-aos-delay="50 + index * 100"
          >
            <div
              class="card h-100 px-3 shadow-sm project-card"
              role="button"
              tabindex="0"
              @click="abrirProjeto(project.slug)"
              @keyup.enter="abrirProjeto(project.slug)"
            >
              <img
                :src="project.thumbnail"
                class="card-img-top mx-auto mt-3"
                :alt="project.title"
              />
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text text-secondary">
                  {{ project.secondaryDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { PROJETOS } from '../data/projetos';

export default {
  name: 'ProjetosRda',
  data() {
    return {
      projects: PROJETOS,
      selectedSlug: null,
      imagesBaseUrl: process.env.BASE_URL + 'images/',
    };
  },
  computed: {
    selectedProject() {
      return this.projects.find(
        (project) => project.slug === this.selectedSlug,
      );
    },
  },
  methods: {
    abrirProjeto(slug) {
      this.selectedSlug = slug;
      this.$nextTick(() => this.scrollToTopoSecao());
    },
    scrollToTopoSecao() {
      const el = this.$refs.projetosSection;
      if (!el) return;
      const header = document.querySelector('.cabecalho-rda');
      const headerOffset = header ? header.offsetHeight : 0;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    fecharProjeto() {
      this.selectedSlug = null;
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
.card-img-top {
  max-height: 220px;
  width: 100%;
  object-fit: cover;
}
.project-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.voltar-link {
  color: #a8862d;
  font-weight: 600;
  text-decoration: none;
}
.carousel-item img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
