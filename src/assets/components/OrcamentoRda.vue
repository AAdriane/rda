<template>
  <div>
    <section id="orcamentos" class="py-5">
      <div class="container">
        <div class="col-12 text-center mb-5" data-aos="fade-up">
          <h1 class="title mb-3">{{ $t('SOLICITAR ORÇAMENTO') }}</h1>
          <div class="divider mx-auto" aria-hidden="true"></div>
        </div>

        <div class="row text-center justify-content-center">
          <div class="col-md-6 mb-4" data-aos="fade-up">
            <input
              v-model="form.nome"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.nome }"
              placeholder="Nome Completo"
              @input="errors.nome = false"
            />
            <div v-if="errors.nome" class="invalid-feedback d-block text-start">
              Campo obrigatório
            </div>
          </div>
          <div class="col-md-6 mb-4" data-aos="fade-up">
            <input
              v-model="form.email"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
              placeholder="Email"
              @input="errors.email = false"
            />
            <div
              v-if="errors.email"
              class="invalid-feedback d-block text-start"
            >
              Campo obrigatório
            </div>
          </div>
          <div class="col-md-12 mb-4" data-aos="fade-up">
            <textarea
              v-model="form.mensagem"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.mensagem }"
              rows="4"
              placeholder="Descreva qual móvel gostaria de planejar sob medida..."
              @input="errors.mensagem = false"
            ></textarea>
            <div
              v-if="errors.mensagem"
              class="invalid-feedback d-block text-start"
            >
              Campo obrigatório
            </div>
          </div>
          <div class="col-md-12">
            <button class="w-100 btn primary" @click="enviarSolicitacao">
              {{ $t('Enviar solicitação') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const WHATSAPP_NUMBER = '55049920005845';

export default {
  name: 'OrcamentoRda',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        mensagem: '',
      },
      errors: {
        nome: false,
        email: false,
        mensagem: false,
      },
    };
  },
  methods: {
    validarFormulario() {
      this.errors.nome = !this.form.nome.trim();
      this.errors.email = !this.form.email.trim();
      this.errors.mensagem = !this.form.mensagem.trim();

      return !this.errors.nome && !this.errors.email && !this.errors.mensagem;
    },
    enviarSolicitacao() {
      if (!this.validarFormulario()) {
        return;
      }

      const mensagem =
        `Olá! Gostaria de solicitar um orçamento.\n\n` +
        `Nome: ${this.form.nome}\n` +
        `E-mail: ${this.form.email}\n` +
        `Mensagem: ${this.form.mensagem}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    },
  },
};
</script>
<style>
.divider {
  width: 80px;
  height: 4px;
  background-color: #a8862d;
  border-radius: 2px;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
