<template>
  <div>
    <section id="sobre" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="title mb-3">{{ $t('SOBRE A RDA') }}</h1>
            <div class="divider mx-auto" aria-hidden="true"></div>
          </div>

          <!-- Conteúdo principal (mantive data-aos) -->
          <div class="col-12" data-aos="fade-left" data-aos-delay="50">
            <div class="row align-items-center justify-content-center gy-4">
              <div class="col-md-5 text-center" data-aos="zoom-in">
                <img
                  src="../../../public/images/inicial/membros.jpg"
                  class="about-img shadow-sm"
                  :alt="$t('Membros da RDA')"
                />
              </div>

              <div class="col-md-6" data-aos="fade-left" data-aos-delay="150">
                <h5 class="text-uppercase text-muted mb-2">
                  {{ 'CONHEÇA A' }}
                </h5>
                <h3 class="fw-bold mb-4">
                  {{ 'Nossa História' }} <span class="emoji">🪚</span>
                </h3>

                <p class="text-secondary mb-3">
                  {{
                    $t(
                      'A RDA é uma empresa familiar que nasceu com a paixão pela marcenaria e o compromisso de entregar móveis que unem qualidade, funcionalidade e tradição artesanal.'
                    )
                  }}
                </p>
                <p class="text-secondary mb-0">
                  {{
                    $t(
                      'Mesmo sendo nova no mercado, carregamos em nossa história a dedicação de gerações que sempre valorizaram o trabalho manual e o cuidado com cada detalhe.'
                    )
                  }}
                </p>
              </div>
            </div>
          </div>

          <hr class="my-5" />

          <div class="row text-center gy-4">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="50">
              <h4 class="text-primary fw-bold mb-3">{{ $t('Missão') }}</h4>
              <p class="text-secondary">
                {{
                  $t(
                    'Criar móveis que unam qualidade, funcionalidade e estética, preservando a tradição artesanal e oferecendo soluções personalizadas que transformem ambientes em espaços únicos e acolhedores.'
                  )
                }}
              </p>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="150">
              <h4 class="text-primary fw-bold mb-3">{{ $t('Visão') }}</h4>
              <p class="text-secondary">
                {{
                  $t(
                    'Ser reconhecida como referência em marcenaria personalizada, mantendo o equilíbrio entre inovação e tradição, e levando a essência do trabalho manual para cada projeto.'
                  )
                }}
              </p>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="250">
              <h4 class="text-primary fw-bold mb-3">{{ $t('Valores') }}</h4>
              <ul class="list-unstyled text-secondary mb-0">
                <li>{{ $t('Paixão pelo Ofício') }}</li>
                <li>{{ $t('Dedicação e Cuidado em Cada Detalhe') }}</li>
                <li>{{ $t('Qualidade e Tradição Familiar') }}</li>
                <li>
                  {{ $t('Respeito ao Cliente e ao Tempo de Fazer Bem Feito') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SobreNos',
};
</script>

<style scoped>
/* Título e divisor */
.title {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #2d2d2d;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-size: clamp(1.6rem, 2.4vw, 2.25rem);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #a8862d;
  border-radius: 2px;
}

/* Imagem */
.about-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 250px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: inline-block;
}
.about-img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Texto */
.text-secondary {
  line-height: 1.7;
  font-size: 1rem;
}

/* Emoji decorativo */
.emoji {
  font-size: 1.4rem;
  vertical-align: middle;
}

/* Melhora espaçamento em telas pequenas */
@media (max-width: 768px) {
  .about-img {
    margin-bottom: 1.25rem;
  }
}
</style>
