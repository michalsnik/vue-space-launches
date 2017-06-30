<template lang="html">
  <page :full="true" v-if="launch">
    <ui-header :transparent="true" :back="{ name: 'launches' }">
    </ui-header>
    <img :src="launch.rocket.imageUrl" class="launch__img" alt="">
    <div class="launch__header">
      <h3 class="launch__title">
        {{launch.name}}
      </h3>
      <div class="launch__date">
        {{launch.date | date('DD MMMM Y, HH:MM')}}
      </div>
    </div>
    <div class="launch__content">
      <div class="launch__content-group">
        <div class="launch__content-label">
          Location
        </div>
        <div class="launch__content-text">
          {{launch.location}}
        </div>
      </div>
      <div class="launch__content-group">
        <div class="launch__content-label">
          Live stream
        </div>
        <div class="launch__content-text">
          <a v-if="launch.videoUrl" :href="launch.videoUrl">{{launch.videoUrl}}</a>
          <span v-else>-</span>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '@app/components/layouts/BasePage.vue'
import UiHeader from '@app/components/generic/UiHeader.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  components: {
    Page,
    UiHeader
  },
  props: ['launchId'],
  computed: {
    ...mapState('launches', {
      isLoading: 'isLoading'
    }),
    ...mapGetters('launches', {
      launch: 'currentLaunch'
    }),
    launchDateFormatted() {
      const date = this.launch.date
      return moment(date).format('DD MMM YYYY')
    }
  },
  mounted() {
    this.getById(this.launchId)
  },
  methods: {
    ...mapActions('launches', ['getById']),
  }
}
</script>

<style lang="scss" scoped>
  .launch {
    &__img {
      display: block;
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: rgba(0, 0, 0, 0.4);
    }

    &__header {
      padding: 15px;
      background: $color-white;
    }

    &__title {
      margin: 0;
    }

    &__content {
      padding: 15px;
    }

    &__content-label {
      font-size: 12px;
      font-weight: bold;
    }

    &__content-group {
      margin-bottom: 10px;
    }
  }
</style>
