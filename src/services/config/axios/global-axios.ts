// const logicalRefreshToken = () => {};
import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import axiosRetry from "axios-retry";
import { SetupInterceptor } from "./setup-interceptor";

const logicalRetry = {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
};
axiosRetry(axios, logicalRetry);

const isProduction = import.meta.env.MODE === "production";
if (isProduction) axios.defaults.baseURL = import.meta.env.VITE_API_PROACTION;
else axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const DEFAULT_TIMEOUT = 3000;
axios.defaults.withCredentials = false;
axios.defaults.timeout = DEFAULT_TIMEOUT;
const api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
// Add authentication token if available
api.interceptors.request.use(
  // Add authentication token
  async (config: InternalAxiosRequestConfig) => {
    // const { token } = useAuth();
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error("Request error config:", error);
    Promise.reject(error);
  },
);
// const authInterceptor = (config: InternalAxiosRequestConfig) => config;
api.interceptors.response.use((response: AxiosResponse) => response);
SetupInterceptor(api);
export default api;
