import React from "react";
import BrandCard from "../BrandCard/BrandCard";

const Brands = ({ brands }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-5 text-white italic">
        Our Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-5 md:px-0">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
