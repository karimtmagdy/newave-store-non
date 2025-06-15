import { useAuth } from "@/context/auth-context";
import { API_SIGNIN } from "@/services/constant/api-url";
import type { PropsWithChildren } from "react";
import {  Navigate } from "react-router";
export default function PrivateRoute({ children }: PropsWithChildren) {
     const {  isAuthenticated} = useAuth();
     console.log(isAuthenticated)
  // console.log("private");
  if (!isAuthenticated) return <Navigate to={API_SIGNIN} replace />;
  return children;
}
