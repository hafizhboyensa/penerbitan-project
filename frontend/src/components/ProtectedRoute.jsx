import { Navigate } from "react-router-dom";
import { getHomePath } from "../utils/roles";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user) return <Navigate to="/login" replace />;          // belum login
  if (allowedRoles && !allowedRoles.includes(user.role)) {      // role tidak cocok
    return <Navigate to={getHomePath(user.role)} replace />;
  }
  return children;
};

export default ProtectedRoute;