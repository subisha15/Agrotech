import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function TopNav() {
  return (
    <div className="   hidden lg:flex justify-end items- bg-[#4baf47] w-full h-[30px] py-4   relative">
      <div className=" flex w-1/2 items-center justify-center gap-4">
        <p className="text-white font-semibold">
          Haryana’s Leading Eco-Farming Destination
        </p>
      </div>

      <div className=" flex w-1/2 items-center justify-center gap-7">
        <div className="flex items-center justify-between gap-1 cursor-pointer">
          <FaPhone className="text-white font-semibold text-lg text-center" />
          <span className="text-white font-semibold text-lg">
            +91-9992117565
          </span>
        </div>
        <div
          div
          className="flex items-center justify-between gap-0.5 cursor-pointer"
        >
          <MdOutlineEmail className="text-white font-bold text-lg text-center" />
          <span className="text-white font-semibold text-lg">
            info@ratheegreenhouse.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
