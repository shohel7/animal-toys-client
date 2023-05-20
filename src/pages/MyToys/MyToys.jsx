import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?sellerEmail=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <tr key={toy?._id} className="text-center">
                <th>{index + 1}</th>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td className="truncate">
                  {toy?.description.slice(0, 50) + " ..."}
                </td>
                <td className="flex gap-3 items-center">
                  <Link className="bg-[#245A5B] hover:bg-emerald-900 transition-all duration-200 ease-in-out py-2.5 px-3 rounded-lg text-white uppercase font-medium">
                    <FaEdit />
                  </Link>
                  <button className="bg-[#F29D7E] hover:bg-[#ec8a67] transition-all duration-200 ease-in-out py-2.5 px-3 rounded-lg text-white uppercase font-medium">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
