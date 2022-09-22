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
        { id: 's1', name: 'Service 1', members: ['p1', 'p2'] },
        { id: 's2', name: 'Service 2', members: ['p1', 'p2'] },
        { id: 's3', name: 'Service 3', members: ['p1', 'p2'] },
      ],
      professionals: [
        { id: 'p1', fullName: 'Name 1', role: 'Therapist' },
        { id: 'p2', fullName: 'Name 2', role: 'Nurse' },
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
  <the-footer></the-footer>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
