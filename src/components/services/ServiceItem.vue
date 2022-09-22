<script>
export default {
  props: ['id', 'name'],
  computed: {
    link() {
      return '/services/' + this.id;
    },
  },
};
</script>

<template>
  <li>
    <h3>{{ name }}</h3>
    <router-link :to="link">View Members</router-link>
  </li>
</template>

<style scoped>
li {
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 1rem 0;
  font-size: 1.25rem;
}

li .service-description {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 167, 172) 89%
  ) !important;
}

a:hover,
a:active {
  color: floralwhite;
  border-color: floralwhite;
  background-color: #4388ef;
}
</style>
