import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const options = [
  { value: "asc", name: "Price Ascending" },
  { value: "desc", name: "Price-Descending" },
];

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [selected, setSelected] = useState(options[0].value);
  console.log(selected);
  useTitle("My Toys");

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?sellerEmail=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/myAllToys?sort=${selected}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [selected]);

  const handleDeleteToy = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              console.log(remaining);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="mt-10">
        <h3>Short By</h3>
        <select
          selected={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="select w-full max-w-xs bg-slate-100"
        >
          {options.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto mt-4">
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
                  <Link
                    to={`/updatedToys/${toy?._id}`}
                    className="bg-[#245A5B] hover:bg-emerald-900 transition-all duration-200 ease-in-out py-2.5 px-3 rounded-lg text-white uppercase font-medium"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDeleteToy(toy?._id)}
                    className="bg-[#F29D7E] hover:bg-[#ec8a67] transition-all duration-200 ease-in-out py-2.5 px-3 rounded-lg text-white uppercase font-medium"
                  >
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
