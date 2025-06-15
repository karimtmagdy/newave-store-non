
import { Outlet } from "react-router";
const RootLayout = () => {
  return (
    // <CategoryProvider>
    //  <AuthProvider>
    <Outlet />
    //  </AuthProvider>
    //  </CategoryProvider>
  );
};
export default RootLayout;
