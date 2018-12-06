<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(item,index) of cities" :key="index" :ref='index'>
        <div class="title border-topbottom">{{index}}</div>
        <div class="item-list">
          <div class="item" v-for="i of item" :key="i.id">{{i.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
       }
      // console.log(this.letter);
      
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  font-size: 0.26rem;
  color: #666;
}

.button-list {
  width: 100%;
  // background: red;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 30px;
  overflow: hidden;

  .button {
    float: left;
    width: 30%;
    heigth: 0.64rem;
    color: #333;
    // background: green;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.item-list {
  width: 100%;

  .item {
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left: 10px;
    border-bottom: 0.5px solid #ccc;
    color: #333;
  }
}
</style>
