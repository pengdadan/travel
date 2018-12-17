<template>
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom" @click="open(item.children)">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="tag" class="item-children">
        <!-- 递归组件的用法 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // 给组件命名是为了使用递归组件
  name: "DetailList",
  props: ["list"],
  data() {
    return {
      tag: false
    };
  },
  methods: {
    open(item) {
      // 如果存在递归子组件，就继续展开，如果不存在就跳转到首页
      if (item) {
        this.tag = !this.tag;
      } else {
        window.location.href = "/";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-title {
  line-height: 40px;
  padding-left: 10px;

  .item-title-icon {
    position: relative;
    top: 8px;
    display: inline-block;
    width: 30px;
    height: 30px;
    color: #14a0bb;
    font-family: 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
    background: url('http://img1.qunarzz.com/piao/fusion/1609/e6/78817571a82a1202.png') 0px -43px no-repeat;
  }
}

.item-children {
  margin-left: 10px;
  color: #e21918;
}
</style>
