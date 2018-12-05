<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.stylus';

.search {
  background: $bgColor;
  height: 0.72rem;
  padding: 0 0.1rem;

  .search-input {
    height : .64rem;
    line-height: .64rem;
    width: 100%;
    border-radius: .1rem;
    text-align: center;
    color: #333;
  }
}
</style>
