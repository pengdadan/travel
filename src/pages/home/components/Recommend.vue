<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="item-title">
      <li class="item" v-for="item of recommend" :key="item.id">
        <img
          :src="item.imgUrl"
        >
        <div class="item-desc">
          <p class="item-top">{{item.title}}</p>
          <p class="item-middle">
            {{item.desc}}
          </p>
          <p class="item-button">查看详情</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: Array
  },
  data() {
    return {
     /*  recommendList: [
        {
          id: 1,
          imgUrl:
            "https://imgs.qunarzz.com/p/tts3/1811/fb/e3f1ad01ac5f9402.jpg_180x120_9f265c53.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          alt: '美图',
          desc:
            "玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店"
        },
        {
          id: 2,
          img:
            "https://imgs.qunarzz.com/p/tts3/1811/fb/e3f1ad01ac5f9402.jpg_180x120_9f265c53.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          alt: '美图',
          desc:
            "玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店"
        },
        {
          id: 3,
          img:
            "https://imgs.qunarzz.com/p/tts3/1811/fb/e3f1ad01ac5f9402.jpg_180x120_9f265c53.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          alt: '美图',
          desc:
            "玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店"
        },
        {
          id: 4,
          img:
            "https://imgs.qunarzz.com/p/tts3/1811/fb/e3f1ad01ac5f9402.jpg_180x120_9f265c53.jpg",
          title: "精品游🔥云南大理丽江6日游洱海游艇+红酒派对+环洱",
          alt: '美图',
          desc:
            "玉龙雪山冰川大索道、丽水金沙、花海拍拍拍,昆明温泉酒店、当地特色酒店"
        }
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
  display: flex;
  height: 100px;
  // background: red;
  padding: 10px;

  img {
    width: 90px;
    height: 90px;
  }

  .item-desc {
    height: 90px;
    margin-left: 10px;
    min-width: 0;
    position: relative;

    .item-top {
      padding-top: 5px;
      font-size: 16px;
      color: #000;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .item-middle {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .item-button {
      width: 80px;
      background: orange;
      text-align: center;
      border-radius: 6px;
      color: #ffffff;
      position: absolute;
      bottom: 0px;
      margin-bottom: 0px;
    }
  }
}
</style>
