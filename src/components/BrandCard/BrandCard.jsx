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
          <p className="text text-6xl italic font-semibold text-white">
            {brand_name}
          </p>
          <div class="cover">
            <img className="h-full" src={brand_image} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
