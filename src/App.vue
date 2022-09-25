<script>
import TheNavigation from './components/nav/TheNavigation.vue';
import TheFooter from './components/nav/TheFooter.vue';
export default {
  provide() {
    return {
      services: this.services,
      professionals: this.professionals,
    };
  },
  data() {
    return {
      services: [
        {
          id: 's1',
          name: 'Terapia Psicológica',
          description:
            'La psicoterapia es un tratamiento de colaboración basado en la relación entre una persona y el psicólogo. Como su base fundamental es el diálogo, proporciona un ambiente de apoyo que le permite hablar abiertamente con alguien objetivo, neutral e imparcial.',
          members: ['p1', 'p2'],
        },
        {
          id: 's2',
          name: 'Tratamiento Insominio',
          description:
            'El objetivo de esta terapia para el insomnio aprendido, también llamada intención paradójica, es reducir la preocupación y la ansiedad por lograr conciliar el sueño, y consiste en acostarse e intentar mantenerse despierto en lugar de esperar quedarse dormido.',
          members: ['p1', 'p2'],
        },
        {
          id: 's3',
          name: 'Masajes Terapéuticos',
          description:
            'El término masaje terapéutico engloba toda una serie de técnicas de masaje que se utilizan en el tratamiento de trastornos neuromusculares y musculoesqueléticos, facilitando la eliminación de toxinas, activando la circulación sanguínea y linfática y mejorando el aporte de oxígeno a los tejidos.',
          members: ['p1', 'p2'],
        },
      ],
      professionals: [
        { id: 'p1', fullName: 'Benjamín Castro Alfaro', role: 'Terapeuta' },
        { id: 'p2', fullName: 'Rosa Gutierrez Narvaez', role: 'Masajista' },
      ],
    };
  },
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

main {
  margin-bottom: 100px;
}

body {
  margin: 0;
}

footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  border-radius: 1rem 1rem 0 0;
  background-image: linear-gradient(
    180deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 167, 172) 89%
  ) !important;
}
</style>
