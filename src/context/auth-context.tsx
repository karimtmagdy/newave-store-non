import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import axios from "axios";
import { type JwtPayload, jwtDecode } from "jwt-decode";
import {
  allowedRoles,
  type AccessRole,
  type AuthContextType,
  type DecodedToken,
  type TUserType,
} from "@/types/TUser";
import { API_ME, API_SIGNIN, API_SIGNOUT, API_SIGNUP } from "@/services/constant/api-url";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
} as AuthContextType);
const Provider = AuthContext.Provider;
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUserType | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Check if token is expired
  // const isTokenExpired = (token:DecodedToken):boolean => {
  //   if (!token) return true;
  //   try {
  //     const decoded = jwtDecode<JwtPayload>(token);
  //     if(!decoded) return true;
  //     return decoded.exp < Date.now() / 1000;
  //   } catch (err) {
  //     return true;
  //   }
  // };

  const signup = async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => {
    const credentials = { username, email, password, confirm_password };
    try {
      const response = await axios.post(API_SIGNUP, credentials);
      const { data, status } = response;
      if (status === 200) {
        toast.success(data.message);
        navigate(API_SIGNIN);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      // console.log(err.response.data.error.errors);
      console.log(err.response.data.message);
    }
  };
  const signin = async (email: string, password: string) => {
    const credentials = { email, password };
    try {
      const response = await axios.post(API_SIGNIN, credentials);
      const { data, status } = response;
      const { token: newToken, user: userData } = response.data;
      if (status === 200) {
        const decoded = jwtDecode(newToken);
        setUser(decoded as TUserType);
        setAccessToken(newToken);
        const parsedUser = JSON.stringify(userData);
        const parsedToken = JSON.stringify(newToken);
        localStorage.setItem("user", parsedUser);
        localStorage.setItem("token", parsedToken);
        toast.success(data.message);
        if (allowedRoles.includes(userData?.role as AccessRole)) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      console.log(err.response.data.message);
    }
  };
  const isTokenExpired = (token: string) => {
    try {
      if (!token) return true;
      const decoded = jwtDecode<DecodedToken>(token);
      if (!decoded.exp) return false;
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('current time', new Date(currentTime * 1000).toLocaleString())
      console.log('expiration time', new Date(decoded.exp * 1000).toLocaleString())
      return decoded.exp < currentTime;
    } catch (err) {
      console.error("Error decoding token:", err);
      return true;
    }
  }
  // FUNCTION GET USER INFO HIM SELF 
  const getMe = async () => {
    try {
      const response = await axios.get(API_ME);
      setUser(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      throw err;
    }
  };
  // FUNCTION TO LOGOUT USER
  const signout = async () => {
    try {
      if (accessToken && isTokenExpired(accessToken)) {
        await axios.post(API_SIGNOUT, {});
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate(API_SIGNIN);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      throw err;

    }
  }
  // CHECK USER AND TOKEN
  useLayoutEffect(() => {

    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      const parsedToken = JSON.parse(storedToken);
      setUser(parsedUser);
      setAccessToken(parsedToken);
    }
  }, [])
  const contextValue = useMemo(() => {
    return {
      user,
      isAuthenticated: !!accessToken && !!user,
      token: accessToken,
      isAdmin: allowedRoles.includes(user?.role as AccessRole),
      signup,
      signin,
      signout
    };
  }, [user, accessToken]);

  return <Provider value={contextValue}>{children}</Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context as AuthContextType;
};
