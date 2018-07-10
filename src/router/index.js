import Vue from 'vue';
import Router from 'vue-router';
import childs from './routers.js';
const Header = () => import('@/components/header');
const Login = () => import('@/views/login');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'main'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
      children: childs
    },
    // 404
    {
      path: '*',
      component: Login
    }
  ]
});
