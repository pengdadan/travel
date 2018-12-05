<template>
  <div>
    <mt-swipe :auto="0">
      <mt-swipe-item class="box" v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <img :src="item.imgUrl" alt>
            <span class="icon-desc">{{item.desc}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  props: {
    icon: Array
  },
  data () {
    return {
     /*  iconList: [
        {id:1,imgUrl: require('@/images/1.1.jpg'),desc:'景'},
      ] *//* ,
      iconList2: [
        {id:1,img: require('@/images/1.1.jpg'),desc:'票'},
        {id:2,img: require('@/images/1.1.jpg'),desc:'门'},
        {id:3,img: require('@/images/1.1.jpg'),desc:'点'},
        {id:4,img: require('@/images/1.1.jpg'),desc:'景'},
      ], */
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icon.forEach((item,index) => {
        const page = Math.floor(index/8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
.mint-swipe {
  height: 240px;
}

.box {
  background: #ffffff;
  height: 240px;
  padding-right: 10px;
  

  .icon {
    float: left;
    // background: green;
    width: 25%;
    // height: 25%;
    text-align :center;
    padding-left: 10px;
    padding-top: 10px;

    img {
      width: 85%;
      padding-bottom: 5px;
    }

    .icon-desc {
      display: block;
      text-align: center;
      overflow :hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
    }
  }
}
</style>
