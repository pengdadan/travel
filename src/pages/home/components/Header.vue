<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconfont-left">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont iconfont-right">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city:String
  }
};
</script>

<style lang="stylus" scoped>
// 样式里面引入样式需要在import前面加@符号
// 在css里面添加别名样式，需要在别名前面加~线
@import '~styles/varibles.stylus'
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
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .iconfont-right {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>