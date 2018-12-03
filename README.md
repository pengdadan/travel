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