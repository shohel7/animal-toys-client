import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchToyName, setSearchToyName] = useState(allToys);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
    fetch(`http://localhost:5000/searchToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchToyName(data);
      });
  };

  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="input-group md:justify-center mt-8">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search…"
          className="w-1/4 outline-none"
        />
        <button onClick={handleSearch} className="text-white bg-[#F29D7E] px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {searchToyName.map((toy, index) => (
              <tr key={toy?._id} className="text-center">
                <th>{index + 1}</th>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                  <Link
                    to={`/toy/${toy?._id}`}
                    className="py-1 px-2 rounded text-white uppercase  bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out cursor-pointer"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
