import React from "react";

function ProductCard({ image, alt }) {
  return (
    <div className="w-full max-w-xs mx-auto p-2 rounded-md shadow-lg bg[#4baf47]">
      <img
        src={image}
        alt={alt}
        className="w-full h-72 object-cover rounded-md"
      />
    </div>
  );
}

export default ProductCard;
