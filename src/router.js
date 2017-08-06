import Vue from 'vue';
import Router from 'vue-router';
import injector from 'vue-inject'

Vue.use(Router);

const routes = [
  { path: '', name: 'launches', component: injector.get('Launches') },
  { path: '/launch/:launchId', name: 'launch', component: injector.get('LaunchDetails'), props: true },
  { path: '*', component: { template: '<div>404</div>' } },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
