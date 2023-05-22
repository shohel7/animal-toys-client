import React from "react";
import Banner from "../Banner/Banner";
import ToysGallery from "../ToysGallery/ToysGallery";
import ShopCategories from "../ShopCategories/ShopCategories";
import ClientReviews from "../ClientReviews/ClientReviews";
import ToysBlog from "../ToysBlog/ToysBlog";

const Home = () => {
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
