<script>
import ServiceItem from './ServiceItem.vue';
export default {
  inject: ['services'],
  components: { ServiceItem },
};
</script>

<template>
  <router-view></router-view>
  <ul>
    <service-item
      v-for="service in services"
      :key="service.id"
      :id="service.id"
      :name="service.name"
      :description="service.description"
    >
    </service-item>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 60rem;
  padding: 0;
}
</style>
