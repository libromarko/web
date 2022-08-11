import { lazy } from "react";

export const routes = [
  {
    path: "/u/",
    component: lazy(() => import("../pages/Dashboard/Dashboard")),
    exact: true,
  },
];
