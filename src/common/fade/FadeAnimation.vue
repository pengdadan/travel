<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "FadeAnimation"
};
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opactity 0.8s;
}
</style>
