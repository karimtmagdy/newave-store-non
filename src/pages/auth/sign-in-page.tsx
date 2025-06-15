import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { API_FORGOT_PASSWORD, } from "@/services/constant/api-url";
import { useAuth } from "@/context/auth-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type TLogin } from "@/services/validator/auth-validate";
import HavAccount from "./hav-account";
export default function SignInPage() {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });
  // if (isAuthenticated && user) return <div>Already logged in</div>;

  const onSubmit = (data: TLogin) => {
    signin(data.email as string, data.password as string);
  };
  return (
    <Card className="mx-auto max-w-sm md:min-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to={API_FORGOT_PASSWORD}
                className="ml-auto text-sm underline-offset-2 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              {...register("password")}
              placeholder="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <HavAccount />
        </form>
      </CardContent>
    </Card>
  );
}
