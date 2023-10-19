import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";
import Cotnact from "../../components/Contact/Cotnact";
import GetInTouch from "../../components/GetinTouch/GetInTouch";
import { Helmet } from "react-helmet";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
