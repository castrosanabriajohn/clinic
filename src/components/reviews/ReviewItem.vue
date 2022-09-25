<script>
export default {
  props: ['name', 'rating'],
  computed: {
    ratingStyle() {
      return 'highlight rating--' + this.rating;
    },
  },
};
</script>

<template>
  <li>
    <p>
      <span class="highlight">{{ name }}</span> calificó nuestro servicio como
      <span :class="ratingStyle">{{ rating }}</span>
    </p>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--malo {
  color: #b80056;
}

.rating--bueno {
  color: rgb(34, 94, 197);
}

.rating--excelente {
  color: #008327;
}
</style>
