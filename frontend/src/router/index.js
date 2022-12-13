import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountView.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/CreateView.vue"),
  },
  {
    path: "/collection",
    name: "collection",
    component: () => import("../views/CollectionView.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/404View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
