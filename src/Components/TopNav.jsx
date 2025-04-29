import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function TopNav() {
  return (
    <div className=" hidden  md:flex justify-end items- bg-[#4baf47] w-full h-[28px] py-4  overflow-hidden relative">
      <div className=" flex w-1/2 items-center justify-end gap-4"></div>

      <div className=" flex w-1/2 items-center justify-center gap-7">
        <div className="flex items-center justify-between gap-1">
          <FaPhone className="text-white font-semibold" />
          <span className="text-white font-semibold">+91-9992117565</span>
        </div>
        <div div className="flex items-center justify-between gap-0.5">
          <MdOutlineEmail className="text-white font-bold" />
          <span className="text-white font-semibold">
            info@ratheegreenhouse.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
