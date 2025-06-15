import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  //  className="auth-form bg-background w-full p-4"
  return (
    <section className="flex h-dvh flex-col items-center justify-center">
      <Outlet />
      <div className="text-muted-foreground *:[a]:hover:text-primary mt-2 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        <p className="">By clicking continue, you agree to our</p>
        <Link to={"/settings/terms"} className="underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to={"/settings/privacy-policy"} className="underline">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
};

export default AuthLayout;
