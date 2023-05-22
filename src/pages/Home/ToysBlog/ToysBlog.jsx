import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ToysBlog = () => {
  const blogs = [
    {
      id: "1",
      img: "https://i.ibb.co/vPKWTVj/teddy.webp",
      title: "10+ Benefits of Giving Personalised Teddy Bears",
      date: "April 21, 2022",
      description:
        "Stuffed animals have always been a popular item for children and adults alike. They are soft, and cuddly, and provide comfort to people of all ages. Many people have collections",
    },
    {
      id: "2",
      img: "https://i.ibb.co/Y2YGS79/dog.webp",
      title: "The Best Interactive Dog Toys: Why collaborative play",
      date: "May 21, 2022",
      description:
        "Banish boredom and unleash unmatched confidence, engagement & joy with interactive play. Meet the toys set to power up your play and tap into a world of fun.",
    },
    {
      id: "3",
      img: "https://i.ibb.co/nmZdMyK/cat.jpg",
      title: "The 19 Best Cat Toys in Every Style, for Every Kind of Cat",
      date: "December 05, 2023",
      description:
        "nteractive cat toys come in a variety of shapes and sizes. Some require cat parent involvement (like wands and hand-held lasers), while others, like cat track toys, are safe for kitties to play with on their own.",
    },
  ];
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto pt-20">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-4xl font-playFair font-semibold text-[#345A5B]">
          Our Toys Blog
        </h2>
        <p className="text-sm md:text-base mt-5 md:w-1/2 mx-auto font-sans">
          TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine.
          Today we want to expand & we moved part of our collection to Venice,
          Italy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-72 w-full transform 
                      transition duration-1000 hover:scale-125"
                src={blog?.img}
                alt="toy-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{blog?.title}</h2>

              <span className="text-[#345A5B] font-bold text-sm">
                {blog?.date}
              </span>

              <span className="flex items-center gap-3">
                <span className="text-slate-600">
                  {blog?.description.slice(0, 95) + " ..."}
                </span>
              </span>
            </div>
            <div className="card-actions flex justify-end px-10 pb-5">
              <button className="w-36 py-2.5 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer">
                <span className="flex items-center justify-center gap-3">
                  <span>Read More</span> <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysBlog;
