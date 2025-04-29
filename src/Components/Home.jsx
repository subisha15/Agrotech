import React from "react";
import NavBar from "./NavBar";
import Banner from "../assets/Hero_Banner.jpg";
import TopNav from "./TopNav";
import AboutPart from "./AboutPart";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <TopNav />
      <NavBar />
      <div className="h-auto relative overflow-y-hidden  w-full  ">
        <img className="w-full h-[85vh] mb-0" src={Banner}></img>

        <div className="absolute ml-15  top-[40%]  inset-0  p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Freshnes <br /> Rooted in Technology
          </h1>
          <p className="max-w-lg mb-6">
            🌱 Cultivating Quality, Sustaining Tomorrow.
          </p>
          <div className="flex gap-4 mb-4">
            <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700">
              Contact Us
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <AboutPart />
      <Footer />
    </div>
  );
}

export default Home;
