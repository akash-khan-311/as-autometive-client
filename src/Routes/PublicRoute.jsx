import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Home/AddProduct/AddProduct";
import MyCart from "../Pages/Home/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Toyota from "../Pages/Toyota/Toyota";
import Ford from "../Pages/Ford/Ford";
import BMW from "../Pages/BMW/BMW";
import Marcedez from "../Pages/Marcedez/Marcedez";
import Tesla from "../Pages/Tesla/Tesla";
import Honda from "../Pages/Honda/Honda";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  { path: "*", element: <div>Error</div> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/brands.json") },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/toyota",
        element: <Toyota />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/toyota/advertisement"),
      },
      { path: "/ford", element: <Ford /> },
      { path: "/bmw", element: <BMW /> },
      { path: "/marcedes", element: <Marcedez /> },
      { path: "/honda", element: <Honda /> },
      { path: "/tesla", element: <Tesla /> },
    ],
  },
]);
export default Router;
