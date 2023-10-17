import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Home/AddProduct/AddProduct";
import MyCart from "../Pages/Home/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
  { path: "*", element: <div>Error</div> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addproduct", element: <AddProduct /> },
      { path: "/mycart", element: <MyCart /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
export default Router;
