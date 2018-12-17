<template>
  <div id="app">
    <!-- 使用keep-alive后，页面会进行缓存，所以在点击当前页面的另一个选项时，
    不会重新发送axios请求，需要使用 exclude="Detail" （Detail这个页面不被缓存）
    但是使用这个时，对应被排除的Detail组件中就不会执行activated这个生命周期钩子
    所以不使用-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background: #ffffff;
  margin-bottom: 10px;
}
</style>
