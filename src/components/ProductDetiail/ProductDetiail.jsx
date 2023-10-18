import { Button } from "@material-tailwind/react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

const ProductDetiail = () => {
  const product = useLoaderData();
  const { brandName, name, price, rating, type, _id, image, description } =
    product[0];
  console.log(product);
  return (
    <div>
      <NavMenu />
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center">
          {name}
        </h1>
        <div className=" my-10 md:mb-16 lg:mb-28 px-3 lg:px-0">
          <div>
            <div className="relative  w-full  flex-row rounded-xl backdrop-blur-sm bg-white/20  bg-clip-border text-gray-700 shadow-md">
              <div className="relative h-[80vh] m-0 overflow-hidden text-gray-700   shrink-0 rounded-xl bg-clip-border">
                <img src={image} alt="image" className=" w-full h-full" />
              </div>
              <div className="p-6 text-white">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-deep-orange-400 uppercase">
                  Type: {type}
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
                  {name}
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold my-2">
                      Brand:{brandName}
                    </p>
                    <p className="text-xl text-red-600 font-semibold my-2">
                      Price: $ {price}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">Ratings: {rating}</p>
                  </div>
                </div>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">
                  {description}
                </p>
                <div className="flex justify-center ">
                 
                    <Button className="w-full" color="blue">
                     ADD To cart
                    </Button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetiail;
