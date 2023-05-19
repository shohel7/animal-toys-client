import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaw,
  FaPhoneAlt,
  FaTwitter,
  FaUtensils,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-50 mt-20 py-10 md:py-16">
      <div className="footer pt-8 pb-16 px-10 md:px-5 lg:max-w-[1230px] mx-auto">
        <div>
          <Link to="/">
            <span className="flex items-center space-x-3">
              <FaPaw className="text-4xl text-[#F29D7E]" />

              <p className="text-xl text-[#345A5B] font-bold cursor-pointer">
                ANIMAL TOYS
              </p>
            </span>
          </Link>
          <p className="text-gray-600 md:text-base">
            Recipes from Italy is the place where you can learn <br /> how to
            cook a dish like a native Italian. Genuine, <br /> authentic
            recipes, they are a lifestyle, our way <br /> of life in Italy!
          </p>
          <span className="flex gap-5 mt-5">
            <Link target="_black" to="https://facebook.com/">
              <FaFacebookF className="text-3xl border border-[#345A5B] text-[#345A5B] hover:text-white hover:bg-[#345A5B] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://twitter.com/">
              <FaTwitter className="text-3xl border border-[#345A5B] text-[#345A5B] hover:text-white hover:bg-[#345A5B] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://instagram.com/">
              <FaInstagram className="text-3xl border border-[#345A5B] text-[#345A5B] hover:text-white hover:bg-[#345A5B] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://youtube.com/">
              <FaYoutube className="text-3xl border border-[#345A5B] text-[#345A5B] hover:text-white hover:bg-[#345A5B] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
          </span>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#345A5B] uppercase font-playFair font-bold md:mb-3">
            To Category
          </span>
          <a className="link link-hover">American Dogs</a>
          <a className="link link-hover">Rasian Cats</a>
          <a className="link link-hover">Teddy Bear</a>
          <a className="link link-hover">Beautiful Unicorn</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#345A5B] uppercase font-playFair font-bold md:mb-3">
            Useful Links
          </span>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">My Toys</a>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#345A5B] uppercase font-playFair font-bold md:mb-3">
            Contact Us
          </span>
          <span className="flex gap-3 items-center">
            <FaMapMarkerAlt className="text-xl text-[#345A5B]" />
            <a className="link link-hover">
              B-block Mohammadpur, <br /> Dhaka, Bangladesh
            </a>
          </span>
          <span className="flex gap-3 items-center">
            <FaPhoneAlt className="text-xl text-[#345A5B]" />
            <a className="link link-hover">+880 178 096 9001</a>
          </span>
          <span className="flex gap-3 items-center">
            <FaEnvelope className="text-xl text-[#345A5B]" />
            <a className="link link-hover">shohelrana.swe@gmail.com</a>
          </span>
        </div>
      </div>
      <div className="px-10 md:px-5 lg:max-w-[1230px] mx-auto">
        <p className="md:text-center font-bold font-playFair text-[#345A5B] text-sm">
          Copyright &copy; 2023 - All right reserved by ANIMAL TOYS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
