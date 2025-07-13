import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PublicOnlyRoute({ children }) {
  const user = useSelector((store) => store.user);
  return user ? <Navigate to="/feed" /> : children;  
}
