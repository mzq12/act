import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/index/index.vue")
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../pages/gallery/index.vue")
  },
  {
    path: "/apply",
    name: "apply",
    component: () => import("../pages/applyForm/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
