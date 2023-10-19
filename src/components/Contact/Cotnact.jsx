import React from "react";
import teslaCar from "../../assets/images/tesla.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cotnact = () => {
  return (
    <div className="my-20">
      <div className="text-gray-400  body-font">
        <div className="container mx-auto flex px-5  lg:flex-row flex-col items-center">
          <div className="w-full  md:mb-0 ">
            <img
              className="w-full h-full rounded"
              data-aos="fade-left"
              data-aos-duration="8000"
              data-aos-easing="ease-in-out"
              alt="hero"
              src={teslaCar}
            />
          </div>
          <div className="lg:flex-grow lg:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Get Latest TESLA In Offer
              <br className="hidden lg:inline-block" />
              and with only 5% interest
            </h1>
            <p className="mb-8 leading-relaxed">
              We accept passenger cars, trucks, vans and SUVs for trade in
              towards the purchase of a new or used Tesla vehicle. If you wish
              to trade in your vehicle, enter in the vehicle details in your
              Tesla Account before your Tesla vehicle is delivered.
            </p>
            <div className="flex justify-center gap-10">
              <Button color="blue">Get Start</Button>
              <Link to={'/register'}>
                <Button  color="red">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotnact;
