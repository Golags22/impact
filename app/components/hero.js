import { motion } from 'framer-motion';



const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[80vh] lg:h-[100vh]"
      style={{ backgroundImage: 'url("/images/hero-img.jpeg")' }}
      aria-hidden="true"
    >
      {/* Overlay for dimming background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

    
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8 lg:p-12"
      >
        <h1 className="font-serif text-2xl text-center md:text-3xl lg:text-4xl font-bold mb-4">
        Impacting Lives, Creating Opportunities
        </h1>
        <p className="font-sans text-center md:text-2xl lg:text-2xl mb-6">
        At Impact for Success Foundation, we're driven by a singular mission: to create lasting, positive change in society. With unrelenting passion and dedication, we're turning our vision into reality, expanding our impact, and transforming lives. Be part of our journey to make a meaningful difference.
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