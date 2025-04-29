import React from "react";
import farmer from "../assets/farmer2.jpg";
function AboutPart() {
  return (
    <div className="flex relative about-home-container z-0  m-10 overflow-y-hidden">
      <div className="px-12 py-12 w-1/2 ">
        <div className="flex flex-col">
          <h2 className="text-green-700 font-handwritten text-2xl mb-2">
            About Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainable Agriculture and <br></br>Environmental
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl">
            At Rathee Agrotech, we believe that the future of farming lies in
            nurturing both the land and the communities it supports. Our mission
            is to innovate sustainable agricultural practices that prioritize
            soil health, water conservation, and eco-friendly technologies.
            Through a commitment to organic farming and regenerative methods, we
            aim to create a greener, healthier planet for future generations.
          </p>
        </div>

        <div className=" flex flex-col space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl"> 🌱</span>
            <p className="font-semibold text-gray-700">
              Promoting Soil Health by using natural fertilizers and crop
              rotation.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl"> 🌱</span>
            <p className="font-semibold text-gray-700">
              Innovating Water Conservation through smart irrigation systems.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl"> 🌱</span>
            <p className="font-semibold text-gray-700">
              Building Eco-Friendly Communities by supporting local farmers and
              reducing carbon footprint.
            </p>
          </div>
        </div>
        <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 mt-10">
          More About
        </button>
      </div>
      <div className="w-1/2">
        <div className="w-[500px] h-[500px] overflow-hidden rounded-full absolute top-[15%] right-[15%]">
          <img
            className="w-full h-full object-cover mr-7"
            src={farmer}
            alt="Farmer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPart;
