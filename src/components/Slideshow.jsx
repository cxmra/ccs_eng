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
    <div
      name="Home"
      className="w-full h-[800px] bg-zinc-200 flex flex-col justify-between"
    >
      <div className="max-h-[800px] grid md:grid-cols-2 max-w-[1240px] m-auto bg-zinc-200">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-4 mt-16">
          <p className="font-bold text-center text-xl">
            Process, environmental, health and safety engineering and project
            management for industrial, commercial, institutional and government
            clients.
          </p>
        </div>
        <div>
          {/* <img className='w-full' src={img1}/> */}
          <div className="max-w-[1240px] h-[500px] m-auto px-4 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
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
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
