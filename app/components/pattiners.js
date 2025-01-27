'use client';
import Marquee from "react-fast-marquee";
import React from "react";
import {pimages} from "../components/data/data"

const colors = ["red", "purple", "blue", "green"];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const PatternSlider = () => {

  return (
    <div className="mb-1 mt-10">
     <h1
      className="
        text-center 
        text-4xl 
        font-bold 
        text-gray-800 
        mb-4
      "
    >
     Our Partners
    </h1>


    {/* <section className="bg-gray-900 py-12 px-6"> */}
  <div className="max-w-screen-xl mx-auto text-center">
    <Marquee
      gradient
      speed={100}
      pauseOnHover
      gradientWidth={20}
      gradientColor="white"
      className="relative"
    >
      {pimages.map((item, index) => (
        <div
          key={index}
          className="w-[300px] mx-4 flex-shrink-0 cursor-pointer relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600"
        >
          <img
            src={item.image}
            alt={`${item.name} - ${item.position}`}
            className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          
          {/* Hover Overlay */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out flex justify-center items-center`}
          >
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-white">{item.position}</p>
            </div>
          </div>

          {/* Name and Position */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-40 text-white">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-sm">{item.position}</p>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
{/* </section> */}

    </div>
  );
};

export default PatternSlider;