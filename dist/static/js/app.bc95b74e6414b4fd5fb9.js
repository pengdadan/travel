webpackJsonp([1],{"1qlc":function(t,e){},"2Nb2":function(t,e){},"2ohQ":function(t,e){},"5OHe":function(t,e){},"7fFF":function(t,e){},"9n10":function(t,e){},Ffyk:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("+VlJ"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},s,!1,function(t){i("rAqV")},null,null).exports,r=i("KGCO"),o=i("4YfN"),c=i.n(o),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/City",tag:"div"}},[i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-right-desc"},[t._v(t._s(this.$store.state.city))]),t._v(" "),i("span",{staticClass:"iconfont iconfont-right"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont iconfont-left"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市景点"}})])}]};var u=i("C7Lr")({name:"HomeHeader",props:{}},l,!1,function(t){i("waih")},"data-v-59b05748",null).exports,d={name:"HomeSwipe",props:{swipe:Array},data:function(){return{}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-swipe",{attrs:{auto:4e3}},this._l(this.swipe,function(t){return e("mt-swipe-item",{key:t.id},[e("img",{attrs:{src:t.imgUrl}})])}),1)],1)},staticRenderFns:[]};var f=i("C7Lr")(d,h,!1,function(t){i("7fFF")},"data-v-36550f23",null).exports,p={name:"HomeIcon",props:{icon:Array},data:function(){return{}},computed:{pages:function(){var t=[];return this.icon.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-swipe",{attrs:{auto:0}},t._l(t.pages,function(e,n){return i("mt-swipe-item",{key:n,staticClass:"box"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("span",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var v=i("C7Lr")(p,m,!1,function(t){i("YwUf")},"data-v-5dc95f80",null).exports,_={name:"HomeRecommend",props:{recommend:Array},data:function(){return{}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"item-title"},t._l(t.recommend,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[i("img",{attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-desc"},[i("p",{staticClass:"item-top"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-middle"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var w=i("C7Lr")(_,C,!1,function(t){i("WQt6")},"data-v-47551038",null).exports,y={name:"HomeWeekend",props:{weekend:Array},data:function(){return{}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekend,function(e){return i("li",{key:e.id,staticClass:"item"},[i("img",{attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-container"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var b=i("C7Lr")(y,g,!1,function(t){i("iafF")},"data-v-570ecc57",null).exports,k=i("aozt"),$=i.n(k),x=i("9rMa"),S={name:"Home",components:{HomeHeader:u,HomeSwipe:f,HomeIcon:v,HomeRecommend:w,HomeWeekend:b},data:function(){return{lastCity:"",swipe:[],icon:[],recommend:[],weekend:[]}},computed:c()({},Object(x.b)(["city"])),methods:{getHomeInfo:function(){$.a.get("../../../static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swipe=e.swiperList,this.icon=e.iconList,this.recommend=e.recommendList,this.weekend=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swipe",{attrs:{swipe:t.swipe}}),t._v(" "),i("home-icon",{attrs:{icon:t.icon}}),t._v(" "),i("home-recommend",{attrs:{recommend:t.recommend}}),t._v(" "),i("home-weekend",{attrs:{weekend:t.weekend}})],1)},staticRenderFns:[]};var L=i("C7Lr")(S,I,!1,function(t){i("g/P0")},null,null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/",tag:"div"}},[e("span",{staticClass:"iconfont header-iconfont"},[this._v("")])]),this._v("城市选择\n")],1)},staticRenderFns:[]};var F=i("C7Lr")({name:"CityHeader"},E,!1,function(t){i("vuq7")},"data-v-1e3c808e",null).exports,H=i("yKqG"),N={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new H.a(this.$refs.search)}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.cityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var R=i("C7Lr")(N,T,!1,function(t){i("1qlc")},"data-v-3526c0f5",null).exports,A={name:"CityList",props:{cities:Object,hotCities:Array,letter:String},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},mounted:function(){this.scroll=new H.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button",on:{click:function(i){t.cityClick(e.name)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),t._l(t.cities,function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item",on:{click:function(i){t.cityClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var O=i("C7Lr")(A,D,!1,function(t){i("bUmN")},"data-v-a2b8fee8",null).exports,j={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStarts:!1}},methods:{handClick:function(t){this.$emit("change",t.target.innerText)},handTouchStart:function(){this.touchStarts=!0},handTouchMove:function(t){if(this.touchStarts){var e=this.$refs.A[0].offsetTop,i=t.touches[0].clientY-79,n=Math.floor((i-e)/20);n>=0&&n<this.letters.length&&this.$emit("change",this.letters[n])}},handTouchEnd:function(){this.touchStarts=!1}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handClick,touchstart:function(e){return e.preventDefault(),t.handTouchStart(e)},touchmove:t.handTouchMove,touchend:t.handTouchEnd}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var G={name:"City",components:{CityHeader:F,CitySearch:R,CityList:O,CityAlphabet:i("C7Lr")(j,M,!1,function(t){i("2Nb2")},"data-v-418aee99",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("../../../static/mock/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},changeClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.changeClick}})],1)},staticRenderFns:[]};var z=i("C7Lr")(G,U,!1,function(t){i("QIbT")},"data-v-355ddb82",null).exports,P={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{close:function(){this.$emit("close")}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.close}},[e("transition",[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])],1)},staticRenderFns:[]};var q={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var B={name:"DetailBanner",components:{CommonGallary:i("C7Lr")(P,Q,!1,function(t){i("xnQG")},"data-v-8f126876",null).exports,FadeAnimation:i("C7Lr")({name:"FadeAnimation"},q,!1,function(t){i("2ohQ")},"data-v-49cfc000",null).exports},props:["sightName","bannerImg","gallaryImgs"],data:function(){return{flag:!1}},methods:{open:function(){this.flag=!0},close:function(){this.flag=!1}}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.open}},[i("img",{attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],attrs:{imgs:t.gallaryImgs},on:{close:t.close}})],1)],1)},staticRenderFns:[]};var K={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handlScroll:function(){var t=document.documentElement.scrollTop;if(t>60){this.showAbs=!1;var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handlScroll)},deactivated:function(){window.removeEventListener("scroll",this.handlScroll)}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{to:"/",tag:"div"}},[e("span",{staticClass:"iconfont iconfont-left"},[this._v("")])]),this._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle,attrs:{tag:"div",to:"/"}},[e("span",{staticClass:"iconfont header-iconfont"},[this._v("")]),this._v("\n    景点详情\n  ")])],1)},staticRenderFns:[]};var V={name:"DetailList",props:["list"],data:function(){return{tag:!1}},methods:{open:function(t){t?this.tag=!this.tag:window.location.href="./"}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.list,function(e,n){return i("div",{key:n},[i("div",{staticClass:"item-title border-bottom",on:{click:function(i){t.open(e.children)}}},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),t.tag?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var X={name:"Detail",components:{DetailBanner:i("C7Lr")(B,W,!1,function(t){i("yCz8")},"data-v-667eed3c",null).exports,DetailHeader:i("C7Lr")(K,Y,!1,function(t){i("w3sW")},"data-v-691946b8",null).exports,DetailList:i("C7Lr")(V,J,!1,function(t){i("sHzt")},"data-v-6b213e2c",null).exports},data:function(){return{lastCity:"",sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},methods:{getDetailInfo:function(){$.a.get("../../../static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.lastCity=this.$route.params.id,this.getDetailInfo()},activated:function(){this.lastCity!=this.$route.params.id&&this.getDetailInfo()}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.categoryList}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var tt=i("C7Lr")(X,Z,!1,function(t){i("RKlB")},"data-v-68bc3b7b",null).exports;n.default.use(r.a);var et=new r.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:z},{path:"/detail/:id",name:"Detail",component:tt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),it=i("iDdd"),nt=i.n(it);n.default.use(x.a);var st=new x.a.Store({state:{city:"广州"},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e}}}),at=i("41jX"),rt=i.n(at),ot=i("wSez");i("5OHe"),i("9n10"),i("M6Sr"),i("TzC8"),i("Ffyk"),i("aEDl");n.default.component(ot.Swipe.name,ot.Swipe),n.default.component(ot.SwipeItem.name,ot.SwipeItem),n.default.config.productionTip=!1,n.default.use(rt.a),nt.a.attach(document.body),new n.default({el:"#app",router:et,store:st,components:{App:a},template:"<App/>"})},QIbT:function(t,e){},RKlB:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("C7Lr")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);e.default=s.exports},WQt6:function(t,e){},YwUf:function(t,e){},aEDl:function(t,e){},bUmN:function(t,e){},"g/P0":function(t,e){},iafF:function(t,e){},rAqV:function(t,e){},sHzt:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i("Bnvi"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("C7Lr")(s,a,!1,null,null,null);e.default=r.exports},vuq7:function(t,e){},w3sW:function(t,e){},waih:function(t,e){},xnQG:function(t,e){},yCz8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bc95b74e6414b4fd5fb9.js.map