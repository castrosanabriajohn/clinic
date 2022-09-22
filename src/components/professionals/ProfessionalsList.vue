<script>
import ProfessionalItem from './ProfessionalItem.vue';
export default {
  inject: ['professionals'],
  components: { ProfessionalItem },
};
</script>

<template>
  <ul>
    <professional-item
      v-for="p in professionals"
      :key="p.id"
      :name="p.fullName"
      :role="p.role"
    ></professional-item>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
