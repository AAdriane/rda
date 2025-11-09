<template>
  <div>
    <section id="orcamentos" class="py-5">
      <div class="container">
        <div class="col-12 text-center mb-5" data-aos="fade-up">
          <h1 class="title mb-3">{{ $t('SOLICITAR ORÇAMENTO') }}</h1>
          <div class="divider mx-auto" aria-hidden="true"></div>
        </div>

        <div class="row text-center justify-content-center">
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <input
              type="text"
              class="form-control"
              placeholder="Nome Completo"
            />
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <input type="text" class="form-control" placeholder="Telefone" />
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="col-md-12 mb-4" data-aos="fade-up">
            <textarea
              type="text"
              class="form-control"
              rows="4"
              placeholder="Descreva qual móvel gostaria de planejar sob medida..."
            ></textarea>
          </div>
          <div class="col-md-12">
            <button class="w-100 btn primary">
              {{ $t('Enviar solicitação') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'OrcamentoRda',
};
</script>
<style>
.divider {
  width: 80px;
  height: 4px;
  background-color: #a8862d;
  border-radius: 2px;
}
</style>
