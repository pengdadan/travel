<template>
  <div id="app">
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
