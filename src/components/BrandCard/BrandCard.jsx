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
      <Card className="text-white backdrop-blur-sm bg-white/20">
        <CardHeader color="blue-gray" className="m-0 cursor-pointer ">
          <img
            className="hover:scale-110 overflow-hidden duration-1000"
            src={brand_image}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" className="mb-2 text-center">
            {brand_name}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 text-center ">
          <Link to={`/${brand_name.toLowerCase()}`}>
            <Button color="blue" className="w-full">
              See product
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BrandCard;
