import { message } from "ant-design-vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
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
    redirect: "/blog",
    children: [
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/views/components/blog/index.vue"),
      },
      {
        path: "/jokes",
        name: "Jokes",
        component: () => import("@/views/components/home/index.vue"),
      },
      {
        path: "/hole",
        name: "Hole",
        component: () => import("@/views/components/hole/index.vue"),
      },
      {
        path: "/game",
        name: "Game",
        component: () => import("@/views/components/game/index.vue"),
      },
      // {
      //   path: "/cat",
      //   name: "Cat",
      //   component: () => import("@/views/components/cat/index.vue"),
      // },
    ],
    meta: {
      title: "layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//全局前置路由守卫
router.beforeEach((to, from, next) => {
  const userInfo = localStorage.getItem("userInfo");
  if (to.name !== "Login") {
    if (userInfo) {
      next();
    } else {
      message.info("大兄弟，登陆一下先");
      console.log(userInfo, router);
      router.push("/login");
    }
  } else {
    next();
  }
});
export default router;
