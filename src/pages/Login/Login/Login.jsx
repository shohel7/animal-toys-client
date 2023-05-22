import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setSuccess("User loggedIn successfully");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  // github signIn
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  useTitle("Login");

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
                required
              />
              <input
                type="password"
                className="input w-full border focus:outline-none"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                required
              />
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
                className="py-2.5 md:py-3 w-3/4 md:w-1/2 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-bold text-white text-lg uppercase cursor-pointer"
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
          <div>
            <p className="text-center text-red-500">{error}</p>
            <p className="text-center text-green-500">{success}</p>
          </div>
          <div className="w-3/4 md:w-1/2 mx-auto">
            <div className="divider">OR</div>
            <span className="grid grid-cols-2 gap-5">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">
                Google <FaGoogle className="ml-3 text-base" />
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-outline">
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
