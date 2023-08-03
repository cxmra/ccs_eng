import React, { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import img1 from "../assets/20221025_101042.jpg";
import img2 from "../assets/20210916_121258.jpg";
import img3 from "../assets/20221025_105532.jpg";
import img4 from "../assets/20221118_092956.jpg";
import img5 from "../assets/20230308_112625.jpg";

const slides = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div name="Home" className="relative w-full h-[800px]">
      <div className="max-h-[800px] w-full m-auto bg-gray-900/90 absolute">
        <div className="w-full h-[800px] group object-cover">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
            className="w-full h-full bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="-top-6 relative flex justify-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div>{/* <img className='w-full' src={img1}/> */}</div>
      </div>
      <div className="pt-52 w-1/2 mx-auto text-black relative">
        <p className="font-bold text-center text-xl">
          Process, environmental, health and safety engineering and project
          management for industrial, commercial, institutional and government
          clients.
        </p>
      </div>
    </div>
  );
};

export default Slideshow;
