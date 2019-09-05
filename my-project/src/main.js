import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/Ulicss.css";  //--引入重置css样式表

import "./assets/css/font-awesome.css";//--引入小箭头字体css样式表

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";     //---配置mint-ui与css

import axios from "axios";
import VueAxios from "vue-axios";   //--配置axios并使用
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

Vue.use(MintUI)                  //--使用mint-ui

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
