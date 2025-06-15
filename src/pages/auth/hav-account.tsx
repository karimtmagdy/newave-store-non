import { API_SIGNIN, API_SIGNUP } from "@/services/constant/api-url"
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router"

const HavAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loc = location.pathname.includes(API_SIGNUP);
  useEffect(() => {
    if (!loc) {
      navigate(API_SIGNIN, {
        state: { form: API_SIGNUP },
      });
    } else {
      navigate(API_SIGNUP, {
        state: { form: API_SIGNIN },
      });
    }
  }, [navigate, loc]);

  return (<div className="text-center text-sm flex items-center justify-center gap-1">
    <p>{loc ? "Already" : `Don&apos;t`} have an account?</p>

    <Link to={loc ? API_SIGNIN : API_SIGNUP} className="underline underline-offset-4">
      {loc ? "Sign in" : "Sign up"}
    </Link>
  </div>)
}
export default HavAccount