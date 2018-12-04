<template>
  <div>
    <home-header></home-header>
    <home-swipe></home-swipe>
    <home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwipe from "./components/Swipe";
import HomeIcon from "./components/Icon";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcon
  }
};
</script>

<style lang="">
.mint-swipe {
  height: 200px;
}
</style>