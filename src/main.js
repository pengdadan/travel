// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// 处理手机端click事件300ms延迟情况
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 处理底部一像素变大情况
import './assets/styles/border.css'
Vue.config.productionTip = false
// 加载fastClick
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
