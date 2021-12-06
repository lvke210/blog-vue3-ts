import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },
  {
    path: "/",
    name: "Home",
    component: () => import("@/layout/index.vue"),
    children: [
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
