import React from "react";
import "./Banner.css";
import NavMenu from "../NavMenu/NavMenu";
const Banner = () => {
  return (
    <div className="banner">
      <NavMenu />
      <div className="container mx-auto">
        <div className="text-white py-5 h-[50vh] md:h-[60vh] lg:h-[95vh]   flex items-center w-full md:w-3/4 ">
          <div className="space-y-5 px-5 lg:px-0 text-center md:text-left ">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold "
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Your Journey, Our Expertise: Automotive Excellence Await
            </h1>
            <p
              className="text-lg"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="850"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Our commitment to automotive excellence is unwavering. We've
              dedicated ourselves to creating automotive solutions that surpass
              expectations and redefine the industry's standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
