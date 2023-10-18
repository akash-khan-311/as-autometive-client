import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
const Toyota = () => {
  const [products, setProducts] = useState(null);
  const images = useLoaderData();

  useEffect(() => {
    fetch("https://as-automitive-server.vercel.app/toyota/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
          <div className="h-[30vh] md:h-[40vh] lg:h-[60vh] w-full">
            <img
              src={image.image}
              alt="image 1"
              className="h-full w-full object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Toyota;
