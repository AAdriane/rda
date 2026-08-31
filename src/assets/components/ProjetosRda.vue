<template>
  <div>
    <section id="projetos" class="py-5">
      <div class="container">
        <div class="col-12 text-center mb-5" data-aos="fade-up">
          <h1 class="title mb-3">{{ $t('NOSSOS PROJETOS') }}</h1>
          <div class="divider mx-auto" aria-hidden="true"></div>
        </div>

        <div class="row text-center justify-content-center">
          <div
            v-for="(project, index) in projects"
            :key="project.slug"
            class="col-md-4 mb-4"
            data-aos="fade-up"
            :data-aos-delay="50 + index * 100"
          >
            <router-link
              :to="`/projetos/${project.slug}`"
              class="text-decoration-none text-reset"
            >
              <div class="card h-100 px-3 shadow-sm project-card">
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
            </router-link>
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
    };
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
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
