import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="overflow-x-auto mt-8">
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
            {allToys.map((toy, index) => (
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
