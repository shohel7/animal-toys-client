import React from "react";

const ToysGallery = () => {
  return (
    <div className="my-20 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-playFair font-semibold text-[#345A5B]">
          Toys Gallery
        </h2>
        <p className="text-sm md:text-base mt-5 md:w-1/2 mx-auto font-sans">
          TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine.
          Today we want to expand & we moved part of our collection to Venice,
          Italy. Most of the artworks from our collection presented at ARTSY
          already located in EU
        </p>
      </div>
      <div className="mt-7">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex flex-col md:flex-row md:w-1/2 flex-wrap">
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="md:w-1/2 p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/LkHjf9f/parrot-1.jpg"
              />
            </div>
            <div
              data-aos="flip-up"
              data-aos-duration="2000"
              className="md:w-1/2 p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Z1s9f7K/cat.jpg"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="md:w-full p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/5YFyK3H/dog.jpg"
              />
            </div>
          </div>
          <div className="flex md:w-1/2 flex-wrap">
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="md:w-full p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/yFDjB6S/Squirrel.jpg"
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="md:w-1/2 p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/71MW8Mw/hors.jpg"
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="md:w-1/2 p-1 md:p-2"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/jD4z7b6/teddy.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
