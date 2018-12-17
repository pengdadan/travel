<template>
  <div class="container" @click="close">
    <transition>
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img :src="item" alt>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //此处是为了监听swiper-pagination这个类的样式
        paginationType: "fraction",
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
// .container >>> .swiper-pagination {
// overflow: inherit;
// }
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;

  .wrapper {
    img {
      width: 100%;
    }

    .swiper-container {
      overflow: inherit;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -40px;
    }
  }
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.6s;
}
</style>
