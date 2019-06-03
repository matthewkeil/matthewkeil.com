import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
// import Login from '../shared/Login.vue';

export const getRouter = () => {
  Vue.use(Router);

  return new Router({
    mode: "history",
    base: process.env.APP_HOST,
    routes: [
      // {
      //   path: '/menu',
      //   name: 'Menu',
      //   component: () => import(/* webpackChunkName: "login" */ '../views/Menu.vue'),
      // },
      // {
      //   path: '/menu/newItem',
      //   name: 'NewMenuItem',
      //   component: () => import(/* webpackChunkName: "admin" */ '../views/newMenuItem.vue'),
      // },
      // {
      //   path: "/about",
      //   name: "About",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../views/About.vue")
      // },
      // {
      //   path: '/auth/register',
      //   name: 'Register',
      //   component: () => import(/* webpackChunkName: "secondary" */ '../shared/Register.vue'),
      // },
      // {
      //   path: '/auth/login',
      //   name: 'Login',
      //   component: Login,
      // },
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  });
};
