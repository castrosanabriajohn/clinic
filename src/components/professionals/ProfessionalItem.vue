<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Therapist') {
        return 'role--therapist';
      }
      if (this.role === 'Nurse') {
        return 'role--nurse';
      }
      return null;
    },
  },
};
</script>

<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--therapist {
  background-color: blue;
  color: white;
}

.role--nurse {
  background-color: #af003a;
  color: white;
}
</style>
