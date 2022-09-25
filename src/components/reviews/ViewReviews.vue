<script>
import BaseCard from '../common/BaseCard.vue';
import ReviewItem from '../reviews/ReviewItem.vue';
export default {
  data() {
    return {
      results: [
        { id: 1, name: 'Juan Zúñiga Amador', rating: 'malo' },
        { id: 2, name: 'Carlos Rivera', rating: 'bueno' },
        { id: 3, name: 'Luis Alberto Gómez', rating: 'excelente' },
      ],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadReviews() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-demo-86a34-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((response) => {
          if (response.ok) return response.json;
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          if (results.length > 0) this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.error = 'Se produció un error al traer los datos.';
          this.isLoading = false;
        });
    },
  },
  mounted() {
    //this.loadReviews();
  },
  components: { BaseCard, ReviewItem },
};
</script>

<template>
  <section>
    <base-card>
      <h4>Reseñas</h4>
      <div>
        <p v-if="isLoading">Cargando</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p v-else-if="!isLoading && (!results || results.length === 0)">
          Lo sentimos no hay resultados para mostrar
        </p>
        <ul v-else>
          <review-item
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          >
          </review-item>
        </ul>
      </div>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
