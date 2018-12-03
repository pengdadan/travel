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
  + 在mian.js中导入并加载fastclick：import fastClick from 'fastclick'  // fastClick.attach(document.body)
