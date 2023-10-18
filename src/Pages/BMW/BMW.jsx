import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import NavMenu from "../../components/NavMenu/NavMenu";
import { Button } from "@material-tailwind/react";

const BMW = () => {
  const images = useLoaderData();
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://as-automitive-server.vercel.app/bmw/products")
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
              className="h-full w-full  "
            />
          </div>
        ))}
      </Slider>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 md:my-16 lg:my-28 px-3 lg:px-0">
          {products.map((product) => (
            <div>
              <div className="relative  w-full max-w-[48rem] flex-row rounded-xl backdrop-blur-sm bg-white/20  bg-clip-border text-gray-700 shadow-md">
                <div className="relative h-64 m-0 overflow-hidden text-gray-700 bg-white  shrink-0 rounded-xl bg-clip-border">
                  <img
                    src={product.image}
                    alt="image"
                    className=" w-full h-full"
                  />
                </div>
                <div className="p-6 text-white">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-deep-orange-400 uppercase">
                    Type: {product.type}
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold my-2">
                        Brand:{product.brandName}
                      </p>
                      <p className="text-xl text-red-600 font-semibold my-2">
                        Price: $ {product.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg">Ratings: {product.rating}</p>
                    </div>
                  </div>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">
                    {product.description
                      ? product.description.slice(0, 150)
                      : product.description}
                  </p>
                  <div className="flex justify-between gap-x-10">
                    <Link className="w-2/4" to={`/details/${product._id}`}>
                      <Button className="w-full" color="blue">
                        Details
                      </Button>
                    </Link>
                    <Link className="w-2/4" to={`/update/${product._id}`}>
                      <Button className="w-full" color="blue">
                        Update
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BMW;
