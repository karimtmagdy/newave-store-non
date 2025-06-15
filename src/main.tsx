import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/services/config/axios/global-axios";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import {QueryClientProvider, QueryClient, }from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
 
const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Toaster />
    <App />
     <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </StrictMode>,
);
