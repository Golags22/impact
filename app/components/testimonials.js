import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

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
  // Add more testimonials as needed
  // ...
  // Add 17 more testimonials to reach a total of 20
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
      className="relative w-full p-12 bg-gray-100"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        What Our Beneficiaries Say
      </h2>

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
              className="w-20 h-20 rounded-full mb-4 object-cover"
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
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-12 w-12 -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer focus:outline-none"
      >
        <FaArrowLeft className="text-gray-100" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-12 w-12 -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer focus:outline-none"
      >
        <FaArrowRight className="text-gray-100" size={24} />
      </button>

      {/* Indicators */}
      <motion.div
       
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      {testimonials.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => setCurrentIndex(index)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={index === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-gray-800" : "bg-gray-400"
          }`}
        />
      ))}
    </motion.div>
  </div>
);
}
export default Testimonials;