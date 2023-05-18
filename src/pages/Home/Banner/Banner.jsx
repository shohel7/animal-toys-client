import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import slider1 from "../../../assets/images/hero-1.jpg";
import slider2 from "../../../assets/images/hero-2.jpg";
import slider3 from "../../../assets/images/hero-3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fb923c",
          "--swiper-navigation-color": "#fb923c",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-bullet-inactive-color": "#FFFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-screen"
      >
        <SwiperSlide className="relative">
          <img src={slider1} alt="slider-image" />
          <div className="absolute top-10 md:top-24 left-14 md:left-24 font-playFair">
            <p className="text-white md:font-bold mb-2 md:mb-4 font-sans">
              A BEAUTIFUL PET SHOP
            </p>
            <h1 className="text-white font-semibold text-3xl md:text-6xl mb-3 md:mb-7 md:leading-snug">
              Welcome to <br />
              <span className="text-[#F29D7E] font-serif">Dog Shop</span>
            </h1>
            <p className="text-white md:w-1/2 text-sm md:text-base">
              A pet store is a retail business which sells animals and pet care
              resources to the public. A variety of animal supplies and pet
              accessories are also sold in pet shops
            </p>
            <button className="mt-5 md:mt-10 bg-[#F29D7E] hover:bg-transparent hover:text-[#F29D7E] hover:border hover:border-[#F29D7E] py-2 md:py-3 px-3 md:px-5 rounded-md text-white md:font-medium transition-all ease-in-out duration-200">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider2} alt="slider-image" />
          <div className="absolute top-10 md:top-24 left-14 md:left-24 font-playFair">
            <p className="text-white md:font-bold mb-2 md:mb-4 font-sans">
              A BEAUTIFUL PET SHOP
            </p>
            <h1 className="text-white font-semibold text-3xl md:text-6xl mb-3 md:mb-7 md:leading-snug">
              Welcome to <br />
              <span className="text-[#F29D7E] font-serif">Parrots Zone</span>
            </h1>
            <p className="text-white md:w-1/2 text-sm md:text-base">
              A pet store is a retail business which sells animals and pet care
              resources to the public. A variety of animal supplies and pet
              accessories are also sold in pet shops
            </p>
            <button className="mt-5 md:mt-10 bg-[#F29D7E] hover:bg-transparent hover:text-[#F29D7E] hover:border hover:border-[#F29D7E] py-2 md:py-3 px-3 md:px-5 rounded-md text-white md:font-medium transition-all ease-in-out duration-200">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider3} alt="slider-image" />
          <div className="absolute top-10 md:top-24 left-14 md:left-24 font-playFair">
            <p className="text-white md:font-bold mb-2 md:mb-4 font-sans">
              A BEAUTIFUL PET SHOP
            </p>
            <h1 className="text-white font-semibold text-3xl md:text-6xl mb-3 md:mb-7 md:leading-snug">
              Welcome to <br />
              <span className="text-[#F29D7E] font-serif">Cats Park Shop</span>
            </h1>
            <p className="text-white md:w-1/2 text-sm md:text-base">
              A pet store is a retail business which sells animals and pet care
              resources to the public. A variety of animal supplies and pet
              accessories are also sold in pet shops
            </p>
            <button className="mt-5 md:mt-10 bg-[#F29D7E] hover:bg-transparent hover:text-[#F29D7E] hover:border hover:border-[#F29D7E] py-2 md:py-3 px-3 md:px-5 rounded-md text-white md:font-medium transition-all ease-in-out duration-200">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
