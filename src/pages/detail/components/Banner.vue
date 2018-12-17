<template>
  <div>
    <div class="banner" @click="open">
      <img :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close="close" v-show="flag" :imgs="gallaryImgs"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: ["sightName", "bannerImg", "gallaryImgs"],
  data() {
    return {
      flag: false
    };
  },
  methods: {
    open() {
      this.flag = true;
    },
    close() {
      this.flag = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    display: flex;
    width: 100%;
    padding: 0 0.2rem;
    bottom: 0;
    color: white;
    line-height: 0.6rem;
    justify-content: space-between;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      // flex: 1;
    }

    .banner-number {
      padding: 0 0.4rem;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border-radius: 0.2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-top: 0.1rem;
    }
  }
}
</style>

