<template>
  <div class="header">
    <router-link to="/" tag="div">
      <span class="iconfont header-iconfont">&#xe624;</span>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';

.header {
  position: relative;
  line-height: 0.86rem;
  background: $bgColor;
  text-align: center;
  color: #ffffff;
  font-size: 18px;

  .header-iconfont {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
  }
}
</style>
