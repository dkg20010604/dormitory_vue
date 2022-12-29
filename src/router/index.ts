import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //登陆页面路由
    {
      //路由地址，显示在url中
      path: "/",
      //路由名字(随便起名，不要重复，传参数可能用到)
      name: "Home",
      //导入页面
      component: () => import('../Page/LoginPage/index.vue'),
    },
    //老师导航页路由
    {
      path: "/Teacher:id",
      name: "TeacherPage",
      component: () => import('../Page/TeacherPage/index.vue'),
      //主页面的子页面，path要加上主页面main前缀
      //子页面可加多个，子页面中也可以加子页面
      children: [
        //老师功能路由
      ]
    },
    //学生导航页路由
    {
      path: "/Student:id",
      name: "StudentPage",
      component: () => import('../Page/StudentPage/index.vue'),
      //主页面的子页面，path要加上主页面main前缀
      //子页面可加多个，子页面中也可以加子页
      children: [
        //学生功能路由
      ]
    },
    //后勤导航路由
    {
      path: "/Logistic:id",
      name: "LogisticsPage",
      component: () => import('../Page/LogisticsPage/index.vue'),
      //主页面的子页面，path要加上主页面main前缀
      //子页面可加多个，子页面中也可以加子页面
      children: [
        //后勤功能路由
        {
          path:'/Logistic:id/EmployeeManagement',
          name:'Employee',
          component:()=>import('../Page/LogisticsPage/components/MainPage/EmployeeManagement.vue')
        },
        {
          path:'/Logistic:id/ToDoList',
          name:'ToDoList',
          component:()=>import('../Page/LogisticsPage/components/MainPage/ToDoList.vue')
        },
      ]
    }
  ],
});

export default router;
