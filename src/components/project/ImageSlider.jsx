import React, { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "../shared/Image";

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return prev - 1;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="relative w-full ">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover block"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute -left-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
        disabled={currentSlide === 0}
      >
        <FaAngleDoubleLeft
          className={`hover:text-gray-600 text-gray-400 ${
            currentSlide === 0 ? "text-gray-300 hover:text-gray-300" : null
          }`}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform hover:cursor-pointer "
        disabled={currentSlide === images.length - 1}
      >
        <FaAngleDoubleRight
          className={`hover:text-gray-600 text-gray-400 ${
            currentSlide === images.length - 1
              ? "text-gray-300 hover:text-gray-300"
              : null
          }`}
        />
      </button>
    </div>
  );
}

export default ImageSlider;
