import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Brands brands={brands} />
      </div>
    </div>
  );
};

export default Home;
