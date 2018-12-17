<template>
  <div>
    <router-link class="header-abs" to="/" tag="div" v-show="showAbs">
      <span class="iconfont iconfont-left">&#xe624;</span>
    </router-link>
    <router-link class="header-fixed" tag="div" to="/" v-show="!showAbs" :style="opacityStyle">
      <span class="iconfont header-iconfont">&#xe624;</span>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      // 给header-fixed绑定一个初始样式
      opacityStyle: {
        // opacity为0时完全隐藏，为1时完全显现
        opacity: 0
      }
    };
  },
  methods: {
    handlScroll() {
      // 获取页面顶端滚动时距顶端的距离
      var top = document.documentElement.scrollTop;
      if (top > 60) {
        this.showAbs = false;
        // 在距离顶部60至140之间达到渐隐渐现的效果
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
      } else {
        this.showAbs = true;
      }
      console.log(top);
    }
  },
  // 因为页面用例keep-alive，所有页面一展示就会执行的生命周期钩子
  activated() {
    // 监听页面滚动时的状态
    window.addEventListener("scroll", this.handlScroll);
  },
  // 在退出当前页面时执行的生命周期钩子
  deactivated() {
    // 退出当前页面时，对页面显示时的事件解绑
    window.removeEventListener("scroll", this.handlScroll);

  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';

.header-abs {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;

  .iconfont-left {
    color: #fff;
    font-size: 24px;
  }
}

.header-fixed {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
