// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// 处理手机端click事件300ms延迟情况
import fastClick from 'fastclick'

import store from './store/index.js'

// 按需导入轮播图样式
import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import "mint-ui/lib/style.css"
// 初始化样式
import './assets/styles/reset.css'
// 处理底部一像素变大情况
import './assets/styles/border.css'
// 导入字体图标
import './assets/styles/iconfont.css'
// 导入mui样式
import './lib/mui/css/mui.min.css'
// import './lib/mui/js/mui'

Vue.config.productionTip = false
// 加载fastClick
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
