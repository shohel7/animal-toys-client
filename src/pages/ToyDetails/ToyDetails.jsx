import React from "react";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const {
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    imageUrl,
    description,
  } = useLoaderData();
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto mt-10">
      <div>
        <Link
          to={-1}
          className="py-2 w-24 text-white bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out cursor-pointer rounded-md mb-2.5 flex items-center justify-center gap-3"
        >
          <FaArrowLeft /> <span className="font-bold">BACK</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 col-span-4">
          <img
            className="max-h-80 w-full rounded-md"
            src={imageUrl}
            alt="toy-image"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-3xl font-serif mb-8 ">Toy Name: {toyName}</h2>
          <div className="flex flex-col space-y-4">
            <p>
              <span className="font-bold">Seller Name:</span> {sellerName}
            </p>
            <p>
              {" "}
              <span className="font-bold">Seller Email:</span> {sellerEmail}
            </p>
            <p>
              {" "}
              <span className="font-bold">Sub Category:</span> {subCategory}
            </p>
            <p>
              {" "}
              <span className="font-bold">Price:</span> ${price}
            </p>
            <p>
              {" "}
              <span className="font-bold">Available Quantity: </span>
              {availableQuantity}
            </p>
            <span className="flex items-center gap-3">
              <span className="font-bold">Rating:</span>
              <Rating
                className="mt-2.5"
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar className="text-lg" />}
                placeholderSymbol={<FaStar className="text-warning text-lg" />}
                fullSymbol={<FaStar className="text-lg" />}
              />
              <span className="font-bold">({rating})</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
