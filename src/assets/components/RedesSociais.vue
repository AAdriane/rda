<template>
  <div class="card row">
    <a class="socialContainer containerOne" href="#">
      <font-awesome-icon class="socialSvg" :icon="['fab', 'instagram']" />
    </a>

    <a class="socialContainer containerTwo" href="#">
      <font-awesome-icon
        class="socialSvg"
        :icon="['fab', 'whatsapp']"
      ></font-awesome-icon>
    </a>

    <a class="socialContainer containerThree" href="#">
      <font-awesome-icon
        class="socialSvg"
        :icon="['fab', 'facebook']"
      ></font-awesome-icon>
    </a>
  </div>
</template>
<script>
export default {
  name: 'RedesSociais',
};
</script>
<style scoped>
.card {
  background-color: transparent;
  display: ruby;
  align-items: center;
  justify-content: center;
  border: none;
}

.socialContainer {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 1s;
  margin: 5px;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
}
/* whatsapp*/
.containerTwo:hover {
  background-color: #128c7e;
  transition-duration: 0.3s;
}
/* facebook*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
  color: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
