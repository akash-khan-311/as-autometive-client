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
import ProductDetiail from "../components/ProductDetiail/ProductDetiail";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";

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
        loader: () => fetch("https://as-automitive-server.vercel.app/products"),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/toyota",
        element: <Toyota />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/toyota/advertisement"),
      },
      {
        path: "/ford",
        element: <Ford />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/ford/advertisement"),
      },
      {
        path: "/bmw",
        element: <BMW />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/bmw/advertisement"),
      },
      {
        path: "/mercedes",
        element: <Marcedez />,
        loader: () =>
          fetch(
            "https://as-automitive-server.vercel.app/mercedes/advertisement"
          ),
      },
      {
        path: "/honda",
        element: <Honda />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/honda/advertisement"),
      },
      {
        path: "/tesla",
        element: <Tesla />,
        loader: () =>
          fetch("https://as-automitive-server.vercel.app/tesla/advertisement"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetiail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://as-automitive-server.vercel.app/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://as-automitive-server.vercel.app/details/${params.id}`),
      },
    ],
  },
]);
export default Router;
