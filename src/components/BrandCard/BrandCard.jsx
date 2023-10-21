import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./BrandCard.css";
import car from "../../assets/images/tesla.png";

const BrandCard = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (
    <div
      lassName="text-4xl md:text-5xl lg:text-6xl font-semibold "
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Link to={`/${brand_name.toLowerCase()}`}>
        <div class="book backdrop-blur-lg bg-white/20">
          <div className="flex flex-col ">
            <h2 className="text text-6xl italic font-semibold text-white text-center mt-28">
              {brand_name}
            </h2>
            <img
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="550"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="my-0 py-0"
              src={car}
              alt=""
            />
          </div>
          <div class="cover">
            <img className="h-full" src={brand_image} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
