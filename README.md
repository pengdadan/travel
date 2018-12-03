<<<<<<< HEAD
# travel2

#### 项目介绍
{**以下是码云平台说明，您可以替换为您的项目简介**
码云是开源中国推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1. xxxx
2. xxxx
3. xxxx

#### 使用说明

1. xxxx
2. xxxx
3. xxxx

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

=======
# 去哪儿手机端App开发


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
>>>>>>> project init
