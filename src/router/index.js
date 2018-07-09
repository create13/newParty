import Vue from 'vue';
import Router from 'vue-router';
import childs from './routers.js';
const Header = () => import('@/components/header');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'header'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
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
      component: Header
    }
  ]
});
