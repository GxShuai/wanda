import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Abotoste from "./views/Abotoste.vue";
import Three from "./views/Three.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
      {
          path: "/Abotoste",
          name: "Abotoste",
          component: Abotoste
      },
      {
          path: "/three",
          name: "Three",
          component: Three
      }
  ]
});


// 全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log("全局前置");
//   next();
// });
// router.afterEach((to, from) => {
//   // ...
//   console.log("全局后置");
// });