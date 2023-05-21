import React from "react";
import Banner from "../Banner/Banner";
import ToysGallery from "../ToysGallery/ToysGallery";
import ShopCategories from "../ShopCategories/ShopCategories";
import ClientReviews from "../ClientReviews/ClientReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <ToysGallery />
      <ShopCategories />
      <ClientReviews />
    </div>
  );
};

export default Home;
