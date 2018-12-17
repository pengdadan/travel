<template>
  <div class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handClick"
      @touchstart.prevent="handTouchStart"
      @touchmove="handTouchMove"
      @touchend="handTouchEnd"
    >{{item}}</li>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStarts: false
    };
  },
  methods: {
    handClick(e) {
      this.$emit("change", e.target.innerText);
      // console.log(e.target.innerText);
    },
    handTouchStart() {
      this.touchStarts = true;
    },
    handTouchMove(e) {
      if (this.touchStarts) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handTouchEnd() {
      this.touchStarts = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 0.4rem;
  top: 1.6rem;
  right: 0;
  bottom: 0;
  list-style: none;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>

