import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategories = () => {
  return (
    <div className="mb-20 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-playFair font-semibold text-[#345A5B]">
          Shop By Categories
        </h2>
        <p className="text-sm md:text-base mt-5 md:w-1/2 mx-auto font-sans">
          TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine.
          Today we want to expand & we moved part of our collection to Venice,
          Italy.
        </p>
      </div>
      <div>
        <Tabs>
          <TabList className="flex justify-center gap-5 items-center font-playFair pt-10 pb-14">
            <Tab className="bg-[#F29D7E] py-3 px-5 rounded-sm text-white text-lg font-semibold cursor-pointer">
              Dogs
            </Tab>
            <Tab className="bg-[#F29D7E] py-3 px-5 rounded-sm text-white text-lg font-semibold cursor-pointer">
              Cats
            </Tab>
            <Tab className="bg-[#F29D7E] py-3 px-5 rounded-sm text-white text-lg font-semibold cursor-pointer">
              Teddy Bears
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full"
                    src="https://i.ibb.co/kGGyP2d/dog-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dogs Toys</h2>
                  <div className="flex justify-between my-5">
                    <span>Price: $108</span>
                    <span>Rating: *******</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Cats</h2>
          </TabPanel>
          <TabPanel>
            <h2>Teddy Bears</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategories;
