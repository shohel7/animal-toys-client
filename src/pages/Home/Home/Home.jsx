import React from "react";
import Banner from "../Banner/Banner";
import ToysGallery from "../ToysGallery/ToysGallery";
import ShopCategories from "../ShopCategories/ShopCategories";
import ClientReviews from "../ClientReviews/ClientReviews";
import ToysBlog from "../ToysBlog/ToysBlog";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ToysGallery />
      <ShopCategories />
      <ClientReviews />
      <ToysBlog />
    </div>
  );
};

export default Home;
