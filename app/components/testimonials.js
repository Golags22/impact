import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    quote: "This initiative changed my life. The support I received helped me finish my studies and start a new chapter.",
    photo: "/images/tprofiles/t1.jpeg",
  },
  {
    name: "Jane Smith",
    quote: "The community development project brought so many positive changes to our area. I'm forever grateful.",
    photo: "/images/tprofiles/t2.jpeg",
  },
  {
    name: "James Lee",
    quote: "The outreach programs provided me with invaluable knowledge and experience. I can't thank them enough.",
    photo: "/images/tprofiles/t3.jpeg",
  },
  {
    name: "James Lee",
    quote: "The outreach programs provided me with invaluable knowledge and experience. I can't thank them enough.",
    photo: "/images/tprofiles/t3.jpeg",
  },
  {
    name: "James Lee",
    quote: "The outreach programs provided me with invaluable knowledge and experience. I can't thank them enough.",
    photo: "/images/tprofiles/t3.jpeg",
  },
  {
    name: "James Lee",
    quote: "The outreach programs provided me with invaluable knowledge and experience. I can't thank them enough.",
    photo: "/images/tprofiles/t3.jpeg",
  },
  {
    name: "James Lee",
    quote: "The outreach programs provided me with invaluable knowledge and experience. I can't thank them enough.",
    photo: "/images/tprofiles/t3.jpeg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={testimonial.photo}
              alt={`${testimonial.name}`}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-center text-lg italic text-gray-700">
              "{testimonial.quote}"
            </p>
            <span className="mt-2 text-sm font-bold text-gray-900">
              - {testimonial.name}
            </span>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <FaArrowLeft className="text-gray-800" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <FaArrowRight className="text-gray-800" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
