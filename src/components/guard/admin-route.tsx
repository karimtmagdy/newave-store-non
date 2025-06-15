import { useAuth } from "@/context/auth-context";
import type { PropsWithChildren } from "react";
import {Navigate, useLocation,  }from 'react-router';
export default function AdminRoute({ children }: PropsWithChildren) {
    const location = useLocation();
    //   const navigate = useNavigate();
      const {   isAdmin ,isAuthenticated  } = useAuth();
    // const from = location.state?.from?.pathname || "/admin";
    if (isAuthenticated && !isAdmin)
      return <Navigate to="/forbidden" state={{ from: location }} replace/>;
  if (!isAuthenticated) 
    return <Navigate to="/unauthorized" state={{ from: location }} replace/>
  return children;
}
