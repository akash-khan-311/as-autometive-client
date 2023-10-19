import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";
import Cotnact from "../../components/Contact/Cotnact";
import GetInTouch from "../../components/GetinTouch/GetInTouch";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Brands brands={brands} />
        <Cotnact />
      </div>
      <GetInTouch />
    </div>
  );
};

export default Home;
