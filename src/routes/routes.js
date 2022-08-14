import { lazy } from 'react';

const routes = [
    {
      path: 'dashboard',
      component: lazy(() => import('../pages/Dashboard')),
      exact: true,
    },
  ];
  
  export default routes;