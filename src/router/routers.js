let childs = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main')
  },
  {
    path: '/opManage',
    component: () => import('@/views/opManage')
  },
  {
    path: '/opConfig',
    component: () => import('@/views/opConfig')
  }
];
export default childs;
