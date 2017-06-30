import Vue from 'vue';
import Router from 'vue-router';

import Launches from './components/pages/Launches.vue';
import LaunchDetails from './components/pages/LaunchDetails.vue';

Vue.use(Router);

const routes = [
  { path: '', name: 'launches', component: Launches },
  { path: '/launch/:launchId', name: 'launch', component: LaunchDetails, props: true },
  { path: '*', component: { template: '<div>404</div>' } },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
