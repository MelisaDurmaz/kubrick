<template>
  <button :class="{ 'kb-button': true, 'kb-button--xs': size === 'xs' }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'KubrickButton',
  props: {
    size: {
      default: null,
      type: String,
    },
  },
}
</script>

<style lang="scss">
.kb-button {
  position: relative;
  padding: $sp-md;
  color: $dusty-pink;
  font-size: $fs-sm;
  transition: $all-05;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: $all-03;
    border-radius: $br-xs;
  }

  &::before {
    background: transparentize($dusty-pink, 0.8);
  }

  &::after {
    opacity: 0;
    border: 1px solid $black;
    transform: scale(1.2, 1.2);
  }

  &:hover {
    color: $black;
    &::before {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    &::after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  // Variants
  &--xs {
    padding: $sp-xs;
    font-size: $fs-xs;
  }
}
</style>
