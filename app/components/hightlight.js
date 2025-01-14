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
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
              
            >
              <div className="flex justify-end">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.6 }}
                  src="/images/hope.jpeg"
                  alt="Empowering Communities"
                  className="w-full h-full rounded-lg shadow-lg object-cover"
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
  <h3 className="text-2xl font-serif font-bold text-[#FAFAFA]  mb-2">Impacting Lives</h3>
  {/* <motion.img
    initial={{ opacity: 0, scale: 0.5 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
    src="/line.svg"
    alt="Empowering Communities"
    className="w-full h-12 object-cover object-center mb-9"
  /> */}
</div>
            <p className="text-lg text-[#FFFFFF] text-left mb-2 ">
            Impact for Success Foundation (IFSF) is a nonprofit organization dedicated to transforming lives through a singular mission: to create lasting, positive change in society by breaking the cycle of poverty. 
            </p>
            <p className="text-lg text-[#FFFFFF] text-left mb-6">
            We strive to empower individuals and communities through a comprehensive approach that combines education, healthcare, outreach, and sustainable projects. By addressing the root causes of poverty, we work to foster self-reliance, resilience, and long-term success. At IFSF, we are driven by unwavering passion and commitment to uplift communities, offering educational, athletic, and healthcare programs that promote personal .....
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