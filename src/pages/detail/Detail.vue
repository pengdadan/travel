<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      lastCity: "",
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: []
    };
  },
  methods: {
    getDetailInfo() {
      // 发送axios简易写法
      // axios.get("/api/detail.json?id=" + this.$route.params.id);
      // 发送axios请求获取后台数据
      axios
        .get("../../../static/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
      // console.log(res);
    }
  },
  mounted() {
    this.lastCity = this.$route.params.id;
    this.getDetailInfo();
  },
  // 处理重新加载其它页面时，使用keep-alive不发送axios请求问题
  activated() {
    if (this.lastCity != this.$route.params.id) {
      this.getDetailInfo();
    }
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 1000px;
}
</style>

