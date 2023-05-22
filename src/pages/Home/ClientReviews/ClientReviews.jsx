import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import testimonialImg from "../../../assets/images/testimonial-image.png";
import { FaQuoteRight } from "react-icons/fa";

const ClientReviews = () => {
  const Quotes = [
    {
      id: "1",
      quote:
        "Just wanted to let you know how blessed I have been to have you guys care for me over the past few years",
      name: "John Smith",
      subCategory: "Dog",
    },
    {
      id: "2",
      quote:
        "We love bring lexi to animal toys! The staff is always so friendly and it's so convenient for our busy schedules!",
      name: "John Doe",
      subCategory: "Cat",
    },
    {
      id: "3",
      quote:
        "My Toys is spoiled rotten and needs a lot of human interaction which he always receives. Animal Toys is the best!",
      name: "John Smith",
      subCategory: "Teddy Bear",
    },
  ];
  return (
    <div className="lg:w-full mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-4xl font-playFair font-semibold text-[#345A5B]">
          Client Review
        </h2>
        <p className="text-sm md:text-base mt-5 md:w-1/2 mx-auto font-sans">
          TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine.
          Today we want to expand & we moved part of our collection to Venice,
          Italy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 bg-emerald-50 md:h-[550px] px-10">
        <div>
          <img
            className="md:max-w-lg"
            src={testimonialImg}
            alt="testimonial-image"
          />
        </div>
        <div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#fb923c",
              "--swiper-navigation-color": "#ECFDF5",
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
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper md:h-screen"
          >
            <div>
              {Quotes.map((quote) => (
                <SwiperSlide
                  className="flex items-center mt-10"
                  key={quote?.id}
                >
                  <div className="flex flex-col items-center md:items-start gap-10 py-10">
                    <FaQuoteRight className="text-7xl text-[#F29D7E] h-24 w-24" />
                    <p className="text-[#345A5E] md:font-semibold text-lg md:text-xl font-playFair text-center md:text-left">
                      {quote?.quote}
                    </p>
                    <span className="text-center md:text-left">
                      <h2 className="text-[#F29D7E] text-lg md:font-semibold uppercase">
                        {quote?.name}
                      </h2>
                      <h3 className="text-[#345A5E] text-lg md:font-semibold">
                        {quote?.subCategory}
                      </h3>
                    </span>
                    <button className="py-2.5 w-32 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer">
                      View More
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
