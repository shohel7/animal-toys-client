import React from "react";
import { useForm } from "react-hook-form";

const AddToys = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-10 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <div className="bg-emerald-100 pt-8 pb-14 rounded-lg">
        <h2 className="text-4xl text-center font-playFair font-semibold text-[#345A5B] mb-7">
          Create a new toy
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-3/4 md:w-1/2 mx-auto">
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("toyName", { required: true })}
              placeholder="Toy name"
            />
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("sellerName", { required: true })}
              placeholder="Seller Name"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("sellerEmail", { required: true })}
              placeholder="Seller Email"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <select
              {...register("subCategory")}
              className="rounded-lg mr-3 md:px-3 py-3 text-slate-400 focus:outline-none"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="teddyBear">Teddy Bear</option>
            </select>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("price", { required: true })}
              placeholder="Price"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("rating", { required: true })}
              placeholder="Rating"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("availableQuantity", { required: true })}
              placeholder="Available Quantity"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input w-full max-w-xs border focus:outline-none"
              {...register("imageUrl", { required: true })}
              placeholder="Image Url"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="w-full text-center mt-7">
            <textarea
              className="input mr-3 w-[325px] md:w-full max-w-[595px] border focus:outline-none pt-2.5 h-28"
              {...register("description", { required: true })}
              placeholder="Details Description"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div div className="flex justify-center mt-7">
            <input
              type="submit"
              className="py-2.5 md:py-3 mr-3 w-[325px] md:w-1/2 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-bold text-white text-lg uppercase"
              value="Added Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;