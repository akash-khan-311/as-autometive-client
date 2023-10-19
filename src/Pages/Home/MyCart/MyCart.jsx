import React, { useState } from "react";
import NavMenu from "../../../components/NavMenu/NavMenu";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://as-automitive-server.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingProducst = products.filter((pr) => pr._id !== _id);
              setProducts(remainingProducst);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>My Cart</title>
      </Helmet>
      <NavMenu />
      <div className="container mx-auto mt-10">
        <div className="flex flex-col gap-5 lg:flex-row shadow-md my-10">
          <div className="w-full lg:w-3/4 backdrop-blur-lg bg-white/20 rounded-lg px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-white">
                Shopping Cart
              </h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-white text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-white text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-white text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-white text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {products?.map((product) => (
              <div
                key={product._id}
                className="flex items-center hover:backdrop-blur-3xl hover:bg-white/10 -mx-8 px-6 py-5"
              >
                <div className="flex w-2/5">
                  {/* product */}
                  <div className="w-40">
                    <img className="h-24" src={product.image} alt />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-xl text-white">
                      {product.name}
                    </span>
                    <span className="text-red-500 text-xl">
                      {product.brandName}
                    </span>
                    <a className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-white w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    defaultValue={1}
                  />
                  <svg
                    className="fill-current text-white w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm text-white">
                  ${product.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm text-white">
                  ${product.price}
                </span>
                <span className="">
                  <button onClick={() => handleDelete(product._id)}>
                    <AiOutlineCloseCircle className="text-3xl text-red-300 hover:text-red-800" />
                  </button>
                </span>
              </div>
            ))}

            <Link
              to={"/"}
              className="flex font-semibold text-white hover:text-red-800 text-lg mt-10"
            >
              <svg
                className="fill-current mr-2 text-white  w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div
            id="summary"
            className=" px-8 py-10 backdrop-blur-lg bg-white/20 rounded-lg"
          >
            <h1 className="font-semibold text-2xl border-b pb-8 text-white">
              Order Summary
            </h1>

            <div>
              <label className="font-semibold inline-block mb-3 text-sm uppercase text-white">
                Shipping
              </label>
              <select className="block p-2 text-black w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase text-white"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <Button color="blue">Apply</Button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase text-white">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <Button color="blue" className="w-full">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
