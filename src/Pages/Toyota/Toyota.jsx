import React from "react";
import { Carousel } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
const Toyota = () => {
  const images = useLoaderData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <div>
      <NavMenu />
      <Slider {...settings} className="rounded-xl h-[60vh]">
        {images.map((image) => (
          <div className="h-[60vh] w-full">
            <img
              src={image.image}
              alt="image 1"
              className="h-full w-full object-cover "
            />
          </div>
        ))}
      </Slider>
      <h1>kichu ekta</h1>
    </div>
  );
};

export default Toyota;
