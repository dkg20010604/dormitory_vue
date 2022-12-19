import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ()=>import('../Page/LoginPage/index.vue'),
    },
    {
      path:"/main",
      name:"mainpage",
      component:()=>import('../Page/MainPage/index.vue')
    }
  ],
});

export default router;
