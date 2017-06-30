<template lang="html">
  <header :class="['header', {'is-primary': primary, 'is-transparent': transparent}]">
    <div class="header__title">
      <slot></slot>
    </div>
    <div class="header__sides">
      <div class="header__left">
        <router-link :to="back" v-if="back">
          <icon name="arrow-left"></icon>
          Back
        </router-link>
      </div>
      <div class="header__right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['primary', 'transparent', 'back']
}
</script>

<style lang="scss" scoped>
  .header {
    height: 40px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    &, a {
      color: $color-white;
    }

    &.is-primary {
      background: $color-primary;
    }

    &.is-transparent {
      background: transparent;
    }

    &__title {
      line-height: 40px;
      text-align: center;
      font-weight: bold;
    }

    &__sides {
      position: absolute;
      top: 0;
      left: 5px;
      right: 5px;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__left a,
    &__right a {
      display: flex;
      align-items: center;

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }
</style>
