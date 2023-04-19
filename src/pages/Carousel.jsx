import React, { useState,useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);
  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={handlePrevClick}>
      {"<"}
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt="carousel"
      />
      <button className="carousel-button" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
