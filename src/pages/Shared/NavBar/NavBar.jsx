import React from "react";
import { FaPaw } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className=" sticky top-0 z-30 w-full shadow-xl blur-effect-theme">
      <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
        <div className="navbar py-5">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base"
              >
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/allToys"
                  >
                    All Toys
                  </NavLink>
                </li>
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/myToys"
                  >
                    My Toys
                  </NavLink>
                </li>
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/addToys"
                  >
                    Add Toys
                  </NavLink>
                </li>
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/">
              <span className="flex items-center space-x-3">
                <FaPaw className="text-4xl text-[#F29D7E]" />

                <p className="text-xl text-[#345A5B] font-bold cursor-pointer">
                  ANIMAL TOYS
                </p>
              </span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal px-1 space-x-10 text-gray-800 font-medium text-base font-serif">
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/allToys"
                >
                  All Toys
                </NavLink>
              </li>
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/myToys"
                >
                  My Toys
                </NavLink>
              </li>
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/addToys"
                >
                  Add Toys
                </NavLink>
              </li>
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              {/* <div className="flex">
              <p className="text-gray-800 font-semibold md:text-lg mr-3"></p>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="" alt="profile-img" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div> */}
              <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
