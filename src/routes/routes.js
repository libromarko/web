import { lazy } from 'react';

const routes = [
    {
      path: 'dashboard',
      component: lazy(() => import('../pages/Dashboard')),
      exact: true,
    },
    {
      path: 'account',
      component: lazy(() => import('../pages/Account')),
      exact: true,
    },
  ];
  
  export default routes;