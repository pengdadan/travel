<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekend" :key="item.id">
        <img :src="item.imgUrl">
        <div class="item-container">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekend: Array
  },
  data() {
    return {
      /* weekendList: [
        {
          id: 1,
          imgUrl:
            "https://imgs.qunarzz.com/vc/eb/e2/0f/380518db6e6b108eea56e7de6e.jpg_90.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          desc: '玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店'
        },
        {
          id: 2,
          imgUrl:
            "https://imgs.qunarzz.com/vc/eb/e2/0f/380518db6e6b108eea56e7de6e.jpg_90.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          desc: '玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店'
        },
        {
          id: 3,
          imgUrl:
            "https://imgs.qunarzz.com/vc/eb/e2/0f/380518db6e6b108eea56e7de6e.jpg_90.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          desc: '玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店'
        },
      ] */
    };
  }
};
</script>

<style lang="stylus" scoped>
.title {
  line-height: 40px;
  margin-top: 10px;
  background: #eeeeee;
  padding-left: 10px;
}

.item {
  margin-top: 10px;

  // margin-bottom: 0px;
  img {
    width: 100%;
    height: 160px;
  }

  .item-container {
    padding: 5px 5px 0;

    .item-title {
      font-size: 16px;
      color: #000;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>


