<script>
import ProfessionalItem from '../professionals/ProfessionalItem.vue';
export default {
  inject: ['services', 'professionals'],
  props: ['serviceId'],
  data() {
    return {
      serviceName: '',
      members: [],
    };
  },
  methods: {
    loadMembers(serviceId) {
      const currentService = this.services.find((s) => s.id === serviceId);
      const currentMembers = currentService.members;
      const members = [];
      for (const member of currentMembers) {
        const newMember = this.professionals.find((p) => p.id === member);
        members.push(newMember);
      }
      this.members = members;
      this.serviceName = currentService.name;
    },
  },
  created() {
    this.loadMembers(this.serviceId);
  },
  watch: {
    serviceId(newServiceId) {
      this.loadMembers(newServiceId);
    },
  },
  components: { ProfessionalItem },
};
</script>

<template>
  <section>
    <h2>{{ serviceName }}</h2>
    <ul>
      <professional-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      >
      </professional-item>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 60rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
