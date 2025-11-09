<template>
  <div>
    <section id="servicos" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="title mb-3">{{ $t('NOSSOS SERVIÇOS') }}</h1>
            <div class="divider mx-auto" aria-hidden="true"></div>
          </div>

          <div class="col-12" data-aos="fade-left" data-aos-delay="50">
            <div class="row align-items-center justify-content-center gy-4">
              <div class="col-md-5 text-center" data-aos="zoom-in">
                <img
                  src="../../../public/images/marcenaria-montagem.jpg"
                  class="about-img shadow-sm"
                  :alt="$t('Marcenaria')"
                />
              </div>

              <div class="col-md-6" data-aos="fade-left" data-aos-delay="150">
                <h4>
                  {{
                    $t(
                      'Somos especializados exclusivamente na marcenaria de móveis planejados.'
                    )
                  }}
                </h4>
                <p class="text-secondary mb-4">
                  {{
                    $t(
                      'O Que São Móveis Planejados? Diferente dos móveis convencionais, que possuem medidas padronizadas, os móveis planejados são projetados e fabricados especificamente para o seu espaço. Isso significa que cada armário, bancada, prateleira ou painel se encaixará perfeitamente, aproveitando ao máximo cada metro quadrado e eliminando espaços perdidos.'
                    )
                  }}
                </p>
                <h5>{{ $t('Etapas realizadas durante nossos serviços:') }}</h5>
                <span class="mb-1">
                  {{ $t('Entendimento do Cliente:') }}
                  <span class="text-secondary">{{
                    $t(
                      'O processo começa com uma conversa detalhada para entender seus desejos, rotina, número de moradores, itens a serem armazenados e o estilo que você busca.'
                    )
                  }}</span>
                </span>
                <br />
                <span class="mb-1">
                  {{ $t('Visita Técnica:') }}
                  <span class="text-secondary">{{
                    $t(
                      'A equipe visita o local para tirar medidas precisas, avaliar a estrutura do ambiente (pontos de elétrica, hidráulica, iluminação) e identificar as melhores soluções.'
                    )
                  }}</span>
                </span>
                <br />
                <span class="mb-1">
                  {{ $t('Projeção realista:') }}
                  <span class="text-secondary">{{
                    $t(
                      'Com as informações coletadas, projetamos seu móvel em software 3D, permitindo que você visualize como os móveis ficarão no ambiente antes mesmo de serem fabricados. Isso inclui a disposição, cores, acabamentos e funcionalidades.'
                    )
                  }}</span>
                </span>
                <br />
                <span class="mb-1">
                  {{ $t('Fabricação Sob Medida:') }}
                  <span class="text-secondary">{{
                    $t(
                      'Após a aprovação do projeto, a marcenaria utiliza maquinário de ponta e a expertise de marceneiros qualificados para cortar, montar e finalizar cada peça. A combinação de tecnologia e o toque artesanal garante precisão e acabamento impecável.'
                    )
                  }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ServicosRda',
};
</script>
<style>
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
</style>
