import React from "react";

const AnimatedShape = ({ className }) => {
  return (
    <svg
      className={`${className} w-64 h-64 text-green-600`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50 0 L 0 50 L 50 100 L 100 50 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AnimatedShape;