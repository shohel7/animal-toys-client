import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ShopCategories = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dogCategory, setDogCategory] = useState([]);
  const [catCategory, setCatCategory] = useState([]);
  const [teddyCategory, setTeddyCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/subCategory?subCategory=dog`)
      .then((res) => res.json())
      .then((data) => {
        setDogCategory(data);
      });
  }, [dogCategory]);

  useEffect(() => {
    fetch(`http://localhost:5000/subCategory?subCategory=cat`)
      .then((res) => res.json())
      .then((data) => {
        setCatCategory(data);
      });
  }, [catCategory]);

  useEffect(() => {
    fetch(`http://localhost:5000/subCategory?subCategory=teddyBear`)
      .then((res) => res.json())
      .then((data) => {
        setTeddyCategory(data);
      });
  }, [teddyCategory]);

  const handleDetails = (id) => {
    console.log("click on details");
    if (!user) {
      Swal.fire({
        title: "You are new user?",
        text: "You have to log in first to view details!",
        confirmButtonColor: "#345A5E",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/toy/${id}`);
        }
      });
    }
  };

  return (
    <div className="mb-20 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-playFair font-semibold text-[#345A5B]">
          Shop By Categories
        </h2>
        <p className="text-sm md:text-base mt-5 md:w-1/2 mx-auto font-sans">
          TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine.
          Today we want to expand & we moved part of our collection to Venice,
          Italy.
        </p>
      </div>
      <div>
        <Tabs
          id="controlled-tabs"
          selectedTabClassName="bg-[#345A5B] text-white transition-all duration-200 ease-in-out"
        >
          <TabList className="flex justify-center gap-3 md:gap-5 items-center font-playFair pt-10 pb-14">
            <Tab className="bg-[#F29D7E] text-white py-3 px-10 rounded-md text-base md:text-lg font-semibold border cursor-pointer">
              Dogs
            </Tab>
            <Tab className="bg-[#F29D7E] py-3 px-12 rounded-md text-white text-base md:text-lg font-semibold border cursor-pointer">
              Cats
            </Tab>
            <Tab className="bg-[#F29D7E] py-3 px-4 rounded-md text-white text-base md:text-lg font-semibold border cursor-pointer">
              Teddy Bears
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dogCategory.map((dog) => (
                <div className="card md:w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-72 w-full transform 
                      transition duration-1000 hover:scale-125"
                      src={dog?.imageUrl}
                      alt="toy-image"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{dog?.toyName}</h2>
                    <div className="my-4">
                      <span>
                        <span className="font-semibold">Price:</span> $
                        {dog?.price}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span className="font-semibold">Rating:</span>
                          <Rating
                            className="mt-2.5"
                            placeholderRating={dog?.rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-lg" />}
                            placeholderSymbol={
                              <FaStar className="text-warning text-lg" />
                            }
                            fullSymbol={<FaStar className="text-lg" />}
                          />
                          <span className="font-bold text-[#345A5B]">
                            ({dog?.rating})
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="card-actions text-center">
                      <Link
                        onClick={() => handleDetails(dog?._id)}
                        to={user && `/toy/${dog?._id}`}
                        className="w-full py-2.5 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catCategory.map((cat) => (
                <div className="card md:w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-72 w-full transform 
                      transition duration-1000 hover:scale-125"
                      src={cat?.imageUrl}
                      alt="toy-image"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{cat?.toyName}</h2>
                    <div className="my-4">
                      <span>
                        <span className="font-semibold">Price:</span> $
                        {cat?.price}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span className="font-semibold">Rating:</span>
                          <Rating
                            className="mt-2.5"
                            placeholderRating={cat?.rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-lg" />}
                            placeholderSymbol={
                              <FaStar className="text-warning text-lg" />
                            }
                            fullSymbol={<FaStar className="text-lg" />}
                          />
                          <span className="font-bold text-[#345A5B]">
                            ({cat?.rating})
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="card-actions text-center">
                      <Link
                        onClick={() => handleDetails(cat?._id)}
                        to={user && `/toy/${cat?._id}`}
                        className="w-full py-2.5 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teddyCategory.map((teddy) => (
                <div className="card md:w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-72 w-full transform 
                       transition duration-1000 hover:scale-125"
                      src={teddy?.imageUrl}
                      alt="toy-image"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{teddy?.toyName}</h2>
                    <div className="my-4">
                      <span>
                        <span className="font-semibold">Price:</span> $
                        {teddy?.price}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span className="font-semibold">Rating:</span>
                          <Rating
                            className="mt-2.5"
                            placeholderRating={teddy?.rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-lg" />}
                            placeholderSymbol={
                              <FaStar className="text-warning text-lg" />
                            }
                            fullSymbol={<FaStar className="text-lg" />}
                          />
                          <span className="font-bold text-[#345A5B]">
                            ({teddy?.rating})
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="card-actions text-center">
                      <Link
                        onClick={() => handleDetails(teddy?._id)}
                        to={user && `/toy/${teddy?._id}`}
                        className="w-full py-2.5 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategories;
