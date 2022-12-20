import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../Page/LoginPage/index.vue'),
    },
    {
      path: "/main",
      name: "mainpage",
      component: () => import('../Page/MainPage/index.vue'),
      //主页面的子页面，path要加上主页面main前缀
      //子页面可加多个，子页面中也可以加子页面
      children: [
        {
          path: '/main/persenpage',
          name: '',
          component: () => import('页面路径'),
          children:[]
        },
      ]
    }
  ],
});

export default router;
