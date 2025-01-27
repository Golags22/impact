import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const Volunteer = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted"); // Placeholder for actual submission logic
  };

  return (
    <section 
      id="joinus" 
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/team.jpg")' }} 
      ref={ref}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-between items-center h-full px-8 py-16 text-white">
        <div
          className="w-1/2 hidden md:block"
                  >
          <Image src="/images/you.png" alt="Volunteer" width={600} height={400} className="rounded-lg" />
        </div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Be a Volunteer</h2>
          <p className="mb-6">Join us in making a real difference! Your time, skills, and compassion can help us bring lasting change to communities.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md border-2 border-gray-300" />
            <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-md border-2 border-gray-300" />
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 rounded-md border-2 border-gray-300" />
            <textarea name="skills" placeholder="Tell us about your skills" rows="4" className="w-full p-3 rounded-md border-2 border-gray-300 text-black"></textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;