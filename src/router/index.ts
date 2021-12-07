import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      title: "login",
    },
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404",
    },
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/components/home/index.vue"),
      },
      {
        path: "/game",
        name: "Game",
        component: () => import("@/views/components/game/index.vue"),
      },
      {
        path: "/cat",
        name: "Cat",
        component: () => import("@/views/components/cat/index.vue"),
      },
      {
        path: "/hole",
        name: "Hole",
        component: () => import("@/views/components/hole/index.vue"),
      },
    ],
    meta: {
      title: "layout",
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
