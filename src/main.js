import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ServicesList from './components/services/ServicesList.vue';
import ProfessionalsList from './components/professionals/ProfessionalsList.vue';
import TeamMembers from './components/services/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/services' },
    {
      name: 'services',
      path: '/services',
      component: ServicesList,
      children: [
        {
          name: 'team-members',
          path: ':serviceId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/professionals', component: ProfessionalsList },
    { path: '/:notFound(.*)', redirect: '/services' },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
