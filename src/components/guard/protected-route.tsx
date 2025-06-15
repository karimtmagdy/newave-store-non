import { useAuth } from "@/context/auth-context";
import type { PropsWithChildren } from "react";
import { Navigate, useNavigate } from "react-router";

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const { user ,isAuthenticated} = useAuth();
  const navigate = useNavigate();
  console.log(isAuthenticated )
  if (isAuthenticated) return <Navigate to="/" replace />;
  return children;
}
// if (userIsLoggedIn && user.isVerified) {
//   return <Outlet />;
// } else {
//   return <Navigate to="/verify-account" />;
// }