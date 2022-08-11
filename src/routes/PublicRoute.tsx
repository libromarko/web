import { Outlet, Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
}

function PublicRoute({ isAuthenticated }: Props) {
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/u/",
      }}
    />
  );
}

export default PublicRoute;
