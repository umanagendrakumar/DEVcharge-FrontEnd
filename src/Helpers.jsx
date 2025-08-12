import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PublicOnlyRoute({ children }) {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  return user
    ? <Navigate to={location.state?.from || "/feed"} replace />
    : children;
}

export function PrivateRoute() {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  return user
    ? <Outlet />
    : <Navigate to="/auth" state={{ from: location.pathname }} replace />;
}


