<template lang="html">
  <page>
    <ui-header :primary="true">Launches</ui-header>

    <router-link
      v-for="l in launches"
      :key="l.id"
      :to="{ name: 'launch', params: { launchId: l.id }}"
    >
      <ui-card
        :title="l.name"
        :subtitle="l.date | date('DD MMMM Y, HH:MM')"
      ></ui-card>
    </router-link>
  </page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UiHeader from '@app/components/generic/UiHeader.vue'
import Page from '@app/components/layouts/BasePage.vue'
import UiCard from '@app/components/generic/UiCard.vue'

export default {
  components: {
    Page,
    UiHeader,
    UiCard
  },
  computed: {
    ...mapState('launches', {
      launches: 'all',
      isLoading: 'isLoading',
    })
  },
  mounted() {
    this.getAll()
  },
  methods: {
    ...mapActions('launches', ['getAll'])
  },
}
</script>

<style lang="scss" scoped>
</style>
