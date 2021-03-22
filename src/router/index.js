import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainSite",
    component: () => import("../components/MainSite.vue"),
  },
  {
    path: "/location",
    name: "Location",
    component: () => import("../components/Location.vue"),
  },
]

const router = new VueRouter({
    mode: "history",
    routes,
  });
  
  export default router;