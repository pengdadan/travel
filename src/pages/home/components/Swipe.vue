<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of swipeList" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwipe",
  data() {
    return {
      swipeList: [
        { id: 1, img: require("@/images/2.1.jpeg") },
        { id: 2, img: require("@/images/2.3.jpg") },
        { id: 3, img: require("@/images/2.4.jpg") }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>
