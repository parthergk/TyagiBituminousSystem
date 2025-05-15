"use client"
import { useState } from "react";
import Image from "next/image";
import React from "react";

interface Prop {
  name: string;
  des: string;
  img: string;
}

const ProductCard = ({ name, des, img }: Prop) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleReadMore = () => {
    setIsClicked(true);
    // This would typically navigate or show more content
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  return (
    <div 
      className={`w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-md transition-all duration-300 ${isHovered ? "shadow-xl transform -translate-y-1" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image 
          alt={`${name} product image`} 
          src={img} 
          layout="fill"
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : ""}`}
        />
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 bg-white">
        <h1 className="mb-2 text-xl sm:text-2xl font-medium text-primary truncate">{name}</h1>
        
        <div className="mb-4">
          {isClicked ? (
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">{des}</p>
          ) : (
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 line-clamp-2">{des}</p>
          )}
        </div>
        
        <button 
          onClick={handleReadMore}
          className="w-full sm:w-auto px-4 py-2 rounded-md font-medium text-white transition-colors duration-200 bg-primary hover:bg-[#e65c00] cursor-pointer"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;