<template>
  <div>
    <div class="banner" @click="open">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary @close="close" v-show="flag" :imgs="imgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data() {
    return {
      flag: false,
      imgs: [
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg"
      ]
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
    height: 205px;
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

