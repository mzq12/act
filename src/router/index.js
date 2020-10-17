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
  },
  {
    path: "/companyApply",
    name: "companyApply",
    component: () => import("../pages/companyApply/index.vue")
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../pages/order/index.vue")
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../pages/article/index.vue")
  },
  {
    path: "/company",
    name: "company",
    component: () => import("../pages/company/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
