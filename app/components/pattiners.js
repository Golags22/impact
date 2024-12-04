'use client';

const PatternSlider = () => {
  const images = [
   "/images/brands/b1.png",
   "/images/brands/b2.png",
   "/images/brands/b3.png",
   "/images/brands/b4.jpg",
   "/images/brands/b1.png",
  ];

  return (
    <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
      <div className="text-center pt-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">OUR PARTNERS</h2>
      </div>

      {/* Sliding container */}
      <div className="flex w-[100%] animate-slide">
        {images.map((image, index) => (
          <div key={index} className="w-[600px] mx-2 flex-shrink-0">
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full h-full object-cover rounded-md shadow-md "
            />
          </div>
        ))}

        {/* Duplicate for seamless sliding */}
        {images.map((image, index) => (
          <div key={`dup-${index}`} className="w-[300px] mx-2 flex-shrink-0">
            <img
              src={image}
              alt={`Partner Duplicate ${index + 1}`}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternSlider;
