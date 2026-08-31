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
            :key="project.file"
            class="col-md-4 mb-4"
            data-aos="fade-up"
            :data-aos-delay="50 + index * 100"
          >
            <div class="card h-100 px-3 shadow-sm">
              <img
                :src="project.src"
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
// As imagens da pasta public/images/ não podem ser listadas em tempo de
// execução (não há backend), então os arquivos precisam ser declarados aqui.
// Pastas dentro de public/images/ (ex: carossel, projetos) são ignoradas.
const PROJECT_IMAGES = [
  'sapateira.jpg',
  'roupeiro.jpg',
  'banheiro.jpg',
  'cristaleira-1.jpg',
  'caixa-areia.jpg',
  'mesa.jpg',
];

export default {
  name: 'ProjetosRda',
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.projects = PROJECT_IMAGES.map((file) => ({
      file,
      src: `/images/${file}`,
      title: this.formatTitle(file),
      description: this.getDescription(file),
      secondaryDescription: this.getSecondaryDescription(file),
    }));
  },
  methods: {
    formatTitle(file) {
      switch (file) {
        case 'caixa-areia.jpg':
          return 'Caixa de Areia em madeira';
        case 'cristaleira-1.jpg':
          return 'Cristaleira para sala de jantar';
        case 'banheiro.jpg':
          return 'Banheiro planejado';
        case 'sapateira.jpg':
          return 'Sapateira';
        case 'roupeiro.jpg':
          return 'Roupeiro';
        case 'mesa.jpg':
          return 'Mesa em madeira maciça';
        default:
          return 'Móvel sob medida';
      }
    },
    getDescription(file) {
      switch (file) {
        case 'caixa-areia.jpg':
          return 'Caixa de areia para crianças feita em madeira. Possui bancos laterais que ao fechar formam uma tampa, garantindo segurança e praticidade.';
        case 'cristaleira-1.jpg':
          return 'Cristaleira sob medida em design americano para sala de jantar. Possui banco estofado para maior conforto e luz de LED para destacar os objetos expostos.';
        case 'banheiro.jpg':
          return 'Banheiro planejado com móveis sob medida, otimizando o espaço. Possui LED embutido para iluminação mais eficiente.';
        case 'sapateira.jpg':
          return 'Sapateira prática e funcional, ideal para organizar seus calçados.';
        case 'roupeiro.jpg':
          return 'Roupeiro espaçoso e resistente, produzido com material de alta qualidade. Com portas de correr, é ideal para otimizar o espaço do seu quarto.';
        case 'mesa.jpg':
          return 'Mesa em madeira maciça, combinando beleza e durabilidade.';
        default:
          return 'Móvel sob medida, feito com atenção aos detalhes e qualidade.';
      }
    },
    getSecondaryDescription(file) {
      switch (file) {
        case 'caixa-areia.jpg':
          return 'Ideal para crianças, com design seguro e funcional.';
        case 'cristaleira-1.jpg':
          return 'Acabamento refinado que valoriza sua sala de jantar.';
        case 'banheiro.jpg':
          return 'Móveis planejados que otimizam o espaço do banheiro.';
        case 'sapateira.jpg':
          return 'Organização prática para seus calçados.';
        case 'roupeiro.jpg':
          return 'Espaçoso e resistente, perfeito para roupas.';
        case 'mesa.jpg':
          return 'Beleza e durabilidade em madeira maciça.';
        default:
          return '';
      }
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
</style>
