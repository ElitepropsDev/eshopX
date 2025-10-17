import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

import hero2 from "../../../Assests/hero2.jpg";
import hero3 from "../../../Assests/hero3.jpg";
import hero4 from "../../../Assests/hero4.jpg";
import hero5 from "../../../Assests/hero5.jpg";
import hero6 from "../../../Assests/hero6.jpg";
import hero7 from "../../../Assests/hero7.jpg";
import hero8 from "../../../Assests/hero8.jpg";
import hero9 from "../../../Assests/hero9.jpg";
import hero10 from "../../../Assests/hero10.jpg";
import hero11 from "../../../Assests/hero11.jpg";
import hero12 from "../../../Assests/hero12.jpg";
import hero13 from "../../../Assests/hero13.jpg";
import hero14 from "../../../Assests/hero14.jpg";

const images = [
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
  hero12,
  hero13,
  hero14,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    // Minimum swipe distance (in px)
    const minSwipe = 50;

    if (distance > minSwipe) {
      // Swipe left → next slide
      setCurrent((prev) => (prev + 1) % images.length);
    } else if (distance < -minSwipe) {
      // Swipe right → previous slide
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : (prev - 1) % images.length
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full overflow-hidden h-[35vh] sm:h-[40vh] md:h-[60vh] 800px:h-[80vh]">
  {/* Slides */}
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
    onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
    onTouchEnd={handleSwipe}
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="min-w-full h-[35vh] sm:h-[40vh] md:h-[60vh] 800px:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Hero Text */}
        <div
          className={`${styles.section} relative z-10 w-[90%] md:w-[60%] text-center md:text-left 
          max-[500px]:mt-4 max-[500px]:px-4 scale-[0.9] 800px:scale-100`}
        >
          <h1 className="text-[22px] leading-[1.1] sm:text-[26px] md:text-[40px] 800px:text-[60px] text-white font-[600] capitalize drop-shadow-md">
            Best Collection for <br className="hidden md:block" /> all your
            needs!
          </h1>
          <p className="pt-2 text-[12px] sm:text-[14px] md:text-[16px] font-[Poppins] font-[400] text-white drop-shadow-sm 800px:block">
            Discover quality, style, and unbeatable prices. From essentials
            to luxury items, we’ve got something for everyone.
          </p>

          <Link to="/products" className="inline-block mt-3 800px:mt-5">
            <div
              className={`${styles.button} px-2 py-[2px] scale-[0.85] 800px:scale-100`}
            >
              <span className="text-[#fff] font-[Poppins] text-[12px] 800px:text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>

  {/* Dots Navigation */}
  <div className="absolute bottom-3 sm:bottom-4 800px:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-0">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-2 h-2 800px:w-3 800px:h-3 rounded-full ${
          current === i ? "bg-white" : "bg-gray-400"
        }`}
      ></button>
    ))}
  </div>
</div>

  );
};

export default Hero;
