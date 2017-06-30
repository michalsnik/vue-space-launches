<template lang="html">
  <div :class="['page', { 'is-full': full }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['full']
}
</script>

<style lang="scss" scoped>
  .page {
    padding: 55px 15px 0;

    &.is-full {
      padding: 0;
    }
  }
</style>
