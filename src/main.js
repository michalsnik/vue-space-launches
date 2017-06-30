import Vue from 'vue'
import Icon from 'vue-svg-icon/Icon.vue'

import App from './components/App.vue'
import router from './router'
import store from './store'
import filters from  './filters'

Vue.component('icon', Icon)

// Register all filters
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
