<template>
  <div>
    <mt-swipe :auto="0">
      <mt-swipe-item class="box" v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <img :src="item.img" alt>
            <span class="icon-desc">{{item.desc}}</span>
        </div>
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <div class="box">
          <div class="icon" v-for="item of iconList2" :key="item.id">
            <img :src="item.img" alt>
            <span class="icon-desc">{{item.desc}}</span>
          </div>
        </div>
      </mt-swipe-item> -->
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  data () {
    return {
      iconList: [
        {id:1,img: require('@/images/1.1.jpg'),desc:'景'},
        {id:2,img: require('@/images/1.1.jpg'),desc:'点'},
        {id:3,img: require('@/images/1.1.jpg'),desc:'门'},
        {id:4,img: require('@/images/1.1.jpg'),desc:'票'},
        {id:5,img: require('@/images/1.1.jpg'),desc:'景点门票'},
        {id:6,img: require('@/images/1.1.jpg'),desc:'景'},
        {id:7,img: require('@/images/1.1.jpg'),desc:'点'},
        {id:8,img: require('@/images/1.1.jpg'),desc:'门'},
        {id:9,img: require('@/images/1.1.jpg'),desc:'票'},
        {id:10,img: require('@/images/1.1.jpg'),desc:'景点门票'},
      ]/* ,
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
      this.iconList.forEach((item,index) => {
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
    padding-left: 10px;
    padding-top: 10px;

    img {
      width: 100%;
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
