import React from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="py-10 px-5 md:px-5 lg:max-w-[1230px] mx-auto">
        <div className="bg-emerald-100 pt-8 pb-14 rounded-lg">
          <h2 className="text-4xl text-center font-playFair font-semibold text-[#345A5B] mb-7">
            User Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5 w-3/4 md:w-1/2 mx-auto">
              <input
                className="input w-full border focus:outline-none"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
              <input
                type="password"
                className="input w-full border focus:outline-none"
                {...register("password", { required: true })}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <a
                href="#"
                className="label-text-alt link link-hover text-center text-[#345A5B]"
              >
                Forgot password?
              </a>
            </div>

            <div div className="flex justify-center mt-5">
              <input
                type="submit"
                className="py-2.5 md:py-3 w-3/4 md:w-1/2 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-bold text-white text-lg uppercase"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center text-[#345A5B] font-medium mt-5">
            Don't Have an account ?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
          <div className="w-3/4 md:w-1/2 mx-auto">
            <div className="divider">OR</div>
            <span className="grid grid-cols-2 gap-5">
              <button className="btn btn-outline">
                Google <FaGoogle className="ml-3 text-base" />
              </button>
              <button className="btn btn-outline">
                GitHub <FaGithub className="ml-3 text-base" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
