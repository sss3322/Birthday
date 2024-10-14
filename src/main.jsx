import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";;
import router from "./router";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" duration={500} />
  </StrictMode>
);
