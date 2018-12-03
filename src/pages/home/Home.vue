<template>
  <div>
    <home-header></home-header>
    <home-swipe></home-swipe>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwipe from "./components/Swipe";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipe
  }
};
</script>

<style lang="">
.mint-swipe {
  height: 200px;
}
</style>