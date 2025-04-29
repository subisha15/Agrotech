import React from "react";
import Logo from "../assets/RatheeLogo.png";
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="  w-full  flex items-center justify-between  md:justify-around md:m-0 overflow-hidden bg-white bg-opacity-80 shadow-md z-10  top-0 sticky">
      {/*Logo*/}
      <div className="ml-12">
        <img
          src={Logo}
          className="w-25 hover:scale-105 transition-all ml-4"
        ></img>
      </div>
      <ul className="hidden xl:flex items-center gap-5 font-semibold text-base">
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          Home
        </li>
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          About
        </li>
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          Contact
        </li>
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          Our Services
        </li>
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          Gallery
        </li>
        <li className="px-2 hover:bg-[#a8e063] hover:text-white rounded-md transition-all cursor-pointer">
          Videos
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center  justify-center space-x-6 mr-10 ">
        <FaFacebook size={20} className="text-green-600 " />

        <FaXTwitter className="text-green-600 " size={20} />

        <FaInstagram className="text-green-600 " size={20} />
      </div>
      <div className="xl:hidden">
        <i
          className="block text-5xl cursor-pointer bx bx-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </div>
    </div>
  );
}

export default NavBar;
