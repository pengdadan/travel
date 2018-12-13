<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconfont-left">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input class="search-input" type="text" placeholder="输入城市景点">
    </div>
    <router-link to="/City" tag="div">
      <div class="header-right">
        <div class="header-right-desc">{{this.$store.state.city}}</div>
        <span class="iconfont iconfont-right">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {}
};
</script>

<style lang="stylus" scoped>
// 样式里面引入样式需要在import前面加@符号
// 在css里面添加别名样式，需要在别名前面加~线
@import '~styles/varibles.stylus';

.header {
  line-height: 0.86rem;
  display: flex;
  background: $bgColor;
  color: white;

  .header-left {
    width: 0.64rem;
    float: left;

    .iconfont-left {
      display: block;
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    padding-left: 0.2rem;
    color: #ccc;
    position: relative;

    .search-input {
      height: 0.6rem;
      line-height: 0.63rem;
      width: 4.5rem;
      position: absolute;
      right: 0;
      background: #fff;
      padding-left: 0;
      font-size: 16px;
      border-width: 0;
    }
  }

  .header-right {
    width: 1.64rem;
    float: right;
    text-align: center;
    display: flex;

    .header-right-desc {
      width: 1.24rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .iconfont-right {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>