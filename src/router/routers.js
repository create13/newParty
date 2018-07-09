let childs = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main')
  },
  {
    path: '/seconds',
    component: () => import('@/views/seconds')
  },
  {
    path: '/myDesk',
    component: () => import('@/views/myDesk')
  }
];
export default childs;
