<template>
  <div id="rodape">
    <footer class="py-4 bg-dark text-white">
      <div class="row d-flex justify-content-center text-center">
        <div class="col-md-4">
          <h4 class="mb-3">Nossa Localização</h4>
          <div class="ratio ratio-16x9 rounded shadow mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1762728732188!6m8!1m7!1sy2KtoohwQHDUAca_yRPafg!2m2!1d-26.69344569220427!2d-52.95384757626432!3f291.0185320315796!4f-4.484170083434051!5f0.7820865974627469"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-md-5 mt-5">
          <h4 class="mb-3">{{ $t('Informações de Contato') }}</h4>
          <p>
            {{ $t('Se preferir, fale conosco através dos canais abaixo') }}:
          </p>

          <ul class="list-unstyled">
            <li class="mb-2">
              <strong><i class="fas fa-envelope me-2"></i>E-mail:</strong>
              <a
                href="mailto:contato@devxap.com.br"
                class="text-primary text-decoration-none"
              >
                rdamoveisplanejados@gmail.com.br</a
              >
            </li>
            <li class="mb-2">
              <strong
                ><i class="fas fa-phone me-2"></i>{{ $t('Telefone') }}:</strong
              >
              <a
                href="tel:+5548991234567"
                class="text-decoration-none text-primary"
              >
                (49) 99999999</a
              >
            </li>
            <li class="mb-2">
              <strong><i class="fab fa-whatsapp me-2"></i>WhatsApp:</strong>
              <a
                href="https://wa.me/5549933005921"
                target="_blank"
                class="text-decoration-none text-primary"
              >
                (49) 99999999</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="row d-flex justify-content-center text-center mt-5">
        <p class="mb-0">
          &copy;
          {{ $t('2025 RDA Móveis Planejados. Todos os direitos reservados.') }}
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'RodapeRda',
};
</script>
<style scoped>
#rodape {
  background-color: #0a0a0a;
}
</style>
