import { motion } from 'framer-motion';
import Navbar from './Navbar';


const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[80vh] lg:h-[100vh]"
      style={{ backgroundImage: 'url("/images/hero-img.jpg")' }}
      aria-hidden="true"
    >
      {/* Overlay for dimming background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <div className="relative w-full">
        <Navbar />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8 lg:p-12"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Welcome to Impact for Success Foundation
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          We are committed to making a lasting impact through our community-driven initiatives. Join us today to make a difference.
        </p>
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <a
            href="#joinus"
            className="px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition"
          >
            Join Us
          </a>
          <a
            href="/donate"
            className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
          >
            Donate Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;