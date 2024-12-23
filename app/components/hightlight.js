import React from 'react';
import { motion, useInView } from 'framer-motion';

const AboutHighlight = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative bg-[#151E38] py-16 flex" >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative container mx-auto px-6 md:px-12 text-center"
        ref={ref}
      >
        {/* Flex container to position the image and text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0 md:space-x-12"
        >
          <div className="flex position-relative">
            {/* Diamond shape image arrangement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
              className="grid grid-cols-3 gap-4 relative"
            >
              <div className="col-span-2 row-span-1 flex justify-end">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.6 }}
                  src="/images/hope.jpg"
                  alt="Empowering Communities"
                  className="w-48 h-48 rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="col-span-1 row-span-2 flex justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.8 }}
                  src="/images/hope1.jpg"
                  alt="Empowering Communities"
                  className="w-48 h-48 rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 flex justify-start">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
                  src="/images/school.jpg"
                  alt="Empowering Communities"
                  className="w-48 h-48 rounded-lg shadow-lg object-cover"
                />
              </div>
            </motion.div>
          </div>          {/* Text on the Bottom for small screens and Right for larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="max-w-lg text-left"
          >
 <div className="flex flex-col items-center text-right">
  <h3 className="text-2xl font-bold text-[#FAFAFA]  mb-2">Empowering Communities</h3>
  <motion.img
    initial={{ opacity: 0, scale: 0.5 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
    src="/line.svg"
    alt="Empowering Communities"
    className="w-full h-12 object-cover object-center mb-9"
  />
</div>
            <p className="text-lg text-[#FFFFFF] text-left mb-2 ">
              Impact for Success Foundation (IFS) is a nonprofit organization dedicated to transforming communities through 
              holistic development initiatives. Our mission is to break the cycle of poverty by addressing its root causes and fostering lasting change through education, outreach, and sustainable projects.
            </p>
            <p className="text-lg text-[#FFFFFF] text-left mb-6">
              At IFS, we are committed to empowering individuals and communities by integrating educational and athletic programs that promote growth, self-reliance, and resilience.
            </p>
            {/* Call-to-Action Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
              href="/about"
              className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Read More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHighlight;