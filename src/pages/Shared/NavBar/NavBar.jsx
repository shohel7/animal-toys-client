import React, { useContext, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUl, setShowUl] = useState(false);

  const handleUl = () => {
    setShowUl(true);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };
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
                {user && (
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
                )}
                {user && (
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
                )}
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
                {user?.email ? (
                  <div>
                    <div className="dropdown-start">
                      <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          {user && (
                            <img
                              src={user?.photoURL}
                              alt="profile-img"
                              title={user?.displayName}
                            />
                          )}
                        </div>
                      </label>
                      {showUl && (
                        <ul
                          onClick={handleUl}
                          tabIndex={2}
                          className="menu menu-compact dropdown dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
                          <li onClick={handleLogOut}>
                            <a>Logout</a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                ) : (
                  <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                    <Link to="/login">Login</Link>
                  </li>
                )}
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
            <ul className="menu-horizontal px-1 space-x-10 text-gray-800 font-medium text-base font-serif items-center">
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
              {user && (
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
              )}
              {user && (
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
              )}

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

              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user && (
                        <img
                          src={user?.photoURL}
                          alt="profile-img"
                          title={user?.displayName}
                        />
                      )}
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
                    <li onClick={handleLogOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="hover:text-[#F29D7E] transition-all duration-200 ease-in-out">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
