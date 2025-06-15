import { lazy, type JSX } from "react";
const AdminLayout = lazy(() => import("@/layout/admin-layout"));
// import AdminRoute from "@/components/guard/admin-route";
import BrandsPage from "@/pages/admin/brand/brands-page"
import AddBrand from "@/pages/admin/brand/add/add-brand"
import CategoriesPage from "@/pages/admin/category/categories-page"
import AddCategory from "@/pages/admin/category/add/add-category"
import ProductsPage from "@/pages/admin/product/products-page"
import AddProduct from "@/pages/admin/product/add/add-product"
import MembersPage from "@/pages/admin/member/members-page"
import AddMember from "@/pages/admin/member/add/add-member"
const AdminProtectedRoute = () => (
    // <AdminRoute>
    <AdminLayout />
    // </AdminRoute>  
);
export const admin = {
    path: "admin", Component: AdminProtectedRoute,
    children: [
        { path: "categories", element: <CategoriesPage /> },
        { path: "add-category", element: <AddCategory /> },
        { path: "brands", element: <BrandsPage /> },
        { path: "add-brand", element: <AddBrand /> },
        { path: "products", element: <ProductsPage /> },
        { path: "add-product", element: <AddProduct /> },
        { path: "members", element: <MembersPage /> },
        { path: "add-member", element: <AddMember /> },
    ]
} as { children: { path: string; element: JSX.Element }[] };