<template>
  <div class="list">
    <li class="item" v-for="(item,index) of cities" :key="index">{{index}}</li>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 0.4rem;
  top: 1.6rem;
  right: 0;
  bottom: 0;
  list-style: none;

  .item {
    text-align: center;
    line-height :.4rem;
    color: $bgColor;
  }
}
</style>

