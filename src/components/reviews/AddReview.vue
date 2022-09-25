<template>
  <section>
    <base-card>
      <h4>¿Cómo calificaría nuestro servicio?</h4>
      <form @submit.prevent="handleSubmit">
        <div class="form-control">
          <label for="name">Tu nombre:</label>
          <input type="text" id="name" v-model.trim="name" />
        </div>
        <h5>Calificación del servicio:</h5>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            v-model="rating"
            id="rating-poor"
            value="malo"
          />
          <label for="rating-poor">Malo</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            v-model="rating"
            id="rating-good"
            value="bueno"
          />
          <label for="rating-good">Bueno</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            v-model="rating"
            id="rating-excellent"
            value="excelente"
          />
          <label for="rating-excellent">Excelente</label>
        </div>
        <p v-if="invalid">
          Uno o más de los campos son invalidos, por favor revisa los datos.
        </p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Enviar</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../common/BaseCard.vue';
import BaseButton from '../common/BaseButton.vue';
export default {
  data() {
    return {
      name: '',
      rating: null,
      invalid: false,
      error: null,
    };
  },
  methods: {
    handleSubmit() {
      if (this.name === '' || !this.rating) {
        this.invalid = true;
        return;
      }
      this.invalid = false;
      fetch('https://vue-http-demo-86a34-default-rtdb.firebaseio.com/surveys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          rating: this.rating,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error('Algo salió mal!');
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
      this.error = null;
      this.name = '';
      this.rating = null;
    },
  },
  components: { BaseCard, BaseButton },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

p {
  color: red;
}

input[type='text'] {
  margin-left: 0.5rem;
  display: block;
  max-width: 10rem;
  margin-top: 0.5rem;
}
</style>
