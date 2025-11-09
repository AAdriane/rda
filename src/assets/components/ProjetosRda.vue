<template>
  <div>
    <section id="projetos" class="py-5">
      <div class="container">
        <div class="col-12 text-center mb-5" data-aos="fade-up">
          <h1 class="title mb-3">{{ $t('NOSSOS PROJETOS') }}</h1>
          <div class="divider mx-auto" aria-hidden="true"></div>
        </div>

        <div class="row text-center justify-content-center">
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="50">
            <div class="card h-100 px-3 shadow-sm">
              <img
                src="../../../public//images/slide1.jpg"
                class="card-img-top mx-auto mt-3"
                alt="Cozinha Planejada"
              />
              <div class="card-body">
                <h5 class="card-title">{{ $t('COZINHA PLANEJADA') }}</h5>
                <p class="card-text">
                  {{
                    $t(
                      'Cozinha planejada de acordo com o espaço e estilo do cliente.'
                    )
                  }}
                </p>
                <p class="card-text text-secondary">
                  {{
                    $t(
                      'As cores em sintonia dão ao ambiente o ar de modernidade e personalidade.'
                    )
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="150">
            <div class="card h-100 shadow-sm px-3">
              <img
                src=""
                class="card-img-top mx-auto mt-3"
                alt="Quarto Infantil"
              />
              <h5 class="card-title text-primary mt-3">{{ $t('EM BREVE') }}</h5>
              <!-- <div class="card-body">
                <h5 class="card-title">{{ $t('COZINHA PLANEJADA') }}</h5>
                <p class="card-text">
                  {{
                    $t(
                      'Cozinha planejada de acordo com o espaço e estilo do cliente.'
                    )
                  }}
                </p>
                <p class="card-text text-secondary">
                  {{
                    $t(
                      'As cores em sintonia dão ao ambiente o ar de modernidade e personalidade.'
                    )
                  }}
                </p>
              </div> -->
            </div>
          </div>

          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="250">
            <div class="card h-100 shadow-sm px-3">
              <img
                src=""
                class="card-img-top mx-auto mt-3"
                alt="Cantinho café"
              />
              <h5 class="card-title text-primary mt-3">{{ $t('EM BREVE') }}</h5>
              <!-- <div class="card-body">
                <h5 class="card-title">{{ $t('COZINHA PLANEJADA') }}</h5>
                <p class="card-text">
                  {{
                    $t(
                      'Cozinha planejada de acordo com o espaço e estilo do cliente.'
                    )
                  }}
                </p>
                <p class="card-text text-secondary">
                  {{
                    $t(
                      'As cores em sintonia dão ao ambiente o ar de modernidade e personalidade.'
                    )
                  }}
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfessoresRda',
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
</style>
