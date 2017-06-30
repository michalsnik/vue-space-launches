<template lang="html">
  <div class="card">
    <div v-if="title" class="card__title">{{title}}</div>
    <div v-if="subtitle" class="card__subtitle">{{subtitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'ui-card',
  props: ['title', 'subtitle']
}
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 15px;
    padding: 15px;
    background: $color-white;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);

    &__title {
      font-size: 14px;
      font-weight: 500;
      color: #000;
    }

    &__subtitle  {
      font-size: 12px;
      color: #555;
    }
  }
</style>
