import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/PublicRoute.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AuthProvider from "./Context/AuthProvider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
