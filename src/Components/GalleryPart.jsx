import React from "react";
import galleryImg1 from "../assets/g1.jpeg";
import galleryImg2 from "../assets/g2.jpeg";
import galleryImg3 from "../assets/g3.jpeg";
import galleryImg4 from "../assets/g4.jpeg";
import ProductCard from "./ProductCard";
import Bg from "../assets/whitebg.png";

function GalleryPart() {
  const products = [
    { image: galleryImg1, alt: "organic vegetable" },
    { image: galleryImg2, alt: "organic vegetable" },
    { image: galleryImg3, alt: "organic vegetable" },
    { image: galleryImg4, alt: "organic vegetable" },
  ];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Heading Section */}
      <div className="text-center mt-10">
        <h1 className="text-green-700 font-handwritten text-3xl sm:text-4xl">
          📸 Inside Our Green World
        </h1>
        <h6 className="text-gray-700 text-lg sm:text-xl my-5">
          From Seed to Harvest – A Visual Journey
        </h6>
      </div>
      <div className="h-aut0 flex flex-wrap justify-center items-center gap-3 my-5">
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} alt={product.alt} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPart;
