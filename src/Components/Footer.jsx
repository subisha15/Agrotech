import React from "react";
import Logo from "../assets/RatheeLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import footerBg from "../assets/foot_bg.avif";

function Footer() {
  return (
    <div
      className="relative z-10 text-gray-800 px-10 py-12  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo & Caption */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <img
            className="w-24 h-auto mx-auto lg:mx-0 mb-4"
            src={Logo}
            alt="Logo"
          />
          <p className="mb-4 text-sm">
            Where innovation meets cultivation. <br />
            <strong>Rathee Agrotech</strong> – Farming redefined under one roof.
          </p>
          <p className="text-green-800 text-sm font-medium mt-6">
            ©{new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Site Links */}
        <div className="lg:w-1/6">
          <h4 className="font-semibold text-lg mb-3">Site Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Videos</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="lg:w-1/4">
          <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 631 Elgin ST. Celina, State
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineEmail /> email@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +1 234 567 890
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="lg:w-1/5">
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <p className="text-sm mb-3">
            Egestas eget vulputate sit nunc. Quisque ultricies pulvinar nibh
            eros non commodo aenean vitae.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <FaInstagram className="text-green-800 text-xl hover:scale-110 transition" />
            </a>
            <a href="#">
              <FaFacebook className="text-green-800 text-xl hover:scale-110 transition" />
            </a>
            <a href="#">
              <FaXTwitter className="text-green-800 text-xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
