# travel2


## 在码云中创建一个项目

## 使用vue自带脚手架方式创建项目
1. 全局安装cnpm install -g @vue/cli(备注：此方式为vue3.0)
2. Vue CLI 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：npm install -g @vue/cli-init
3. 创建一个项目：vue init webpack my-project/（项目名称）

## 项目初始化
1. 在index.html中修改meta为：<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">(使手机端比例为1:1，让其无法自行放大缩小)
2. 在assets文件夹中创建一个styles文件，里面分别放入border.css(用于处理页面底部一像素问题)和reset.css(适用于大部分手机端显示问题)文件
3. 导入fastclick，处理手机端点击300ms延迟问题
  + 在项目目录下安装：cnpm i fastclick -S
  + 在mian.js中导入并加载fastclick：import fastClick from 'fastclick' 
  + fastClick.attach(document.body)

## 制作首页header区域
1. 需要用到iconfont图标，去网页搜索iconfont官网，下载所需要的图标，下载完成后解压下载图标，把四个字体文件放到styles文件夹下的iconfont文件夹下，把iconfont.css文件放到styles文件夹下，然后修改iconfont.css文件中的四个路径，就可以去网页复制图标代码使用，使用方式：< span class="iconfont " >&#xe624 ;< /span>
2. 当多个页面可以共用一个样式时，提炼出一个公共样式，在styles文件夹下创建一个varibles.stylus文件，使用：$bgColor = #00bcd4 方式创建公共样式，在使用的页面导入这个文件后，就可以使用此样式。（备注：因为是在css中导入css样式，所以import前面需要加@符号，即@import）
3. 当需要多次引入一个文件夹中的内容时，可以去项目目录下的build文件夹中找到webpack.base.config.js文件，在@后面添加'styles': resolve('src/assets/styles')，
即可以将styles设置为直接导入目录，可以在其他文件中通过~styles的方式直接导入styles文件夹

## 制作首页轮播图
1. 按需导入 mint-ui 轮播图，先在项目目录下安装：cnpm install mint-ui -S；
2. 在 main.js 中导入 mint-ui 方式：import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import "mint-ui/lib/style.css"
3. 在 export default中 载入图片数组，只能加载网页地址，不能加载本地图片地址(除非使用require方式：{ id: 1, img: require("@/images/2.1.jpeg") },)

## 制作首页icon区域
1. 手动绘制一个8宫格区域，保证样式符合产品需求；
2. 将轮播图的外层标签包裹8宫格区域，以实现分页滑动功能；
3. 在 export default 中在入需要循环的 icon 图标数组，最好是9个数据，以实现到第二页分页效果，
    在 export default 中添加computed 计算属性，通过计算属性，将icon数据分组，实现第二页分页效果
    + computed: {
    + pages () {
      + const pages = []
      + this.iconList.forEach((item,index) => {
      + const page = Math.floor(index/8)
      + if (!pages[page]) {
        + pages[page] = []
        + }
        + pages[page].push(item)
      + })
      + return pages;
    + }
  + }

## 绘制热销推荐部分
1. 创建recommend.vue组件；
2. 绘制热销推荐部分样式

## 绘制周末去哪了部分
1. 创建 weekend.vue组件；
2. 绘制周末去哪了部分样式

## 首页axios请求
1. 在项目目录下安装axios：cnpm i axios -S
2. 在 Home.vue 中导入axios，import axios from "axios"
3. 在 export default 中创建 mounted 生命周期钩子，并调用方法中的axios请求函数this.getHomeInfo（）
4. 在方法中创建请求数据的方法：
  + methods: {
    + getHomeInfo() {
      + axios.get('/api/index.json').then(this.getHomeInfoSucc)
    + },
    + getHomeInfoSucc (res) {
      + res = res.data
      + if(res.ret && res.data) {
        + const data = res.data
        + this.city = data.city
        + this.swipe = data.swiperList
        + this.icon = data.iconList
        + this.recommend = data.recommendList
        + this.weekend = data.weekendList
      + }
      + console.log(res)
    + }
  + },
  5. 通过父子传值的方式，将父组件中请求的数据传到子组件中，首先在父组件中data里面定义要接收数据的空对象或数组，然后通过方法向对象和数组中传数据，再在对应的模板中绑定要传的数据，在子组件中通过props接收父组件中传递的数据，然后在子组件中通过v-for渲染数据

## 城市选择页面制作
  1. 在pages目录下创建一个city目录
  2. 在city目录下创建一个city.vue组件，和一个components文件夹，用于放置city页面的所有组件
  3. 在路由router文件夹下的index.js文件中放置city页面路由

## 城市页面header部分制作
  1. 在components文件夹下创建header.vue组件，在组件中绘制header样式，
  2. 在city文件中导入header.vue组件

## 绘制搜索框布局

## 城市列表制作
1. 绘制当前城市样式
2. 绘制热门城市样式
3. 绘制各级字母列表城市样式
城市列表需要绝对定位，保证城市header始终能够在页面上显示

## BetterScroll 使用
1. 在项目中安装 better-scroll 插件：cnpm i better-scroll -S
2. 欲使用这个插件，必需保证html格式符合github格式要求，因此，需要在template下面的div中再用一个div包裹里面的内容
3. 在 export default 中挂载一个 mounted 生命周期钩子：
  + mounted() {
    + this.scroll = new Bscroll(this.$refs.wrapper)
  + }

## 绘制右面侧边栏字母表

## 城市页面请求axios
1. 同首页一样的原理发送axios请求
2. 需要注意的是：城市数据涉及到首字母和城市名，需要二次循环，所以首次循环需要 index 索引位置获得对象的每个数组
  + <-div class="area" v-for="(item,index) of cities" :key="index">
        + <-div class="title border-topbottom">{{index}}<-/div>
        + <-div class="item-list">
          + <-div class="item" v-for="i of item" :key="i.id">{{i.name}}<-/div>
        + <-/div>
      + <-/div>
