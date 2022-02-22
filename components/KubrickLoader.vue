<template>
  <div class="kb-loader">
    <div />
    <div />
  </div>
</template>

<style lang="scss">
.kb-loader {
  display: inline-block;
  position: relative;
  width: $loader-h-w;
  height: $loader-h-w;

  > * {
    position: absolute;
    border: 4px solid $dusty-pink;
    opacity: 1;
    border-radius: 50%;
    animation: kb-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
}

@keyframes kb-loader {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
