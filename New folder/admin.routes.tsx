// import ForbiddenPage from "@/components/private/ForbiddenPage";
import { lazy } from "react";
import AdminLayout from "@/layout/admin-layout";


// const AnalyticsPage = lazy(() => import("@/pages/settings/AnalyticsPage"));
// const AppearancePage = lazy(() => import("@/pages/settings/AppearancePage"));
// const IntegrationsPage = lazy(() => import("@/pages/settings/IntegrationsPage"));
// const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));
// const AdminLayout = lazy(() => import("@/layout/AdminLayout"));
// const AdminLayout = lazy(() => import("@/layout/AdminLayout"));
// const AdminLayout = lazy(() => import("@/layout/AdminLayout"));
const OverviewPage = lazy(() => import("@/pages/admin/overview/overview-page"));
const DashboardPage = lazy(
  () => import("@/pages/admin/dashboard/dashboard-page"),
);


const UpdateCategory = lazy(
  () => import("@/pages/admin/category/update/update-category"),
);

// const UpdateProduct = lazy(() => import("@/pages/admin/product/[id]/UpdateProduct"));


// const UpdateMember = lazy(() => import("@/pages/admin/member/[id]/UpdateMember"));
//

// const UpdateBrand = lazy(() => import("@/pages/admin/brand/[id]/UpdateBrand"));

// const SubCategoryPage = lazy(() => import("@/pages/admin/subcategory/SubCategoryPage"));
// const UpdateSubcategory = lazy(() => import("@/pages/admin/subcategory/[id]/UpdateSubcategory"));
// const AddSubcategory = lazy(() => import("@/pages/admin/subcategory/[id]/AddSubcategory"));


export const admin = {
  path: "admin",

  Component: AdminLayout,

  children: [
    { index: true, element: <OverviewPage /> },
    { path: "dashboard", element: <DashboardPage /> },
    // { path: "analytics", element: <AnalyticsPage /> },





    {
      path: "subcategories",
      // element: <SubCategoryPage />,

    },
    // { path: "add-subcategory", element: <AddSubcategory /> },
    // { path: "add", element: <AddSubcategory /> },
    // { path: "appearance", element: <AppearancePage /> },
    // { path: "settings", element: <SettingsPage /> },
    // { path: "integrations", element: <IntegrationsPage /> },
    // { path: "add", element: <AddSubcategory /> },
  ],
}
// { path: "orders", element: <OrdersPage/> },
// { path: "order/:id", element: <OrderPage/> },
// { path: "order/:id/edit", element: <EditOrderPage/> },
// { path: "order/:id/cancel", element: <CancelOrderPage/> },
// { path: "best-sellers", element: <OrdersPage/> },

// { path: "reports", element: <GetReportsPage/> },

//
// { path: "notifications", element: <GetNotificationsPage/> },
// { path: "support", element: <GetSupportPage/> },
// { path: "support/:id", element: <GetSupportPage/> },
// { path: "support/:id/edit", element: <GetSupportPage/> },
// { path: "support/:id/reply", element: <GetSupportPage/> },
// { path: "support/:id/close", element: <GetSupportPage/> },

// { path: "payments", element: <PaymentsPage/> },
// { path: "charts", element: <ChartsPage/> },
// { path: "sales", element: <SalesPage/> },
// { path: "shipping", element: <ShippingPage/> },
// { path: "reports", element: <ReportsPage/> },
// { path: "checkout", element: <CheckoutPage/> },
// { path: "cart", element: <CartPage/> },
// { path: "reviews", element: <ReviewsPage/> },
// { path: "customers", element: <CustomerPage/> },
