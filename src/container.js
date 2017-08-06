import Vue from 'vue'
import injector from 'vue-inject'
import Launches from './components/pages/Launches.vue'
import LaunchDetails from './components/pages/LaunchDetails.vue'
import UiHeader from './components/generic/UiHeader.vue'
import UiCard from './components/generic/UiCard.vue'
import BasePage from './components/layouts/BasePage.vue'

Vue.use(injector)

injector.constant('Launches', Launches)
injector.constant('LaunchDetails', LaunchDetails)
injector.constant('UiHeader', UiHeader)
injector.constant('UiCard', UiCard)
injector.constant('BasePage', BasePage)

export default {}
