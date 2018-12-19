<template>
  <div>
    <home-header></home-header>
    <home-swipe :swipe="swipe"></home-swipe>
    <home-icon :icon="icon"></home-icon>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-weekend :weekend="weekend"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwipe from "./components/Swipe";
import HomeIcon from "./components/Icon";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: "",
      swipe: [],
      icon: [],
      recommend: [],
      weekend: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("../../../static/mock/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swipe = data.swiperList;
        this.icon = data.iconList;
        this.recommend = data.recommendList;
        this.weekend = data.weekendList;
      }
      // console.log(res)
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style lang="">
.mint-swipe {
  height: 200px;
}
</style>