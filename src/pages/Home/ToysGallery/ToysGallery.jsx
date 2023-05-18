import React from "react";
import galleryImg1 from "../../../assets/images/gallery/parrot-1.jpg";
import galleryImg2 from "../../../assets/images/gallery/cat.jpg";
import galleryImg3 from "../../../assets/images/gallery/teddy.jpg";
import galleryImg4 from "../../../assets/images/gallery/dog.jpg";
import galleryImg5 from "../../../assets/images/gallery/Squirrel.jpg";
import galleryImg6 from "../../../assets/images/gallery/teddy-1.jpg";
import galleryImg7 from "../../../assets/images/gallery/hors.jpg";

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
                src={galleryImg1}
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
                src={galleryImg2}
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
                src={galleryImg4}
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
                src={galleryImg5}
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
                src={galleryImg7}
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
                src={galleryImg3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
