import { createBrowserRouter as create, RouterProvider } from "react-router";
import RootLayout from "./layout/root-layout";
// import AdminLayout from "./layout/admin-layout";
// import AddCategory from "./pages/admin/category/add/AddCategory";
// import CategoriesPage from "./pages/admin/category/CategoriesPage";
// import Dashboard from "./app/dashboard/DashBoard";
import { admin } from "@/admin.routes";
import AuthLayout from "@/layout/auth-layout";
import SignInPage from "@/pages/auth/sign-in-page";
import SignUpPage from "@/pages/auth/sign-up-page";
import UnauthorizedPage from "@/components/private/unauthorized-page";
import ForbiddenPage from "@/components/private/forbidden-page";
import NotFoundPage from "@/components/private/not-found-page";
// import ProtectedRoute from "./components/guard/protected-route";


const router = create([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: '/forbidden', element: <ForbiddenPage /> },
      { path: '/unauthorized', element: <UnauthorizedPage /> },
      { path: '*', element: <NotFoundPage /> },
      {
        path: 'auth', element: <AuthLayout />, children: [
          { path: 'sign-in', element: <SignInPage /> },
          { path: 'sign-up', element: <SignUpPage /> }
        ]
      },
      admin
    ],
  },
]);

const RouterApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterApp;
