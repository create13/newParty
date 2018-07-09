import Vue from 'vue';
import Router from 'vue-router';
import childs from './routers.js';
const Main = () => import('@/views/main');
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
      component: () => import('@/views/login')
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: childs
    },
    // 404
    {
      path: '*',
      component: Main
    }
  ]
});
