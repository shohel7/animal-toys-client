import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const UpdatedToys = () => {
  const { _id, toyName, price, availableQuantity, subCategory, description } =
    useLoaderData();

  useTitle("Update toy");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://n-chi-woad.vercel.app/updatedToy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="py-5 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div>
        <Link
          to={-1}
          className="py-2 w-24 text-white bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out cursor-pointer rounded-md mb-2.5 flex items-center justify-center gap-3"
        >
          <FaArrowLeft /> <span className="font-bold">BACK</span>
        </Link>
      </div>
      <div className="bg-emerald-100 pt-8 pb-14 rounded-lg">
        <h2 className="text-4xl text-center font-playFair font-semibold text-[#345A5B] mb-7">
          Updated Toy
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-3/4 md:w-1/2 mx-auto">
            <div>
              <label htmlFor="toyName" className="font-semibold">
                Toy Name
              </label>
              <input
                className="input w-full max-w-xs border focus:outline-none mt-2"
                {...register("toyName", { required: true })}
                defaultValue={toyName}
                placeholder="Toy name"
                required
              />
            </div>
            <div>
              <label htmlFor="subCategory" className="font-semibold">
                Sub Category
              </label>
              <select
                {...register("subCategory")}
                defaultValue={subCategory}
                className="rounded-lg w-[320px] md:w-full border py-3 text-slate-400 focus:outline-none mt-2"
                required
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="teddyBear">Teddy Bear</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                className="input w-full max-w-xs border focus:outline-none mt-2"
                {...register("price", { required: true })}
                defaultValue={price}
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label htmlFor="availableQuantity" className="font-semibold">
                Available Quantity
              </label>
              <input
                className="input w-full max-w-xs border focus:outline-none mt-2"
                {...register("availableQuantity", { required: true })}
                defaultValue={availableQuantity}
                placeholder="Available Quantity"
                required
              />
            </div>
          </div>

          <div className="w-full text-center mt-7">
            <h1 className="font-semibold w-24 ml-12 md:ml-72 mb-2">
              Description
            </h1>
            <textarea
              className="input mr-3 w-[325px] md:w-full max-w-[595px] border focus:outline-none pt-2.5 h-28"
              {...register("description", { required: true })}
              defaultValue={description}
              placeholder="Details Description"
              required
            />
          </div>

          <div div className="flex justify-center mt-7">
            <input
              type="submit"
              className="py-2.5 md:py-3 mr-3 w-[325px] md:w-1/2 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-bold text-white text-lg uppercase cursor-pointer"
              value="Updated toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedToys;
