const AboutHighlight = () => {
  return (
    <section className="relative bg-gray-900 py-16 flex">
      <div className="relative container mx-auto px-6 md:px-12 text-center">
        {/* Flex container to position the image and text */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0 md:space-x-12">
          
          {/* Image on the Top for small screens and Left for larger screens */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img 
              src="/images/hope.jpg" 
              alt="Empowering Communities" 
              className="w-full h-[350px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text on the Bottom for small screens and Right for larger screens */}
          <div className="max-w-lg text-left">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Empowering Communities</h3>
            <p className="text-lg text-gray-600 mb-2">
            Impact for Success Foundation (IFS) is a nonprofit organization dedicated to transforming communities through holistic development initiatives. Our mission is to break the cycle of poverty by addressing its root causes and fostering lasting change through education, outreach, and sustainable projects.
            </p>
            <p className="text-lg text-gray-600 mb-6">
            At IFS, we are committed to empowering individuals and communities by integrating educational and athletic programs that promote growth, self-reliance, and resilience. 
            </p>
            {/* Call-to-Action Button */}
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHighlight;
